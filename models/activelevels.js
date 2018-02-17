/*
  ActiveLevel belongs to a business to determine if the business is still acive or there account has gone dorment.

  Jeff Winkler  02/16/2018
*/
'use strict';

let Bookshelf = require('./database');

require('./business')

const ActiveLevels = Bookshelf.Model.extend({
  tableName: 'activelevels',
  hasTimestamps: true,

  business: function() {
    return this.belongsTo('Business');
  }
});

module.exports = Bookshelf.model('ActiveLevels', ActiveLevels);