-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);


INSERT INTO "Driver"(name, username, email) VALUES ('Emanuel', 'emanu123', 'emanu@hotmail.com'); 
INSERT INTO "Driver"(name, username, email) VALUES ('Dina', 'dins78', 'dinaf@gmail.com'); 
INSERT INTO "Driver"(name, username, email) VALUES ('Nuno', 'nuns69', 'nuno.lord@hotmail.com'); 