import Fastify from 'fastify'
import cors from '@fastify/cors'

export function buildServer() {
  const app = Fastify({ logger: true })

  app.register(cors, {
    origin: true
  })

  return app
}
