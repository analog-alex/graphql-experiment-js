import { Driver } from ".prisma/client";
import { drivers, driversByName, driver, rotaByDriver } from "./db";

// resolver logic

export const resolvers = {
    Query: {
        drivers: async (_: object, { name }: { name: string }) => {
            if(name) {
                return await driversByName(name)
            } else {
                return await drivers()
            }
        },
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
