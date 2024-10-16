import cors from 'cors'
import express from 'express'

import { metricsMiddleware } from './middleware/metrics'
import { metricsRouter } from './routes/metrics-route'
import { taskRouter } from './routes/task-route'

const app = express()

app.use(express.json())
app.use(cors())
app.use(metricsMiddleware)

app.use('/tasks', taskRouter)
app.use('/metrics', metricsRouter)

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333

app.listen(PORT, () => {
  console.log(`Running at ${PORT} 🔥`)
})
