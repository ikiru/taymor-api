/**
 * open.js
 *
 * Created by:    Brian Canlas
 * Date Created:  04/27/18
 * Description:   These are the PUBLIC queries used by the admin, web, and other clients' applications.
 *                It consists of a big function that, first, checks if the JWT token is valid to have access to these queries.
 *                Then, it shows or doesn't show the queries.
 *
 * Copyright: Rhino Fleet Tracking 2018
 */

import token from "../libs/token";

import sql from "mssql";
import { cpool } from "../../db";

import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} from "graphql";

import {
  Device,
  DeviceTypeTree,
  DeviceTypeTreeForSingle,
  ServicePlans,
  Firmware,
  CheckIMEI,
  Contact,
  Client,
  Feature,
  FirmwareCommand,
  SecurityRole,
  LoginReport,
  AlertReport,
  DeviceType,
  Network,
  NetworkProvider,
  ExcessiveException,
  ExcessiveExceptionDetail,
  Role,
  InactiveDeviceLocating,
  Admin
} from "../types.js";

import { DeviceSearchEnum } from "../enums";

/**
 * @description
 *
 * @param {string} token
 */
export const open = async headers => {
  let hasAccess = await token.verifySecretForOpen(headers.secret);

  if (hasAccess) {
    return {
      roles: {
        name: "Roles",
        type: new GraphQLList(Role),
        description: "A of all security roles",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForOpen(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query("SELECT * FROM dbo.Role where ynIsActive = 1");
              });
            })
            .then(result => {
              return result.recordsets[0];
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      devices: {
        name: "Devices",
        type: new GraphQLList(Device),
        description: "A list of devices",
        args: {
          input: {
            type: GraphQLString,
            description: "This can be a client id, imei, alias, etc. If you are using our public API and want to do client id, you will be defaulted to your client id.",
            defaultValue: "0"
          },
          type: {
            type: DeviceSearchEnum,
            description: "Search type"
          }
        },
        resolve: function(source, args, context, info) {
              return cpool.then(pool => {
                switch (args.type) {
                  case "alias":
                    return pool
                      .request()
                      .input(args.type, sql.VarChar(50), args.input)
                      .input('token', sql.VarChar(50), context.headers.token)
                      .execute("gps.dbo.v3_Devices_Alias_get");
                    break;
                  case 'imei':
                    return pool
                      .request()
                      .input(args.type, sql.VarChar(50), args.input)
                      .input('token', sql.VarChar(50), context.headers.token)
                      .execute("gps.dbo.v3_Devices_IMEI_get");
                    break;
                  case "productKey":
                    return pool
                      .request()
                      .input(args.type, sql.VarChar(50), args.input)
                      .input('token', sql.VarChar(50), context.headers.token)
                      .execute("gps.dbo.v3_Devices_productKey_get");
                    break;
                  case "phoneNumber":
                    return pool
                      .request()
                      .input(args.type, sql.VarChar(50), args.input)
                      .input('token', sql.VarChar(50), context.headers.token)
                      .execute("gps.dbo.v3_Devices_PhoneNumber_get");
                    break;
                  case "cardSerial":
                    return pool
                      .request()
                      .input(args.type, sql.VarChar(50), args.input)
                      .input('token', sql.VarChar(50), context.headers.token)
                      .execute("gps.dbo.v3_Devices_CardSerial_get");
                    break;
                  case "deviceSerial":
                    return pool
                      .request()
                      .input(args.type, sql.VarChar(50), args.input)
                      .input('token', sql.VarChar(50), context.headers.token)
                      .execute("gps.dbo.v3_Devices_DeviceSerial_get");
                    break;
                  default:
                    return pool
                      .request()
                      .input("numClientID", sql.Int, args.input)
                      .input('token', sql.VarChar(50), context.headers.token)
                      .execute("gps.dbo.z_v3_graph_Devices_get");
                    break;
                }
              })
            .then(result => {
              return result.recordsets[0].map(object => {
                if (args.type == "client") {
                  object.clientID = args.input;
                }

                return object;
              });
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      contacts: {
        name: "Contacts",
        type: new GraphQLList(Contact),
        description: "A list of contacts",
        args: {
          clientID: {
            type: GraphQLInt,
            description: "Client's identifier"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForOpen(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("numClientID", sql.Int, args.clientID)
                  .input('token', sql.VarChar(50), context.headers.token)
                  .execute("gps.dbo.v3_Contact_get");
              });
            })
            .then(result => {
              return result.recordsets[0];
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    };
  } else {
    return {
      noAccess: {
        name: "NoAccess",
        description: "You do not have access",
        type: GraphQLString,
        resolve: function(source, args, context, info) {
          return "You do not have access";
        }
      }
    };
  }
};
