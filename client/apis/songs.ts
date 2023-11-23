import request from 'superagent'




import {
  AddSongDraft,
  AddSongWithUserId,
  Song,
  SongDraft,
} from '../../types/Song'


const baseUrl = '/api/v1/songs'

export async function getSongs(token: string) {
  const response = await request
    .get(baseUrl)
    .set('Authorization', `Bearer ${token}`)
  return response.body as Song[]
}

export async function addSong(
  form: SongDraft | AddSongDraft | AddSongWithUserId,
  token: string
) {
  await request
    .post(baseUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(form)
}
