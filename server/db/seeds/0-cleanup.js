exports.seed = async function(knex) {
  await knex('songs').del()
  await knex('followers').del()
  await knex('users').del()
}
