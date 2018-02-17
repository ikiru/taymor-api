/*
  

  Jeff Winkler  02/16/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./locationtype')

const Locations = Bookshelf.Model.extend({
  tableName: 'locations',
  hasTimestamps: true,

  locationtype: function() {
    return this.belongsTo('LocationType')
  }

});

module.exports = Bookshelf.model('Locations', Locations)