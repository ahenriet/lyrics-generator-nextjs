'use client'

import Form from "./Form";
import { useState, JSX } from "react";
import { TextField, Box, Alert } from "@mui/material";
import { FormData } from "../types/FormData";
import { useCompletion } from '@ai-sdk/react';

export default function Home(): JSX.Element {
  const [error, setError] = useState<string | null>(null);
  const { completion, complete, isLoading } = useCompletion({
    api: '/api/generate',
  });


  const handleFormSubmit = async (formData: FormData) => {
    setError(null);

    try {
      await complete(JSON.stringify(formData));
    } catch (error) {
      console.error("Error generating lyrics:", error);
      setError("Failed to generate lyrics. Please try again.");
    }
  };

  return (
    <Box
      p={5}
      maxWidth="900px"
      mx="auto"
      mt={10}
      boxShadow={3}
      borderRadius={2}
      bgcolor="grey.400"
      width="100%"
      border={1}
      borderColor="primary.light"
    >
      <Form onSubmit={handleFormSubmit} isLoading={isLoading} />
      {error && (
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
      )}
      {completion && (
        <TextField
          value={completion}
          slotProps={{ htmlInput: { readOnly: true } }}
          placeholder="Generated Lyrics"
          multiline
          rows={20}
          fullWidth
          variant="outlined"

          sx={{
            mt: 4,
            bgcolor: "grey.300",
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "primary.dark",
          }}
        />
      )}
    </Box>
  );
}
