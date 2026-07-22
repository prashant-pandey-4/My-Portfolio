import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Theme";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Prashant Pandey | Full-Stack Developer",
  description:
    "Portfolio of Prashant Pandey — Full-Stack Developer specializing in React, Node.js, MongoDB, and modern web technologies. Based in India.",
  keywords: [
    "Prashant Pandey",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "MERN Stack",
  ],
  authors: [{ name: "Prashant Pandey" }],
  openGraph: {
    title: "Prashant Pandey | Full-Stack Developer",
    description: "Full-Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
