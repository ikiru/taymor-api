/*
  

  Jeff Winkler  02/17/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', function(table){
    table.increments()
    table.string('name').notNullable()
    table.integer('costumes_id').references('id').inTable('costumes')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  
};
