import db from './connection'

export async function getSongs() {
  return await db('songs').select()
}
