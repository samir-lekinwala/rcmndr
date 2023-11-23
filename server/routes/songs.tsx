import express from 'express'
import { renderToStaticMarkup } from 'react-dom/server'
import Layout from '../components/Layout'

const router = express.Router()

// GET /api/v1/songs

// POST /api/v1/songs

router.get('/', (req, res) => {
  const fruits = ['banana', 'mango']

  res.send(
    renderToStaticMarkup(
      <Layout>
        {fruits.map((f) => (
          <p key={f}>{f}</p>
        ))}
      </Layout>
    )
  )
})

export default router
