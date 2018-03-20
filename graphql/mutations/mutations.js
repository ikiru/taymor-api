const pg = require("pg");
const {cpool} = require("../db");
const request = require('request-promise');

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull
} = require("graphql");
const {
  Device,
  ResponseCode,
  Contact,
  Feature,
  Firmware,
  Client
} = require('./schema.js');
const {
  UnassignedDeviceInput,
  ContactInput,
  DeviceInput,
  FeatureInput,
  FirmwareInput,
  CreateContactInput
} = require('../input/input');
const {CreateDevicesEnum} = require('../enums/enums')
const QuerySPCreator = require('../queryspccreator/querySCPCCreator');
const {Code1000, Code4000} = require('../codes/codes');
