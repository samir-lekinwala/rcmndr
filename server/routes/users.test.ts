import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/users'
import { getMockToken } from './mockToken'

vi.mock('../db/users')

describe('GET /api/v1/users/friends', () => {
  it('should return 200', async () => {
    const fakeFriends = [
      {
        id: '123',
        nickname: 'banana',
        firstName: 'Banana',
      },
    ]

    vi.mocked(db.getFriends).mockResolvedValue(fakeFriends)
    const response = await request(server)
      .get('/api/v1/users/friends')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeFriends)
  })
})
