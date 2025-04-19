'use client'

import Form from "./Form";
import { useState, useEffect, JSX } from "react";
import { Textarea, Box, Text } from "@chakra-ui/react";
import { FormData } from "../types/FormData";
import { generateLyrics } from "./services/api";
import "./styles/lyrics.css";

export default function Home(): JSX.Element {
  const [lyrics, setLyrics] = useState<string>("");
  const [displayedLyrics, setDisplayedLyrics] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!lyrics) {
      setDisplayedLyrics("");
      return;
    }

    setDisplayedLyrics("");
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < lyrics.length) {
        setDisplayedLyrics((prev: string) => prev + lyrics[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [lyrics]);

  const handleFormSubmit = async (formData: FormData) => {
    setLyrics("");
    setError(null);
    setIsLoading(true);

    try {
      const generatedLyrics = await generateLyrics(formData);
      setLyrics(generatedLyrics);
    } catch (error) {
      console.error("Error generating lyrics:", error);
      setError("Failed to generate lyrics. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      p={5}
      maxW="700px"
      mx="auto"
      mt={10}
      boxShadow="lg"
      borderRadius="lg"
      bg="blue.50"
      width="100%"
      border="1px"
      borderColor="blue.100"
    >
      <Form onSubmit={handleFormSubmit} isLoading={isLoading} />
      {error && (
        <Box
          mt={4}
          p={4}
          bg="red.50"
          border="1px"
          borderColor="red.200"
          borderRadius="md"
        >
          <Text color="red.700">{error}</Text>
        </Box>
      )}
      {lyrics && (
        <Textarea
          className="lyrics-textarea"
          value={displayedLyrics}
          readOnly
          placeholder="Generated Lyrics"
          rows={20}
          bg="gray.100"
          fontSize="xl"
          fontWeight="bold"
          color="blue.900"
          width="100%"
          shadow="sm"
          mt={10}
          borderColor="blue.200"
          borderRadius="lg"
          _hover={{ borderColor: "blue.300" }}
          _focus={{ borderColor: "blue.400" }}
        />
      )}
    </Box>
  );
}
