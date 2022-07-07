/*
    sourced from: https://graphql.org/graphql-js/running-an-express-graphql-server/
*/

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import users from './db.js'

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    users(country: String): [User]
    user(id: Int!): User
  }

  type User {
    id: Int
    name: String
    country: String
    age: Int
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  user: (args) => {
    return users.filter(u => u.id == args.id)[0]
  },
  users: (args) => {
    if (args.country) {
      return users.filter(u => u.country === args.country)
    } else {
      return users
    }
  }
};

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');