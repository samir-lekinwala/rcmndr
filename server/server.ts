import express from 'express'

import userRouter from './routes/users'
import songRouter from './routes/songs'

const server = express()

server.use(express.json())

server.use('/api/v1/users', userRouter)
server.use('/api/v1/songs', songRouter)

export default server
