import db from './connection'
import { Song, SongDraft } from '../../types/Song'

export async function getSongs(userId: string) {
  return (await db('songs')
    .where('user_id', userId)
    .select('id', 'title', 'artist', 'genre', 'link', 'comments')) as Song[]
}
