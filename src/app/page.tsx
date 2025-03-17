'use client'

import Form from "./Form";
import { useState, useEffect, JSX } from "react";
import { Textarea } from "@chakra-ui/react";
import { FormData } from "../types/FormData";
import { generateLyrics } from "./services/api";

export default function Home(): JSX.Element {
  const [lyrics, setLyrics] = useState<string>("");
  const [displayedLyrics, setDisplayedLyrics] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading(true);

    try {
      const generatedLyrics = await generateLyrics(formData);
      setLyrics(generatedLyrics);
    } catch (error) {
      alert("Error generating lyrics. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit} isLoading={isLoading} />
      {
        lyrics && (
          <Textarea
            value={displayedLyrics}
            readOnly
            placeholder="Generated Lyrics"
            rows={20}
            mt="6"
            bg="gray.100"
            fontSize="xl"
            fontWeight="bold"
          />
        )
      }
    </>
  );
}
