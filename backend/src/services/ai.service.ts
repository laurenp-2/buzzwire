import OpenAI from "openai";

import { summarizePipeline } from "../pipelines/summarize.pipeline";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function summarizeArticles(topic: string, articles: any[]) {
  return summarizePipeline(client, topic, articles);
}
