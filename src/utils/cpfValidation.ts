import { unprocessableError } from "@middlewares/errorMiddleware";

export function cpfValidator(cpf: string) {
  multipliesDigits(cpf, 9, 10);
  multipliesDigits(cpf, 10, 11);
}

export function multipliesDigits(
  cpf: string,
  quantityNumbers: number,
  multiplier: number
) {
  const firstNumbers = cpf.slice(0, quantityNumbers);
  let sum = 0;
  let digit = 0;

  for (let i = 0; i < firstNumbers.length; i++) {
    let numero = Number(firstNumbers[i]);

    sum += numero * multiplier;
    multiplier--;
  }

  remainderValidator(sum, digit, cpf, quantityNumbers);
}

export function remainderValidator(
  sum: number,
  digit: number,
  cpf: string,
  quantityNumbers: number
) {
  let remainder = sum % 11;

  if (remainder < 2) {
    digit = 0;
  } else {
    digit = 11 - remainder;
  }

  if (digit !== Number(cpf[quantityNumbers]))
    throw unprocessableError("Cpf is invalid");
}
