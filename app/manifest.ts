import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prashant Pandey - Full Stack Web Developer",
    short_name: "Prashant Pandey",
    description:
      "Portfolio of Prashant Pandey, Full-Stack Web Developer based in Rewa & Indore, Madhya Pradesh, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
