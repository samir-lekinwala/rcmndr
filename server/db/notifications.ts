import db from './connection'

export async function getNotifications(userId: string) {
  return db('notifications')
    .where('user_id', userId)
    .andWhere('is_read', false)
    .orderBy('timestamp', 'desc')
}

export async function setNotifications(
  userId: string,
  notificationIds: string[]
) {
  return db('notifications')
    .whereIn('id', notificationIds)
    .andWhere('user_id', userId)
    .update({ is_read: true })
}
