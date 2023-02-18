import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRaw`TRUNCATE TABLE customers RESTART IDENTITY`;

  let faker = require("faker-br");

  for (let i = 0; i < 10; i++) {
    const body: { name: string; dateBirth: string; cpf: string } = {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      dateBirth: i < 9 ? `0${i + 1}/11/200${i + 1}` : `${i + 1}/11/20${i + 1}`,
      cpf: faker.br.cpf(),
    };
    await prisma.customer.create({
      select: {
        name: true,
        dateBirth: true,
        cpf: true,
      },
      data: body,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
