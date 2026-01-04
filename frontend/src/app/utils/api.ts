import type { PoliticalIssue, PoliticalArticle } from "./politicalData";

const API_BASE = "http://localhost:3001";

const CATEGORY_IMAGES: Record<string, string> = {
  Environment:
    "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&q=80",
  Education:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  Housing:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  Democracy:
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
  Healthcare:
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80",
  Justice:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
};

function mapArticleToPoliticalArticle(article: any): PoliticalArticle {
  return {
    title: article.title,
    source: article.source,
    url: article.url,
    quote: article.content?.slice(0, 160) || "",
    publishedAt: article.publishedAt,
  };
}


export async function fetchPoliticalBriefings(): Promise<PoliticalIssue[]> {
  try {
    const res = await fetch(`${API_BASE}/api/briefing`);
    if (!res.ok) throw new Error("Failed to fetch briefings");

    const briefings = await res.json();

    // Map backend briefings to frontend PoliticalIssue format
    return briefings.map((briefing: any) => ({
      id: crypto.randomUUID(),
      title: briefing.topic,
      description: briefing.summary,
      imageUrl: CATEGORY_IMAGES[briefing.topic] || CATEGORY_IMAGES.Environment,
      category: briefing.topic,
      articles: briefing.sources.map((source: any) => ({
        title: source.title,
        source: source.source,
        url: source.url,
        quote: briefing.summary.slice(0, 160), // Use summary as quote
        publishedAt: new Date().toISOString(),
      })),
    }));
  } catch (error) {
    console.error("Error fetching briefings:", error);
    throw error;
  }
}

// Keep existing functions for fallback
export async function fetchPoliticalIssues(
  category: string = "Politics"
): Promise<PoliticalIssue[]> {
  const res = await fetch(
    `${API_BASE}/api/news?topic=${encodeURIComponent(category)}`
  );
  if (!res.ok) throw new Error("Failed to fetch news");

  const data = await res.json();

  const issue: PoliticalIssue = {
    id: crypto.randomUUID(),
    title: `${category} Update`,
    description: `Latest developments in ${category.toLowerCase()} based on recent reporting.`,
    imageUrl: CATEGORY_IMAGES[category] ?? CATEGORY_IMAGES.Environment,
    category,
    articles: data.map(mapArticleToPoliticalArticle),
  };

  return [issue];
}
