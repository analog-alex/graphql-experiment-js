-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rota" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "driver_id" INTEGER NOT NULL,

    CONSTRAINT "Rota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "name" TEXT NOT NULL,
    "rota_id" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("name","rota_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rota_driver_id_key" ON "Rota"("driver_id");

-- AddForeignKey
ALTER TABLE "Rota" ADD CONSTRAINT "Rota_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_rota_id_fkey" FOREIGN KEY ("rota_id") REFERENCES "Rota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- InsertData

INSERT INTO "Driver"(name, username, email) VALUES ('Emanuel', 'emanu123', 'emanu@hotmail.com'); 
INSERT INTO "Driver"(name, username, email) VALUES ('Dina', 'dins78', 'dinaf@gmail.com'); 
INSERT INTO "Driver"(name, username, email) VALUES ('Nuno', 'nuns69', 'nuno.lord@hotmail.com'); 

INSERT INTO "Rota"(name, driver_id) VALUES ('Amoreiras', 1); 
INSERT INTO "Rota"(name, driver_id) VALUES ('Benfica', 2); 
INSERT INTO "Rota"(name, driver_id) VALUES ('Amadora', 3);

INSERT INTO "Client"(name, rota_id, address) VALUES ('Momentos de Leitura', 2, 'Rua do Colombo, Lote B'); 
INSERT INTO "Client"(name, rota_id, address) VALUES ('O Indiano', 2, 'Avenida Linha das Torres'); 