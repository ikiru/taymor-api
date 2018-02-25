module.exports = {
    development: {
      client:'pg',
      connection: {
        host: 'betteroff.cxc47tthyp3m.us-east-2.rds.amazonaws.com',
        database:'taymor_development',
        port: '5432',
        username: 'Ikiru',
        password: 'Pepper00~~!!',
        reconnect:'true',
        data_source_provider: 'rds',
        type: 'postgres',
      },

      migrations: {
        directory: __dirname + '/db/migrations',
      },
      seeds: {
        directory: __dirname + '/db/seeds',
      },
    },
  }