exports.up = async function(knex) {
  await knex.schema.createTable('songs', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.id').notNullable()
    table.string('title').notNullable()
    table.string('artist').notNullable()
    table.string('genre').notNullable()
    table.string('link').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('songs')
}
