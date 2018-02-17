/*
  

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./invoices')
require('./rentertypes')

const Renters = Bookshelf.Model.extend({
  tableName: 'Renters',
  hasTimestamps: true,

  invoices: function() {
    return this.belongsTo('Invoices')
  },

  RenterTypes: function() {
    return this.HasMany('RenterTypes')
  }

});

module.exports = Bookshelf.model('Renters', Renters)