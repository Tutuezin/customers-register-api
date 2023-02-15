import { prisma } from "../config/database";

export async function insertCustomer(customerData: any) {
  return "teste";

  /* await prisma.customer.create({
    select: {
      name: true,
      cpf: true,
    },
    data: customerData,
  }); */
}
