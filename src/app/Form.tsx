"use client"

import {
  Box,
  Input,
  Spinner,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { JSX, useState } from "react";
import GenreSelect from "./GenreSelect";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { FormData } from "../types/FormData";

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
      mt={10}
      boxShadow="sm"
      borderRadius="lg"
      borderColor="blue.200"
      bg="gray.500"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={5} textAlign="center" color="blue.100">
        Song Lyrics Generator
      </Text>
      <VStack wordSpacing={4} align="stretch">
        <Field label="Genre">
          <GenreSelect genre={genre} updateGenre={setGenre} />
        </Field>

        <Field label="Theme">
          <Input
            placeholder="What's your song about? (e.g., love, motivation)"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </Field>

        <Field label="Keywords">
          <Textarea
            placeholder="Enter specific words to include (comma-separated)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </Field>

        <Field label="Tone">
          <Slider
            value={[tone]}
            onValueChange={(e) => setTone(e.value[0])}
            step={10}
            style={{ width: "200px" }}
          >
          </Slider>
          <Text mt={2} textAlign="center">
            {tone <= 30
              ? "Playful"
              : tone <= 70
                ? "Neutral"
                : "Emotional"}
          </Text>
        </Field>

        <Button
          colorScheme="blue"
          size="lg"
          onClick={handleSubmit}
          w="full"
          disabled={!(genre && theme && keywords && tone)}
        >
          {isLoading ? <Spinner size="sm" /> : "Let's go!"}
        </Button>
      </VStack>
    </Box>
  );
}

export default Form;
