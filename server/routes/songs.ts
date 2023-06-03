import express from 'express'
import { validateAccessToken } from '../auth0'

const router = express.Router()

// GET /api/v1/songs/
router.get('/', validateAccessToken, (req, res) => {
  const songs = [
    {
      id: 1,
      title: 'Song 1',
      artist: 'Artist 1',
      link: 'link 1',
      genre: 'genre 1',
    },
  ]

  res.json(songs)
})

export default router
