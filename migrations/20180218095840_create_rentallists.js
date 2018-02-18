/*
  

  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rentallists', function(table){
    table.increments()
    table.integer('invoices_id').references('id').inTable('invoices')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('rentallists')
};
