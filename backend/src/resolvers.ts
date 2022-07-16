import { drivers, driver } from "./db";

// resolver logic

export const resolvers = {
    Query: {
        drivers: async () => await drivers(),
        driver: async (_: any, { id }: {id: number}) => {
            return await driver(id)
        }
    },
};

