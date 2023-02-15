import {
  conflictError,
  unprocessableError,
} from "@middlewares/errorMiddleware";
import { Customer } from "@prisma/client";

export function verifyCpfisCpfRegistered(isCpfRegistered: Customer | null) {
  if (isCpfRegistered) throw conflictError("Cpf");
}

export function cpfReplacer(cpf: string) {
  return cpf.replace(/(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})/, "$1$2$3$4");
}

//!NÃO ESQUECER DE PASSAR AS VARÁVEIS PARA INGLÊS
export function cpfValidator(cpf: string) {
  const firstNineNumbers = cpf.slice(0, 9);
  const firstTenNumbers = cpf.slice(0, 10);

  let multiplicador = 10;
  let somaDos9 = 0;
  let somaDos10 = 0;
  let primeiroDigito = 0;
  let segundoDigito = 0;

  for (let i = 0; i < firstNineNumbers.length; i++) {
    let numero = Number(firstNineNumbers[i]);

    somaDos9 += numero * multiplicador;
    multiplicador--;
  }

  let resto = somaDos9 % 11;

  if (resto < 2) {
    primeiroDigito = 0;
  } else {
    primeiroDigito = 11 - resto;
  }

  if (primeiroDigito !== Number(cpf[9]))
    throw unprocessableError("Cpf is invalid");

  multiplicador = 11;
  resto = 0;
  for (let i = 0; i < firstTenNumbers.length; i++) {
    let numero = Number(firstTenNumbers[i]);

    somaDos10 += numero * multiplicador;
    multiplicador--;
  }

  resto = somaDos10 % 11;

  if (resto < 2) {
    segundoDigito = 0;
  } else {
    segundoDigito = 11 - resto;
  }

  if (segundoDigito !== Number(cpf[10]))
    throw unprocessableError("Cpf is invalid");
}
