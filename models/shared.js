/*
   This is the reference table for the business to share there inventory with another business.

  Jeff Winkler  02/17/2018
*/
'use strict';

let Bookshelf = require('./database')

require('./locations')

const Shared = Bookshelf.Model.extend({
  tableName: 'Shared',
  hasTimestamps: true,

  locations: function() {
    return this.belongsTo('Locations')
  },

  Locations: function() {
    return this.hasMany('Locations')
  }

})

module.exports = Bookshelf.model('Shared', Shared)