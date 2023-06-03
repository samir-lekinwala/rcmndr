import db from './connection'
import { Song, SongDraft } from '../../types/Song'

export async function getSongs(userId: string) {
  return (await db('songs')
    .where('user_id', userId)
    .select('id', 'title', 'artist', 'genre', 'link')) as Song[]
}

export async function insertSong(song: SongDraft) {
  await db('songs').insert(song)
}
