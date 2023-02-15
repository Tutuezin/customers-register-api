import * as customerRepository from "@repositories/customerRepository";

export async function customerRegister(customerData: any) {
  //const cpfExists = await customerRepository.findCpf();

  //authUtils.verifyCpfExists(cpfExists);

  return await customerRepository.insertCustomer("");

  /* await customerRepository.insertCustomer({
    name: customerData.name,
    cpf: customerData.cpf,
  }); */
}
