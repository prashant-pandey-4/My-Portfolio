"use client";
import { useTheme } from "../Theme";
import { FaCode, FaServer, FaDatabase, FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { User2 } from "lucide-react";

const stats = [
  { value: "2+", label: "Years of coding" },
  { value: "10+", label: "Projects built" },
  { value: "5+", label: "Tech stacks" },
  { value: "1", label: "Internship" },
];

const interests = [
  {
    icon: FaCode,
    title: "Frontend",
    desc: "Building pixel-perfect UIs with React & Next.js. I care deeply about UX, performance, and accessibility.",
  },
  {
    icon: FaServer,
    title: "Backend",
    desc: "Designing RESTful APIs and real-time systems with Node.js, Express, and FastAPI.",
  },
  {
    icon: FaDatabase,
    title: "Database",
    desc: "Structuring data with MongoDB and PostgreSQL. Experience with Prisma ORM and complex queries.",
  },
];

const AboutSection = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const cardBg = isDark ? "bg-zinc-900/50" : "bg-zinc-50";
  const mutedBg = isDark ? "bg-zinc-900" : "bg-white";

  return (
    <section
      className={`py-20 ${isDark ? "bg-zinc-950" : "bg-zinc-50"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className={`text-sm font-light mb-2 ${subText}`}>Who I am</p>
          <h2 className={`text-2xl sm:text-3xl font-light ${text} flex items-center gap-2.5`}>
            <User2 className="w-6 h-6 text-zinc-400" />
            About
          </h2>
          <div className={`mt-4 w-full h-px ${border}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left — Bio */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <p className={`text-sm leading-7 ${subText}`}>
              I&apos;m <span className={`font-medium ${text}`}>Prashant Pandey</span>, a 22-year-old
              Full-Stack Developer with a strong understanding of designing and building
              production-ready web applications. I enjoy building end-to-end solutions — from
              designing intuitive UIs to engineering robust, scalable backends.
            </p>
            <p className={`text-sm leading-7 ${subText}`}>
              I&apos;ve worked as a Full-Stack Developer Intern at{" "}
              <span className={`font-medium ${text}`}>Dollop Infotech</span>, where I built
              production-grade applications using Next.js, Node.js, and MongoDB. Alongside that,
              I&apos;ve freelanced on multiple client projects, sharpening my skills across the
              full development lifecycle — requirements, architecture, deployment, and support.
            </p>
            <p className={`text-sm leading-7 ${subText}`}>
              I&apos;m passionate about creating scalable, maintainable, and user-focused software,
              with a deep understanding of application architecture and real-world development
              practices. I enjoy solving complex problems by focusing on clean system design rather
              than just writing code.
            </p>
            <p className={`text-sm leading-7 ${subText}`}>
              Currently exploring the AI ecosystem — including Generative AI, AI agents, and modern
              AI application frameworks — with the goal of building intelligent, AI-powered web
              applications that deliver practical, real-world value.
            </p>

            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/prashant-pandey-4"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-sm transition-colors ${subText} hover:${isDark ? "text-white" : "text-zinc-900"}`}
              >
                <FaGithub size={14} /> GitHub <MdArrowOutward size={12} />
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className={`grid grid-cols-2 gap-3`}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`rounded-xl border p-4 ${cardBg} ${border}`}
                >
                  <p className={`text-2xl font-light ${text} mb-1`}>{s.value}</p>
                  <p className={`text-xs ${subText}`}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Currently learning/open to work */}
            <div className={`rounded-xl border p-4 ${mutedBg} ${border} mt-1`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className={`text-xs font-medium ${text}`}>Open to opportunities</p>
              </div>
              <p className={`text-xs ${subText}`}>
                Available for full-time roles, and freelance projects.
              </p>
            </div>
          </div>
        </div>

        {/* Interests / Focus areas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-xl border p-5 ${cardBg} ${border}`}
              >
                <Icon size={18} className={`mb-3 ${isDark ? "text-zinc-400" : "text-zinc-500"}`} />
                <h3 className={`text-sm font-medium mb-2 ${text}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${subText}`}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
