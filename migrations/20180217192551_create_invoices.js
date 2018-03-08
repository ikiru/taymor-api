/*


  Jeff Winkler  02/17/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('invoices', function(table){
    table.increments()
    table.dateonly('datecheckedout').notNullable()
    table.dateonly('datecheckedin').notNullable()
    table.integer('location_id').references('id').inTable('location')
    table.integer('renters_id').references('id').inTable('renters')
    table.integer('invoice_costumes_id').references('id').inTable('invoice_costumes')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('invoices')
};
