import dotenv from 'dotenv'
dotenv.config()

import { buildServer } from './server'

import { newsRoutes } from './routes/news.routes'
import { aiRoutes } from './routes/ai.routes'
import { briefingRoutes } from './routes/briefing.routes'

const app = buildServer()

app.register(newsRoutes, { prefix: '/api/news' })
app.register(aiRoutes, { prefix: '/api/ai' })
app.register(briefingRoutes, { prefix: '/api/briefing' })

app.listen({ port: 3001 }, err => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
