import axios from 'axios'

export async function fetchNewsByTopic(topic: string) {
  const res = await axios.get(
    'https://newsapi.org/v2/everything',
    {
      params: {
        q: topic,
        language: 'en',
        pageSize: 20,
        apiKey: process.env.NEWS_API_KEY
      }
    }
  )
 console.log(`Fetched ${res.data.articles.length} articles for topic: ${topic}`)
 console.log(res.data.articles.map((a: any) => a.title))
 
  return res.data.articles.map((a: any) => ({
    title: a.title,
    source: a.source.name,
    url: a.url,
    publishedAt: a.publishedAt,
    content: a.content
  }))
}
