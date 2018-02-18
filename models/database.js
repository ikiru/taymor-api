'use strict';

var knex  = require('knex')(require('./knexfile')[process.env.NODE_ENV]), // Selects the correct DB config object for the current environment
    bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry'); // Resolve circular dependencies with relations

module.exports = bookshelf;