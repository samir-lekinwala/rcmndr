import express from 'express'

const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
  }

  res.status(200).json({ message: `You requested user ${id}` })
})

export default router
