"use client";
import { useTheme } from "../Theme";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  grade: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "AKS University",
    duration: "2022 – 2026",
    location: "Satna, Madhya Pradesh",
    grade: "CGPA: 7.1",
    description:
      "Studying Data Structures, Algorithms, Web Development, DBMS, OS, and Software Engineering. Active in coding competitions and technical events.",
  },
  {
    degree: "Higher Secondary (12th) — Science (PCM)",
    institution: "Doon Public School ",
    duration: "2020 – 2021",
    location: "Rewa, Madhya Pradesh",
    grade: "75%",
    description:
      "Completed 12th with Physics, Chemistry, and Mathematics.",
  },
];



const Education = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const tagBg = isDark ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-600";

  return (
    <section
      id="education"
      className={`py-20 ${isDark ? "bg-zinc-950" : "bg-zinc-50"}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className={`text-sm font-light mb-2 ${subText}`}>Academic background</p>
          <h2 className={`text-2xl sm:text-3xl font-light ${text} flex items-center gap-2.5`}>
            <GraduationCap className="w-6 h-6 text-zinc-400" />
            Education
          </h2>
          <div className={`mt-4 w-full h-px ${border}`} />
        </div>

        {/* Education Items */}
        <div className="flex flex-col">
          {educationData.map((edu, i) => (
            <div key={i} className={`py-6 border-b ${border} last:border-b-0`}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className={`text-base font-medium ${text}`}>{edu.degree}</h3>
                  <p className={`text-sm mt-0.5 ${subText}`}>{edu.institution} · {edu.location}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className={`text-xs px-2 py-1 rounded ${tagBg} font-medium`}>{edu.grade}</span>
                  <p className={`text-xs mt-1.5 ${subText}`}>{edu.duration}</p>
                </div>
              </div>
              <p className={`text-sm ${subText}`}>{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <p className={`text-xs font-medium uppercase tracking-widest mb-4 ${subText}`}>
            Certifications & Courses
          </p>

        </div>
      </div>
    </section>
  );
};

export default Education;
