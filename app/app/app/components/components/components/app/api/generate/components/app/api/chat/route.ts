import { NextRequest } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.GROK_API_KEY,
  baseURL: 'https://api.x.ai/v1',
});

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "grok-4",
    messages: [
      { role: "system", content: "You are Artiste, an expert interior designer AI for real estate staging. Be helpful, tasteful, and proactive. If the user wants to change something, generate new images using the tool." },
      ...messages
    ],
    temperature: 0.8,
  });

  return Response.json({ reply: response.choices[0].message.content });
}
