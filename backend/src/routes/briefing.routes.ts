import { FastifyInstance } from "fastify";
import { generateBriefing } from "../services/briefing.service";

export async function briefingRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    return generateBriefing();
  });
}
