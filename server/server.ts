import express from 'express'

import userRouter from './routes/users'
import songRouter from './routes/songs'
import notifications from './routes/notifications'

const server = express()

server.use(express.json())

server.use('/api/v1/users', userRouter)
server.use('/api/v1/songs', songRouter)
server.use('/api/v1/notifications', notifications)

export default server
