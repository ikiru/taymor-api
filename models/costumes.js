/*


  Jeff Winkler  02/16/2018
*/
'use strict';

let Bookshelf = require('./database');

require('./invoice_costumes')
require('./business')
require('./colors')
require('./images')
require('./sizes')
require('./keywords')
require('./timeperiods')
require('./shows')

var Costumes = Bookshelf.Model.extend({
  tableName: 'costumes',
  hasTimestamps: true,

  invoice_costumes: function() {
    return this.belongsTo('Invoice_Costumes');
  },

  business: function() {
    return this.belongsTo('Business');
  },

  colors: function() {
    return this.hasMany('Colors');
  },

  images: function() {
    return this.hasMany('Images');
  },

  size: function() {
    return this.hasMany('Sizes');
  },

  keyWords: function() {
    return this.hasMany('KeyWords');
  },

  timePeriods: function() {
    return this.hasMany('TimePeriods');
  },

  Shows: function() {
    return this.hasMany('Shows');
  },

});

module.exports = Bookshelf.model('Costumes', Costumes);
