import db from './connection'

export async function getNotifications(userId: string) {
  return db('notifications')
    .where('user_id', userId)
    .andWhere('is_read', false)
    .orderBy('timestamp', 'desc')
}
