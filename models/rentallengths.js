/*
  

  Jeff Winkler  02/17/2018
*/
'use strict';

let Bookshelf = require('./database')

require('./locations')

const RentalLengths = Bookshelf.Model.extend({
  tableName: 'RentalLengths',
  hasTimestamps: true,

  locations: function() {
    return this.belongsTo('Locations')
  }

});

module.exports = Bookshelf.model('RentalLengths', RentalLengths)