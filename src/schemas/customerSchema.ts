import coreJoi from "joi";
import joiDate from "@joi/date";

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const customerInfos = Joi.object({
  name: Joi.string().max(60).required(),
  dateBirth: Joi.date().format("DD/MM/YYYY").required(),
  cpf: Joi.string()
    .min(11)
    .pattern(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/)
    .required()
    .messages({ "string.pattern.base": `"cpf" must be 11 digit number` }),
});
