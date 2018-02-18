/*
  this tables refers to the time period a costume can be rented.   It s referenced to the locations because each location could have a differnt time period.

  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rentallengths', function(table){
    table.increments()
    table.string('name').notNullable()
    table.integer('locations_id').references('id').inTable('locations')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('rentallength')
};
