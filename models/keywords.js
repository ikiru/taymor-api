/*
  

  Jeff Winkler  02/16/2018
*/

'use strict';

let Bookshelf = require('./database');

require('./costumes')

const KeyWords = Bookshelf.Model.extend({
  tableName: 'keywords',
  hasTimestamps: true,

  costumes: function() {
    return this.belongsTo('Costumes');
  }

});

module.exports = Bookshelf.model('KeyWords', KeyWords);