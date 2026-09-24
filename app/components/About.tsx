"use client";
import { useTheme } from "../Theme";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { User2 } from "lucide-react";

const stats = [
  { value: "3+", label: "Years of coding" },
  { value: "10+", label: "Projects built" },
  { value: "5+", label: "Tech stacks" },
  { value: "1", label: "Internship" },
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
              I&apos;m <span className={`font-medium ${text}`}>Prashant Pandey</span>, a Full-Stack
              Developer who builds production-ready web apps end-to-end — from intuitive UIs to
              scalable backends. I interned at{" "}
              <span className={`font-medium ${text}`}>Dollop Infotech</span> and have freelanced
              across the full dev lifecycle: requirements, architecture, deployment, and support.
            </p>
            <p className={`text-sm leading-7 ${subText}`}>
              Currently exploring Generative AI and AI agents to build intelligent, AI-powered
              applications that deliver real-world value.
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


      </div>
    </section>
  );
};

export default AboutSection;
