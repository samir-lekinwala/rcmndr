import express from 'express'
import * as Path from 'node:path'

import userRouter from './routes/users'
import songRouter from './routes/songs'
import notifications from './routes/notifications'

const server = express()

server.use(express.json())

server.use('/api/v1/users', userRouter)
server.use('/api/v1/songs', songRouter)
server.use('/api/v1/notifications', notifications)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (_, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
