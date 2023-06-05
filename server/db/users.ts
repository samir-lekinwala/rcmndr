import db from './connection'
import { Friend } from '../../types/User'

export async function getFriends(userId: string) {
  return (await db('users')
    .select('id', 'nickname')
    .where('follower_id', userId)) as Friend[]
}
