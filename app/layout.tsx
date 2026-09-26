import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Theme";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prashant-portfolio-p.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prashant Pandey | Full-Stack Web Developer & Software Engineer, India",
    template: "%s | Prashant Pandey",
  },
  description:
    "Prashant Pandey — Full-Stack Web Developer & Software Engineer from India. Specializing in Next.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, and AI-powered web applications. Open for freelance, remote, and full-time opportunities.",
  keywords: [
    // Brand / Name (highest priority)
    "Prashant Pandey",
    "Prashant Pandey Portfolio",
    "Prashant Pandey Developer",
    "Prashant Pandey Full Stack Developer",
    "Prashant Pandey Software Engineer",
    "Prashant Pandey Web Developer",

    // Core Skills
    "Full-Stack Developer",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Web Developer",
    "Freelance Web Developer India",

    // Location (secondary)
    "Full Stack Developer India",
    "Web Developer India",
    "Software Developer Madhya Pradesh",
    "Web Developer Indore",
    "Full Stack Developer Indore",
  ],
  authors: [{ name: "Prashant Pandey", url: siteUrl }],
  creator: "Prashant Pandey",
  publisher: "Prashant Pandey",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    title: "Prashant Pandey | Full-Stack Web Developer & Software Engineer, India",
    description:
      "Prashant Pandey — Full-Stack Web Developer specializing in Next.js, React, Node.js, and TypeScript. Based in India. Open for freelance, remote, and full-time roles.",
    siteName: "Prashant Pandey Portfolio",
    images: [
      {
        url: "/dp/me.jpeg",
        width: 800,
        height: 1000,
        alt: "Prashant Pandey - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Pandey | Full-Stack Web Developer",
    description:
      "Prashant Pandey — Full-Stack Developer specializing in Next.js, React, Node.js, TypeScript. Based in India. Open for work.",
    images: ["/dp/me.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Prashant Pandey",
      url: siteUrl,
      image: `${siteUrl}/dp/me.jpeg`,
      jobTitle: "Full-Stack Web Developer",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rewa",
        addressRegion: "Madhya Pradesh",
        addressCountry: "India",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "AKS University",
        location: {
          "@type": "PostalAddress",
          addressLocality: "Satna",
          addressRegion: "Madhya Pradesh",
          addressCountry: "India",
        },
      },
      sameAs: [
        "https://github.com/prashant-pandey-4",
        "https://linkedin.com/in/prashant-pandey01/",
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "React.js",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "PostgreSQL",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "REST APIs",
        "Generative AI & AI Agents",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Prashant Pandey — Full-Stack Web Development Services",
      image: `${siteUrl}/dp/me.jpeg`,
      url: siteUrl,
      telephone: "+91-8085769785",
      email: "prashantpandey3103@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rewa",
        addressRegion: "Madhya Pradesh",
        addressCountry: "India",
      },
      areaServed: [
        { "@type": "City", name: "Rewa" },
        { "@type": "City", name: "Indore" },
        { "@type": "City", name: "Satna" },
        { "@type": "City", name: "Bhopal" },
        { "@type": "AdministrativeArea", name: "Madhya Pradesh" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "Full-Stack Web Developer and Freelance Software Engineer providing production-ready web application development in Rewa, Indore, Madhya Pradesh, and remote worldwide.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Prashant Pandey | Full-Stack Web Developer Portfolio",
      description:
        "Portfolio of Prashant Pandey, Full-Stack Web Developer & Software Engineer based in India.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
