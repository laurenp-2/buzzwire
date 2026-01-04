import { FastifyInstance } from "fastify";
import { summarizeArticles } from "../services/ai.service";

export async function aiRoutes(app: FastifyInstance) {
  app.post("/summarize", async (req) => {
    const { articles } = req.body as { articles: any[] };
    return {
      summary: await summarizeArticles(articles),
    };
  });
}
