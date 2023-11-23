import { Song } from '../../types/Song'
import db from './connection'

export async function getSongs(auth0Id: string) {
  return (await db('songs')
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
    .where('user_id', auth0Id)
    .where('is_banned', false)) as Song[]
}
