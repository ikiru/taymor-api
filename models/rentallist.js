/*


  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./invoices')
require('./costumes')

const Invoice_Costumes = Bookshelf.Model.extend({
  tableName: 'Invoice_Costumes',
  hasTimestamps: true,

  invoices: function() {
    return this.belongsTo('Invoices')
  },

  costumes: function() {
    return this.HasMany('Costumes')
  }

});

module.exports = Bookshelf.model('Invoice_Costumes',Invoice_Costumes)
