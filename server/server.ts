import express from 'express'
import userRouter from './routes/users'

const server = express()

server.use(express.json())

server.use('/api/v1/users', userRouter)

export default server
