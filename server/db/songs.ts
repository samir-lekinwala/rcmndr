import db from './connection'

export async function getSongs() {
  return await db('songs')
    .select(
      'id',
      'user_id',
      'title',
      'artist',
      'genre',
      'link',
      'comments',
      'is_banned'
    )
    .where('is_banned', false)
}
