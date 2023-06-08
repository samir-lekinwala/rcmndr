exports.up = function (knex) {
  return knex.schema.createTable('notifications', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id')
    table.string('friend_id').references('users.auth0_id')
    table.string('song_id').references('songs.id')
    table.boolean('is_read').defaultTo(false) // automatically set to false
    table.integer('timestamp')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('notifications')
}
