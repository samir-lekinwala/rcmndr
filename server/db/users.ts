import db from './connection'
import { Friend } from '../../types/User'

export async function getFriends(userId: string) {
  return (await db('following_list')
    .join('users', 'users.auth0_id', 'followers.following_id')
    .select('users.auth0_id', 'nickname', 'first_name as firstName')
    .where('user_id', userId)) as Friend[]
}
