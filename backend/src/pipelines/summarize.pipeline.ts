import { NewsArticle } from "../types/news";

export async function summarizePipeline(
  client: any,
  topic: string,
  articles: NewsArticle[]
) {
  const text = articles.map((a) => `- ${a.title}: ${a.content}`).join("\n");

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You write neutral, factual summaries for civic awareness.",
      },
      {
        role: "user",
        content: `
Topic: ${topic}

Summarize the following articles in 3–5 sentences.
Focus on why this topic matters to the public.

${text}
        `,
      },
    ],
  });

  return response.choices[0].message.content;
}
