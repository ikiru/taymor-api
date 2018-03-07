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
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    locations_id: { type: }
  }
})

const Business = new GraphQLObjectType ({
 name: 'Business',
 fields: {
   id: { type: GraphQLInt},
   name: { type: GraphQLString},
   invoice_id: { type:}
  }
 })

const BusinessTypes = new GraphQLObjectType ({
name: 'BusinessTypes',
fields: {
  id: { type: GraphQLInt},
  name: { type: GraphQLString},
  business_id: { type: }
  }
})

const Colors = new GraphQLObjectType ({
  name: 'Colors',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    costume_id: { type: }
  }
  })

const Costumes = new GraphQLObjectType ({
name: 'Costumes',
fields: {
  id: { type: GraphQLInt},
  name: { type: GraphQLString},
  qrcode: {  type: GraphQLString},
  description: { type: GraphQLString },
  onlinerental: { type:GraphQLBoolean},
  rentalprice: { type: GraphQLInt },
  renatlist_id: { type: GraphQLInt },
  business_id: {  type: GraphQLInt }
  }
})

const Employees = new GraphQLObjectType ({
  name: 'Employees',
  fields: {
    id: { type: GraphQLInt},
    firstname: { type: GraphQLString},
    lastname: { type: GraphQLString},
    business_id: {  type:}
  }
  })

const images = new GraphQLObjectType ({
  name: 'images',
  fields: {
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    costume_id: { type: }
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
