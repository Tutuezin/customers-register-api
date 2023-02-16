import supertest from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/config/database";
import * as customerUtils from "@utils/customerUtils";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE customers RESTART IDENTITY;`;
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Integration tests", () => {
  it("Should return 201 and create a new customer when the body of the request is valid", async () => {
    const body: { name: string; dateBirth: string; cpf: string } = {
      name: "Arthur",
      dateBirth: "06/11/2001",
      cpf: "112.146.774-10",
    };

    const result = await supertest(app).post("/customer/cpf").send(body);
    const status = result.status;

    expect(status).toEqual(201);
  });

  it("Should return 422 of registering a customer with incorrect date format", async () => {
    const body: { name: string; dateBirth: string; cpf: string } = {
      name: "Arthur",
      dateBirth: "06-11-2001",
      cpf: "112.146.774-10",
    };

    const result = await supertest(app).post("/customer/cpf").send(body);
    const status = result.status;

    expect(status).toEqual(422);
  });

  it("Should return 422 if registering a customer with incorrect cpf format", async () => {
    const body: { name: string; dateBirth: string; cpf: string } = {
      name: "Arthur",
      dateBirth: "06/11/2001",
      cpf: "112.146-774/10",
    };

    const result = await supertest(app).post("/customer/cpf").send(body);
    const status = result.status;

    expect(status).toEqual(422);
  });

  it("Should return 422 if registering a customer with an invalid cpf", async () => {
    const body: { name: string; dateBirth: string; cpf: string } = {
      name: "Arthur",
      dateBirth: "06/11/2001",
      cpf: "112.146.774-55",
    };

    const result = await supertest(app).post("/customer/cpf").send(body);
    const textError = result.text;

    expect(textError).toEqual("Cpf is invalid");
  });

  it("It should return 409 when trying to register a customer who already has a registered cpf", async () => {
    const body: { name: string; dateBirth: string; cpf: string } = {
      name: "Arthur",
      dateBirth: "06/11/2001",
      cpf: "112.146.774-10",
    };

    await supertest(app).post("/customer/cpf").send(body);
    const result = await supertest(app).post("/customer/cpf").send(body);
    const status = result.status;

    expect(status).toEqual(409);
  });

  it("Should return a customer who has been created", async () => {
    const body: { name: string; dateBirth: string; cpf: string } = {
      name: "Arthur",
      dateBirth: "06/11/2001",
      cpf: "112.146.774-10",
    };

    await supertest(app).post("/customer/cpf").send(body);
    const result = await supertest(app).get("/customers?search=112.146.774-10");
    const dbOutput = result.body;

    expect(dbOutput.customers[0].cpf).toEqual(
      customerUtils.cpfReplacer(body.cpf)
    );
  });
});
