/*
  

  Jeff Winkler  02/16/2018
*/
'use strict';

let Bookshelf = require('./database');

require('./business');
var BusinessTypes = Bookshelf.Model.extend({
  tableName: 'businesstypes',
  hasTimestamps: true,

  business: function() {
    return this.hasMany('Business');
  }
});

module.exports = Bookshelf.model('BusinessTypes', BusinessTypes);