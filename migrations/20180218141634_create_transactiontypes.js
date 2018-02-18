/*
  this table list if it is a loan or rent or sale.

  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactiontypes', function(table){
    table.increments()
    table.string('name').notNullable()
    table.integer('invoice_id').references('id').inTable('invoice')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  
};
