exports.seed = async function (knex) {
  await knex('followers').insert([
    {
      follower_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      following_id: 'auth0|102',
    },
    {
      follower_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      following_id: 'auth0|104',
    },
    { follower_id: 'auth0|101', following_id: 'auth0|102' },
    { follower_id: 'auth0|101', following_id: 'auth0|103' },
    { follower_id: 'auth0|101', following_id: 'auth0|104' },
  ])
}
