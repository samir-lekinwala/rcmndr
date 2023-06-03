import express from 'express'

import * as db from '../db/songs'
import { validateAccessToken } from '../auth0'
import { song, songDraftSchema } from '../../types/Song'

const router = express.Router()

// GET /api/v1/songs/
router.get('/', validateAccessToken, async (req, res) => {
  try {
    const userId = req.auth?.payload.sub
    if (!userId) {
      return res.status(401).json({ error: 'unauthorized' })
    }
    const songs = await db.getSongs(userId)
    res.json(songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'unable to retrieve songs from database' })
  }
})

// POST /api/v1/songs/
router.post('/', validateAccessToken, async (req, res) => {
  try {
    const userId = req.auth?.payload.sub
    if (!userId) {
      return res.status(401).json({ error: 'unauthorized' })
    }
    const song = {
      user_id: userId,
      ...songDraftSchema.parse(req.body),
    }

    await db.insertSong(song)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'unable to insert song into database' })
  }
})

export default router
