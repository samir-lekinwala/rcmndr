exports.seed = async function (knex) {
  await knex('notifications').insert([
    {
      id: 0,
      user_id: 'auth0|231',
      song_id: 7,
      friend_id: 'auth0|233',
      timestamp: 1686199303816,
    },
    {
      id: 1,
      user_id: 'auth0|321',
      song_id: 1,
      friend_id: 'auth0|132',
      timestamp: 1686199303819,
    },
    {
      id: 2,
      user_id: 'auth0|321',
      song_id: 5,
      friend_id: 'auth0|231',
      timestamp: 1686199303821,
    },
    {
      id: 3,
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      song_id: 5,
      friend_id: 'auth0|231',
      timestamp: 1686199303824,
    },
    {
      id: 4,
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      song_id: 9,
      friend_id: 'auth0|321',
      timestamp: 1686199303826,
    },
    {
      id: 5,
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      song_id: 10,
      friend_id: 'auth0|321',
      timestamp: 1686199303820,
    },
  ])
}
