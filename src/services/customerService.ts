import * as customerRepository from "@repositories/customerRepository";
import * as customerTypes from "../types/customerTypes";
import * as customerUtils from "@utils/customerUtils";

export async function customerRegister(
  customerData: customerTypes.ICustomerData
) {
  const isCpfRegistered = await customerRepository.findCpf(customerData.cpf);

  customerUtils.verifyCpfisCpfRegistered(isCpfRegistered);

  return await customerRepository.insertCustomer({
    name: customerData.name,
    cpf: customerData.cpf,
  });
}
