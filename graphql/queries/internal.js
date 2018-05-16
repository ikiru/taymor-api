/**
 * internal.js
 *
 * Created by:    Brian Canlas
 * Date Created:  04/27/18
 * Description:   These are the INTERNAL queries used by the admin and web application.
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
  GraphQLBoolean,
  GraphQLNonNull
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
  Admin,
  User
} from "../types.js";

/**
 * @description
 *
 * @param {string} secret token
 */
export async function internal(headers) {
  let hasAccess = await token.verifySecretForInternal(headers.secret);

  if (hasAccess) {
    return {
      login: {
        name: "Login",
        description: "ADMIN - Login to the application",
        type: User,
        args: {
          username: {
            name: "Username",
            description: "User's name or email",
            type: new GraphQLNonNull(GraphQLString)
          },
          password: {
            name: "Password",
            description: "Password",
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: function(source, args, context, info) {
          return cpool
            .then(pool => {
              return pool
                .request()
                .input("username", sql.VarChar(50), args.username)
                .input("password", sql.VarChar(50), args.password)
                .execute("v3_PublicToken_get");
            })
            .then(result => {
              return result.recordsets[0][0];
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      admins: {
        name: "adminsList",
        description: "ADMIN - gets list of all admins",
        type: new GraphQLList(Admin),
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool.request().query("SELECT * FROM Ops.DBO.AdminLogin");
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
      missingXirgoFirmware: {
        name: "MissingXirgoFirmware",
        type: new GraphQLList(Device),
        description: "ADMIN - A list of Xirgo devices that have a firmware missing",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .execute("GPS.dbo.v3_xirgofirmwaremissing_get");
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
      excessiveExceptionsDetails: {
        name: "ExcessiveExceptionsDetails",
        type: new GraphQLList(ExcessiveExceptionDetail),
        description:
          "ADMIN - A detail list of for a specific client exessive exceptions",
        args: {
          deviceId: {
            type: GraphQLInt,
            description: "Start date"
          },
          start: {
            type: GraphQLString,
            description: "End date"
          },
          end: {
            type: GraphQLString,
            description: "Amount of exceptions more than"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("deviceId", args.deviceId)
                  .input("startDate", args.start)
                  .input("endDate", args.end)
                  .execute("gps.dbo.v3_ExcessiveExceptionDetails_get");
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
      excessiveExceptions: {
        name: "ExcessiveExceptions",
        type: new GraphQLList(ExcessiveException),
        description: "ADMIN - A list of exessive exceptions",
        args: {
          start: {
            type: GraphQLString,
            description: "Start date"
          },
          end: {
            type: GraphQLString,
            description: "End date"
          },
          moreThan: {
            type: GraphQLInt,
            description: "Amount of exceptions more than"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("startDate", args.start)
                  .input("endDate", args.end)
                  .input("limit", args.moreThan)
                  .execute("gps.dbo.v3_ExcessiveException_get");
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
      alerts: {
        name: "Alerts",
        type: new GraphQLList(AlertReport),
        description: "A list of alerts in the past 7 days",
        args: {
          clientId: {
            type: GraphQLInt,
            description: "Client identifier"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("clientId", args.clientId)
                  .execute("gps.dbo.v3_ClientAlerts_get");
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
      userLogins: {
        name: "UserLogins",
        type: new GraphQLList(LoginReport),
        description: "A list of logins per week per year",
        args: {
          clientId: {
            type: GraphQLInt,
            description: "Client identifier"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("clientId", args.clientId)
                  .execute("gps.dbo.v3_UserLogins_get");
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
      deviceTypes: {
        name: "DeviceTypes",
        type: new GraphQLList(DeviceType),
        description: "A list of device types",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query(
                    "SELECT * from Pathway.dbo.DeviceType WHERE ynActive = 1"
                  );
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
      networks: {
        name: "Networks",
        type: new GraphQLList(Network),
        description: "A list of networks",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query(
                    "SELECT * from gps.dbo.DeviceNetwork WHERE ynActive = 1"
                  );
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
      networkProviders: {
        name: "NetworkProviders",
        type: new GraphQLList(NetworkProvider),
        description: "A list of network providers",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query(
                    "SELECT * from gps.dbo.DeviceNetworkProvider WHERE ynActive = 1"
                  );
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
      deviceTypeTree: {
        name: "DeviceTypeTree",
        type: new GraphQLList(DeviceTypeTree),
        description: "A list of devices",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query("exec gps.dbo.v3_DeviceTypeTree_get");
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
      deviceTypeTreeForSingle: {
        name: "DeviceTypeTreeForSingle",
        type: new GraphQLList(DeviceTypeTreeForSingle),
        description: "A list of device types for adding single device",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query("exec gps.dbo.v3_DeviceTypeTree_IndividualAdd_get");
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
      servicePlans: {
        name: "ServicePlans",
        type: new GraphQLList(ServicePlans),
        description: "A list of active service plans",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query("exec gps.dbo.z_v3_graph_ServicePlan_get");
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
      firmwareCommands: {
        name: "Commands",
        description: "List of commands that are used for all xirgo firmwares",
        type: new GraphQLList(FirmwareCommand),
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool.request().query("exec Pathway.dbo.v3_Commands_get");
              });
            })
            .then(result => {
              return result.recordset;
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      firmwares: {
        name: "Firmwares",
        type: new GraphQLList(Firmware),
        description: "A list of xirgo firmwares",
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query(
                    "SELECT * from Pathway.dbo.Firmware WHERE ynActive = 1"
                  );
              });
            })
            .then(result => {
              return result.recordsets[0];
            })
            .catch(err => {
              console.log(err);
              throw err;
            });
        }
      },
      clients: {
        name: "Clients",
        type: new GraphQLList(Client),
        description: "A list of all clients",
        resolve: async function(source, args, context, info) {
          console.log(context.headers.token);
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query(
                    "SELECT numClientID, txtName, ynIsActive FROM dbo.Client"
                  );
              });
            })
            .then(result => {
              return result.recordsets[0];
            })
            .catch(err => {
              console.log(err);
              throw err;
            });
        }
      },
      features: {
        name: "Features",
        type: new GraphQLList(Feature),
        description: "A list of all features that a client can have",
        args: {
          clientID: {
            type: GraphQLInt,
            description: "Client identifier"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("numClientID", sql.Int, args.clientID)
                  .query("exec gps.dbo.v3_features_get @numClientID");
              });
            })
            .then(result => {
              return result.recordsets[0];
            })
            .catch(err => {
              console.log(err);
              throw err;
            });
        }
      },
      checkIMEI: {
        name: "checkIMEI",
        type: new GraphQLList(CheckIMEI),
        description:
          "Check to see if the IMEI that is being assigned to a client is in the system and not assigned to another client",
        args: {
          validateIMEI: {
            type: GraphQLString,
            description: "IMEI is the being sent to pass validity check"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("validateIMEI", sql.VarChar(30), args.validateIMEI)
                  .execute("gps.dbo.z_v3_graph_checkIMEI_get");
              });
            })
            .then(result => {
              return result.recordset;
            })
            .catch(err => {
              console.log(err);
              throw err;
            });
        }
      },
      inactiveDevicesLocating: {
        name: "InactiveDeviceLocating",
        type: new GraphQLList(InactiveDeviceLocating),
        description: "A list of all inactive devices that are locating",
        args: {
          date: {
            type: GraphQLString,
            description:
              "The day you want to check inactive devices that are locating"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("Date", args.date)
                  .input("Toggle", 1)
                  .execute("gps.dbo.pr_getInActiveDevicesStillLocating");
              });
            })
            .then(result => {
              console.log("inactive devices: ", result.recordsets[0]);
              return result.recordsets[0];
            })
            .catch(err => {
              console.log(err);
              throw err;
            });
        }
      },
      unassignedDevices: {
        name: "UnassignedDevices",
        type: new GraphQLList(Feature),
        description: "A list of all Unassigndevices",
        args: {
          IMEI: {
            type: GraphQLString
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("IMEI", sql.Int, args.clientID)
                  .query("exec gps.z_v3_graph_UnassignedDevices_get @IMEI");
              });
            })
            .then(result => {
              return result.recordsets[0];
            })
            .catch(err => {
              console.log(err);
              throw err;
            });
        }
      },
      client: {
        name: "Client",
        description: "A specific client",
        type: Client,
        args: {
          clientId: {
            name: "Client Identifier",
            description: "Client identifier",
            type: GraphQLInt
          }
        },
        resolve: async function(source, args, context, info) {
          return token
            .verifyPublicForOpen(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query(
                    "SELECT txtName, ynIsActive FROM dbo.Client WHERE numClientID = " +
                      args.clientId
                  );
              });
            })
            .then(result => {
              return result.recordset[0];
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      securityRoles: {
        name: "SecurityRoles",
        description: "Security roles that a user can have",
        type: new GraphQLList(SecurityRole),
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForOpen(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .query(
                    "SELECT numID AS numRoleID, txtRole, txtDescription FROM GPS.dbo.Role WHERE ynIsActive = 1"
                  );
              });
            })
            .then(result => {
              return result.recordset;
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    };
  } else {
    return {};
  }
}
