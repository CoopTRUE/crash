import express from 'express'
const app = express()
import { createServer } from 'http'
const server = createServer(app)
import { Server } from 'socket.io'
const io = new Server(server, { cors: { origin: '*' } })
import cors from 'cors'
import rateLimit from 'express-rate-limit'

app.use(cors())
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false
  })
)
import { handler } from './build/handler.js'
app.use(handler)

io.on('connection', async (socket) => {
  // get ip of client
  console.log('Connection from ' + socket.handshake.headers['x-forwarded-for'])
  socket.on('disconnect', () => console.log(`${io.sockets.sockets.size} users connected`))
})

const PORT = process.env.PORT || 2000
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
