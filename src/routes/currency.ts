import express from 'express'
const router = express.Router()

// Add Controllers & Validators
import Controller from '../controllers/currency'
// import Validator  from '../validators/currency'

// (action)             (verb)    (URI)
// create:              POST      - /samples
// list:                GET       - /samples
// details:             GET       - /samples/:sampleId
// update:              PUT       - /samples/:sampleId
// delete:              DELETE    - /samples/:sampleId
// a secure action:     POST      - /samples/:sampleId/secure-action

// ---------------------------------- Define All Sample Routes Here ----------------------------------


/**
 * @openapi
 * paths:
 *   /samples/:
 *     get:
 *       summary: Get list of all Samples
 *       tags: [Samples]
 *       responses:
 *         "200":
 *           description: Gets a list of samples as an array of objects
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     description: Response Status
 *                   result:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         total:
 *                           type: integer
 *                         list:
 *                           $ref: '#/components/schemas/Sample'
 *         "400":
 *           $ref: '#/components/responses/BadRequest'
 */
router.route('/rates').get(Controller.getCurrencyRates)
router.route('/converts').get(Controller.convertCurrency)
router.route('/symbols').get(Controller.getSymbols)
router.route('').post(Controller.updateCurrency)

export default router
