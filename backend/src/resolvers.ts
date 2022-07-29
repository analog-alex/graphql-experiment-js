import { Driver, Rota } from ".prisma/client"
import { DriversRpository, RotasRepository, ClientsRepository } from "./db"

// resolver logic

export const resolvers = {
  Query: {
    drivers: async (_: object, { name }: { name: string }) => {
      if (name) {
        return await DriversRpository.findByName(name)
      } else {
        return await DriversRpository.findAll()
      }
    },
    driver: async (_: object, { id }: { id: number }) => {
      return await DriversRpository.findById(id)
    },
    rotas: async() => RotasRepository.findAll(),
  },
  Driver: {
    rota: async (parent: Driver) => {
      return await RotasRepository.findByDriverId(parent.id)
    }
  },
  Rota: {
    clients: async (parent: Rota) => {
      return await ClientsRepository.findAllByRotaId(parent.id)
    }
  }
}