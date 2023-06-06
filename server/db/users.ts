import db from './connection'
import { Friend } from '../../types/User'

export async function getFriends(userId: string) {
  return (await db('followers')
    .join('users', 'users.auth0_id', 'followers.following_id')
    .select('users.auth0_id', 'nickname', 'first_name as firstName')
    .where('follower_id', userId)) as Friend[]
}
