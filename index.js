var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'betteroff.cxc47tthyp3m.us-east-2.rds.amazonaws.com',
    user     : 'betteroffcostumes',
    password : 'Pepper00~~!!',
    database : 'myapp_test',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users'
});
