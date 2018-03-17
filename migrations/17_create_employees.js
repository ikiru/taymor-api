/*


  Jeff Winkler  02/17/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table){
    table.increments()
    table.string('firstname').notNullable()
    table.string('lastname').notNullable()
    table.integer('locations_id').references('id').inTable('locations')
    table.integer('securitylevels_id').references('id').inTable('securitylevels')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('employees')
};
