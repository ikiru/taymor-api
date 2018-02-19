const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.Port || 8000
const knex = require('./knexfile')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, function() {
  console.log('--------------------------------------------------')
  console.log('When you sleep, I can hear you when you scream!!!!')
  console.log('On port ', npmport)
  console.log('--------------------------------------------------')
})


// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host     : 'betteroff.cxc47tthyp3m.us-east-2.rds.amazonaws.com',
//     user     : 'betteroffcostumes',
//     password : 'Pepper00~~!!',
//     database : 'myapp_test',
//     charset  : 'utf8'
//   }
// });

// var bookshelf = require('bookshelf')(knex);

// var User = bookshelf.Model.extend({
//   tableName: 'users'
// });
