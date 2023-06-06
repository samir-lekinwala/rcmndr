exports.seed = async function (knex) {
  await knex('following_list').insert([
    {
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      following_id: 'auth0|231',
    },
    {
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      following_id: 'auth0|321',
    },
    { user_id: 'auth0|321', following_id: 'auth0|132' },
    { user_id: 'auth0|321', following_id: 'auth0|231' },
    { user_id: 'auth0|231', following_id: 'auth0|233' },
  ])
}
