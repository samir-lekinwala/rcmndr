import request from 'superagent'

const baseUrl = '/api/v1/songs'

export async function getSongs() {
  const response = await request.get(baseUrl)
  console.log(response.body)
  return response.body
}

export async function addSong(id: number, token: string) {
  await request
    .post(`${baseUrl}`)
    .set('Authorization', `Bearer ${token}`)
    .send({ id })
}
