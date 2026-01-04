import { NewsArticle } from './news'

export interface TopicCluster {
  topic: string
  articles: NewsArticle[]
}

export interface TopicBriefing {
  topic: string
  summary: string
  callsToAction: string[]
  sources: Pick<NewsArticle, 'title' | 'url' | 'source'>[]
}
