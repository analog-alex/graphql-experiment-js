import { PrismaClient, Driver, Rota } from "@prisma/client";

const prisma = new PrismaClient();


async function drivers(): Promise<Driver[]> {
    return await prisma.driver.findMany();
}

async function driversByName(name: string): Promise<Driver[]> {
    return await prisma.driver.findMany({ where: { name: name } });
}

async function driver(id: number): Promise<Driver> {
    return await prisma.driver.findFirst({ where: { id: id } });
}

async function rotaByDriver(driverId: number): Promise<Rota> {
    return await prisma.rota.findFirst({ where: { driver_id: driverId } });
}

export { drivers, driver, rotaByDriver, driversByName };