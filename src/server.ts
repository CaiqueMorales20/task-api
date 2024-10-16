import cors from 'cors'
import express from 'express'

import { taskRouter } from './routes/task-route'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/tasks', taskRouter)

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333

app.listen(PORT, () => {
  console.log(`Running at ${PORT} 🔥`)
})
