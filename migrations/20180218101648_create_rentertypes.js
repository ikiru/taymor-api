/*
  

  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rentertypes', function(table){
    table.increments()
    table.string('name').notNullable()
    table.integer('renters_id').references('id').inTable('renters')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('rentertypes')
};
