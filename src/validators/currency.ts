import Joi from 'joi'
import { validate } from '../middlewares/validator'

const exportResult = {
  getRates: validate({
    query: Joi.object({
      from: Joi.string().default('USD').description('From base'),
      to: Joi.string().default('EUR').description('To target')
    })
  }),

  convert: validate({
    query: Joi.object({
      from: Joi.string().default('USD').description('From base'),
      to: Joi.string().default('EUR').description('To target'),
      amount: Joi.number().default(1).description('Amount to convert')
    })
  }),

  update: validate({
    body: Joi.object({
      currencies: Joi.array().items(
        Joi.object({
          pairName: Joi.string().description('Currency pair name'),
          price: Joi.number().description('Currency currency price'),
          dayChanged: Joi.number().description('Currency price day changed'),
          dayChangedByPercent: Joi.number().description(
            'Currency price day changed by percent'
          ),
          from: Joi.string().description('Currency base'),
          to: Joi.string().description('Currency target'),
          dayChangedStatus: Joi.string().description('Currency status'),
          lastUpdated: Joi.string().description('Currency date')
        })
      )
    }),
    query: Joi.object({})
  })
}

export default exportResult
