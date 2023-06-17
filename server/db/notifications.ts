import db from './connection'
import { Notification } from '../../types/Notifications'

export async function getNotifications(userId: string) {
  return (await db('notifications')
    .join('users', 'notifications.friend_id', 'users.auth0_id')
    .where('notifications.user_id', userId)
    .andWhere('is_read', false)
    .orderBy('timestamp', 'desc')
    .select(
      'notifications.id as notificationId',
      'notifications.timestamp as notificationTimestamp',
      'notifications.message',
      'users.nickname'
    )) as Notification[]
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
