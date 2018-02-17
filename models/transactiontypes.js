/*
  

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./invoices')

const TransActionTypes = Bookshelf.Model.extend({
  tableName: 'SecurityLevels',
  hasTimestamps: true,

  invoices: function() {
    return this.belongsTo('Invoices')
  }

})

module.exports = Bookshelf.model('TransActionTypes', TransActionTypes)