const env = 'development'
const config = require('./knexfile.js')[env]
const knex = require('knex')(config)


const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.Port || 8000


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, function() {
  console.log('--------------------------------------------------')
  console.log('When you sleep, I can hear you when you scream!!!!')
  console.log('On port ', port)
  console.log('--------------------------------------------------')
})
