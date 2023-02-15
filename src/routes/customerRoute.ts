import { Router } from "express";
import { validateSchema } from "@middlewares/validations/schemaValidator";
import * as customerControler from "@controllers/customerControler";
import { customerInfos } from "@schemas/customerSchema";

const customerRoute = Router();

customerRoute.post(
  "/customer/cpf",
  validateSchema(customerInfos),
  customerControler.customerRegister
);

export default customerRoute;
