-- CreateTable
CREATE TABLE "public"."persona" (
    "id" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "contrasenia" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,

    CONSTRAINT "persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."archivos" (
    "formato" TEXT NOT NULL,
    "archivo" BYTEA NOT NULL,
    "id" SERIAL NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "id_proyecto" INTEGER NOT NULL,

    CONSTRAINT "archivos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."mensajes" (
    "id_chat" INTEGER NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "mensaje" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "mensajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tareas" (
    "nombre" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "id_proyecto" INTEGER NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "limite" TEXT NOT NULL,

    CONSTRAINT "tareas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."personalizaciones" (
    "id" SERIAL NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "codigo_a_insertar" TEXT NOT NULL,

    CONSTRAINT "personalizaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tiene" (
    "id" SERIAL NOT NULL,
    "id_persona" INTEGER NOT NULL,
    "id_proyecto" INTEGER NOT NULL,

    CONSTRAINT "tiene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."proyecto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "limite" TEXT NOT NULL,

    CONSTRAINT "proyecto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."chat" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "id_proyecto" INTEGER NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "persona_mail_key" ON "public"."persona"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "persona_usuario_key" ON "public"."persona"("usuario");

-- AddForeignKey
ALTER TABLE "public"."archivos" ADD CONSTRAINT "archivos_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "public"."persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."archivos" ADD CONSTRAINT "archivos_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "public"."proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mensajes" ADD CONSTRAINT "mensajes_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "public"."chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mensajes" ADD CONSTRAINT "mensajes_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "public"."persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tareas" ADD CONSTRAINT "tareas_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "public"."proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tareas" ADD CONSTRAINT "tareas_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "public"."persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."personalizaciones" ADD CONSTRAINT "personalizaciones_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "public"."persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tiene" ADD CONSTRAINT "tiene_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "public"."persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tiene" ADD CONSTRAINT "tiene_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "public"."proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat" ADD CONSTRAINT "chat_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "public"."proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
