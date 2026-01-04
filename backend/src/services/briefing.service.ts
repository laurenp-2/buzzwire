import OpenAI from "openai";
import { fetchNewsByTopic } from "./news.service";
import { clusterPipeline } from "../pipelines/cluster.pipeline";
import { summarizePipeline } from "../pipelines/summarize.pipeline";
import { civicPipeline } from "../pipelines/civic.pipeline";
import { TopicBriefing } from "../types/topics";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// CACHE: Store briefings in memory
let cachedBriefings: TopicBriefing[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export async function generateBriefing(): Promise<TopicBriefing[]> {
  // Return cached briefings if they're still fresh
  const now = Date.now();
  if (cachedBriefings && now - lastFetchTime < CACHE_DURATION) {
    console.log("Returning cached briefings");
    return cachedBriefings;
  }

  try {
    console.log("Generating fresh briefings...");

    // 1. Pull broad news
    const articles = await fetchNewsByTopic("us politics");

    if (!articles || articles.length === 0) {
      console.error("No articles fetched");
      return cachedBriefings || []; // Return cache if available
    }

    console.log(`Fetched ${articles.length} articles`);

    // 2. Extract key topics
    const topics = await clusterPipeline(client, articles);

    if (!topics || topics.length === 0) {
      console.error("No topics extracted");
      return cachedBriefings || [];
    }

    // Limit to 3 topics to reduce API calls
    const limitedTopics = topics.slice(0, 3);
    console.log(`Processing ${limitedTopics.length} topics:`, limitedTopics);

    // 3. Build briefings with delays between calls
    const briefings: TopicBriefing[] = [];

    for (let i = 0; i < limitedTopics.length; i++) {
      const topic = limitedTopics[i];

      // Add delay between topics to respect rate limits
      if (i > 0) {
        console.log("Waiting 20s to respect rate limit...");
        await new Promise((resolve) => setTimeout(resolve, 20000));
      }

      console.log(
        `Processing topic ${i + 1}/${limitedTopics.length}: ${topic}`
      );

      const articlesToUse = articles.slice(0, 5);

      const summary = await summarizePipeline(client, topic, articlesToUse);

      // Small delay between summary and civic actions
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const actions = await civicPipeline(client, topic, summary);

      briefings.push({
        topic,
        summary,
        callsToAction: actions,
        sources: articlesToUse.map(
          (a: { title: any; url: any; source: any }) => ({
            title: a.title,
            url: a.url,
            source: a.source,
          })
        ),
      });
    }

    console.log(`Generated ${briefings.length} briefings`);

    // Cache the results
    cachedBriefings = briefings;
    lastFetchTime = now;

    console.log("Briefings generation complete");
    console.log(briefings);
    return briefings;
  } catch (error) {
    console.error("Error in generateBriefing:", error);

    // Return cached briefings if available on error
    if (cachedBriefings) {
      console.log("Returning cached briefings due to error");
      return cachedBriefings;
    }

    throw error;
  }
}
