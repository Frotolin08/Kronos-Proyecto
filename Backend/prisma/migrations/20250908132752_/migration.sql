-- CreateTable
CREATE TABLE "public"."tiene_rc" (
    "id" SERIAL NOT NULL,
    "id_proyecto" INTEGER NOT NULL,
    "id_chat" INTEGER NOT NULL,

    CONSTRAINT "tiene_rc_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."tiene_rc" ADD CONSTRAINT "tiene_rc_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "public"."proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tiene_rc" ADD CONSTRAINT "tiene_rc_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "public"."chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
