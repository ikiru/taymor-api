/*
  

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./invoices')
require('./costumes')

const RentalLists = Bookshelf.Model.extend({
  tableName: 'RentalLists',
  hasTimestamps: true,

  invoices: function() {
    return this.belongsTo('Invoices')
  },

  costumes: function() {
    return this.HasMany('Costumes')
  }

});

module.exports = Bookshelf.model('RentalLists', RentalLists)