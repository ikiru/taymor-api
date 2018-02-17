/*
  employees are related to the business through locations.

  Jeff Winkler  02/16/2018
*/
'use strict';

let Bookshelf = require('./database')

require('./locations')
require('./roles')
require('./securitylevels')

const Employees = Bookshelf.Model.extend({
  tableName: 'employees',
  hasTimestamps: true,

  locations: function() {
    return this.belongsTo('Locations')
  },

  roles: function() {
    return this.belongsTo('Roles')
  },

  securityLevels: function() {
    return this.belongsTo('SecurityLevels')
  }

});

module.exports = Bookshelf.model('Employees', Employees)