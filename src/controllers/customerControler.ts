import { Request, Response } from "express";
import * as customerService from "@services/customerService";

export async function customerRegister(req: Request, res: Response) {
  const { name, dateBirth, cpf } = req.body;

  const registeredCustomer = await customerService.customerRegister({
    name,
    dateBirth,
    cpf,
  });

  res.status(201).send(registeredCustomer);
}

export async function findCustomers(req: Request, res: Response) {
  const { search, take, skip } = req.query;

  const customers = await customerService.findCustomers(
    String(search),
    Number(take) || 10,
    Number(skip) || 0
  );

  res.status(200).send(customers);
}
