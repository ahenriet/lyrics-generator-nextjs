import { FormData } from "../../types/FormData";

export const generateLyrics = async (formData: FormData): Promise<string> => {
	const response = await fetch('/api/generate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	});

	if (!response.ok) {
		throw new Error('Failed to generate lyrics');
	}

	const data = await response.json();
	console.log(data)
	return data.lyrics;
};