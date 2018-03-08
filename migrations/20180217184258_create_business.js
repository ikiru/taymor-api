/*
  If a high school is specified her the name of the business will be the school district and the high school name will be location.

  Jeff Winkler  02/17/2018
*/

exports.up = function(knex, Promise) {
  return knex.schema.createTable('business', function(table){
    table.increments()
    table.string('name').notNullable()
    table.integer('businesstype_id').references('id').inTable('businesstype')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.droptable('business')
};
