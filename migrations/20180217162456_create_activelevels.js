/*
  1/N relationship with location 

  Jeff Winkler  02/17/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activelevel', function(table){
    table.increments()
    table.string('name').notNullable()
    table.integer('locations_id').references('id').inTable('locations')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())  
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('activelevel')
};
