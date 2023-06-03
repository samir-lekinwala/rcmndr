import request from 'superagent'

const baseUrl = '/api/v1/songs'

export async function getSongs() {
  const response = await request.get(baseUrl)
  console.log(response.body)
  return response.body
}
