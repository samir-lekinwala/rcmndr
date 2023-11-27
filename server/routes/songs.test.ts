import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/insertSong'
import { getMockToken } from './mockToken'

import { AddSongWithUserId } from '../../types/Song'

vi.mock('../db/insertSong')
vi.mock('../logger.ts')

describe('POST /api/v1/songs', () => {
  it('should return 201 when adding a new song', async () => {
    const fakeSong: AddSongWithUserId = {
      userId: '123',
      title: 'test-title',
      artist: 'test-artist',
      genre: 'test-genre',
      link: 'test-link',
    }

    vi.mocked(db.insertSong).mockResolvedValue()
    const response = await request(server)
      .post('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeSong)
    expect(response.status).toBe(201)
  })})

import { Song } from '../../types/Song'
import dotenv from 'dotenv'
import { getSongs } from '../db/songs'

dotenv.config()

vi.mock('../db/songs')
vi.mock('../logger.ts')

describe('GET /api/v1/songs', () => {
  it('should return 200 with a great song', async () => {
    const songData: Song[] = [
      {
        id: '1',
        title: 'Hengelo',
        artist: 'Spring Offensive',
        genre: 'Indie Rock',
        link: 'https://open.spotify.com/track/4rqpg85XNApASjAvqjHlb1?si=2bdc00343f3e47f2',
      },
    ]

    vi.mocked(getSongs).mockResolvedValue(songData)
    const response = await request(server)
      .get('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(songData)
  })

  it('should return 401 when no access token is passed', async () => {
    vi.mocked(getSongs).mockRejectedValue(new Error('test'))
    const response = await request(server).get('/api/v1/songs')
    expect(response.status).toBe(401)
  })

  it('should return 500 when getSongs fails', async () => {
    vi.mocked(getSongs).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .get('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'database error' })
  })
})