import { generateLyricsFromOpenAI } from "./openaiService";

export async function POST(req: Request) {
	try {
		const { genre, theme, keywords, tone } = await req.json();

		// if (!genre || !theme || !keywords || !tone) {
		// 	return new Response(JSON.stringify({ error: "All fields are required." }));
		// }

		const lyrics = await generateLyricsFromOpenAI({ genre, theme, keywords, tone });
		return new Response(JSON.stringify({ lyrics }));
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Failed to generate lyrics." }));
	}
};