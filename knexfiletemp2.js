module.exports = {
  development: {
    client:'pg',
      connection: {
        host : 'localhost',
        user : 'jeffwinkler',
        password : '',
        database : 'taymor_development',
      },
    },

    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
}