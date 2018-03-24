const pg = require("pg");

const dbProdConfig = {
  // user: "",
  // password: "",
  // server: "",
  // database: "",
  // port: ""
 };

const dbDevConfig = {
  user: "Ikiru",
  password: "Pepper00~~!!",
  server: "betteroff.cxc47tthyp3m.us-east-2.rds.amazonaws.com",
  database: "taymor_development",
  // options: {
  //   encrypt: true,
  //   port: "5432"
  // }
};

// export const cpool = new mssql.connect(dbProdConfig)
// export const cpool = new mssql.connect(dbDevConfig)
// export const cpool = process.env.NODE_ENV == 'dev' ? new pg.connect(dbDevConfig) : new pg.connect(dbProdConfig)

// export async function token(authCode, token) {
//   const result = await cpool
//     .then(pool => {
//       return pool
//         .request()
//         .input("authCode", mssql.VarChar(50), authCode)
//         .input("token", mssql.VarChar(50), token)
//         .query("exec gps.dbo.v3_Token_verify @authCode, @token");
//     })
//     .then(result => {
//       if (result.recordsets[0][0].resultCode == 1) {
//         return result.recordsets[0][0].token
//       }
//       else {
//         return null
//       }

//     })
//     .catch(err => {
//       console.log(err);
//     });

//   return result
// }
