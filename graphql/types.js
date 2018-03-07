/*


  Jeff Winkler  03/06/2018
*/


const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLList
} = require("graphql");

const ActiveLevel = new GraphQLObjectType ({
      name: 'Active level',
      description: 'Active Level of an business',
      fields: {
        id: {
          name: 'Identifier',
          description: 'Active level identifier',
          type: GraphQLInt,
          resolve: function(source, args, context, info) {
            return source.id;
          }
        },
        name: {
          name: 'Business activity level',
          description: 'Determines if the business is still active or has left our service',
          type: GraphQLString,
          resolve: function(source, args, context, info) {
            return source.name;
        },
        // TODO:
        locations_id: {
          name: 'Locations activity level',
          description: 'Location associated with the business activity level',
          type: '',
          resolve: function(source, args, context, info) {
            return source.location_id;
        }
      }
    }
  }
})

const Business = new GraphQLObjectType ({
          name: 'Business',
          description: 'The Business providing costumes for rental',
          fields: {
            id: {
              name: 'Business id',
              description: 'Business identifier',
              type: GraphQLInt,
              resolve: function(source, args, context, info) {
                return source.id;
            },
            name: {
              name: 'Business Name',
              description: 'Name of the business that are renting costumes',
              type: GraphQLString,
              resolve: function(source, args, context, info) {
                return source.name;
            },
            // TODO:
            invoice_id: {
              name: 'Invoice identifier',
              description: 'Invoices associated to this business',
              type: '',
              resolve: function(source, args, context, info) {
                return source.invoice_id;
            }
          }
        }
      }
    }
 })

const BusinessTypes = new GraphQLObjectType ({
        name: 'BusinessTypes',
        description: 'One word description of the type of business',
        fields: {
          id: {
            name: 'Business Type identifier',
            decription: 'Identier for the type of business',
            type: GraphQLInt,
            resolve: function(source, args, context, info) {
              return source.id;
          },
          name: {
            name: 'Name of the type of business',
            description: 'Assigns a business type to the busiess such a High School or Professional shop',
            type: GraphQLString,
            resolve: function(source, args, context, info) {
              return source.name;
          },
          business_id: {
            name: '',
            description: '',
            type: '',
            resolve: function(source, args, context, info) {
              return source.business_id;
          }
        }
      }
    }
  }
})

const Colors = new GraphQLObjectType ({
        name: 'Colors',
        description: 'tThe primary and seconday color of the costume',
        fields: {
          id: {
            name: 'Identifier for the color',
            description: 'id number for the color',
            type: GraphQLInt,
            resolve: function(source, args, context, info) {
              return source.id;
          },
          name: {
            name: 'Name of the color',
            description: 'Name of the primary and secondary color for the costmes',
            type: GraphQLString,
            resolve: function(source, args, context, info) {
              return source.name;
          }
        }
      }
    }
  })

const Costumes = new GraphQLObjectType ({
                  name: 'Costumes',
                  description: 'Costumes for rent',
                  fields: {
                    id: {
                      name: 'Costume identifier',
                      description: 'Costume id number',
                      type: GraphQLInt,
                      resolve: function(source, args, context, info) {
                        return source.id;
                    },
                    name: {
                      name: 'Costume name',
                      description: 'Name applied to the type of cstume',
                      type: GraphQLString,
                      resolve: function(source, args, context, info) {
                        return source.name;
                    },
                    qrcode: {
                      name: 'QRcode',
                      description: 'QR code assigned to the costume',
                      type: GraphQLString,
                      resolve: function(source, args, context, info) {
                        return source.qrcode;
                    },
                    description: {
                      name: 'description of the costume',
                      description: 'An indepth description of the costume',
                      type: GraphQLString,
                      resolve: function(source, args, context, info) {
                        return source.description;
                    },
                    onlinerental: {
                      name: '',
                      description: '',
                      type:GraphQLBoolean,
                      resolve: function(source, args, context, info) {
                        return source.onlinerental;
                    },
                    rentalprice: {
                      name: '',
                      description: '',
                      type: GraphQLInt,
                      resolve: function(source, args, context, info) {
                        return source.rentalprice;
                    },
                    renatlist_id: {
                      name: '',
                      description: '',
                      type: GraphQLInt,
                      resolve: function(source, args, context, info) {
                        return source.renatlist_id;
                    },
                    business_id: {
                      name: '',
                      description: '',
                      type: GraphQLInt,
                      resolve: function(source, args, context, info) {
                        return source.business_id;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})

const Employees = new GraphQLObjectType ({
            name: 'Employees',
            description: '',
            fields: {
              id: {
                name: 'Employees',
                description: '',
                type: GraphQLInt,
                resolve: function(source, args, context, info) {
                  return source.name;
              },
              firstname: {
                name: 'Employees',
                description: '',
                type: GraphQLString,
                resolve: function(source, args, context, info) {
                  return source.firstname;
              },
              lastname: {
                name: 'Employees',
                description: '',
                type: GraphQLString,
                resolve: function(source, args, context, info) {
                  return source.lastname;
              },
              business_id: {
                name: 'Employees',
                description: '',
                type: '',
                resolve: function(source, args, context, info) {
                  return source.business_id;
              }
            }
          }
        }
      }
    }
  })

const images = new GraphQLObjectType ({
        name: 'images',
        description: '',
        fields: {
          id: {
            name: 'images',
            description: '',
            type: GraphQLInt,
            resolve: function(source, args, context, info) {
              return source.id;
          },
          name: {
            name: 'images',
            description: '',
            type: GraphQLString,
            resolve: function(source, args, context, info) {
              return source.images;
          },
          costume_id: {
            name: 'images',
            description: '',
            type: '',
            resolve: function(source, args, context, info) {
              return source.costume_id;
          }
        }
      }
    }
  }
})

const Invoices = new GraphQLObjectType ({
  name: 'Invoices',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    datecheckedout: { type: GraphQLString},
    datecheckedin: { type: GraphQLString},
    business_id: { type: },
    renters_id: { type:}
  }
  })

const Keywords = new GraphQLObjectType ({
  name: 'Keywords',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    costumes_id: { type:}
    }
  })

const locations= new GraphQLObjectType ({
  name: 'locations',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    address: { type:GraphQLString},
    city: { type:GraphQLString },
    state: {  type:GraphQLString },
    zip: { type:GraphQLString },
    phone: { type:GraphQLString },
    email: { type:GraphQLString },
    taxrate: { type:GraphQLFloat },
    business_id: { type:}
  }
})

const LocationTypes = new GraphQLObjectType ({
  name: 'LocationTypes',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    locations_id: { type:}
  }
})

const RentalLengths = new GraphQLObjectType ({
  name: 'RentalLengths',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    days: { type: GraphQLString},
    locations_id: { type: }
  }
})

  //  TODO: check on this one it is funky
const RentalLists = new GraphQLObjectType ({
name: 'RentalLists',
fields: {
  id: { type: GraphQLInt},
  invoices_id: { type: GraphQLString},

  }
})

const Renters = new GraphQLObjectType ({
 name: 'Renters',
 fields: {
   id: { type: GraphQLInt},
   name: { type: GraphQLString},
   firstname: { type: GraphQLString},
   lastname: { type: GraphQLString},
   address: { type: GraphQLString},
   city: { type: GraphQLString},
   state: { type: GraphQLString},
   zip: { type: GraphQLString},
   phone: { type: GraphQLString},
   email: { type: GraphQLString},
   taxnumber: { type: GraphQLString},
   invoices_id: { type:}
  }
 })

const RenterTypes = new GraphQLObjectType ({
 name: 'RenterTypes',
 fields: {
   id: { type: GraphQLInt},
   name: { type: GraphQLString},
   renters_id: { type: }
  }
 })

const Roles = new GraphQLObjectType ({
 name: 'Roles',
 fields: {
   id: { type: GraphQLInt},
   name: { type: GraphQLString},
   employees: { type: }
  }
 })

const SecurityRoles = new GraphQLObjectType ({
name: 'SecurityRoles',
fields: {
  id: { type: GraphQLInt},
  name: { type: GraphQLString},
  employees_id: { type }
  }
})

const Shares = new GraphQLObjectType ({
  name: 'Shares',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    location_id: { type: },
    location_id: { type: }
  }
  })

const Shows = new GraphQLObjectType ({
name: 'Shows',
fields: {
  id: { type: GraphQLInt},
  name: { type: GraphQLString},
  costumes_id: { type: }
  }
})

const sizes = new GraphQLObjectType ({
  name: 'sizes',
  fields: {
    id: { type: GraphQLInt },
    sex: { type: GraphQLString },
    size: { type: GraphQLString },
    costume_id: { type: GraphQLInt },
  }
  })

const TimePeriods = new GraphQLObjectType ({
  name: 'TimePeriods',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    costumes_id: { type: }
  }
 })

const TransActionTypes = new GraphQLObjectType ({
 name: 'TransActionTypes',
 fields: {
   id: { type: GraphQLInt},
   name: { type: GraphQLString},
   invoice_id: { type: }
  }
 })
