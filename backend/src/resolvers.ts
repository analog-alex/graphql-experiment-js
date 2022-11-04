import { Driver, Rota } from ".prisma/client"
import { DriversRepository, RotasRepository, ClientsRepository } from "./db"
import DataLoader from "dataloader";

// dataloaders to avoid n + 1 problem

const driversLoader = new DataLoader((keys: number[]) => RotasRepository.findByDriverIds(keys))

// resolver logic

export const resolvers = {
  Query: {
    drivers: async (_: object, { name }: { name: string }) => {
      if (name) {
        return await DriversRepository.findByName(name)
      } else {
        return await DriversRepository.findAll()
      }
    },
    driver: async (_: object, { id }: { id: number }) => {
      return await DriversRepository.findById(id)
    },
    rotas: async() => RotasRepository.findAll(),
  },
  Driver: {
    rota: async (parent: Driver) => {
      return await driversLoader.load(parent.id)
    }
  },
  Rota: {
    clients: async (parent: Rota) => {
      return await ClientsRepository.findAllByRotaId(parent.id)
    }
  }
}