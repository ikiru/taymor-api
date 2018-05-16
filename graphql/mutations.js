/*
  GraphQL mutations for the site

  Jeff Winkler  03/26/2018
*/
const mysql = require("mysql");
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
const {Colors} = require('./schema.js');
//const {} = require('./input');
//const {} = require('./enums');
//const QuerySPCreator = require('./querySCPCCreator');
const {Code1000, Code4000} = require('./codes');

const MutationRoot = new GraphQLObjectType({
  name: 'Mutations',
  description: 'All the mutations for the schema',
  fields: {
    addColor: {
      name: 'Add Color',
      description: 'Add a new color to the color pallets of the costumes',
      type: '',
      args: {
        name: {
          name: 'Name of the color',
          description: 'This is part of the admin dashboard so that the admin can quickly edit new color',
          type: GraphQLString
        }
      },
      resolve: function (source, args, context, info) {
        return cpool.then(pool => {
          let request = pool.request()

          let bit = 0

          if (args.isActive) 
            bit = 1

          return request.query("colors_post" + args.name);
        })
          .then(result => {
          return Code1000
        })
          .catch(err => {
            console.log(err)
            return Code4000
          })
      }
    }
  }
})