import request from 'superagent'

import { AddSongDraft, Song } from '../../types/Song'

const baseUrl = '/api/v1/songs'

export async function getSongs(token: string) {
  const response = await request
    .get(baseUrl)
    .set('Authorization', `Bearer ${token}`)
  return response.body as Song[]
}

export async function addSong(form: AddSongDraft, token: string) {
  console.log('success')
  await request
    .post('/api/v1/songs')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(form)
  console.log('success')
}
