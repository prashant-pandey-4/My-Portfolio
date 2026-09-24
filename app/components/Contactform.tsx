"use client";
import { useTheme } from "../Theme";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Mail } from "lucide-react";

const Contactform = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const cardBg = isDark ? "bg-zinc-900/40 hover:bg-zinc-900/70" : "bg-zinc-50 hover:bg-zinc-100";

  const links = [
    {
      icon: FaGithub,
      label: "GitHub",
      sublabel: "github.com/prashant-pandey-4",
      href: "https://github.com/prashant-pandey-4",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      sublabel: "linkedin.com/in/prashant-pandey01",
      href: "https://linkedin.com/in/prashant-pandey01/",
    },
    {
      icon: MdEmail,
      label: "Email",
      sublabel: "prashantpandey3103@gmail.com",
      href: "mailto:prashantpandey3103@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className={`text-sm font-light mb-2 ${subText}`}>Let&apos;s work together</p>
          <h2 className={`text-3xl font-light ${text} flex items-center gap-3`}>
            <Mail className="w-7 h-7 text-zinc-400" />
            Contact
          </h2>
          <div className={`mt-4 w-full h-px ${border}`} />
        </div>

        {/* Tagline */}
        <p className={`text-sm leading-relaxed mb-8 ${subText}`}>
          Have a project in mind or want to collaborate? Feel free to reach out — I&apos;m
          currently open to freelance work and full-time opportunities.
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col gap-3">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-4 px-5 py-4 rounded-xl border transition-all duration-200 group ${cardBg} ${border}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}>
                    <Icon size={17} className={subText} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${text}`}>{item.label}</p>
                    <p className={`text-xs ${subText}`}>{item.sublabel}</p>
                  </div>
                </div>
                <MdArrowOutward
                  size={16}
                  className={`${subText} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`}
                />
              </a>
            );
          })}
        </div>

        {/* Location */}
        <div className={`flex items-center gap-2 mt-6 text-sm ${subText}`}>
          <MdLocationOn size={15} />
          <span>Based in India · Available remotely</span>
        </div>

      </div>
    </section>
  );
};

export default Contactform;
