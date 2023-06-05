import express from 'express'
import { validateAccessToken } from '../auth0'

const router = express.Router()

router.get('/:id', validateAccessToken, (req, res) => {
  const id = req.params.id

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
  }

  res.status(200).json({ nickname: 'test' })
})

router.post('/', validateAccessToken, (req, res) => {
  const form = req.body

  res.status(200).json({ message: form })
})

router.post('/:userId/follow', validateAccessToken, async (req, res) => {
  const userId = req.params.userId

  if (!userId) {
    res.status(400).json({ message: 'Please provide an id' })
  }

  res.sendStatus(201)
})

export default router
