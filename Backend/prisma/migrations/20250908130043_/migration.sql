-- CreateTable
CREATE TABLE "public"."tiene_pc" (
    "id" SERIAL NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "id_chat" INTEGER NOT NULL,

    CONSTRAINT "tiene_pc_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."tiene_pc" ADD CONSTRAINT "tiene_pc_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "public"."persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tiene_pc" ADD CONSTRAINT "tiene_pc_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "public"."chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
