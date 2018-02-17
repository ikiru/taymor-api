/*
  

  Jeff Winkler  02/17/2018
*/

'use strict';

let Bookshelf = require('./database')

require('./costumes')

const TimePeriods = Bookshelf.Model.extend({
  tableName: 'TimePeriods',
  hasTimestamps: true,

  costumes: function() {
    return this.belongsTo('Costumes')
  }

})

module.exports = Bookshelf.model('Times', SecurityLevels)