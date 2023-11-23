import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { getSongs } from './songs'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

it('should return all songs that aren`t banned', async () => {
  const songData = {
    id: 1,
    user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
    title: 'Hengelo',
    artist: 'Spring Offensive',
    genre: 'Indie Rock',
    link: 'https://open.spotify.com/track/4rqpg85XNApASjAvqjHlb1?si=2bdc00343f3e47f2',
    comments: null,
    is_banned: 0,
  }

  const allSongs = await getSongs()
  expect(allSongs).toHaveLength(25)
  expect(allSongs[0]).toMatchObject(songData)
})
