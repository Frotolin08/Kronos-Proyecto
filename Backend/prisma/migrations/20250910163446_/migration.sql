-- CreateTable
CREATE TABLE "public"."leido" (
    "id" SERIAL NOT NULL,
    "id_mensaje" INTEGER NOT NULL,
    "id_persona" INTEGER NOT NULL,

    CONSTRAINT "leido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "leido_id_mensaje_id_persona_key" ON "public"."leido"("id_mensaje", "id_persona");

-- AddForeignKey
ALTER TABLE "public"."leido" ADD CONSTRAINT "leido_id_mensaje_fkey" FOREIGN KEY ("id_mensaje") REFERENCES "public"."mensajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."leido" ADD CONSTRAINT "leido_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "public"."persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
