import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/config/database";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE customers RESTART IDENTITY;`;
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Integration tests", () => {
  it("Should create a new customer when the body of the request is valid", async () => {
    const body = {
      name: "Arthur",
      dateBirth: "06/11/2001",
      cpf: "112.146.774-10",
    };
    const result = await supertest(app).post("/customer/cpf").send(body);
    const status = result.status;

    expect(status).toEqual(201);
  });
});
