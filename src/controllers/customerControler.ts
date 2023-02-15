import { Request, Response } from "express";
import * as customerService from "@services/customerService";

export async function customerRegister(req: Request, res: Response) {
  const { name, cpf } = req.body;

  const registeredCustomer = await customerService.customerRegister({
    name,
    cpf,
  });

  res.status(201).send(registeredCustomer);
}
