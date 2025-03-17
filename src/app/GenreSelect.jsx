import { createListCollection } from "@chakra-ui/react";
import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from "../components/ui/select";

function GenreSelect({ genre, updateGenre }) {
	const genres = [
		{ value: "pop", label: "Pop" },
		{ value: "rock", label: "Rock" },
		{ value: "rap", label: "Rap" },
		{ value: "country", label: "Country" }];

	return (
		<SelectRoot
			value={genre}
			collection={createListCollection({ items: genres })}
			onValueChange={(e) => updateGenre(e.value)}
		>
			<SelectTrigger>
				<SelectValueText placeholder="Select Genre" />
			</SelectTrigger>
			<SelectContent>
				{genres.map((item) => (
					<SelectItem item={item} key={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</SelectRoot>
	);
}

export default GenreSelect;
