/*
  

  Jeff Winkler  02/16/2018
*/
'use strict';

let Bookshelf = require('./database');

require('./business');
var BusinessType = Bookshelf.Model.extend({
  tableName: 'businesstype',
  hasTimestamps: true,

  business: function() {
    return this.hasMany('Business');
  }
});

module.exports = Bookshelf.model('BusinessType', BusinessType);