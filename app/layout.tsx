import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Theme";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prashant-pandey.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prashant Pandey | Full-Stack Web Developer in Rewa & Indore, India",
    template: "%s | Prashant Pandey",
  },
  description:
    "Prashant Pandey is a Full-Stack Web Developer & Software Engineer based in Rewa & Indore, Madhya Pradesh, India. Specializing in Next.js, React, Node.js, TypeScript, PostgreSQL, and modern web applications.",
  keywords: [
    // Local SEO (Rewa, MP, Indore)
    "Full Stack Developer in Rewa",
    "Web Developer in Rewa",
    "Web Developer Rewa Madhya Pradesh",
    "Full Stack Developer Rewa Madhya Pradesh",
    "Software Engineer Rewa",
    "Freelance Web Developer Rewa",
    "Web Developer in Indore",
    "Full Stack Developer Indore",
    "Software Developer Madhya Pradesh",
    "Full Stack Developer India",
    
    // Core Identity & Skills
    "Prashant Pandey",
    "Prashant Pandey Developer",
    "Prashant Pandey Portfolio",
    "Full-Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Dollop Infotech Intern",
    "AI Web Developer",
    "Frontend Developer",
    "Backend Developer",
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
    title: "Prashant Pandey | Full-Stack Web Developer in Rewa & Indore, India",
    description:
      "Full-Stack Web Developer specializing in Next.js, React, Node.js, and TypeScript. Based in Rewa & Indore, Madhya Pradesh, India. Open for freelance and full-time roles.",
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
      "Full-Stack Developer specializing in Next.js, React, Node.js, TypeScript. Based in Rewa & Indore, Madhya Pradesh, India.",
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
        "Portfolio of Prashant Pandey, Full-Stack Web Developer based in Rewa & Indore, Madhya Pradesh, India.",
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
