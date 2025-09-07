/*
  Warnings:

  - Added the required column `nombrearchivo` to the `archivos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."archivos" ADD COLUMN     "nombrearchivo" TEXT NOT NULL;
