import { gql } from 'apollo-server';

/**
 *  graphQL schema definition (this can go to a seperate .graphql file)
 */
export const SCHEMA = gql`
    type Driver {
        id: ID!
        name: String,
        username: String,
        email: String
        rota: Rota
    }

    type Rota {
        id: ID!
        name: String
    }

    type Query {
        drivers: [Driver!]
        driver(id: Int!): Driver
    }
`;