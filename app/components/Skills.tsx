"use client";
import { useTheme } from "../Theme";
import { IconType } from "react-icons";
import { Wrench } from "lucide-react";
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJava,
  FaDocker,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress, SiMongodb, SiPostgresql, SiTypescript, SiRedux,
  SiSocketdotio, SiPostman, SiVercel, SiCloudinary, SiPrisma,
  SiFastapi, SiPython,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaKey } from "react-icons/fa";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-sky-400" },
      { name: "Next.js", icon: RiNextjsFill, color: "" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-teal-400" },
      { name: "Redux", icon: SiRedux, color: "text-purple-500" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
      { name: "Socket.io", icon: SiSocketdotio, color: "" },
      { name: "REST APIs", icon: SiPostman, color: "text-orange-400" },
      { name: "OAuth 2.0", icon: FaKey, color: "text-yellow-500" },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Prisma", icon: SiPrisma, color: "" },
      { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-400" },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "C++", icon: TbBrandCpp, color: "text-blue-600" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "" },
      { name: "Docker", icon: FaDocker, color: "text-blue-400" },
      { name: "Vercel", icon: SiVercel, color: "" },
    ],
  },
];

const Skills = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const cardBg = isDark ? "bg-zinc-900/50" : "bg-zinc-50";
  const skillBg = isDark
    ? "bg-zinc-900 border-zinc-800 hover:border-zinc-600"
    : "bg-white border-zinc-200 hover:border-zinc-400";

  return (
    <section
      id="skills"
      className={`py-20 ${isDark ? "bg-zinc-950" : "bg-zinc-50"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className={`text-sm font-light mb-2 ${subText}`}>Technologies I work with</p>
          <h2 className={`text-2xl sm:text-3xl font-light ${text} flex items-center gap-2.5`}>
            <Wrench className="w-6 h-6 text-zinc-400" />
            Skills
          </h2>
          <div className={`mt-4 w-full h-px ${border}`} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-xl border p-5 ${cardBg} ${border}`}
            >
              <h3 className={`text-xs font-medium uppercase tracking-widest mb-4 ${subText}`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center gap-1.5 p-2.5 rounded-lg border transition-all duration-200 cursor-default group ${skillBg}`}
                    >
                      <Icon
                        size={24}
                        className={`${skill.color || (isDark ? "text-zinc-300" : "text-zinc-700")} group-hover:scale-110 transition-transform duration-200`}
                      />
                      <span className={`text-[10px] text-center leading-tight ${subText}`}>
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
