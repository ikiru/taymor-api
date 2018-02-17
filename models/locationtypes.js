/*
  

  Jeff Winkler  02/17/2018
*/
'use strict';

let Bookshelf = require('./database')

require('./locations')

const LocationType = Bookshelf.Model.extend({
  tableName: 'locationtype',
  hasTimestamps: true,

  locations: function() {
    return this.belongsTo('Locations')
  }

});

module.exports = Bookshelf.model('LocationTypes', LocationTypes)