import express from 'express'
import { renderToStaticMarkup } from 'react-dom/server'

import Layout from '../components/Layout'
import * as auth from '../auth0'

const router = express.Router()

router.get('/home', (_, res) => {
  res.send(
    renderToStaticMarkup(
      <Layout>
        <main>This the landing page for unsigned admins</main>
      </Layout>
    )
  )
})

router.get('/dashboard', auth.requiresScope('update:users'), (req, res) => {
  res.send(
    renderToStaticMarkup(
      <Layout>
        <main>
          <p>{JSON.stringify(req.oidc.user, null, 2)}</p>
          <p>{JSON.stringify(req.oidc.accessToken, null, 2)}</p>
        </main>
      </Layout>
    )
  )
})

export default router
