const mssql = require("mssql");

const dbProdConfig = {
  user: "Tr@ck",
  password: "W4@tM@tt3r5",
  server: "127.0.0.1",
  database: "taymor",
  port: "3306"
 };

// const dbDevConfig = {
//   user: "adminAPI",
//   password: "test",
//   server: "devtest.c6icfldz2ex8.us-east-2.rds.amazonaws.com",
//   database: "GPS",
//   options: {
//     encrypt: true,
//     port: "1433"
//   }
// };

// export const cpool = new mssql.connect(dbProdConfig)
// export const cpool = new mssql.connect(dbDevConfig)
export const cpool = process.env.NODE_ENV == 'dev' ? new mysql.connect(dbDevConfig) : new mysql.connect(dbProdConfig)

export async function token(authCode, token) {
  const result = await cpool
    .then(pool => {
      return pool
        .request()
        .input("authCode", mysql.VarChar(50), authCode)
        .input("token", mysql.VarChar(50), token)
        .query("exec gps.dbo.v3_Token_verify @authCode, @token");
    })
    .then(result => {
      if (result.recordsets[0][0].resultCode == 1) {
        return result.recordsets[0][0].token
      }
      else {
        return null
      }

    })
    .catch(err => {
      console.log(err);
    });

  return result
}
