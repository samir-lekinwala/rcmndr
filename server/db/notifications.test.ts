import { beforeAll, beforeEach, describe, it, expect } from 'vitest'

import db from './connection'
import { getNotifications } from './notifications'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('notifications', () => {
  it('returns notifications for a user', async () => {
    const userId = 'auth0|6478f3fd75374ee3d7bc4d94'
    const notifications = await getNotifications(userId)
    expect(notifications).toHaveLength(2)
  })

  it('returns notifications in reverse chronological order', async () => {
    const userId = 'auth0|6478f3fd75374ee3d7bc4d94'
    const notifications = await getNotifications(userId)
    console.log(notifications)
  })
})
