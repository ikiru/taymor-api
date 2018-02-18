module.exports = {
  development: {
    client: 'pg',
    connection: 'arn:aws:rds:us-east-2:402370617414:db:betteroff',
    user     : 'betteroffcostumes',
    password : 'Pepper00~~!!',
    database : 'taymor_development',
    charset  : 'utf8'
  },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }
