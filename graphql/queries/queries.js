const pg = require("pg");
const {cpool} = require("../db");

const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString} = require("graphql");
const {} = require("./schema.js");
// import { } from "./enums";
// const { } = require("../enums/enums");

const QueryRoot = new GraphQLObjectType({
name: "Queries",
descrition: "All the queries for the schema",
fields: {
  Colors: {
    name: 'color',
    type: new GraphQLList(AlertReport),
    description: "",
    args: {
      clientId: {
        type: GraphQLString,
        description: 'Client identifier'
      }
    },
    resolve: function(source, args, context, info) {
      return cpool.then(pool => {
        return pool.request().input('clientId', args.clientId).execute('')
      }).then(result => {
        return result.recordsets[0]
      }).catch(err => {
        console.log(err)
      })
    }
  },

})
