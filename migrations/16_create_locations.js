/*


  Jeff Winkler  02/18/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', function(table){
    table.increments()
    table.string('name').notNullable()
    table.string('address').notNullable()
    table.string('city').notNullable()
    table.string('state').notNullable()
    table.string('zip').notNullable()
    table.string('phone').notNullable()
    table.string('email').notNullable()
    table.string('taxRate').notNullable()
    table.integer('business_id').references('id').inTable('business')
    table.integer('locatontypes_id').references('id').inTable('locationtypes')
    table.integer('rentallengths_id').references('id').inTable('rentallengths')
    table.integer('activelevel_id').references('id').inTable('activelevel')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('locations')
};
