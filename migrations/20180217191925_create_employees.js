/*


  Jeff Winkler  02/17/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table){
    table.increments()
    table.string('firstname').notNullable()
    table.string('lastname').notNullable()
    table.integer('location_id').references('id').inTable('location')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('employees')
};
