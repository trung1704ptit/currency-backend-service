import express from 'express'
const router = express.Router()
import Controller from '../controllers/currency'

router.route('/symbols').get(Controller.getCurrencySymbols)
router.route('/converts').get(Controller.convertCurrency)
router.route('/rates').get(Controller.getCurrencyRates)
router.route('/').post(Controller.updateCurrency)

export default router
