import express from 'express'

import * as db from '../db/users'
import { validateAccessToken } from '../auth0'
import { logError } from '../logger'
import { profileDraftSchema } from '../../types/Profile'

const router = express.Router()

// GET /api/v1/users/search?q=banana
router.get('/search', validateAccessToken, async () => {
  // TODO: implement
})

// GET /api/v1/users/friends
router.get('/friends', validateAccessToken, async (req, res) => {
  const id = req.auth?.payload.sub

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const friends = await db.getFriends(id)
    res.status(200).json(friends)
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to retrieve friends' })
  }
})

// GET /api/v1/users/:id
router.get('/:id', validateAccessToken, (req, res) => {
  const id = req.params.id

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
  }

  res.status(200).json({ nickname: 'nickname here' })
})

// POST /api/v1/users
router.post('/', validateAccessToken, async (req, res) => {
  const form = req.body
  const auth0Id = req.auth?.payload.sub

  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }
  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an auth0 id' })
    return
  }

  try {
    const profile = profileDraftSchema.parse(form)
    await db.insertUser(profile, auth0Id)
    res.sendStatus(201)
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

// POST /api/v1/users/:userId/follow
router.post('/:userId/follow', validateAccessToken, async (req, res) => {
  const userId = req.params.userId

  if (!userId) {
    res.status(400).json({ message: 'Please provide an id' })
  }

  res.sendStatus(201)
})

export default router
