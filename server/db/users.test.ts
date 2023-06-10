import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { searchFriends } from './users'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('searchFriends', () => {
  it('added friends should not be suggested', async () => {
    const friends = await searchFriends('auth0|6478f3fd75374ee3d7bc4d94', 'rem')
    expect(friends).toHaveLength(0)
  })

  it('non added friends should be suggested', async () => {
    const friends = await searchFriends('auth0|6478f3fd75374ee3d7bc4d94', 'boi')
    expect(friends).toHaveLength(1)
  })
})
