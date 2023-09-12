export async function seed(knex) {
  await knex('notifications').del()
  await knex('songs').del()
  await knex('following_list').del()
  await knex('users').del()
}
