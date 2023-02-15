import { conflictError } from "../middlewares/errorMiddleware";
import { Customer } from "@prisma/client";

export function verifyCpfisCpfRegistered(isCpfRegistered: Customer | null) {
  if (isCpfRegistered) throw conflictError("Cpf");
}

export function cpfReplacer(cpf: string) {
  return cpf.replace(/(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})/, "$1$2$3$4");
}
