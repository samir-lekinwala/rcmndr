import request from 'superagent'

export async function getNotifications(token: string) {
  const res = await request
    .get(`/api/v1/notifications`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body
}
