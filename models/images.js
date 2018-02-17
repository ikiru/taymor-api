/*
  There can be multiple images per costume. 

  Jeff Winkler  02/16/2018
*/

'use strict';

let Bookshelf = require('./database');

require('./costumes')

const Images = Bookshelf.Model.extend({
  tableName: 'images',
  hasTimestamps: true,

  costumes: function() {
    return this.belongsTo('Costumes');
  }
});

module.exports = Bookshelf.model('Images', Images);