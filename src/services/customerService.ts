import * as customerRepository from "@repositories/customerRepository";
import * as customerTypes from "../types/customerTypes";
import * as customerUtils from "@utils/customerUtils";

export async function customerRegister(
  customerData: customerTypes.ICustomerData
) {
  //Transforma CPF  Entrada: 123.123.123-12 -> Saida: 12312312312
  const cpfReplaced = customerUtils.cpfReplacer(customerData.cpf);
  //Valida CPF
  customerUtils.cpfValidator(cpfReplaced);

  //Busca CPF no banco de dados
  const isCpfRegistered = await customerRepository.findCpf(cpfReplaced);
  customerUtils.verifyCpfisCpfRegistered(isCpfRegistered);

  return "Ok";

  await customerRepository.insertCustomer({
    name: customerData.name,
    cpf: customerData.cpf,
  });
}
