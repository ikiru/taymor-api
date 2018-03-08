/*
  This is a list of all the transactions.

  Jeff Winkler  02/16/2018
*/

'use strict';

let Bookshelf = require('./database');

require('./business')
require('./invoice_costumes')

const Invoices = Bookshelf.Model.extend({
  tableName: 'invoices',
  hasTimestamps: true,

  business: function() {
    return this.belongsTo('Business');
  },

  invoice_costumes: function() {
    return this.belongsTo('Invoice_Costumes');
  }

});

module.exports = Bookshelf.model('Invoices', Invoices);
