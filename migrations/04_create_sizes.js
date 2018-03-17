/*


  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sizes', function(table){
    table.increments()
    table.string('sex').notNullable()
    table.string('size').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('sizes')
};
