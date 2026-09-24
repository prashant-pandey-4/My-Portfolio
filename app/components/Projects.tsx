"use client";
import { useTheme } from "../Theme";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { FolderGit2 } from "lucide-react";

interface Project {
  title: string;
  about: string;
  date: string;
  code: string;
  live: string;
  image?: string;
  featured?: boolean;
  status?: string;
  tech: { name: string }[];
}

const projects: Project[] = [
  {
    title: "AI-Powered Learning Management System",
    about:
      "SkillUP is a full-stack LMS with a Gemini AI chatbot mentor, multi-quality video streaming via Cloudinary, YouTube playlist auto-import, student & admin dashboards, and Clerk-based auth.",
    date: "September 2026",
    code: "https://github.com/prashant-pandey-4/Ai-powered-lms",
    live: "https://skillup-ailms.vercel.app/",
    image: "/Ai-Lms.png",
    featured: true,
    tech: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Clerk Auth" },
      { name: "Cloudinary" },
    ],
  },
  {
    title: "Full-Stack Job Portal Platform",
    about:
      "Job portal connecting employers and job seekers with job listings, applicant tracking, resume uploads, recruiter & seeker dashboards, real-time notifications, and advanced search filters.",
    date: "March 2025",
    code: "https://github.com/prashant-pandey-4/Job-Portal.git",
    live: "https://job-portal-psi-ochre.vercel.app/",
    image: "/job-portal-screenshot.png",
    featured: true,
    tech: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "Cloudinary" },
    ],
  },
  {
    title: "MovieHub — Discovery & Watchlist Platform",
    about:
      "Modern web app for discovering trending movies, searching titles, exploring detailed movie metrics, and managing a personal watchlist with dynamic UI elements.",
    date: "July 2025",
    code: "https://github.com/prashant-pandey-4",
    live: "https://movie-hub-phi-virid.vercel.app/",
    image: "/movie-hub-screenshot.png",
    featured: true,
    tech: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "TMDB API" },
    ],
  },
  {
    title: "IronPeak — Gym & Fitness Landing Page",
    about:
      "High-performance fitness & gym landing page built with modern UI design, featuring membership plans, trainer profiles, training programs, and smooth responsive layouts.",
    date: "August 2025",
    code: "https://github.com/prashant-pandey-4",
    live: "https://ironpeak-gym-landing-page.vercel.app/",
    image: "/gym-fitness-landingPage.png",
    featured: true,
    tech: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },

];

const Projects = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const cardBg = isDark
    ? "bg-zinc-900/40 hover:bg-zinc-900/80"
    : "bg-white hover:bg-zinc-50";
  const tagBg = isDark
    ? "bg-zinc-800 text-zinc-300"
    : "bg-zinc-100 text-zinc-600";
  const btnBg = isDark
    ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200";
  const solidBtn = isDark
    ? "bg-white text-black hover:bg-zinc-200"
    : "bg-zinc-900 text-white hover:bg-zinc-700";

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className={`text-sm font-light mb-2 ${subText}`}>Things I&apos;ve built</p>
          <h2 className={`text-2xl sm:text-3xl font-light ${text} flex items-center gap-2.5`}>
            <FolderGit2 className="w-6 h-6 text-zinc-400" />
            Projects
          </h2>
          <div className={`mt-4 w-full h-px ${border}`} />
        </div>

        {/* Featured Project — full width with screenshot */}
        {featured.map((project, i) => (
          <div
            key={`featured-${i}`}
            className={`rounded-xl border overflow-hidden mb-6 transition-all duration-200 group ${cardBg} ${border}`}
          >
            {/* Screenshot preview */}
            {project.image && (
              <div className="relative w-full h-52 sm:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Overlay gradient at bottom */}
                <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${isDark ? "from-zinc-900/90 to-transparent" : "from-white/90 to-transparent"}`} />
                {/* Live badge */}
                <span className="absolute top-3 right-3 flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-green-500/90 text-white font-medium backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Live
                </span>
              </div>
            )}

            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className={`text-base font-medium leading-snug ${text}`}>
                  {project.title}
                </h3>
                <span className={`text-xs flex-shrink-0 mt-0.5 ${subText}`}>{project.date}</span>
              </div>
              <p className={`text-sm leading-relaxed mb-4 ${subText}`}>{project.about}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t.name} className={`text-[11px] px-2 py-0.5 rounded font-mono ${tagBg}`}>
                    {t.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${btnBg}`}
                >
                  <FaGithub size={13} /> Code
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${solidBtn}`}
                  >
                    <FaExternalLinkAlt size={11} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Rest of Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <div
              key={`rest-${i}`}
              className={`group rounded-xl border p-4 transition-all duration-200 flex flex-col ${cardBg} ${border}`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className={`text-sm font-medium leading-snug flex-1 pr-2 ${text}`}>
                  {project.title}
                </h3>
                <span className={`text-[10px] flex-shrink-0 ${subText}`}>{project.date}</span>
              </div>

              <p className={`text-xs leading-relaxed mb-3 flex-1 ${subText}`}>
                {project.about}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t.name} className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${tagBg}`}>
                    {t.name}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${tagBg}`}>
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md transition-all ${btnBg}`}
                >
                  <FaGithub size={11} /> Code
                </a>
                {project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md transition-all ${solidBtn}`}
                  >
                    <FaExternalLinkAlt size={10} /> Live
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    {project.status || "In Development"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/prashant-pandey-4"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border transition-all ${isDark
              ? "border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-white"
              : "border-zinc-300 text-zinc-500 hover:border-zinc-500 hover:text-zinc-900"
              }`}
          >
            <FaGithub size={14} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
