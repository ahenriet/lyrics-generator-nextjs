import { generateLyricsFromOpenAI } from "./openaiService";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { genre, theme, keywords, tone } = await req.json();

		// if (!genre || !theme || !keywords || !tone) {
		// 	return NextResponse.json({ error: "All fields are required." });
		// }

		const lyrics = await generateLyricsFromOpenAI({ genre, theme, keywords, tone });
		return NextResponse.json({ lyrics });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Failed to generate lyrics." });
	}
};