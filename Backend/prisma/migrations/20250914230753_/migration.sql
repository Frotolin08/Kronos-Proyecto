/*
  Warnings:

  - You are about to drop the `tiene_rc` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."tiene_rc" DROP CONSTRAINT "tiene_rc_id_chat_fkey";

-- DropForeignKey
ALTER TABLE "public"."tiene_rc" DROP CONSTRAINT "tiene_rc_id_proyecto_fkey";

-- AlterTable
ALTER TABLE "public"."mensajes" ADD COLUMN     "fecha_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "public"."tiene_rc";
