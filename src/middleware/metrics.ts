import { NextFunction, Request, Response } from 'express'
import client from 'prom-client'

const register = new client.Registry()

client.collectDefaultMetrics({ register })

const httpRequestCounter = new client.Counter({
  name: 'http_request_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
})

const requestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.5, 1, 1.5, 2, 5],
})

register.registerMetric(httpRequestCounter)
register.registerMetric(requestDuration)

function metricsMiddleware(req: Request, res: Response, next: NextFunction) {
  const end = requestDuration.startTimer()

  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode,
    })
    end({ method: req.method, route: req.path, status: res.statusCode })
  })

  next()
}

export { register, metricsMiddleware }
