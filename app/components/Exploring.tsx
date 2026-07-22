"use client";
import { useTheme } from "../Theme";
import { IconType } from "react-icons";
import { Sparkles, Compass } from "lucide-react";
import { Cpu, Bot, Network, Server, Database } from "lucide-react";
import { FaAws } from "react-icons/fa";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
  desc: string;
}

interface ExploreCategory {
  title: string;
  subtitle: string;
  items: TechItem[];
}

const exploreCategories: ExploreCategory[] = [
  {
    title: "AI Ecosystem & GenAI",
    subtitle: "Building intelligent & autonomous applications",
    items: [
      {
        name: "Generative AI",
        icon: Cpu as IconType,
        color: "text-purple-400",
        desc: "LLM integration & RAG",
      },
      {
        name: "AI Agents",
        icon: Bot as IconType,
        color: "text-emerald-400",
        desc: "Autonomous agent workflows",
      },
      {
        name: "LangChain / LangGraph",
        icon: Network as IconType,
        color: "text-blue-400",
        desc: "Multi-agent orchestration",
      },
      {
        name: "OpenAI & Gemini API",
        icon: Cpu as IconType,
        color: "text-teal-400",
        desc: "API integration & function calling",
      },
    ],
  },
  {
    title: "Cloud & High Performance Systems",
    subtitle: "Scaling backend infrastructure & caching",
    items: [
      {
        name: "AWS Services",
        icon: FaAws as IconType,
        color: "text-amber-500",
        desc: "EC2, S3, Lambda & deployment",
      },
      {
        name: "Redis",
        icon: Database as IconType,
        color: "text-red-500",
        desc: "Caching & pub/sub queues",
      },
    ],
  },
];

const Exploring = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const cardBg = isDark ? "bg-zinc-900/40" : "bg-zinc-50";
  const itemBg = isDark
    ? "bg-zinc-900 border-zinc-800/80 hover:border-zinc-600"
    : "bg-white border-zinc-200 hover:border-zinc-400";

  return (
    <section
      id="exploring"
      className={`py-16 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1 text-xs font-mono uppercase tracking-widest text-indigo-400">
            <Sparkles className="w-4 h-4 animate-pulse text-indigo-400" />
            Continuous Learning
          </div>
          <h2 className={`text-2xl sm:text-3xl font-light ${text} flex items-center gap-2.5`}>
            <Compass className="w-6 h-6 text-zinc-400" />
            Currently Exploring
          </h2>
          <div className={`mt-4 w-full h-px ${border}`} />
        </div>

        {/* Explore Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploreCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-xl border p-5 ${cardBg} ${border}`}
            >
              <div className="mb-4">
                <h3 className={`text-sm font-medium ${text}`}>
                  {category.title}
                </h3>
                <p className={`text-xs ${subText} mt-0.5`}>
                  {category.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 cursor-default group ${itemBg}`}
                    >
                      <div className="p-2 rounded-md bg-zinc-800/50 flex-shrink-0 mt-0.5">
                        <Icon
                          size={20}
                          className={`${item.color} group-hover:scale-110 transition-transform duration-200`}
                        />
                      </div>
                      <div>
                        <h4 className={`text-xs font-medium ${text} leading-tight`}>
                          {item.name}
                        </h4>
                        <p className={`text-[10px] ${subText} mt-1 leading-snug`}>
                          {item.desc}
                        </p>
                      </div>
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

export default Exploring;
