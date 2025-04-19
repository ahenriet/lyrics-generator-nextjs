// import OpenAI from 'openai';

// const openai = new OpenAI({
// 	apiKey: process.env.OPENAI_API_KEY,
// });

interface LyricsParams {
	genre: string;
	theme: string;
	keywords: string;
	tone: string;
}

const angels = "I sit and wait\n\
Does an angel contemplate my fate?\n\
And do they know the places where we go\n\
When we're grey and old?\n\
'Cause I have been told\n\
That salvation lets their wings unfold\n\
So when I'm lying in my bed\n\
Thoughts running through my head\n\
And I feel that love is dead\n\
I'm loving angels instead\n\
And through it all she offers me protection\n\
A lot of love and affection, whether I'm right or wrong\n\
And down the waterfall, wherever it may take me\n\
I know that life won't break me\n\
When I come to call, she won't forsake me\n\
I'm loving angels instead";

export async function generateLyricsFromOpenAI({ /* genre, theme, keywords, tone */ }: LyricsParams): Promise<string> {
	return new Promise(resolve => setTimeout(() => resolve(angels), 200));
}

// export async function generateLyricsFromOpenAI({ genre, theme, keywords, tone }: LyricsParams): Promise<string> {
// 	// const prompt = `Write song lyrics in the ${genre} genre. The mood should be ${mood}, and the style is ${style}. The song is about ${theme}.`;
// 	const completion = await openai.chat.completions.create({
// 		messages: [
// 			{
// 				role: "user",
// 				content: `Generate song lyrics with the following parameters:
//           Genre: ${genre}
//           Theme: ${theme}
//           Keywords: ${keywords}
//           Tone: ${tone}`
// 			}
// 		],
// 		model: "gpt-3.5-turbo-1106",
// 	});

// 	return completion.choices[0].message.content || '';
// } 