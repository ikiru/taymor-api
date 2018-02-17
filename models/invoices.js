/*
  This is a list of all the transactions.

  Jeff Winkler  02/16/2018
*/

'use strict';

let Bookshelf = require('./database');

require('./business')
require('./rentallist')

const Invoices = Bookshelf.Model.extend({
  tableName: 'invoices',
  hasTimestamps: true,

  business: function() {
    return this.belongsTo('Business');
  },

  rentallist: function() {
    return this.belongsTo('RentalList');
  }

});

module.exports = Bookshelf.model('Invoices', Invoices);