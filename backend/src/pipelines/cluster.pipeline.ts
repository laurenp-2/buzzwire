import { NewsArticle } from "../types/news";

export async function clusterPipeline(
  client: any,
  articles: NewsArticle[]
): Promise<string[]> {
  const titles = articles.map((a) => `- ${a.title}`).join("\n");

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You identify key high-level topics in current events. Return ONLY a JSON object with a 'topics' array of strings. No other text.",
      },
      {
        role: "user",
        content: `
Here are news headlines:
${titles}

Identify the 3-5 most important topics being discussed.
Return them as a JSON object with this exact format:
{
  "topics": ["Topic 1", "Topic 2", "Topic 3"]
}
        `,
      },
    ],
    response_format: { type: "json_object" },
  });

  const content = response.choices[0].message.content;

  // Add error handling for parsing
  try {
    const parsed = JSON.parse(content);

    // Validate that topics exists and is an array
    if (!parsed.topics || !Array.isArray(parsed.topics)) {
      console.error("Invalid response format:", content);
      return []; // Return empty array as fallback
    }

    return parsed.topics;
  } catch (error) {
    console.error("Failed to parse topics response:", content, error);
    return []; // Return empty array as fallback
  }
}
