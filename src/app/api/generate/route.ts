import { generateLyricsFromOpenAI } from "./openaiService";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { prompt } = await req.json();
		const { genre, theme, keywords, tone } = JSON.parse(prompt);

		if (!genre || !theme || !keywords || !tone) {
			return NextResponse.json({ error: "All fields are required." });
		}

		return await generateLyricsFromOpenAI({ genre, theme, keywords, tone });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Failed to generate lyrics." });
	}
};