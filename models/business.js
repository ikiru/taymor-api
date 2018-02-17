/*
  

  Jeff Winkler  02/16/2018
*/
'use strict';

let Bookshelf = require('./database');

require('./activelevel')
require('./locations')
require('./invoices')
require('./businesstype')
require('./rentallength')

const Business = Bookshelf.Model.extend({
  tableName: 'business',
  hasTimestamps: true,

  activelevels: function() {
    return this.hasMany('ActiveLevels');
  },

  locations: function() {
    return this.hasMany('Locations');
  },

  invoices: function() {
    return this.hasMany('Invoice');
  },

  businesstypes: function() {
    return this.hasMany('BusinessType');
  },

  rentallength: function() {
    return this.hasMany('RentalLength');
  },


});

module.exports = Bookshelf.model('Business', Business);