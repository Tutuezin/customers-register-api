import { prisma } from "../config/database";
import * as customerTypes from "../types/customerTypes";

export async function findCpf(cpf: string) {
  return await prisma.customer.findUnique({ where: { cpf } });
}
