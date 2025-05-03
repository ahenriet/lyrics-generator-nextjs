'use client'

import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

function GenreSelect({ genre, updateGenre }) {
	const genres = [
		{ value: "pop", label: "Pop" },
		{ value: "rock", label: "Rock" },
		{ value: "rap", label: "Rap" },
		{ value: "country", label: "Country" }];

	return (
		<FormControl fullWidth>
			<InputLabel id="genre-select-label">Genre</InputLabel>
			<Select
				labelId="genre-select-label"
				value={genre}
				onChange={(e) => updateGenre(e.target.value)}
				label="Genre"
			>
				{genres.map((item) => (
					<MenuItem value={item.value} key={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default GenreSelect;
