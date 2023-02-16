/*
  Warnings:

  - Added the required column `dateBirth` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "dateBirth" TEXT NOT NULL;
