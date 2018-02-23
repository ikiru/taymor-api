module.exports = {
    development: {
      client: 'pg',
      connection: 'betteroff.cxc47tthyp3m.us-east-2.rds.amazonaws.com',
      user: 'Ikiru',
      password: 'Pepper00~~!!',
      port:5432,

      migrations: {
        directory: __dirname + '/db/migrations',
      },
      seeds: {
        directory: __dirname + '/db/seeds',
      },
    },
    production:{
      client:'pg',
      connection: process.env.DATABASE_URL,
      migrations:{
        directory: __dirname + '/db/migrations',
      },
      seeds: {
        directory: __dirname + '/db/seeds/production',
      },
    },
  }