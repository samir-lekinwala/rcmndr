import { describe, it, beforeAll, beforeEach } from 'vitest'
import db from './connection'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('add song', () => {
  it('should add a new song', async () => {
    // const friends = await insertSong('auth0|6478f3fd75374ee3d7bc4d94')
    // expect(friends).toHaveLength(3)
    // expect(friends[0]).toHaveProperty('id')
    // expect(friends[0]).toHaveProperty('nickname')
    // expect(friends[0]).toHaveProperty('firstName')
  })
})
