import { NextRequest } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.GROK_API_KEY,
  baseURL: 'https://api.x.ai/v1',
});

export async function POST(req: NextRequest) {
  const { imageUrl, style } = await req.json();

  const response = await openai.images.generate({
    model: "grok-flux-1",
    prompt: `Photorealistic virtual staging of this exact room in ${style || 'luxury modern'} style, perfect proportions perfect, lighting accurate, furniture scaled correctly, no artifacts: ${imageUrl}`,
    n: 5,
    size: "1024x1024",
  });

  return Response.json({ images: response.data.map(d => d.url) });
}
