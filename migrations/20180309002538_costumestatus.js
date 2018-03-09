/*


  Jeff Winkler  03/09/2018
*/

exports.up = function(knex, Promise) {
  return knex.schema.createTable('costumestatus', function(table){
    table.increments()
    table.string('name').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('costumestatus')

};
