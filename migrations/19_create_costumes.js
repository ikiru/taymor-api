/*


  Jeff Winkler  02/17/2018
*/
exports.up = function(knex, Promise) {
  return knex.schema.createTable('costumes', function(table){
    table.increments()
    table.string('name').notNullable()
    table.string('qrcode').notNullable()
    table.text('description').notNullable()
    table.integer('rentalprice').notNullable()
    table.integer('primarycolors_id').references('id').inTable('colors')
    table.integer('secondarycolors_id').references('id').inTable('colors')
    table.integer('business_id').references('id').inTable('business')
    table.integer('keywords_id').references('id').inTable('keywords')
    table.integer('shows_id').references('id').inTable('shows')
    table.integer('sizes_id').references('id').inTable('sizes')
    table.integer('images_id').references('id').inTable('images')
    table.integer('timeperiods_id').references('id').inTable('timeperiods')
    table.integer('costumestatus_id').references('id').inTable('costumestatus')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('costumes')
};
