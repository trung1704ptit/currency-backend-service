import { Request, Response } from 'express'
import { ICurrency } from '../configs/types'

const catchAsync = require('../utils/catchAsync')
const currencyService = require('../services/currency')

const updateCurrency = catchAsync(async (req: Request, res: Response) => {
  const { currencies } = req.body
  const io = req.app.get('io')

  currencies.forEach((currency: ICurrency) => {
    if (io) {
      io.emit(currency.pairName, currency)
    }
  })

  currencyService.updateCurrencyByBatch(currencies)

  res.send(200)
})

const handleSocketConnect = catchAsync(async (socket: any) => {
  const { query } = socket.handshake
  const cacheCurrency = await currencyService.getCurrencyByPairName(
    query.pairName
  )
  if (cacheCurrency && socket) {
    socket.emit(query.pairName, cacheCurrency)
  }
})

const getCurrencyRates = catchAsync(async (req: Request, res: Response) => {
  const { query } = req
  const { from, to } = query
  const currencyData = await currencyService.getCurrencyRatesByFrom(from, to)
  res.send(currencyData)
})

const convertCurrency = catchAsync(async (req: Request, res: Response) => {
  const { query } = req
  const { from, to, amount } = query
  const currencyData = await currencyService.convertCurrency(from, to, amount)
  res.send(currencyData)
})

const exportResult = {
  updateCurrency,
  handleSocketConnect,
  getCurrencyRates,
  convertCurrency
}

export default exportResult
