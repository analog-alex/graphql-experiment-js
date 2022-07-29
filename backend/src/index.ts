import { ApolloServer } from 'apollo-server'
import { SCHEMA } from './schema'
import { resolvers } from './resolvers'

// source at https://www.apollographql.com/docs/apollo-server/getting-started

const server = new ApolloServer({
  typeDefs: SCHEMA,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',

})


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})