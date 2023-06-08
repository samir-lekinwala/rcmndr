import db from './connection'
import { Friend } from '../../types/User'

export async function getFriends(userId: string) {
  return (await db('following_list')
    .join('users', 'users.auth0_id', 'following_list.following_id')
    .select('users.auth0_id as id', 'nickname', 'first_name as firstName')
    .where('user_id', userId)) as Friend[]
}

export async function searchFriends(userId: string, query: string) {
  const rawQuery = `
SELECT DISTINCT  uu.auth0_id, uu.first_name, uu.last_name, uu.nickname
FROM (
  SELECT following_id
  FROM following_list
  WHERE user_id = ?
) AS f
CROSS JOIN (
  SELECT DISTINCT auth0_id as user_id
  FROM users
  WHERE auth0_id <> ?
) AS u
LEFT JOIN following_list AS existing
  ON existing.user_id =  ? AND existing.following_id = u.user_id
RIGHT JOIN users as uu ON uu.auth0_id = existing.following_id 
RIGHT JOIN songs as s ON s.user_id = uu.auth0_id
WHERE existing.user_id IS NULL
AND uu.auth0_id <> ?
AND uu.public = true
AND (LOWER(uu.nickname) LIKE ?
OR LOWER(uu.first_name) LIKE ?
OR LOWER(uu.last_name) LIKE ?
OR LOWER(s.genre) LIKE ?)
`

  const newUsersToFollow = await db.raw(rawQuery, [
    userId,
    userId,
    userId,
    userId,
    `%${query}%`,
    `%${query}%`,
    `%${query}%`,
    `%${query}%`,
  ])

  return newUsersToFollow as Friend[]
}
