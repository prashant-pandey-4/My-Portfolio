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
  status?: string;
  tech: { name: string }[];
}

const projects: Project[] = [
  {
    title: "AI-Powered Learning Management System",
    about:
      "SkillUP is a free, open-source Learning Management System built for students and developers who deserve better access to quality education. The goal is simple — take the best learning resources available and present them in a clean, structured format that actually makes sense. No paywalls, no clutter. Just focused learning, powered by AI. With a built-in Gemini AI mentor to resolve doubts instantly, multi-quality video streaming, and a fully organized course library, SkillUP is built to make self-learning feel less overwhelming and more empowering.",
    date: "September 2026",
    code: "https://github.com/prashant-pandey-4/Ai-powered-lms",
    live: "https://skillup-ailms.vercel.app/",
    image: "/Ai-Lms.png",
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
      "Job portal connecting employers and job seekers with job listings, applicant tracking, resume uploads, recruiter & seeker dashboards, and advanced search filters.",
    date: "March 2025",
    code: "https://github.com/prashant-pandey-4/Job-Portal.git",
    live: "https://job-portal-psi-ochre.vercel.app/",
    image: "/job-portal-screenshot.png",
    tech: [
      { name: "React.js" },
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
      "High-performance fitness & gym landing page with modern UI design, featuring membership plans, trainer profiles, training programs, and smooth responsive layouts.",
    date: "August 2025",
    code: "https://github.com/prashant-pandey-4",
    live: "https://ironpeak-gym-landing-page.vercel.app/",
    image: "/gym-fitness-landingPage.png",
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

  return (
    <section
      id="projects"
      className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className={`text-sm font-light mb-2 ${subText}`}>Things I&apos;ve built</p>
          <h2 className={`text-3xl font-light ${text} flex items-center gap-3`}>
            <FolderGit2 className="w-7 h-7 text-zinc-400" />
            Projects
          </h2>
          <div className={`mt-4 w-full h-px ${border}`} />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group rounded-xl border overflow-hidden flex flex-col transition-all duration-200 ${cardBg} ${border}`}
            >
              {/* Screenshot */}
              {project.image && (
                <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t ${
                      isDark ? "from-zinc-900/90 to-transparent" : "from-white/90 to-transparent"
                    }`}
                  />
                  <span className="absolute top-2.5 right-2.5 flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-green-500/90 text-white font-medium backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Live
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`text-sm font-semibold leading-snug ${text}`}>
                    {project.title}
                  </h3>
                  <span className={`text-[11px] flex-shrink-0 mt-0.5 ${subText}`}>
                    {project.date}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed flex-1 ${subText}`}>
                  {project.about}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t.name}
                      className={`text-[11px] px-2 py-0.5 rounded font-mono ${tagBg}`}
                    >
                      {t.name}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className={`text-[11px] px-2 py-0.5 rounded font-mono ${tagBg}`}>
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${btnBg}`}
                  >
                    <FaGithub size={12} /> Code
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${solidBtn}`}
                    >
                      <FaExternalLinkAlt size={10} /> Live Demo
                    </a>
                  )}
                </div>
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
            className={`inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border transition-all ${
              isDark
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
