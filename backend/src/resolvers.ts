import { Driver } from ".prisma/client";
import { drivers, driver, rotaByDriver } from "./db";

// resolver logic

export const resolvers = {
    Query: {
        drivers: async () => await drivers(),
        driver: async (_: object, { id }: { id: number }) => {
            return await driver(id)
        }
    },
    Driver: {
        rota: async (parent: Driver) => {
            return await rotaByDriver(parent.id);
        }
    }
};
