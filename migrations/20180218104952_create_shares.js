/*
  this table refers to when a location wishes to share costumes inventory with another location

  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shares', function(table){
    table.increments()
    table.integer('location_id').references('id').inTable('location')
    table.integer('location_id').references('id').inTable('location')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('shares')
};
