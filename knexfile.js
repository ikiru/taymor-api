module.exports = {
  development: {
    client: 'pg',
    connection:{
      username: 'betteroffcostumes', 
      password: 'Pepper00~~!!', 
      database:'taymor_development',
      host: 'betteroff.cxc47tthyp3m.us-east-2.rds.amazonaws.com',
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
