

const express = require('express');
const bodyParser = require('body-parser');
const NodeCache = require("node-cache");


const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require("graphql");

const QueryRoot = require("./graphql/queries.js");
const MutationRoot = require("./graphql/mutations.js");

const port = process.env.Port || 8000;

const cache = new NodeCache();
const app = express();
console.log('-----------------------------------')
console.log('here')
console.log('-----------------------------------')
const schema = new GraphQLSchema({
  // types: [],
  query: QueryRoot,
  mutation: MutationRoot
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: dev,
}))

app.use('/', (req, res) => {
  res.json('Go to /graphql to test your queries and mutations!');
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, function() {
  console.log('--------------------------------------------------');
  console.log('When you sleep, I can hear you when you scream!!!!');
  console.log('On port ', port);
  console.log('--------------------------------------------------');
})
