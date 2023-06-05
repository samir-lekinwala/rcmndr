import request from 'superagent'

export async function getUser(auth0: string, token: string) {
  const res = await request
    .get(`/api/v1/users/${auth0}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body
}

export async function followUser(auth0: string, token: string) {
  const res = await request
    .post(`/api/v1/users/${auth0}/follow`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body
}
