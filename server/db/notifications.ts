import db from './connection'

export async function getNotifications(userId: string) {
  return db('notifications')
    .join('users', 'notifications.friend_id', 'users.auth0_id')
    .join('songs', 'notifications.song_id', 'songs.id')
    .where('notifications.user_id', userId)
    .andWhere('is_read', false)
    .orderBy('timestamp', 'desc')
    .select(
      'notifications.id as notificationId',
      'notifications.timestamp as notificationTimestamp',
      'users.nickname',
      'songs.title as songTitle',
      'songs.genre as songGenre',
      'timestamp'
    )
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
