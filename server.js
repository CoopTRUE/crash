import express from 'express'
const app = express()

import { handler } from './build/handler.js'
app.use(handler)

const PORT = process.env.PORT || 2000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
