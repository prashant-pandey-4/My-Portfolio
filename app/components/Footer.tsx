"use client";
import { useTheme } from "../Theme";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-zinc-500" : "text-zinc-400";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const logoColor = isDark ? "text-zinc-300" : "text-zinc-700";

  const links = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: FaGithub, href: "https://github.com/prashant-pandey-4", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/prashant-pandey01/", label: "LinkedIn" },
    { icon: MdEmail, href: "mailto:prashantpandey3103@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className={`border-t ${border} ${isDark ? "bg-black" : "bg-white"} py-8`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Left */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#home" className={`text-sm font-medium ${logoColor}`}>
              prashant.dev
            </a>
            <nav className="flex flex-wrap gap-5 justify-center">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`text-xs transition-colors hover:${isDark ? "text-zinc-300" : "text-zinc-700"} ${text}`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`transition-colors hover:${isDark ? "text-zinc-300" : "text-zinc-700"} ${text}`}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className={`border-t ${border} mt-6 pt-5`}>
          <p className={`text-xs text-center ${text}`}>
            © {new Date().getFullYear()} Prashant Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
