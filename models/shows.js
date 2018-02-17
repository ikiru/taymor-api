/*
  

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./constumes')

const Shows = Bookshelf.Model.extend({
  tableName: 'Shows',
  hasTimestamps: true,

  costumes: function() {
    return this.belongsTo('Costumes')
  }

})

module.exports = Bookshelf.model('Shows', Shows)