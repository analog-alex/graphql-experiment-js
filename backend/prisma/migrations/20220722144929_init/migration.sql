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
