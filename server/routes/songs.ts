import express from 'express'
import { validateAccessToken } from '../auth0'
import { addSongDraft } from '../../types/Song'
import * as db from '../db/insertSong'
import { logError } from '../logger'

const router = express.Router()

// GET /api/v1/songs

// POST /api/v1/songs
router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  const form = req.body

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }
  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }

  try {
    const songResult = addSongDraft.safeParse(form)

    if (!songResult.success) {
      res.status(400).json({ message: songResult.error })
      return
    }

    if (songResult.success) {
      const song = { ...songResult.data, userId: auth0Id }
      await db.insertSong(song)
      res.sendStatus(201)
      return
    }
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to insert new song to database' })
  }
})
export default router
