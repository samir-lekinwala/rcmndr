import express from 'express'
import { validateAccessToken } from '../auth0'

const router = express.Router()

router.get('/', validateAccessToken, (req, res) => {
  res.send('songs')
})

export default router
