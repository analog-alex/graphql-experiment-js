import { PrismaClient, Driver, Rota, Client } from "@prisma/client"

const prisma = new PrismaClient()

// TODO refactor with TypeDI in the future


class DriversRepository {
  static async findAll(): Promise<Driver[]> {
    return await prisma.driver.findMany()
  }

  static async findById(id: number): Promise<Driver> {
    return await prisma.driver.findFirst({ where: { id: id } })
  }

  static async findByName(name: string): Promise<Driver[]> {
    return await prisma.driver.findMany({ where: { name: name } })
  }
}

class RotasRepository {
  static async findAll(): Promise<Rota[]> {
    return await prisma.rota.findMany()
  }

  static async findByDriverId(driverId: number): Promise<Rota> {
    return await prisma.rota.findFirst({ where: { driver_id: driverId } })
  }

  static async findByDriverIds(driverIds: number[]): Promise<Rota[]> {
    return await prisma.rota.findMany({ where: { driver_id: {in: driverIds} } })
  }
}

class ClientsRepository {
  static async findAllByRotaId(rotaId: number): Promise<Client[]> {
    return await prisma.client.findMany({ where: { rota_id: rotaId } })
  }

  static async findAllByRotaIds(rotaIds: number[]):  Promise<Client[]> {
    return await prisma.client.findMany({ where: { rota_id: {in: rotaIds}} })
  }
}


export { DriversRepository, RotasRepository, ClientsRepository }