exports.up = async function (knex) {
  await knex.schema.createTable('followers', (table) => {
    // this is a composite primary key
    table.primary(['follower_id', 'following_id'])
    table.string('follower_id').references('users.auth0_id').notNullable()
    table.string('following_id').references('users.auth0_id').notNullable()
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('followers')
}
