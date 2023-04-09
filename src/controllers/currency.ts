import { Request, Response } from 'express'
import { ICurrency } from '../configs/types'
import validators from '../validators/currency';
const catchAsync = require('../utils/catchAsync')
const currencyService = require('../services/currency');


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
  const validatedResult = validators.getRates.validate(query);
  if (validatedResult.error) {
    res.status(400).send('Invalid query');
    return;
  }
  const currencyData = await currencyService.getCurrencyRatesByFrom(from, to)
  res.send(currencyData)
})

const convertCurrency = catchAsync(async (req: Request, res: Response) => {
  const { query } = req
  const parsedQuery = {...query, amount: Number(query.amount)}
  const validatedResult = validators.convert.validate(parsedQuery);
  if (validatedResult.error) {
    res.status(400).send('Invalid query');
    return;
  }
  const currencyData = await currencyService.convertCurrency(parsedQuery)
  res.send(currencyData)
})

const getSymbols = catchAsync(async (_: Request, res: Response) => {
  const currencyList = await currencyService.getSymbols();
  res.send(currencyList);
})

const exportResult = {
  updateCurrency,
  handleSocketConnect,
  getCurrencyRates,
  convertCurrency,
  getSymbols
}

export default exportResult
