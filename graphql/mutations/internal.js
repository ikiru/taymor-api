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

import request from "request-promise";

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
  ResponseCode,
  Contact,
  Feature,
  Firmware,
  Client,
  Admin
} from "../types";
import {
  UnassignedDeviceInput,
  ContactInput,
  DeviceInput,
  FeatureInput,
  FirmwareInput,
  CreateContactInput,
  SingleDeviceInput,
  RequestInput,
  AdminInput
} from "../inputs";
import { CreateDevicesEnum } from "../enums";
import { DeviceFactory } from "../../devicefactory/devicefactory";
import QuerySPCreator from "../querySPCreator";
import { Code1000, Code4000 } from "../codes.js";

/**
 * @description
 *
 * @param {string} secret token
 */
export async function internal(headers) {
  let hasAccess = await token.verifySecretForInternal(headers.secret);

  console.log("has access", hasAccess);

  if (hasAccess) {
    return {
      updateClient: {
        name: "Update Client",
        description: "Updates client information",
        type: ResponseCode,
        args: {
          clientId: {
            name: "Client Identifier",
            description: "Client identifier",
            type: GraphQLInt
          },
          isActive: {
            name: "Is Active",
            description: "Is active",
            type: GraphQLBoolean
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                let request = pool.request();

                // if (args.isActive) request.input("isActive", sql.Bit, )
                let bit = 0;

                if (args.isActive) bit = 1;

                return request.query(
                  "UPDATE GPS.dbo.Client set ynIsActive = " +
                    bit +
                    " WHERE numClientID =" +
                    args.clientId
                );
              });
            })
            .then(result => {
              return Code1000;
            })
            .catch(err => {
              console.log(err);
              return Code4000;
            });
        }
      },

      createAdmin: {
        name: "creates Admin",
        description: "Adds a new admin User",
        type: ResponseCode,
        args: {
          name: {
            description: "name of new admin",
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
                  .input("name", sql.VarChar(50), args.name)
                  .execute("Ops.dbo.v3_createAdmin_post");
              });
            })
            .then(result => {
              return Code1000;
            })
            .catch(err => {
              console.log(err);

              return Code4000;
            });
        }
      },

      updateAdmins: {
        name: "toggles admin status",
        description: "controlls admin login changes",
        type: new GraphQLList(Admin),
        args: {
          admins: {
            name: "admins information",
            description: "admin status",
            type: new GraphQLList(AdminInput)
          }
        },

        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              const sp = "OPS.dbo.v3_Admins_post";
              const rejectKeys = [];
              const query = QuerySPCreator(sp, args.admins, rejectKeys);
              console.log(query);

              return cpool.then(pool => {
                return pool.request().query(query);
              });
            })
            .then(result => {
              let objects = [];
              for (let i = 0; i < result.recordsets.length; i++) {
                objects.push(result.recordsets[i][0]);
              }
              console.log(objects);

              return objects;
            })
            .catch(err => {
              console.log(err);
              return [];
            });
        }
      },

      createContact: {
        name: "Create Contact",
        description: "Creates a contact for a client",
        type: ResponseCode,
        args: {
          clientId: {
            name: "Client Identifier",
            description: "Client identifier",
            type: GraphQLInt
          },
          contact: {
            description: "Contact input object",
            type: CreateContactInput
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                return pool
                  .request()
                  .input("numClientID", sql.Int, args.clientId)
                  .input("FirstName", sql.VarChar(50), args.contact.firstName)
                  .input("LastName", sql.VarChar(50), args.contact.lastName)
                  .input("Email", sql.VarChar(150), args.contact.email)
                  .input(
                    "HomePhone",
                    sql.VarChar(15),
                    args.contact.daytimePhone
                  )
                  .input(
                    "MobilePhone",
                    sql.VarChar(15),
                    args.contact.mobilePhone
                  )
                  .input(
                    "MiddleInitial",
                    sql.Char(1),
                    args.contact.middleInitial
                  )
                  .input("Password", sql.VarChar(15), args.contact.password)
                  .input("numRole", sql.Int, args.contact.roleId)
                  .input(
                    "txtExt",
                    sql.VarChar(50),
                    args.contact.daytimeExtension
                  )
                  .execute("GPS.dbo.v3_CreateContact_post");
              });
            })
            .then(result => {
              return Code1000;
            })
            .catch(err => {
              console.log(err);
              return Code4000;
            });
        }
      },
      sendSMSMessage: {
        name: "Send SMS Message",
        description: "Sends SMS message via text / Twillio or ATT API",
        type: ResponseCode,
        args: {
          number: {
            description: "Can be either a phone number or a SIM card number",
            type: GraphQLString
          },
          body: {
            description: "The message for the device",
            type: GraphQLString
          },
          isATT: {
            description:
              "Is sim card AT&T? If it is, it will send message to their API",
            type: GraphQLBoolean
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              if (args.isATT) {
                /**
                 * For more information go to our Confluence dev page. Look up Send SMS via Jasper API or click the link:
                 * http://dev.rhinofleettracking.com:8290/display/DEV/Send+SMS+via+Jasper+API#SendSMSviaJasperAPI-CodeExample
                 */
                const username = "devuser";
                const key = "2fbfc77d-a4ee-4a3c-a47f-5c14ce5156cf";
                const url =
                  "https://api-iotdevice.att.com/rws/api/v1/devices/" +
                  args.number +
                  "/smsMessages";
                const options = {
                  url: url,
                  headers: {
                    Authorization:
                      "Basic " +
                      new Buffer(username + ":" + key).toString("base64")
                  },
                  body: {
                    messageText: args.body,
                    tpvp: 20
                  },
                  json: true
                };

                return request
                  .post(options)
                  .then(res => {
                    return Code1000;
                  })
                  .catch(err => {
                    console.log(err);
                    return Code4000;
                  });
              } else {
                return cpool
                  .then(pool => {
                    return pool
                      .request()
                      .input("ClientID", sql.Int, 1) // Always 1
                      .input("GroupID", sql.Int, 1) // Always 1
                      .input("OutCNUM", sql.VarChar(11), args.number)
                      .input("OutBody", sql.VarChar(1000), args.body)
                      .query(
                        "exec gps.dbo.v3_SMSmessage_post @ClientID, @GroupID, @OutCNUM, @OutBody"
                      );
                  })
                  .then(result => {
                    return Code1000;
                  })
                  .catch(err => {
                    console.log(err);
                    return Code4000;
                  });
              }
            })
            .catch(err => {
              throw err;
            });
        }
      },

      sendSMSToDevice: {
        name: "Send SMS Message",
        description: "Sends SMS message via text / Twillio or ATT API",
        type: ResponseCode,
        args: {
          request: {
            description:
              "Object with the information for each Command that that is requested to be sent",
            type: RequestInput
          }
        },

        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              const command = args.request.command;
              const extraParams = args.request.extraParams;

              var deviceObjPromise = cpool
                .then(pool => {
                  return pool
                    .request()
                    .input(
                      "productKey",
                      sql.VarChar(100),
                      args.request.productKey
                    )
                    .query(
                      "exec gps.dbo.v3_Devices_ProductKey_get @productKey"
                    );
                })
                .then(result => {
                  return result.recordset[0];
                })
                .catch(err => {
                  console.log(err);
                  return Code4000;
                });

              return deviceObjPromise.then(function(res) {
                var deviceObj = res;
                var deviceType = deviceObj.deviceType;
                var deviceFactory = new DeviceFactory();
                var msgBody = deviceFactory.getCommand(
                  deviceType,
                  command,
                  extraParams
                );

                if (deviceObj.provider.indexOf("AT&T") >= 0) {
                  /**
                   * For more information go to our Confluence dev page. Look up Send SMS via Jasper API or click the link:
                   * http://dev.rhinofleettracking.com:8290/display/DEV/Send+SMS+via+Jasper+API#SendSMSviaJasperAPI-CodeExample
                   */
                  const username = "devuser";
                  const key = "2fbfc77d-a4ee-4a3c-a47f-5c14ce5156cf";
                  const url =
                    "https://api-iotdevice.att.com/rws/api/v1/devices/" +
                    deviceObj.number +
                    "/smsMessages";
                  const options = {
                    url: url,
                    headers: {
                      Authorization:
                        "Basic " +
                        new Buffer(username + ":" + key).toString("base64")
                    },
                    body: {
                      messageText: msgBody,
                      tpvp: 20
                    },
                    json: true
                  };

                  return request
                    .post(options)
                    .then(res => {
                      return Code1000;
                    })
                    .catch(err => {
                      console.log(err);
                      return Code4000;
                    });
                } else {
                  return cpool
                    .then(pool => {
                      return pool
                        .request()
                        .input("ClientID", sql.Int, 1) // Always 1
                        .input("GroupID", sql.Int, 1) // Always 1
                        .input("OutCNUM", sql.VarChar(11), deviceObj.number)
                        .input("OutBody", sql.VarChar(1000), msgBody)
                        .query(
                          "exec gps.dbo.v3_SMSmessage_post @ClientID, @GroupID, @OutCNUM, @OutBody"
                        );
                    })
                    .then(result => {
                      return Code1000;
                    })
                    .catch(err => {
                      console.log(err);
                      return Code4000;
                    });
                }
              });
            })
            .catch(err => {
              throw err;
            });
        }
      },

      createFirmware: {
        name: "Create Firmware",
        description: "Creates xirgo firmware",
        type: ResponseCode,
        args: {
          firmware: {
            type: FirmwareInput,
            description: "New firmware"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool
                .then(pool => {
                  const exec = "exec Pathway.dbo.v3_Firmware_post";
                  const name = args.firmware.name;
                  let query = "";

                  for (let i = 0; i < args.firmware.messages.length; i++) {
                    const message = args.firmware.messages[i];
                    const routine = message.routine;
                    let commands = "";

                    for (let j = 0; j < message.commands.length; j++) {
                      commands =
                        commands + message.commands[j].toString() + ",";
                    }

                    query =
                      query +
                      " " +
                      exec +
                      " @txtFirmware = '" +
                      name +
                      "', @txtParseRoutine = '" +
                      routine +
                      "', @commands = '" +
                      commands +
                      "'";
                  }

                  return pool.request().query(query);
                })
                .then(result => {
                  return Code1000;
                });
            })
            .catch(err => {
              console.log(err);

              return Code4000;
            });
        }
      },
      updateFeatures: {
        name: "Update Features",
        type: ResponseCode,
        description: "Update a single feature or multiple feature",
        args: {
          clientId: {
            type: GraphQLInt,
            description: "Client's identifier"
          },
          features: {
            type: new GraphQLList(FeatureInput),
            description: "A list of feature that need to be updated"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool
                .then(pool => {
                  let query = "";

                  for (let i = 0; i < args.features.length; i++) {
                    const feature = args.features[i];

                    if (feature.isActive && !feature.featureId) {
                      query +=
                        " insert into gps.dbo.ClientFeature (numClientID, numFeatureID) values " +
                        "(" +
                        args.clientId +
                        ", " +
                        feature.nameId +
                        ")";
                    } else if (!feature.isActive && feature.featureId) {
                      query +=
                        " delete from gps.dbo.ClientFeature where numClientFeatureID = " +
                        feature.featureId;
                    }
                  }

                  return pool.request().query(query);
                })
                .then(result => {
                  return Code1000;
                });
            })
            .catch(err => {
              console.log(err);
              return Code4000;
            });
        }
      },
      unassignDevices: {
        name: "Unassign Devices",
        type: ResponseCode,
        description: "Unassign selected devices",
        args: {
          devices: {
            type: new GraphQLList(DeviceInput),
            description: "List of device identifiers"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool.then(pool => {
                let query = "";

                for (const device of args.devices) {
                  query +=
                    "DELETE FROM GPS.dbo.ClientToVehicle WHERE numVehicleDeviceID = " +
                    device.id;
                }

                const transaction = new sql.Transaction(pool);

                return transaction
                  .begin()
                  .then(result => {
                    return transaction.request().query(query);
                  })
                  .then(result => {
                    transaction.commit();

                    return Code1000;
                  })
                  .catch(err => {
                    console.log("error: ", err);

                    transaction.rollback();

                    return Code4000;
                  });
              });
            })
            .catch(err => {
              throw err;
            });
        }
      },
      createDevices: {
        name: "Create Devices",
        type: ResponseCode,
        description: "Upload a single device or multiple devices",
        args: {
          clientId: {
            type: GraphQLInt,
            description: "This should be one of the provisioning team accounts"
          },
          devices: {
            type: new GraphQLList(UnassignedDeviceInput),
            description: "A list of devices that need to be created"
          },
          device: {
            type: SingleDeviceInput,
            description: "A single device that need to be created"
          },
          type: {
            type: CreateDevicesEnum,
            description: "Device "
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              switch (args.type) {
                case "bulk":
                  let devices = args.devices;

                  devices.map(device => {
                    device.clientId = args.clientId;

                    return device;
                  });

                  devices = args.devices.filter(value => {
                    if (value.smsSerial === null || value.smsSerial === "") {
                    } else {
                      console.log("stuff", value);
                      return value;
                    }
                  });

                  var query = QuerySPCreator(
                    "GPS.dbo.v3_DeviceBulkAdd_post",
                    devices,
                    []
                  );

                  return cpool.then(pool => {
                    const transaction = new sql.Transaction(pool);

                    return transaction
                      .begin()
                      .then(result => {
                        return transaction.request().query(query);
                      })
                      .then(result => {
                        return transaction.commit().then(result => {
                          return Code1000;
                        });
                      })
                      .catch(err => {
                        console.log("error: ", err);

                        transaction.rollback();

                        return Code4000;
                      });
                  });
                  break;
                case "individual":
                  let singleDevice = args.device;
                  singleDevice.clientId = args.clientId;

                  let fakeArray = [];
                  fakeArray.push(args.device);

                  var query = QuerySPCreator(
                    "GPS.dbo.v3_DeviceIndividualAdd_post",
                    fakeArray,
                    []
                  );

                  return cpool.then(pool => {
                    const transaction = new sql.Transaction(pool);

                    return transaction
                      .begin()
                      .then(result => {
                        console.log(query);
                        return transaction.request().query(query);
                      })
                      .then(result => {
                        return transaction.commit().then(result => {
                          return Code1000;
                        });
                      })
                      .catch(err => {
                        console.log("error: ", err);

                        transaction.rollback();

                        return Code4000;
                      });
                  });
                  break;
              }
            })
            .catch(err => {
              throw err;
            });
        }
      },
      updateContacts: {
        name: "Update Contacts",
        type: new GraphQLList(Contact),
        description: "Update a single contact or multiple contacts",
        args: {
          contacts: {
            type: new GraphQLList(ContactInput),
            description: "A list of contacts that need to be updated"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              const sp = "gps.dbo.v3_Contact_post";
              const rejectKeys = ["roleName"];
              const query = QuerySPCreator(sp, args.contacts, rejectKeys);

              console.log(query);

              return cpool.then(pool => {
                return pool.request().query(query);
              });
            })
            .then(result => {
              let objects = [];
              for (let i = 0; i < result.recordsets.length; i++) {
                objects.push(result.recordsets[i][0]);
              }

              return objects;
            })
            .catch(err => {
              console.log(err);
              return [];
            });
        }
      },
      updateDevices: {
        name: "Update Devices",
        type: new GraphQLList(Device),
        description: "Update a single device or multiple devices",
        args: {
          devices: {
            type: new GraphQLList(DeviceInput),
            description: "A list of devices that need to be updated"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              const sp = "gps.dbo.v3_Device_post";
              const rejectKeys = ["client"];
              const query = QuerySPCreator(sp, args.devices, rejectKeys);

              console.log("query: ", query);

              return cpool.then(pool => {
                return pool.request().query(query);
              });
            })
            .then(result => {
              let objects = [];
              for (let i = 0; i < result.recordsets.length; i++) {
                objects.push(result.recordsets[i][0]);
              }
              return objects;
            })
            .catch(err => {
              console.log(err);
              return [];
            });
        }
      },

      assignDevices: {
        name: "Assign Devices",
        type: ResponseCode,
        description: "Assign selected devices to client",
        args: {
          numClientID: {
            type: GraphQLInt,
            description: "numCLientID"
          },
          numVehicleDeviceID: {
            type: new GraphQLList(GraphQLInt),
            description: "List of device identifiers"
          }
        },
        resolve: function(source, args, context, info) {
          return token
            .verifyPublicForInternal(context.headers.token)
            .then(result => {
              return cpool
                .then(pool => {
                  let query = "";

                  for (const numVehicleDeviceID of args.numVehicleDeviceID) {
                    query +=
                      "exec gps.dbo.z_v3_graph_assignDevice " +
                      numVehicleDeviceID +
                      ", " +
                      args.numClientID +
                      " ";
                  }

                  const transaction = new sql.Transaction(pool);

                  return transaction.begin();
                })
                .then(result => {
                  return transaction.request().query(query);
                })
                .then(result => {
                  transaction.commit();

                  return Code1000;
                })
                .catch(err => {
                  console.log("error: ", err);

                  transaction.rollback();

                  return Code4000;
                });
            });
        }
      }
    };
  } else {
    return {};
  }
}
