module.exports = {
    development: {
      client:'pg',
      connection: {
        host: 'betteroff.cxc47tthyp3m.us-east-2.rds.amazonaws.com',
        database:'taymor_development',
        port: '5432',
        user: 'Ikiru',
        password: 'Pepper00~~!!',
      },

      migrations: {
        directory: __dirname + '/migrations',
      },
      seeds: {
        directory: __dirname + '/db/seeds',
      },
    },
  }
