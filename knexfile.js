module.exports = {
  development: {
    client: 'pg',
    connection: 'betteroff.cxc47tthyp3m.us-east-2.rds.amazonaws.com',
    user     : 'betteroffcostumes',
    password : 'Pepper00~~!!',
    database : 'myapp_test',
    charset  : 'utf8'
  },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }
