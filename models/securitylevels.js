/*
  security level will only apply to employees.

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./employees')
require('./renters')

const SecurityLevels = Bookshelf.Model.extend({
  tableName: 'SecurityLevels',
  hasTimestamps: true,

  employees: function() {
    return this.belongsTo('Employees')
  },

  renters: function() {
    return this.belongsTo('Renters')
  }

})

module.exports = Bookshelf.model('SecurityLevels', SecurityLevels)