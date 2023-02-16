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
      dateBirth: true,
      cpf: true,
    },
    data: customerData,
  });
}

export async function findCustomers(
  search: string,
  take: number,
  skip: number
) {
  const [customers, total] = await prisma.$transaction([
    prisma.customer.findMany({
      select: { name: true, cpf: true },
      where: {
        cpf: {
          contains: search,
          mode: "insensitive",
        },
      },
      take: take,
      skip: skip,
    }),
    prisma.customer.count(),
  ]);

  const totalPage = Math.ceil(total / take);

  return { total, totalPage, customers };
}
