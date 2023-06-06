import db from './connection'
import { Friend } from '../../types/User'

export async function getFriends(userId: string) {
  return (await db('following_list')
    .join('users', 'users.auth0_id', 'following_list.following_id')
    .select('users.auth0_id', 'nickname', 'first_name as firstName')
    .where('user_id', userId)) as Friend[]
}

export async function searchFriends(userId: string, query: string) {
  // search for non-friends users with the query,
  // query could be genre, nickname, first name or last name
  // the query should be case insensitive and it should match any part of the string
  // and it should only include users that are not already friends with
  // and it should not include the current user
  // and it should include public users

  const searchQuery = query
  const currentUserId = userId

  return (await db('users')
    .distinct('auth0_id', 'nickname', 'first_name as firstName')
    .leftJoin('following_list', 'users.auth0_id', 'following_list.following_id')
    .leftJoin('songs', 'users.auth0_id', 'songs.user_id')
    .select('auth0_id', 'nickname', 'first_name as firstName')
    .where(function () {
      this.where(
        db.raw('LOWER(nickname) LIKE ?', [`%${searchQuery.toLowerCase()}%`])
      )
        .orWhere(
          db.raw('LOWER(first_name) LIKE ?', [`%${searchQuery.toLowerCase()}%`])
        )
        .orWhere(
          db.raw('LOWER(last_name) LIKE ?', [`%${searchQuery.toLowerCase()}%`])
        )
        .orWhere(
          db.raw('LOWER(genre) LIKE ?', [`%${searchQuery.toLowerCase()}%`])
        )
    })
    .andWhereNot('following_list.user_id', currentUserId) // not friends
    .where('auth0_id', '!=', currentUserId) // not current user
    .where('public', 1)) as Friend[] // public users
}
