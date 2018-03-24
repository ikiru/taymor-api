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
 Colors
} = require('./schema.js');
// const {

// } = require('../input');

// const {} = require('../enums/enums')
// const QuerySPCreator = require('../queryspccreator/querySCPCCreator');
// const {Code1000, Code4000} = require('../codes/codes');
