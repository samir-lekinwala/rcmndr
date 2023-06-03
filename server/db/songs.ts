import knex from 'knex'
import { development } from './knexfile'
import { Song, SongDraft } from '../../types/Song'

const db = knex(development)

export async function getSongs(userId: string) {
  return (await db('songs')
    .where('user_id', userId)
    .select('id', 'title', 'artist', 'genre', 'link')) as Song[]
}

export async function insertSong(song: SongDraft) {
  await db('songs').insert(song)
}
