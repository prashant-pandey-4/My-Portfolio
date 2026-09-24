"use client";
import { useTheme } from "../Theme";
import { Briefcase, Code2, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ExpItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  typeColor: string;
  points: string[];
  tech: string[];
  link: string;
  logo?: string;
}

const experiences: ExpItem[] = [
  {
    company: "Dollop Infotech",
    role: "Full-Stack Developer Intern",
    duration: "Jan 2026 – Apr 2026",
    location: "Indore",
    type: "Internship",
    typeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    link: "https://dollopinfotech.com",
    logo: "/dollop-logo.png",
    points: [
      "Worked on IIOC project, an ed-tech platform, building core frontend features.",
      "Developed frontend using Next.js and TypeScript for type-safe, scalable code.",
      "Integrated REST APIs using Axios for data fetching and backend communication.",
      "Managed state using Redux for complex, multi-component data flows.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    company: "Self-Employed",
    role: "Freelance Full-Stack Developer",
    duration: "2024 – Present",
    location: "Remote",
    type: "Freelance",
    typeColor: "bg-green-500/10 text-green-500 border-green-500/20",
    link: "#",
    points: [
      "Built a prepaid meal token management system for a restaurant in Indore, replacing manual paper-based billing.",
      "Built thermal receipt printing, token renewal flows, and daily billing operations.",
      "Developed an analytics dashboard with real-time revenue tracking and customer records.",
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
  },
];

const Experience = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const cardBg = isDark
    ? "bg-zinc-900/40 hover:bg-zinc-900/70"
    : "bg-white hover:bg-zinc-50";
  const tagBg = isDark
    ? "bg-zinc-800 text-zinc-300"
    : "bg-zinc-100 text-zinc-600";
  const logoBg = isDark
    ? "bg-zinc-800 border-zinc-700"
    : "bg-zinc-100 border-zinc-200";

  return (
    <section
      id="experience"
      className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className={`text-sm font-light mb-2 ${subText}`}>Where I&apos;ve worked</p>
          <h2 className={`text-3xl font-light ${text} flex items-center gap-3`}>
            <Briefcase className="w-7 h-7 text-zinc-400" />
            Experience
          </h2>
          <div className={`mt-4 w-full h-px ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`} />
        </div>

        {/* 2-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`rounded-xl border p-5 flex flex-col gap-4 transition-all duration-200 ${cardBg} ${border}`}
            >
              {/* Top: Logo + Company */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  <div className={`w-11 h-11 rounded-lg border flex items-center justify-center flex-shrink-0 overflow-hidden ${logoBg}`}>
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={36}
                        height={36}
                        className="object-contain w-9 h-9 p-0.5"
                      />
                    ) : (
                      <Code2 size={20} className={subText} />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-base font-semibold ${text}`}>{exp.company}</span>
                      {exp.link !== "#" && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${subText} hover:${isDark ? "text-white" : "text-zinc-900"} transition-colors`}
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                    <p className={`text-sm ${subText}`}>{exp.role}</p>
                  </div>
                </div>

                <span className={`text-[11px] px-2 py-0.5 rounded-full border font-medium flex-shrink-0 ${exp.typeColor}`}>
                  {exp.type}
                </span>
              </div>

              {/* Meta: duration + location */}
              <div className={`flex items-center gap-3 text-xs ${subText}`}>
                <span className="flex items-center gap-1">
                  <Briefcase size={11} /> {exp.duration}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} /> {exp.location}
                </span>
              </div>

              {/* Bullet points */}
              <ul className={`text-sm space-y-2 flex-1 ${subText}`}>
                {exp.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className={`text-xs px-2.5 py-1 rounded-md font-mono ${tagBg}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
