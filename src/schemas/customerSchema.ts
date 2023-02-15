import Joi from "joi";

export const customerInfos = Joi.object({
  name: Joi.string().max(60).required(),
  cpf: Joi.string()
    .min(11)
    .pattern(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/)
    .required()
    .messages({ "string.pattern.base": `"cpf" must be 11 digit number` }),
});
