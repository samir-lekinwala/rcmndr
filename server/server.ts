import express from 'express'
import * as Path from 'node:path'

import userRouter from './routes/users'
import songRouter from './routes/songs'
import notifications from './routes/notifications'
import adminRouter from './routes/admin'
import { oidcConfig  } from './auth0'
import { auth } from 'express-openid-connect'

const server = express()

server.use(auth(oidcConfig));
server.use(express.json())

server.use('/api/v1/users', userRouter)
server.use('/api/v1/songs', songRouter)
server.use('/api/v1/notifications', notifications)
server.use('/admin', adminRouter)

server.get('/callback', (req, res) =>
  res.oidc.callback({
    redirectUri: 'http://localhost:3000/admin/dashboard',
  })
);

server.post('/callback', express.urlencoded({ extended: false }), (req, res) =>
  res.oidc.callback({
    redirectUri: 'http://localhost:3000/admin/dashboard',
  })
);

server.get('/', (req, res) => {
  res.redirect('/admin/dashboard')
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (_, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
