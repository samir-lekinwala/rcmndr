import { faker } from '@faker-js/faker'

export async function seed(knex) {
  faker.seed(123)
  await insertMoreUsers(knex)
  await insertFollowers(knex)
  await insertSongs(knex)
  await insertNotifications(knex)
}

async function insertNotifications(knex) {
  const users = await knex('users').select('auth0_id', 'nickname')
  const count = await knex('notifications').count('id as count').first()
  const notifications = users
    .map((user, i) =>
      Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(
        (_, j) => ({
          id: i * users.length + j + 1 + count.count,
          user_id: user.auth0_id,
          message: `${user.nickname} is following you`,
          friend_id: faker.helpers.arrayElement(
            users.filter((u) => u !== user.auth0_id).map((u) => u.auth0_id)
          ),
          timestamp: faker.date.past(),
        })
      )
    )
    .flat()

  return knex('notifications').insert(notifications)
}

async function insertSongs(knex) {
  const userIds = await knex('users').pluck('auth0_id')
  const count = await knex('songs').count('id as count').first()
  const songs = userIds
    .map((userId, i) =>
      Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(
        (_, j) => ({
          id: i * userIds.length + j + 1 + count.count,
          user_id: userId,
          genre: faker.music.genre(),
          title: faker.music.songName(),
          artist: `${faker.word.adjective()} ${faker.word.noun()}`,
          link: faker.internet.url(),
        })
      )
    )
    .flat()

  return knex('songs').insert(songs)
}

async function insertFollowers(knex) {
  const userIds = await knex('users').pluck('auth0_id')
  const followingList = userIds.map((id) => ({
    user_id: id,
    following_id: faker.helpers.arrayElement(
      userIds.filter((userId) => userId !== id)
    ),
  }))

  return knex('following_list').insert(followingList)
}

function insertMoreUsers(knex) {
  const users = Array.from({ length: 5 }).map(() => ({
    auth0_id: faker.string.uuid(),
    email: faker.internet.exampleEmail(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    nickname: faker.internet.userName(),
    public: faker.datatype.boolean(),
  }))

  return knex('users').insert(users)
}