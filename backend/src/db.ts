import { PrismaClient, Driver } from "@prisma/client";

const prisma = new PrismaClient();


async function drivers(): Promise<Driver[]> {
    return await prisma.driver.findMany();
}

async function driver(id: number): Promise<Driver> {
    return await prisma.driver.findFirst({ where: { id: id }});
}

export { drivers, driver };