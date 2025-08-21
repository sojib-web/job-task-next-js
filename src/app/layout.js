"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientOnly from "./components/ClientOnly";
import { ThemeProvider } from "./components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ClientOnly>
              <Navbar />
            </ClientOnly>

            {children}

            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
