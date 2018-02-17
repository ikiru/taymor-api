/*
  

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./renters')


const RenterTypes = Bookshelf.Model.extend({
  tableName: 'RenterTypes',
  hasTimestamps: true,

  renters: function() {
    return this.belongsTo('Renters')
  }

});

module.exports = Bookshelf.model('RenterTypes', RenterTypes)