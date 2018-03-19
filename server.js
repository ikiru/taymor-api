const dev = process.env.NODE_ENV === 'development';
const config = require('./knexfile.js');
const knex = require('./db/knex');

const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const port = process.env.Port || 8000;

const app = express();

console.log('-----------------------------------')
console.log('here')
console.log('-----------------------------------')

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
