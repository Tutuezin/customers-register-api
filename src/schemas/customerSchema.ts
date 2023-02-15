import Joi from "joi";

export const customerInfos = Joi.object({
  name: Joi.string().max(60).required(),
  cpf: Joi.string().length(11).required(),
});
