const sql = require("mssql");
const { cpool } = require("../db");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLList
} = require("graphql");