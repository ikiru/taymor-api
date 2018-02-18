/*
  table migrations :
  knex migrate:make create_activelevels_and_business_and_businesstypes_and_colors_and_costumes_and_employees_and_images_and_invoices_and_keywords_and_locations_and_locationtypes_and_rentallengths_and_rentallists_and_renters_and_rentertypes_and_roles_and_securitylevels_and_shared_and_shows_and_sizes_and_timeperiods_and_transactiontypes

  Jeff Winkler  02/17/2018
*/
const enviroment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[enviroment]
const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
  tableName: 'users'
});
module.exports = require('knex')(config)
