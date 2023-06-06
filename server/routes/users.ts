import express from 'express'

import * as db from '../db/users'
import { validateAccessToken } from '../auth0'

const router = express.Router()

// GET /api/v1/users/search?q=...
router.get('/search', validateAccessToken, async (req, res) => {
  const id = req.auth?.payload.sub
  const query = req.query.q as string

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  if (!query) {
    res.json([])
    return
  }

  try {
    const friends = await db.searchFriends(id, query)
    res.status(200).json(friends)
  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      res.status(500).json({ message: e.message })
    }
  }
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
    console.error(e)
    if (e instanceof Error) {
      res.status(500).json({ message: e.message })
    }
  }
})

// GET /api/v1/users/:id
router.get('/:id', validateAccessToken, (req, res) => {
  const id = req.params.id

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
  }

  res.status(200).json({ nickname: 'here' })
})

// POST /api/v1/users
router.post('/', validateAccessToken, (req, res) => {
  const form = req.body

  res.status(200).json({ message: form })
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
