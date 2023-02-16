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
customerRoute.get("/customers", customerControler.findCustomers);

export default customerRoute;
