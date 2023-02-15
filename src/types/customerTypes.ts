import { Customer } from "@prisma/client";

export type ICustomerData = Omit<Customer, "id" | "createdAt">;
