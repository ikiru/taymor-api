/*


  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('renters', function(table){
    table.increments()
    table.string('name').notNullable()
    table.string('firstname').notNullable()
    table.string('lastname').notNullable()
    table.string('address').notNullable()
    table.string('city').notNullable()
    table.string('state').notNullable()
    table.string('zip').notNullable()
    table.string('phone').notNullable()
    table.string('email').notNullable()
    table.string('taxNumber').notNullable()
    // table.integer('invoices_id').references('id').inTable('invoices')
    table.integer('rentertypes_id').references('id').inTable('rentertypes')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('renters')
};
