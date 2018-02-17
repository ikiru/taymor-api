/*
  


  Jeff Winkler  02/16/2018
*/
'use strict';

let Bookshelf = require('./database');

require('./costumes')

var Colors = Bookshelf.Model.extend({
  tableName: 'colors',
  hasTimestamps: true,

  colors: function() {
    return this.hasMany('Colors');
  },

  costumes: function() {
    return this.hasMany('Costumes');
  }

});

module.exports = Bookshelf.model('Colors', Colors);