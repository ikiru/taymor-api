/*
  Roles belongs to   

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./employees')

const Roles = Bookshelf.Model.extend({
  tableName: 'Roles',
  hasTimestamps: true,

  employees: function() {
    return this.belongsTo('Employees')
  }

});

module.exports = Bookshelf.model('Roles', Roles)