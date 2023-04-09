import Joi from 'joi';

const exportResult = {
  getRates: Joi.object({
    from: Joi.string()
      .min(3)
      .max(3)
      .required()
      .description('From base')
      .error(() => new Error('`From` is invalid')),
    to: Joi.string().min(3).description('To target')
  }),

  convert: Joi.object({
    from: Joi.string()
      .min(3)
      .max(3)
      .required()
      .description('From base')
      .error(() => new Error('`From` is invalid')),
    to: Joi.string().min(3).required().description('To target'),
    amount: Joi.number().min(0).required().description('Amount to convert')
  }),

  update: Joi.object({
    currencies: Joi.array().items(
      Joi.object({
        pairName: Joi.string().required().description('Currency pair name'),
        price: Joi.number().required().description('Currency currency price'),
        dayChanged: Joi.number().description('Currency price day changed'),
        dayChangedByPercent: Joi.number().description(
          'Currency price day changed by percent'
        ),
        from: Joi.string().required().description('Currency base'),
        to: Joi.string().required().description('Currency target'),
        dayChangedStatus: Joi.string().description('Currency status'),
        lastUpdated: Joi.string().description('Currency date')
      })
    )
  })
}

export default exportResult
