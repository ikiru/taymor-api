/**
 * token.js
 *
 * Created by:    Brian Canlas
 * Date Created:  04/27/18
 * Description:   The JWT token library
 *                Secret token is a permament token that we create and give to the client. This gives access to API.
 *                Public token could be a permanent or temporary token that we create and give to the client.
 *                  This gives access to each query and mutation nodes.
 *                  Permanent --> for clients' application | Temporary --> for our web application
 *
 * Copyright: Rhino Fleet Tracking 2018
 */

const { cpool } = require("../../db");

export default {
  client: "",
  id: 0,

  // Secret Token
  verifySecretForInternal: async (secret) => {
    let pool = await cpool
    let result = await pool.request().query("SELECT * FROM GPS.dbo.SecretToken WHERE token = \'" + secret + "\'")

    if (result.recordset[0]) {
      // TODO: add client and user information
      if (result.recordset[0].numClientID == 0) return true
    }

      return false
  },
  verifySecretForOpen: async (secret) => {

    let testsecret = "BEB8AEE33AEE4B3A813B1724922F5B6E"
    let pool = await cpool
    let result = await pool.request().query("SELECT * FROM GPS.dbo.SecretToken WHERE token = \'" + testsecret + "\'")

    if (result.recordset[0]) {
      // TODO: add client and user information
      return true
    }

      return false
  },

  // Public Token
  verifyPublicForInternal: (token) => {
    return new Promise((resolve, reject) => {
      cpool.then( pool => {
        return pool.request().query("SELECT * FROM GPS.dbo.PublicToken WHERE token = \'" + token + "\'")
      }).then( result => {
        console.log(result)
        if (result.recordset[0]) {
          resolve()
        }

        reject("You do not have access")
      }).catch( err => {
        reject(err)
      })
    })
  },

  verifyPublicForOpen: (token) => {
    return new Promise((resolve, reject) => {
      cpool.then( pool => {
        return pool.request().query("SELECT * FROM GPS.dbo.PublicToken WHERE token = \'" + token + "\'")
      }).then( result => {
        console.log(result)
        if (result.recordset[0]) {
          resolve()
        }

        reject("You do not have access")
      }).catch( err => {
        reject(err)
      })
    })
  }
};
