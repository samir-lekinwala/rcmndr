exports.seed = async function(knex) {
  await knex('followers').del()
  await knex('users').del()
  await knex('songs').del()
}
