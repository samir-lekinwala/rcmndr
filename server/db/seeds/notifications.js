exports.seed = async function (knex) {
  const getFriends = async (userId) => {
    return await knex('following_list')
      .join('users', 'users.auth0_id', 'following_list.following_id')
      .select('users.auth0_id as id', 'nickname', 'first_name as firstName')
      .where('user_id', userId)
  }

  // get all users
  const users = await knex('users').select('auth0_id')
  let i = 0
  for (const { auth0_id } of users) {
    console.log(auth0_id)
    // get all friends for each user
    const friends = await getFriends(auth0_id)
    for (const { id } of friends) {
      // insert one notification for each friend
      await knex('notifications').insert([
        { id: i, user_id: auth0_id, friend_id: id, timestamp: Date.now() },
      ])
      i++
    }
  }
}
