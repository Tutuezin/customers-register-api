import { Router } from "express";
import { validateSchema } from "@middlewares/validations/schemaValidator";
import * as customerControler from "@controllers/customerControler";

const customerRoute = Router();

customerRoute.post("/customer/cpf", customerControler.customerRegister);

export default customerRoute;
