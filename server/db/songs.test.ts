import knex from 'knex'
import { beforeAll, beforeEach, describe, it, expect, afterAll } from 'vitest'

import testDb from './connection'
import * as db from './songs'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb('users').insert([
    {
      auth0_id: '1',
      first_name: 'firstName1',
      last_name: 'lastName1',
      nickname: 'nickname1',
    },
    {
      auth0_id: '2',
      first_name: 'firstName2',
      last_name: 'lastName2',
      nickname: 'nickname2',
    },
  ])

  await testDb('songs').insert([
    {
      id: 1,
      user_id: '1',
      title: 'Song 1',
      artist: 'Artist 1',
      genre: 'Genre 1',
      link: 'link1',
    },
    {
      id: 2,
      user_id: '1',
      title: 'Song 2',
      artist: 'Artist 2',
      genre: 'Genre 2',
      link: 'link2',
    },
    {
      id: 3,
      user_id: '2',
      title: 'Song 3',
      artist: 'Artist 3',
      genre: 'Genre 3',
      link: 'link3',
    },
  ])
})

afterAll(async () => {
  await testDb.destroy()
})

