export async function civicPipeline(
  client: any,
  topic: string,
  summary: string
): Promise<string[]> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You generate realistic, non-partisan civic engagement suggestions. Return ONLY a JSON object with an 'actions' array of strings. No other text.",
      },
      {
        role: "user",
        content: `
Topic: ${topic}

Summary:
${summary}

Generate 3 concrete actions citizens can take
(e.g. learn more, contact representatives, support local efforts).
Return as a JSON object with this exact format:
{
  "actions": ["Action 1", "Action 2", "Action 3"]
}
        `,
      },
    ],
    response_format: { type: "json_object" },
  });

  const content = response.choices[0].message.content;

  try {
    const parsed = JSON.parse(content);

    if (!parsed.actions || !Array.isArray(parsed.actions)) {
      console.error("Invalid response format:", content);
      return [];
    }

    return parsed.actions;
  } catch (error) {
    console.error("Failed to parse actions response:", content, error);
    return [];
  }
}
