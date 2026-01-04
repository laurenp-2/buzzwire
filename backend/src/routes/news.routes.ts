import { FastifyInstance } from 'fastify'
import { fetchNewsByTopic } from '../services/news.service'

export async function newsRoutes(app: FastifyInstance) {
  app.get('/', async (req) => {
    const { topic = 'technology' } = req.query as { topic?: string }
    return fetchNewsByTopic(topic)
  })
}
