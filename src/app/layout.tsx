import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haresh Gir — Lead Frontend Engineer",
  description:
    "Strategic Lead Frontend Engineer with 13+ years of experience building high-scale Web3 and Fintech ecosystems. Specialized in React, Next.js, and blockchain integration.",
  keywords: [
    "Haresh Gir",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "Web3 Developer",
    "Blockchain Engineer",
  ],
  openGraph: {
    title: "Haresh Gir — Lead Frontend Engineer",
    description:
      "13+ years building high-scale Web3 and Fintech ecosystems. Specialized in React/Next.js and blockchain integration.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
