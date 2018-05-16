/**
 * open.js
 *
 * Created by:    Brian Canlas
 * Date Created:  04/27/18
 * Description:   These are the PUBLIC mutations used by the admin, web, and other clients' applications.
 *                It consists of a big function that, first, checks if the JWT token is valid to have access to these mutations.
 *                Then, it shows or doesn't show the mutations.
 *
 * Copyright: Rhino Fleet Tracking 2018
 */
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
 export const open = async (headers) => {
  let hasAccess = await token.verifySecretForOpen(headers.secret)

  if (hasAccess) {
    return {
      test: {
        name: 'test',
        type: GraphQLString
      }
    }
  }
  else {
    return {
      noAccess: {
        name: 'NoAccess',
        description: 'You do not have access',
        type: GraphQLString,
        resolve: function(source, args, context, info) {
          return "You do not have access"
        }
      }
    }
  }
}


