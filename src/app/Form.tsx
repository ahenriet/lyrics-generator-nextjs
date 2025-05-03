"use client"

import { JSX, useState } from "react";
import GenreSelect from "./GenreSelect";
import { FormData } from "../types/FormData";
import { Box, Stack, Typography, TextField, Slider, Button, CircularProgress } from "@mui/material";

interface FormProps {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
}

function Form({ onSubmit, isLoading }: FormProps): JSX.Element {
  const [genre, setGenre] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [tone, setTone] = useState<number>(50);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit({ genre, theme, keywords, tone });
  };

  return (
    <Box
      p={5}
      mx="auto"
      mt={5}
      boxShadow={3}
      borderRadius={2}
      borderColor="green.200"
      bgcolor="grey.300"
    >
      <Typography variant="h4" color="primary" textAlign="center">
        Song Lyrics Generator
      </Typography>
      <Stack spacing={4} mt={4} direction="column">
        <div>
          <Typography variant="subtitle1">Genre</Typography>
          <GenreSelect genre={genre} updateGenre={setGenre} />
        </div>

        <div>
          <Typography variant="subtitle1">Theme</Typography>
          <TextField
            placeholder="What's your song about? (e.g., love, motivation)"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <Typography variant="subtitle1">Keywords</Typography>
          <TextField
            placeholder="Enter specific words to include (comma-separated)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            fullWidth
            variant="outlined"
            multiline
            rows={3}
          />
        </div>

        <div>
          <Typography variant="subtitle1">Tone</Typography>
          <Slider
            value={tone}
            onChange={(e, value) => setTone(value as number)}
            step={10}
            marks
            min={0}
            max={100}
          />
          <Typography mt={2} textAlign="center">
            {tone <= 30
              ? "Playful"
              : tone <= 70
              ? "Neutral"
              : "Emotional"}
          </Typography>
        </div>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          fullWidth
          disabled={!(genre && theme && keywords && tone)}
        >
          {isLoading ? <CircularProgress size={24} /> : "Let's go!"}
        </Button>
      </Stack>
    </Box>
  );
}

export default Form;
