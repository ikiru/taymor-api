module.exports = {
  development: {
    client:'pg',
      connection: {
        host : '127.0.0.1',
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