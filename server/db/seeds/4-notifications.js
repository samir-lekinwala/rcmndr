exports.seed = async function (knex) {
  await knex('notifications').insert([
    {
      id: 0,
      user_id: 'auth0|648fd33d73375442becf2c84',
      message: 'abc is following you',
      friend_id: 'auth0|649025b96ef896963ad50b3f',
      timestamp: 1686199303816,
    },
    {
      id: 1,
      user_id: 'auth0|649024f773375442becf3102',
      message: 'abc is following you',
      friend_id: 'auth0|6490255b0c2119ef3db1e4aa',
      timestamp: 1686199303819,
    },
    {
      id: 2,
      user_id: 'auth0|649024f773375442becf3102',
      message: 'abc is following you',
      friend_id: 'auth0|648fd33d73375442becf2c84',
      timestamp: 1686199303821,
    },
    {
      id: 3,
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      message: 'abc is following you',
      friend_id: 'auth0|648fd33d73375442becf2c84',
      timestamp: 1686199303824,
    },
    {
      id: 4,
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      message: 'abc is following you',
      friend_id: 'auth0|649024f773375442becf3102',
      timestamp: 1686199303826,
    },
    {
      id: 5,
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      message: 'abc is following you',
      friend_id: 'auth0|649024f773375442becf3102',
      timestamp: 1686199303820,
    },
  ])
}
