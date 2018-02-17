/*
  

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./costumes')

const Sizes = Bookshelf.Model.extend({
  tableName: 'Sizes',
  hasTimestamps: true,

  costumes: function() {
    return this.belongsTo('Costumes')
  }

})

module.exports = Bookshelf.model('Sizes', Sizes)