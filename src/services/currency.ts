import {
  ICurrency,
  IQuery,
  ISymbolsResponse,
  roundToNumber
} from '../configs/types'
const { getCache } = require('./redis')

const round: roundToNumber = (num: number, decimals: number) => {
  return +(Math.round(+(num + `e+${decimals}`)) + `e-${decimals}`)
}

function groupByCategory(currencies: ICurrency[]) {
  const result = currencies.reduce((group: any, product) => {
    const { from } = product
    group[from] = group[from] ?? []
    group[from].push(product)
    return group
  }, {})
  return result
}

function mergeList(list1: ICurrency[], list2: ICurrency[]) {
  list1.forEach((item, index) => {
    const finder = list2.find((val) => val.to === item.to)
    if (finder) {
      list1[index] = finder
      list2 = list2.filter((val) => val.to !== finder.to)
    }
  })
  return list1
}

/**
 * @param {ObjectId} pairName
 * @returns {Promise<Currency>}
 */
const getCurrencyByPairName = async (pairName: string) => {
  try {
    let data = null
    if (!pairName) return data

    const spliter = pairName.split('/')
    const redisClient = await getCache()
    const dataCached = await redisClient.get(spliter[0])
    if (dataCached) {
      data = JSON.parse(dataCached)
      data = data.rates.find((item: ICurrency) => item.to === spliter[1])
    }

    return data
  } catch (error) {
    console.log('error in getCurrencyByPairName: ', error)
    return null
  }
}

const getCurrencyRatesByFrom = async (from: string, to: string) => {
  try {
    if (!from) {
      return null
    }
    let data
    const redisClient = await getCache()
    const dataCached = await redisClient.get(from)
    if (dataCached) {
      data = JSON.parse(dataCached)
    }

    if (data) {
      let rates = data.rates
      if (to) {
        const targetList = to
          .split(',')
          .filter((item) => item)
          .map((item) => item.toUpperCase())
        rates = data.rates.filter((item: ICurrency) =>
          targetList.includes(item.to.toUpperCase())
        )
      }
      return {
        success: true,
        from,
        to,
        rates
      }
    }
    return null
  } catch (error) {
    console.log('Error in getCurrencyRatesByFrom: ', error)
    return null
  }
}

const getSymbols = async (): Promise<ISymbolsResponse> => {
  try {
    const redisClient = await getCache()
    const symbols = await redisClient.get('currencyList')
    if (symbols) {
      return {
        success: true,
        symbols: JSON.parse(symbols)
      }
    }
    return { success: true, symbols: [] }
  } catch (error) {
    console.log('Error in getSymbols:', error)
    return { success: false, symbols: [] }
  }
}

const convertCurrency = async (query: IQuery) => {
  try {
    const { from, to, amount } = query
    if (from && to && amount) {
      let data
      const redisClient = await getCache()
      const dataCached = await redisClient.get(from)
      if (dataCached) {
        data = JSON.parse(dataCached)
      }

      if (data) {
        const targetList = to
          .split(',')
          .filter((item) => item)
          .map((item) => item.toUpperCase())
        const rates = data.rates.filter((item: ICurrency) =>
          targetList.includes(item.to.toUpperCase())
        )
        const converts = rates.map((item: ICurrency) => ({
          ...item,
          amount,
          result: round(item.price * amount, 6)
        }))

        return {
          success: true,
          from,
          to,
          amount,
          converts
        }
      }
    }
    return null
  } catch (error) {
    console.log('error in convertCurrency: ', error)
    return null
  }
}

/**
 *
 * @param {Object[]} currencies
 */
const updateCurrencyByBatch = async (currencies: ICurrency[]) => {
  try {
    const currenciesGroup: any = groupByCategory(currencies)
    Object.keys(currenciesGroup).forEach(async (key) => {
      let rates = currenciesGroup[key]
      const redisClient = await getCache()
      let prevRates = await redisClient.get(key)

      if (prevRates && rates) {
        prevRates = JSON.parse(prevRates).rates
        rates = mergeList(rates, prevRates)
      }
      // loop inside each of rates, update for each pair.
      const dataCached = { lastUpdated: new Date(), rates }

      // set key like: 'USD' with rates of 'USD'
      await redisClient.set(key, JSON.stringify(dataCached))
    })
  } catch (error) {
    console.log('error in updateCurrencyByBatch:', error)
  }
}

module.exports = {
  convertCurrency,
  getCurrencyByPairName,
  updateCurrencyByBatch,
  getCurrencyRatesByFrom,
  getSymbols
}
