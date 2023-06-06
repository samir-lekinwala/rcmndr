exports.seed = async function (knex) {
  await knex('songs').del()
  await knex('following_list').del()
  await knex('users').del()
}
