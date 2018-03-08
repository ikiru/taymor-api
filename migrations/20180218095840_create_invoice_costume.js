/*


  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('invoice_costumes', function(table){
    table.increments()
    table.integer('invoice_id').references('id').inTable('invoices')
    table.integer('costume_id').references('id').inTable('costumes')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('invoice_costumes')
};
