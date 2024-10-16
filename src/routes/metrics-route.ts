import { Request, Response, Router } from 'express'

import { register } from '../middleware/metrics'

const metricsRouter = Router()

metricsRouter.get('/', async (req: Request, res: Response) => {
  res.set('Content-Type', register.contentType)
  res.end(await register.metrics())
})

export { metricsRouter }
