import express from 'express'
import { getSongs } from '../db/songs'

const router = express.Router()

// GET /api/v1/songs

router.get('/', async (req, res) => {
  try {
    const allSongs = await getSongs()
    res.status(200).json(allSongs)
  } catch (error) {
    res.status(500).json({ message: 'wow no friends aye haha' })
  }
})

// POST /api/v1/songs

export default router
