"use client";
import { useState } from "react";
import { useTheme } from "../Theme";
import { ChevronDown, Briefcase } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

interface ExpItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  points: string[];
  tech: string[];
  link: string;
}

const experiences: ExpItem[] = [
  {
    company: "Dollop Infotech",
    role: "Full-Stack Developer Intern",
    duration: "Jan 2026 – Apr 2026",
    location: "Indore",
    type: "Internship",
    link: "https://dollopinfotech.com",
    points: [
      "Worked on IIOC project , an ed-tech platform, building core frontend features.",
      "Developed frontend using Next.js and TypeScript, ensuring type-safe and scalable code.",
      "Integrated REST APIs using Axios for data fetching and backend communication.",
      "Managed application state using Redux for complex, multi-component data flows.",
      "Collaborated with backend team to align frontend requirements with Node.js and MongoDB-based APIs.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    company: "Self-Employed",
    role: "Freelance Full-Stack Developer",
    duration: "2024 – Present",
    location: "Remote",
    type: "Freelance",
    link: "#",
    points: [
      "Built a customer management system (prepaid meal token management system) for a restaurant based in Indore, replacing a fully manual paper-based billing workflow.",
      "Built thermal receipt printing integration, token renewal flows, and daily billing operations.",
      "Developed an analytics dashboard with real-time revenue tracking, token usage stats, and active customer records.",
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
  },
];

const Experience = () => {
  const { mode } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const hoverBg = isDark ? "hover:bg-zinc-900" : "hover:bg-zinc-50";
  const tagBg = isDark ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-600";

  return (
    <section
      id="experience"
      className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className={`text-sm font-light mb-2 ${subText}`}>Where I&apos;ve worked</p>
          <h2 className={`text-2xl sm:text-3xl font-light ${text} flex items-center gap-2.5`}>
            <Briefcase className="w-6 h-6 text-zinc-400" />
            Experience
          </h2>
          <div className={`mt-4 w-full h-px ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`} />
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`border-b ${border}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between py-5 text-left transition-colors ${hoverBg} px-2 rounded-lg -mx-2`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className={`text-base font-medium ${text}`}>{exp.company}</span>
                    <span className={`text-sm font-light ${subText}`}>{exp.role}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${tagBg} w-fit`}>
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <span className={`text-xs hidden sm:block ${subText}`}>{exp.duration}</span>
                    <ChevronDown
                      size={16}
                      className={`${subText} transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pb-6 px-2">
                    <div className={`flex items-center gap-3 mb-4 text-xs ${subText}`}>
                      <span>{exp.duration}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                      {exp.link !== "#" && (
                        <>
                          <span>·</span>
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1 hover:${isDark ? "text-white" : "text-zinc-900"} transition-colors`}
                          >
                            Visit <MdArrowOutward size={11} />
                          </a>
                        </>
                      )}
                    </div>

                    <ul className={`text-sm space-y-2 mb-5 ${subText}`}>
                      {exp.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className={`text-xs px-2 py-1 rounded font-mono ${tagBg}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
