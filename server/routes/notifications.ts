import express from 'express'

import { getNotifications, setNotifications } from '../db/notifications'
import { validateAccessToken } from '../auth0'
import { logError } from '../logger'

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  const userId = req.auth?.payload.sub
  try {
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const notifications = await getNotifications(userId)
    res.json(notifications)
  } catch (error) {
    logError(error)
    res.status(500).json({ error: 'Unable to retrieve notifications' })
  }
})

router.post('/', validateAccessToken, async (req, res) => {
  const userId = req.auth?.payload.sub
  const notificationIds = req.body
  try {
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    if (!notificationIds || !Array.isArray(notificationIds)) {
      res.status(400).json({ error: 'Request body must be an array' })
    }

    await setNotifications(userId, notificationIds)
    res.sendStatus(201)
  } catch (error) {
    logError(error)
    res.status(500).json({ error: 'Unable to update notifications' })
  }
})

export default router
