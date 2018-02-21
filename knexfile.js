module.exports = {
  development: {
    client: 'pg',
    connection:{
      username: 'Ikiru', 
      password: 'Pepper00~~!!', 
      database:'taymor_development',
      host: 'localhost',
      dialect: 'postgres'
      }
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }
