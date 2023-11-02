import express from 'express'
import * as Path from 'node:path'
import * as oidc from 'express-openid-connect'

import userRouter from './routes/users'
import songRouter from './routes/songs'
import notifications from './routes/notifications'
import adminRouter from './routes/admin'
import { oidcConfig } from './auth0'

const server = express()

server.use(oidc.auth(oidcConfig))
server.use(express.json())

server.use('/api/v1/users', userRouter)
server.use('/api/v1/songs', songRouter)
server.use('/api/v1/notifications', notifications)

server.use('/admin', adminRouter)
server.get('/callback', (req, res) => {
  res.oidc.callback({
    redirectUri: '/admin/dsfsdfsd',
  })
})
server.get('/login', (req, res) => {
  res.oidc.login({
    returnTo: '/admin/dashboard',
    authorizationParams: {
      redirect_uri: 'http://localhost:3000/callback',
    },
  })
})
server.get('/logout', (req, res) => {
  res.oidc.logout({ returnTo: '/admin/home' })
})
if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (_, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
