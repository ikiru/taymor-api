/*


  Jeff Winkler  02/17/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('invoices', function(table){
    table.increments()
    table.date('datecheckedout').notNullable()
    table.date('datecheckedin').notNullable()
    table.integer('locations_id').references('id').inTable('locations')
    table.integer('renters_id').references('id').inTable('renters')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('invoices')
};
