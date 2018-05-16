const sql = require("mssql");
const {cpool} = require("../db");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLList
} = require("graphql");

export const User = new GraphQLObjectType({
  name: 'User',
  description: 'Info about user that logged in',
  fields: {
    token: {
      name: 'Token',
      description: 'Public token',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.token
      }
    },
    resultCode: {
      name: 'Result Code',
      description: 'The result code',
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.resultCode
      }
    },
    description: {
      name: 'Description',
      description: 'Description of the result',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.description
      }
    },
    isSuperAdmin: {
      name: 'isSuperAdmin',
      description: 'If admin has super status',
      type: GraphQLBoolean,
      resolve: function ( source, args, context, info){
        return source.ynSuperAdmin
      }
    }
  }
})

export const Admin = new GraphQLObjectType({
  name: 'Admin',
  description: 'names, ids, status',
  fields: {
    id: {
      name: 'Identifier',
      description: 'Security role identifier',
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numAdminLoginID
      }
    },
    name: {
      name: 'Name',
      description: 'Name of admin',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtUsername
      }
    },
    password: {
      name: 'password',
      description: 'admin password value',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtPassword
      }
    },
    isActive: {
      name: 'isActive',
      description: 'if user is currently active or inactive',
      type: GraphQLBoolean,
      resolve: function ( source, args, context, info){
        return source.ynIsActive
      }
    },
    isSuperAdmin: {
      name: 'isSuperAdmin',
      description: 'if admin has super status',
      type: GraphQLBoolean,
      resolve: function ( source, args, context, info){
        return source.ynSuperAdmin
      }
    }
  }
})





export const Role = new GraphQLObjectType({
  name: 'Role',
  description: 'Security role for a contact / user',
  fields: {
    id: {
      name: 'Identifier',
      description: 'Security role identifier',
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numID
      }
    },
    name: {
      name: 'Name',
      description: 'Name of security role',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtRole
      }
    },
    description: {
      name: 'Description',
      description: 'Security role\'s description',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtDescription
      }
    }
  }
})

export const InactiveDeviceLocating = new GraphQLObjectType({
  name: 'InactiveDeviceLocating',
  description: 'The type for the inactive device locating report',
  fields: {
    client: {
      name: "Client",
      description: "Client name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtName
      }
    },
    alias: {
      name: "Alias",
      description: "Alias",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtalias
      }
    },
    productKey: {
      name: "Product Key",
      description: "Product key",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtProductKey
      }
    },
    imsi: {
      name: "IMSI",
      description: "IMSI",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtIMSI;
      }
    },
    phoneNumber: {
      name: "Phone Number",
      description: "Phone number associated with device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtSMSNumber;
      }
    },
    simSerial: {
      name: "SIM Serial Number",
      description: "Serial number of the SIM card",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtSerialNumber;
      }
    },
    simCardNumber: {
      name: "SIM Card Number",
      description: "Card number for SIM card. If device is AT&T, this is number to use if you want t" +
          "o contact the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtSimCardNumber;
      }
    },
    networkProvider: {
      name: "Network Provider",
      description: "Name of the network provider of the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtNetworkProvider;
      }
    },
    isClientActive: {
      name: "Is Client Active",
      description: "Is client active",
      type: GraphQLBoolean,
      resolve: function (source, args, context, info) {
        return source.ynClientActive;
      }
    },
    locateDate: {
      name: "Locate Date",
      description: "Last location date",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.dtLastLocate;
      }
    }
  }
})

export const ExcessiveExceptionDetail = new GraphQLObjectType({
  name: 'ExcessiveExceptionDetail',
  description: 'The type for the detail excessive exception',
  fields: {
    type: {
      name: "Client",
      description: "Client name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtException
      }
    },
    total: {
      name: "Alias",
      description: "Alias",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.totalException
      }
    }
  }
})

export const ExcessiveException = new GraphQLObjectType({
  name: 'ExcessiveException',
  description: 'The type for the excessive exception report',
  fields: {
    client: {
      name: "Client",
      description: "Client name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtClientName
      }
    },
    alias: {
      name: "Alias",
      description: "Alias",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtDeviceAlias
      }
    },
    productKey: {
      name: "Product Key",
      description: "Product key",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtProductKey
      }
    },
    amount: {
      name: "Amount",
      description: "Amount",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.totalExceptions
      }
    },
    deviceId: {
      name: 'Device Identifier',
      description: 'The max device identifier. Used to query the details of the exceptions',
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numVehicleDeviceID
      }
    }
  }
})

export const AlertReport = new GraphQLObjectType({
  name: "AlertReport",
  description: "The type for login report",
  fields: {
    client: {
      name: "Client",
      description: "Client name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtName
      }
    },
    sent: {
      name: "Sent",
      description: "Sent",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.dtSent
      }
    },
    alias: {
      name: "Alias",
      description: "Alias",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtAlias
      }
    },
    productKey: {
      name: "Product Key",
      description: "Product key",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtProductkey
      }
    },
    address: {
      name: "Address",
      description: "Address",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtMessageAddress
      }
    },
    subject: {
      name: "Subject",
      description: "Subject",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtSubject
      }
    },
    message: {
      name: "Message",
      description: "Message",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtMessage
      }
    },
    exception: {
      name: "Exception",
      description: "Exception",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.numExceptionID
      }
    }
  }
})

export const LoginReport = new GraphQLObjectType({
  name: "LoginReport",
  description: "The type for login report",
  fields: {
    client: {
      name: "Client",
      description: "Client name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtName
      }
    },
    year: {
      name: "Year",
      description: "Year",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.year
      }
    },
    week: {
      name: "Week",
      description: "The week in the year",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.week
      }
    },
    sessions: {
      name: "Sessions",
      description: "Number of sessions in the login week",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.sessions
      }
    }
  }
})

export const SecurityRole = new GraphQLObjectType({
  name: "SecurityRole",
  description: "Security role a user can have",
  fields: {
    id: {
      name: "Identifier",
      description: "Role identifier",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numRoleID
      }
    },
    name: {
      name: "Name",
      description: "Name of role",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtRole
      }
    }
  }
})

export const Feature = new GraphQLObjectType({
  name: "Feature",
  description: "Features",
  fields: {
    featureId: {
      name: "Identifier",
      description: "Feature's identifier that's connected to client",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numClientFeatureID;
      }
    },
    nameId: {
      name: "Name Identifier",
      description: "Feature's identifier",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numFeatureID;
      }
    },
    name: {
      name: "Name",
      description: "Feature's name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtFeatureName;
      }
    },
    isActive: {
      name: "Is Active",
      description: "Is active",
      type: GraphQLBoolean,
      resolve: function (source, args, context, info) {
        return source.ynIsActive;
      }
    }
  }
});

export const Client = new GraphQLObjectType({
  name: "Client",
  description: "Client",
  fields: {
    id: {
      name: "Identifier",
      description: "Contact's identifier",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numClientID;
      }
    },
    name: {
      name: "Name",
      description: "Client's name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtName;
      }
    },
    isActive: {
      name: "Is Active",
      description: "Supspended or not",
      type: GraphQLBoolean,
      resolve: function (source, args, context, info) {
        return source.ynIsActive;
      }
    }
  }
});

export const DeviceType = new GraphQLObjectType({
  name: 'DeviceType',
  description: 'Device type',
  fields: {
    id: {
      name: 'Identifier',
      description: 'Identifier',
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numDeviceTypeID
      }
    },
    type: {
      name: 'Type',
      description: 'Type',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtDeviceType
      }
    }
  }
})

export const Network = new GraphQLObjectType({
  name: 'Network',
  description: 'Network',
  fields: {
    id: {
      name: 'Identifier',
      description: 'Identifier',
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numDeviceNetworkID
      }
    },
    type: {
      name: 'Type',
      description: 'Type',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtNetwork
      }
    }
  }
})

export const NetworkProvider = new GraphQLObjectType({
  name: 'NetworkProvider',
  description: 'Network provider',
  fields: {
    id: {
      name: 'Identifier',
      description: 'Identifier',
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numDeviceNetworkProviderID
      }
    },
    name: {
      name: 'Name',
      description: 'Name',
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtProviderName
      }
    }
  }
})

export const FirmwareCommand = new GraphQLObjectType({
  name: "FirmwareCommand",
  description: "Xirgo firmware command",
  fields: {
    code: {
      name: "Code",
      description: "Code number of the command",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numCommand
      }
    }
  }
})

export const Firmware = new GraphQLObjectType({
  name: "Firmware",
  description: "Xirgo firmware",
  fields: {
    id: {
      name: 'Identifier',
      description: 'Identifier',
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numFirmwareID;
      }
    },
    name: {
      name: "Name",
      description: "Name of xirgo firmeware. This is unique",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtFirmware;
      }
    }
  }
});

export const ResponseCode = new GraphQLObjectType({
  name: "ResponseCode",
  description: "A code for the response",
  fields: {
    code: {
      name: "Code",
      description: "Code number",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.code;
      }
    },
    description: {
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.description;
      }
    }
  }
});

export const Locate = new GraphQLObjectType({
  name: "Locate",
  description: "Locate of device",
  fields: {
    id: {
      name: "Identifier",
      description: "Locate's identifier",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numLocationID;
      }
    },
    latitude: {
      name: "Latitude",
      description: "Locate's latitude",
      type: GraphQLFloat,
      resolve: function (source, args, context, info) {
        return source.numLatitude;
      }
    },
    longitude: {
      name: "Longitude",
      description: "Locate's longitude",
      type: GraphQLFloat,
      resolve: function (source, args, context, info) {
        return source.numLongitude;
      }
    },
    speed: {
      name: "Speed",
      description: "Locate's speed in mph, this is a float",
      type: GraphQLFloat,
      resolve: function (source, args, context, info) {
        return source.numSpeed;
      }
    },
    heading: {
      name: "Heading Direction",
      description: "Locate's heading direction, from 0 to 360",
      type: GraphQLFloat,
      resolve: function (source, args, context, info) {
        return source.numHeading;
      }
    },
    date: {
      name: "Location Date",
      description: "Locate's Date, in MM/DD/YYYY",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.dtDate;
      }
    },
    time: {
      name: "Location Time",
      description: "Locate's Time, in hh:mm:ss AM/PM",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.dtTime;
      }
    }
  }
});

export const Address = new GraphQLObjectType({
  name: "Address",
  description: "Address of a locate",
  fields: {
    id: {
      name: "Identifier",
      description: "Address's identifier",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numAddressID;
      }
    },
    full: {
      name: "Locate Full Address",
      description: "The full address including street address, city, state and zip. If it is null, i" +
          "t will show as Address Pending",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtFullAddress;
      }
    },
    street_address: {
      name: "Locate Street Address",
      description: "The street address. If it is null, it will show as Address Pending",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtStreetAddress;
      }
    },
    city: {
      name: "Locate City",
      description: "The address city. If it is null, it will show as empty string",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtCity;
      }
    },
    state: {
      name: "Locate State",
      description: "The address state. If it is null, it will show as empty string",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtState;
      }
    },
    zip: {
      name: "Locate zip",
      description: "The address zip. If it is null, it will show as empty string",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtZip;
      }
    }
  }
});

export const Contact = new GraphQLObjectType({
  name: "Contact",
  description: "Contact of a client",
  fields: {
    id: {
      name: "Identifier",
      description: "Contact's identifier",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numContactID;
      }
    },
    firstName: {
      name: "First Name",
      description: "First name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtFirstName;
      }
    },
    lastName: {
      name: "Last Name",
      description: "Last name",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtLastName;
      }
    },
    email: {
      name: "Email",
      description: "Email",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtEmail;
      }
    },
    homePhone: {
      name: "Home Phone",
      description: "Home phone number",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtHomePhone;
      }
    },
    mobilePhone: {
      name: "Mobile Phone",
      description: "Mobile phone number",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtMobilePhone;
      }
    },
    password: {
      name: "Password",
      description: "Password for their login",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtPassword;
      }
    },
    role: {
      name: "Role",
      description: "Security role",
      type: Role,
      resolve: function(source, args, context, info) {
        return cpool.then( pool => {
          return pool.request().query("SELECT * from GPS.dbo.Role where numID = " + source.numRoleID)
        })
        .then( result => {
          return result.recordset[0]
        })
        .catch( err => {
          console.log('error: ', err)
        })
      }
    },
    isActive: {
      name: "Is Active",
      description: "Is contact active",
      type: GraphQLBoolean,
      resolve: function (source, args, context, info) {
        return source.ynIsActive;
      }
    }
  }
});

export const Driver = new GraphQLObjectType({
  name: "Driver", description: "A driver from the client",
  /*
    args: {
        startTime: {
            name: 'Start Time',
            description: '',
            type: GraphQLString
        },
        endTime: {
            name: 'End Time',
            description: '',
            type: GraphQLString
        }
    },
    */
  fields: {
    id: {
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numDriverID;
      }
    },
    name: {
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtFirstName + " " + source.txtLastName;
      }
    },
    startTime: {
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.dtStartDate + " " + source.dtStartTime;
      }
    },
    endTime: {
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.dtEndDate + " " + source.dtEndTime;
      }
    }
  }
});

export const DeviceTypeTree = new GraphQLObjectType({
  name: "DeviceTypeTree",
  description: "All the meta data for devices",
  fields: {
    vendorId: {
      name: "Vendor Identifier",
      description: "Vendor identifier",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numVendorID;
      }
    },
    vendorName: {
      name: "Vendor name",
      description: "Name of vendor",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtVendorName;
      }
    },
    unitId: {
      name: "Unit Identifier",
      description: "Name of vendor",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numUnitID;
      }
    },
    unitName: {
      name: "Unit Name",
      description: "Name of unit",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtUnitName;
      }
    },
    deviceTypeId: {
      name: "Device Type Identifier",
      description: "Device type identifier",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numDeviceTypeID;
      }
    },
    deviceType: {
      name: "Device Type",
      description: "Name of device type",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtDeviceType;
      }
    },
    doesAllowDynGeo: {
      name: "Does Allow Dynamic GeoFeaturence",
      description: "Does it allow dynamic geofence",
      type: GraphQLBoolean,
      resolve: function (source, args, context, info) {
        return source.ynAllowDynGeo;
      }
    }
  }
});

export const DeviceTypeTreeForSingle = new GraphQLObjectType({
  name: "DeviceTypeTreeForSingle",
  description: "All the meta data for adding single devices",
  fields: {
    vendorId: {
      name: "Vendor Identifier",
      description: "Vendor identifier",
      type: GraphQLInt,
      resolve: function(source, args, context, info) {
        return source.numVendorID;
      }
    },
    vendorName: {
      name: "Vendor name",
      description: "Name of vendor",
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.txtVendorName;
      }
    },
    unitId: {
      name: "Unit Identifier",
      description: "Name of vendor",
      type: GraphQLInt,
      resolve: function(source, args, context, info) {
        return source.numUnitID;
      }
    },
    unitName: {
      name: "Unit Name",
      description: "Name of unit",
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.txtUnitName;
      }
    },
    deviceTypeId: {
      name: "Device Type Identifier",
      description: "Device type identifier",
      type: GraphQLInt,
      resolve: function(source, args, context, info) {
        return source.numDeviceTypeID;
      }
    },
    deviceType: {
      name: "Device Type",
      description: "Name of device type",
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.txtDeviceType;
      }
    },
    doesAllowDynGeo: {
      name: "Does Allow Dynamic GeoFeaturence",
      description: "Does it allow dynamic geofence",
      type: GraphQLBoolean,
      resolve: function(source, args, context, info) {
        return source.ynAllowDynGeo;
      }
    }
  }
});

export const ServicePlans = new GraphQLObjectType({
  name: "ServicePlans",
  description: "The list of active service plans",
  fields: {
    servicePlanId: {
      name: "Service Plan Identifier",
      description: "Service Plan Identifier",
      type: GraphQLInt,
      resolve: function(source, args, context, info) {
        return source.numServicePlanID;
      }
    },
    servicePlanName: {
      name: "Service Plan name",
      description: "Service Plan name",
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.txtServicePlanName;
      }
    }
  }
});

export const Device = new GraphQLObjectType({
  name: "Device",
  description: "Xirgo, Calamp, GenX, etc. This has list of info about a device.",
  fields: {
    id: {
      name: "Vehicle Device Identifier",
      description: "Identifier for device",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        // these parameters aren't always needed. if the object from the db matches the
        // types field names, then you don't have to add a resolver. just put one
        // parameter to obtain the object. console.log('source', source); // this is the
        // object. use this to get the values from it's keys. console.log(args); //
        // arguements from the parent node console.log(context); // gives a huge list of
        // info from http call. advance users only console.log(info); // gives a list
        // of info from graphql. this is used if you want to know something about the
        // schema
        return source.numVehicleDeviceID;
      }
    },
    client: {
      name: "Client name",
      description: "The client attached to the device",
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.txtName;
      }
    },
    productKey: {
      name: "Product Key",
      description: "The key attached to the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtProductKey;
      }
    },
    alias: {
      name: "Alias",
      description: "The alias for the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtAlias;
      }
    },
    imei: {
      name: "IMEI",
      description: "IMEI of the device. This can be also MEID but only in mutations. In the mutation" +
          " it will get converted to IMEI. Therefore, all queries return the IMEI format",
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.txtIMEI === undefined ? source.IMEI : source.txtIMEI;
      }
    },
    subFleet:{
      name: "subFleet",
      description: "subFleet Name of the device. gps.dbo.SubFleet, gps.dbo.SubFLeetDevice",
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.txtSubFleetName;
      }
    },
    typeId: {
      name: "Device Type Identifier",
      description: "Identifier for device type",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numDeviceTypeID;
      }
    },
    type: {
      name: "Device Type",
      description: "The name of device type",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtDeviceType;
      }
    },
    phoneNumber: {
      name: "Phone Number",
      description: "Phone number associated with device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtSMSPhoneNumber;
      }
    },
    simSerial: {
      name: "SIM Serial Number",
      description: "Serial number of the SIM card",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtSMSDeviceSN;
      }
    },
    simCardNumber: {
      name: "SIM Card Number",
      description: "Card number for SIM card. If device is AT&T, this is number to use if you want t" +
          "o contact the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtSIMCardSN;
      }
    },
    firmware: {
      name: "Firmware",
      description: "Name of the firmware of the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtFirmware;
      }
    },
    firmwareId: {
      name: "Firmware Identifier",
      description: "Firmware identifier of the device",
      type: GraphQLString,
      resolve: function(source, args, context, info) {
        return source.numFirmwareID;
      }
    },
    networkId: {
      name: "Network Identifier",
      description: "Network identifier of the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.numDeviceNetworkID;
      }
    },
    network: {
      name: "Network",
      description: "Name of the network of the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtNetwork;
      }
    },
    networkProviderId: {
      name: "Network Provider Identifier",
      description: "Network provider identifier of the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.numDeviceNetworkProviderID;
      }
    },
    networkProvider: {
      name: "Network Provider",
      description: "Name of the network provider of the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtProviderName;
      }
    },
    warrantyDate: {
      name: "Warranty Date",
      description: "Expiration date of the warranty for the device",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source
          .dtWarranty
          .toString();
      }
    },
    warranty: {
      name: "Warranty Color",
      description: "green = still in warranty. yellow = almost expired. red = expired",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.txtWarranty;
      }
    },
    isActive: {
      name: "Is Active",
      description: "Is device active",
      type: GraphQLBoolean,
      resolve: function (source, args, context, info) {
        return source.ynIsActive;
      }
    },
    locate: {
      name: "Locate",
      description: "Devices last location",
      type: Locate,
      resolve: function (source, args, context, info) {
        return cpool.then(pool => {
          return pool
            .request()
            .input("numClientID", sql.Int, source.clientID)
            .input("numLocationID", sql.Int, source.numLocationID)
            .input("token", sql.VarChar(50), context.headers.token)
            .execute("gps.dbo.z_v3_graph_Locate_get");
        }).then(result => {
          return result.recordset[0];
        }).catch(err => {
          console.log(err);
        });
      }
    },
    address: {
      name: "Address",
      description: "The locate address",
      type: Address,
      resolve: function (source, args, context, info) {
        return cpool.then(pool => {
          return pool
            .request()
            .input("numClientID", sql.Int, source.clientID)
            .input("numLocationID", sql.Int, source.numLocationID)
            .input("token", sql.VarChar(50), context.headers.token)
            .execute("gps.dbo.z_v3_graph_Address_get");
        }).then(result => {
          return result.recordset[0];
        }).catch(err => {
          console.log(err);
        });
      }
    },
    driver: {
      name: "Driver",
      description: "Which driver is assigned to this device at the time the locate happens",
      type: Driver,
      resolve: function (source, args, context, info) {
        return cpool.then(pool => {
          return pool
            .request()
            .input("numClientID", sql.Int, source.clientID)
            .input("numLocationID", sql.Int, source.numLocationID)
            .input("token", sql.VarChar(50), context.headers.token)
            .execute("gps.dbo.z_v3_graph_Driver_get");
        }).then(result => {
          return result.recordset[0];
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
});

export const CheckIMEI = new GraphQLObjectType({
  name: "checkIMEI",
  description: "checkIMEI",
  fields: {
    resultCode: {
      name: "resultCode",
      description: "Result Code will give us the validation status of the submitted IMEI",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.resultCode
      }
    },
    description: {
      name: "description",
      description: "Descriptiion will give a result message back",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.description
      }
    },
    IMEI: {
      name: "IMEI",
      description: "Returned IMEI number from the validation check",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.IMEI
      }
    },
    numVehicleDeviceID: {
      name: "numVehicleDeviceID",
      description: "numVehicleDeviceID will give us the device ID number to use for the mutation",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numVehicleDeviceID
      }
    },
    numClientID: {
      name: "numClientID",
      description: "Client ID number of clients who have been assign to device",
      type: GraphQLInt,
      resolve: function (source, args, context, info) {
        return source.numClientID
      }
    },
    clientName: {
      name: "clientName",
      description: "List of client assign to this IMEI",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.clientName
      }
    },
    ifAtOffice: {
      name: "ifAtOffice",
      description: "Tells us if the device was located at the office",
      type: GraphQLBoolean,
      resolve: function (source, args, context, info) {
        return source.ifAtOffice
      }
    },
    dtDate: {
      name: "dtDate",
      description: "Date the device was last located",
      type: GraphQLString,
      resolve: function (source, args, context, info) {
        return source.dtDate
      }
    }
  }
});
