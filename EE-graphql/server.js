const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = graphql.buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,  // display GraphiQL client interface
}));

app.listen(8080, () => {
    console.log('Running a GraphQL API server at http://localhost:8080/graphql')});