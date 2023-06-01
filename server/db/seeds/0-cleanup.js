exports.seed = async function(knex) {
  await knex('followers').del()
  await knex('users').del()
}
