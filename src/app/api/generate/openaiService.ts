import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';


interface LyricsParams {
	genre: string;
	theme: string;
	keywords: string;
	tone: string;
}

export async function generateLyricsFromOpenAI({ genre, theme, keywords, tone }: LyricsParams): Promise<Response> {
	const prompt = `You are a professional songwriter. Write a complete song with the following details:
	- Genre: ${genre}
	- Theme: ${theme}
	- Keywords to include: ${keywords}
	- Tone: ${tone}

	Make sure the lyrics are creative, engaging, and follow a typical song structure (e.g.: verses, chorus, bridge).`;

	const result = streamText({
		prompt,
		model: openai('gpt-4o-mini'),
		temperature: 1.0,
	});

	return result.toDataStreamResponse();
}