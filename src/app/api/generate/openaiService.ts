import OpenAI from 'openai';

const client = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

interface LyricsParams {
	genre: string;
	theme: string;
	keywords: string;
	tone: string;
}

export async function generateLyricsFromOpenAI({ genre, theme, keywords, tone }: LyricsParams): Promise<string> {
	const prompt = `You are a professional songwriter. Write a complete song with the following details:
	- Genre: ${genre}
	- Theme: ${theme}
	- Keywords to include: ${keywords}
	- Tone: ${tone}

	Make sure the lyrics are creative, engaging, and follow a typical song structure (e.g.: verses, chorus, bridge).`;

	const response = await client.responses.create({
		input: [
			{
				role: "user",
				content: prompt
			}
		],
		model: "gpt-4o-mini",
		temperature: 1.0,
	});

	return response.output_text || '';
}