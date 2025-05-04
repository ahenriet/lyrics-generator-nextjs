import type { Metadata } from "next/types";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

export const metadata: Metadata = {
  title: "AI Song Lyrics Generator",
  description: "This a simple AI song lyrics generator app that lets you create and share your own lyrics based on your input.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
