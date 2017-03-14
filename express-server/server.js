import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import cors from 'cors'

const schema = buildSchema(`
  type Query {
    hello: String,
    name: String
  }
`)

const root = {
  hello: () => {
    return "Hello World";
  },
  name: () => {
    return "dominik";
  }
}

const app = express()

app.use('*', cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000)

console.log(express)
console.log('Running a GraphQL API server at localhost:4000/graphql');