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
            description: 'Identier for the type of business',
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
          // TODO:
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
                      name: 'Rent costume online',
                      description: 'Business has the choice to allow costue to be rented online',
                      type:GraphQLBoolean,
                      resolve: function(source, args, context, info) {
                        return source.onlinerental;
                    },
                    rentalprice: {
                      name: 'Price',
                      description: 'The price to rent this costume',
                      type: GraphQLInt,
                      resolve: function(source, args, context, info) {
                        return source.rentalprice;
                    },
                    // TODO:
                    rentalist_id: {
                      name: 'Rental List',
                      description: 'Costumes that are group ',
                      type: GraphQLInt,
                      resolve: function(source, args, context, info) {
                        return source.renatlist_id;
                    },
                    // TODO:
                    business_id: {
                      name: 'Business id',
                      description: 'Busines that owns the costume',
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
            description: 'List of employees at each business by location',
            fields: {
              id: {
                name: 'Employees id',
                description: 'employee identifier',
                type: GraphQLInt,
                resolve: function(source, args, context, info) {
                  return source.name;
              },
              firstname: {
                name: 'Employees fname',
                description: 'Employees first name',
                type: GraphQLString,
                resolve: function(source, args, context, info) {
                  return source.firstname;
              },
              lastname: {
                name: 'Employees lname',
                description: 'Employees last name',
                type: GraphQLString,
                resolve: function(source, args, context, info) {
                  return source.lastname;
              },
              // TODO:
              location_id: {
                name: 'location',
                description: 'Location where the employes are associated with',
                type: '',
                resolve: function(source, args, context, info) {
                  return source.location_id;
              }
            }
          }
        }
      }
    }
  })

const images = new GraphQLObjectType ({
        name: 'images',
        description: 'images taken of the costume',
        fields: {
          id: {
            name: 'images id',
            description: 'image identifier',
            type: GraphQLInt,
            resolve: function(source, args, context, info) {
              return source.id;
          },
          name: {
            name: 'images name',
            description: 'name given to image based on time_date image was taken',
            type: GraphQLString,
            resolve: function(source, args, context, info) {
              return source.images;
          },
          // TODO:
          costumes_id: {
            name: 'costumes',
            description: 'costume image is associated with',
            type: '',
            resolve: function(source, args, context, info) {
              return source.costumes_id;
          }
        }
      }
    }
  }
})

const Invoices = new GraphQLObjectType ({
            name: 'Invoices',
            description:'Invoice of a sale or loan',
            fields: {
              id: {
                name: 'Invoice identifier',
                description: 'Identifier for the Invoice',
                type: GraphQLInt,
                resolve: function(source, args, context, info) {
                  return source.id;
              },
              // FIXME: Do I neeed this field?
              name: {
                name: 'Name of the invoice',
                description: 'Name assign to invoice',
                type: GraphQLString,
                resolve: function(source, args, context, info) {
                  return source.name;
              },
              datecheckedout: {
                name: 'Date costumes checkout',
                description: 'Date the items left the Location',
                type: GraphQLString,
                resolve: function(source, args, context, info) {
                  return source.datecheckedout;
              },
              datecheckedin: {
                name: 'Date costumes checkedout',
                description: 'Date and time the items were checked back in by scanner',
                type: GraphQLString,
                resolve: function(source, args, context, info) {
                  return source.datecheckedin;
              },
              // TODO:
              location_id: {
                name: 'Location invoice',
                description: 'Location of the business that made the invoice',
                type: '',
                resolve: function(source, args, context, info) {
                  return source.business_id;
              },
              // TODO:
              renters_id: {
                name: 'Renters',
                description: 'Renters who are renting the costumes',
                type:,
                resolve: function(source, args, context, info) {
                  return source.renters_id;
              }
              // FIXME: does this need to have the rental type?
              }
            }
          }
        }
      }
    }
  }
})

const Keywords = new GraphQLObjectType ({
    name: 'Keywords',
    description: 'Keywords to search for costumes by',
      fields: {
        id: {
          name:'keyword identifier',
          description: 'keyword identifier',
          type: GraphQLInt,
          resolve: function(source, args, context, info) {
            return source.id;
        },
        name: {
          name:'keyword',
          description: 'word given to use as a keyword',
          type: GraphQLString,
          resolve: function(source, args, context, info) {
            return source.name;
        },
        // TODO:
        costumes_id: {
          name:'costume',
          description: 'Costume key word is assigned to',
          type:'',
          resolve: function(source, args, context, info) {
            return source.costumes_id;
          }
        }
      }
    }
  }
})

const locations= new GraphQLObjectType ({
                    name: 'locations',
                    description: 'Locations of the businesses',
                    fields: {
                      id: {
                        name: 'location identifier',
                        description: 'location identifier ',
                        type: GraphQLInt,
                        resolve: function(source, args, context, info) {
                          return source.id;
                      },
                      name: {
                        name: '',
                        description: '',
                        type: GraphQLString,
                        resolve: function(source, args, context, info) {
                          return source.name;
                      },
                      address: {
                        name: '',
                        description: '',
                        type:GraphQLString,
                        resolve: function(source, args, context, info) {
                          return source.address;
                      },
                      city: {
                        name: '',
                        description: '',
                        type:GraphQLString,
                        resolve: function(source, args, context, info) {
                          return source.city;
                      },
                      state: {
                        name: '',
                        description: '',
                        type:GraphQLString,
                        resolve: function(source, args, context, info) {
                          return source.state;
                      },
                      zip: {
                        name: '',
                        description: '',
                        type:GraphQLString,
                        resolve: function(source, args, context, info) {
                          return source.zip;
                      },
                      phone: {
                        name: '',
                        description: '',
                        type:GraphQLString,
                        resolve: function(source, args, context, info) {
                          return source.phone;
                      },
                      email: {
                        name: '',
                        description: '',
                        type:GraphQLString,
                        resolve: function(source, args, context, info) {
                          return source.email;
                      },
                      taxrate: {
                        name: '',
                        description: '',
                        type:GraphQLFloat,
                        resolve: function(source, args, context, info) {
                          return source.taxrate;
                      },
                      // TODO:
                      business_id: {
                        name: '',
                        description: '',
                        type:'',
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
    }
  }
})

const LocationTypes = new GraphQLObjectType ({
  name: 'LocationTypes',
  fields: {
    id: {
      name: 'location Types identifier',
      description: 'location Types identifier',
      type: GraphQLInt,
      resolve: function(source, args, context, info) {
        return source.id;
    },
    name: {
      name: '',
      description: '',
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.name;
    },
    // TODO:
    locations_id: {
      name: '',
      description: '',
      type:'',
      resolve: function(source, args, context, info) {
        return source.locations_id;
    }
  }
})

const RentalLengths = new GraphQLObjectType ({
          name: 'RentalLengths',
          description: '',
          fields: {
            id: {
              name: 'Rental length identifier',
              description: 'Rental length identifier',
              type: GraphQLInt,
              resolve: function(source, args, context, info) {
                return source.id;
            },
            name: {
              name: '',
              description: '',
              type: GraphQLString,
              resolve: function(source, args, context, info) {
                return source.name;
            },
            days: {
              name: '',
              description: '',
              type: GraphQLString,
              resolve: function(source, args, context, info) {
                return source.days;
            },
            // TODO:
            locations_id: {
              name: '',
              description: '',
              type: '',
              resolve: function(source, args, context, info) {
                return source.locations_id;
            }
          }
        }
      }
    }
  }
})

  //  FIXME: check on this one, it is funky
const RentalLists = new GraphQLObjectType ({
      name: 'RentalLists',
      description: 'Rental List identifier',
      fields: {
        id: {
          name: '',
          description: '',
          type: GraphQLInt,
          resolve: function(source, args, context, info) {
            return source.id;
        },
        invoices_id: {
          name: '',
          description: '',
          type: GraphQLString,
          resolve: function(source, args, context, info) {
            return source.invoices_id;
        },
      }
    }
  }
})

const Renters = new GraphQLObjectType ({
                        name: 'Renters',
                        description: 'Renters who use the costumes',
                        fields: {
                          id: {
                            name: 'Renters identifier',
                            description: 'Renters identifier',
                            type: GraphQLInt,
                            resolve: function(source, args, context, info) {
                            return source.id;
                            },
                          name: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.name;
                            },
                          firstname: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.firstname;
                            },
                          lastname: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.lastname;
                            },
                          address: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.address;
                            },
                          city: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.city;
                            },
                          state: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.state;
                            },
                          zip: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.zip;
                            },
                          phone: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.phone;
                            },
                          email: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.email;
                            },
                          taxnumber: {
                            name: '',
                            description: '',
                            type: GraphQLString,
                            resolve: function(source, args, context, info) {
                              return source.taxnumber;
                            },
                          // TODO:
                          invoices_id: {
                            name: '',
                            description: '',
                            type:'',
                            resolve: function(source, args, context, info) {
                              return source.invoices_id;
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
        }
      }
    }
  }
})

const RenterTypes = new GraphQLObjectType ({
      name: 'RenterTypes',
      description: '',
      fields: {
        id: {
          name: 'Renter Types identifier',
          description: 'Renter Types identifier',
          type: GraphQLInt,
          resolve: function(source, args, context, info) {
            return source.id;
          },
        name: {
          name: '',
          description: '',
          type: GraphQLString,
          resolve: function(source, args, context, info) {
            return source.name;
          },
        // TODO:
        renters_id: {
          name: '',
          description: '',
          type: '',
          resolve: function(source, args, context, info) {
            return source.renters_id;
          }
        }
      }
    }
  }
})

const Roles = new GraphQLObjectType ({
      name: 'Roles',
      description: '',
      fields: {
        id: {
          name: 'Roles identifier',
          description: 'Roles identifier',
          type: GraphQLInt,
          resolve: function(source, args, context, info) {
            return source.id;
          },
        name: {
          name: '',
          description: '',
          type: GraphQLString,
          resolve: function(source, args, context, info) {
            return source.name;
          },
        employees_id: {
          name: '',
          description: '',
          type: '',
          resolve: function(source, args, context, info) {
            return source.employees_id;
          }
        }
      }
    }
  }
})

const SecurityRoles = new GraphQLObjectType ({
      name: 'SecurityRoles',
      description: '',
      fields: {
        id: {
          name: 'Security Roles identifier',
          description: 'Security Roles identifier',
          type: GraphQLInt,
          resolve: function(source, args, context, info) {
            return source.id;
        },
        name: {
          name: '',
          description: '',
          type: GraphQLString,
          resolve: function(source, args, context, info) {
            return source.name;
        },
        // TODO:
        employees_id: {
          name: '',
          description: '',
          type: '',
          resolve: function(source, args, context, info) {
            return source.employees_id;
          }
        }
      }
    }
  }
})

const Shares = new GraphQLObjectType ({
          name: 'Shares',
          description: '',
          fields: {
            id: {
              name: 'Shares identifier',
              description: 'Shares identifier',
              type: GraphQLInt,
              resolve: function(source, args, context, info) {
                return source.id;
            },
            name: {
              name: '',
              description: '',
              type: GraphQLString,
              resolve: function(source, args, context, info) {
                return source.name;
            },
            // TODO:
            location_id: {
              name: '',
              description: '',
              type: '',
              resolve: function(source, args, context, info) {
                return source.locations_id;
            },
            // TODO:
            locations_id: {
              name: '',
              description: '',
              type: '',
              resolve: function(source, args, context, info) {
                return source.locations_id;
            }
          }
        }
      }
    }
  }
})

      const Shows = new GraphQLObjectType ({
      name: 'Shows',
      description: '',
      fields: {
        id: {
          name: 'Shows identifier',
          description: 'Shows identifier',
          type: GraphQLInt,
          resolve: function(source, args, context, info) {
            return source.id;
          },
        name: {
          name: '',
          description: '',
          type: GraphQLString,
          resolve: function(source, args, context, info) {
            return source.name;
          },
        // TODO:
        costumes_id: {
          name: '',
          description: '',
          type: '',
          resolve: function(source, args, context, info) {
            return source.costumes_id;
          }
        }
      }
    }
  }
})

const sizes = new GraphQLObjectType ({
        name: 'sizes',
        description: '',
        fields: {
          id: {
            name: 'Sizes identifier',
            description: 'Sizes identifier',
            type: GraphQLInt,
            resolve: function(source, args, context, info) {
              return source.id;
            },
          sex: {
            name: '',
            description: '',
            type: GraphQLString,
            resolve: function(source, args, context, info) {
              return source.sex;
            },
          size: {
            name: '',
            description: '',
            type: GraphQLString,
            resolve: function(source, args, context, info) {
              return source.size;
            },
          // TODO:
          costumes_id: {
            name: '',
            description: '',
            type: GraphQLInt,
            resolve: function(source, args, context, info) {
              return source.costumes_id;
            }
          }
        }
      }
    }
  }
})

const TimePeriods = new GraphQLObjectType ({
      name: 'TimePeriods',
      description: '',
      fields: {
        id: {
          name: 'Time Periods identifier',
          description: 'Time Periods identifier',
          type: GraphQLInt,
          resolve: function(source, args, context, info) {
            return source.id;
          },
        name: {
          name: '',
          description: '',
          type: GraphQLString,
          resolve: function(source, args, context, info) {
            return source.name;
          },
        // TODO:
        costumes_id: {
          name: '',
          description: '',
          type:'',
          resolve: function(source, args, context, info) {
            return source.costumes_id;
          }
        }
      }
    }
  }
})

const TransactionTypes = new GraphQLObjectType ({
        name: 'TransactionTypes',
        description: '',
        fields: {
          id: {
            name: 'Transaction Type identifier',
            description: 'Transaction Type identifier',
            type: GraphQLInt,
            resolve: function(source, args, context, info) {
              return source.id;
            },
          name: {
            name: '',
            description: '',
            type: GraphQLString,
            resolve: function(source, args, context, info) {
              return source.name;
            },
          // TODO:
          invoice_id: {
            name: '',
            description: '',
            type: '',
          resolve: function(source, args, context, info) {
            return source.invoice_id;
         }
       }
      }
    }
  }
})
