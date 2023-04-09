import express from 'express'
const router = express.Router()
import Controller from '../controllers/currency'

router.route('/').post(Controller.updateCurrency)
router.route('/rates').get(Controller.getCurrencyRates)
router.route('/converts').get(Controller.convertCurrency)
router.route('/symbols').get(Controller.getSymbols)

export default router
