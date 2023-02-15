import { prisma } from "../config/database";
import * as customerTypes from "../types/customerTypes";

export async function findCpf(cpf: string) {
  return await prisma.customer.findUnique({ where: { cpf } });
}

export async function insertCustomer(
  customerData: customerTypes.ICustomerData
) {
  return await prisma.customer.create({
    select: {
      name: true,
      cpf: true,
    },
    data: customerData,
  });
}
