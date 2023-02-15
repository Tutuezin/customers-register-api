import { conflictError } from "../middlewares/errorMiddleware";
import { Customer } from "@prisma/client";

export function verifyCpfisCpfRegistered(isCpfRegistered: Customer | null) {
  if (isCpfRegistered) throw conflictError("Cpf");
}
