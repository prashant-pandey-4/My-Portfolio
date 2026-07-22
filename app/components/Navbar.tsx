"use client";
import { useEffect, useState } from "react";
import { useTheme } from "../Theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "#home" },
  { title: "Experience", href: "#experience" },
  { title: "Skills", href: "#skills" },
  { title: "Exploring", href: "#exploring" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { mode, Setmode } = useTheme();
  const [sideOpen, setSideOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mode === "dark";

  const navBg = scrolled
    ? isDark
      ? "bg-black/80 backdrop-blur-md border-b border-zinc-800"
      : "bg-white/90 backdrop-blur-md border-b border-zinc-200"
    : "bg-transparent";

  const textColor = isDark ? "text-zinc-300" : "text-zinc-700";
  const logoColor = isDark ? "text-white" : "text-zinc-900";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className={`text-base font-medium tracking-tight ${logoColor}`}>
            Prashant.
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`text-sm underline-hover transition-colors ${textColor} hover:${isDark ? "text-white" : "text-zinc-900"}`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:prashantpandey3103@gmail.com"
              className={`hidden md:flex items-center gap-1 text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${isDark
                  ? "border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-white"
                  : "border-zinc-300 text-zinc-600 hover:border-zinc-500 hover:text-zinc-900"
                }`}
            >
              Hire Me <MdArrowOutward size={14} />
            </a>
            <button
              onClick={() => Setmode(isDark ? "light" : "dark")}
              className={`p-2 rounded-full transition-all ${isDark
                  ? "text-zinc-400 hover:text-white"
                  : "text-zinc-500 hover:text-zinc-900"
                }`}
              aria-label="Toggle theme"
            >
              {isDark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
            </button>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden p-1 ${textColor}`}
              onClick={() => setSideOpen(!sideOpen)}
              aria-label="Toggle menu"
            >
              {sideOpen ? <RxCross2 size={20} /> : <RxHamburgerMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {sideOpen && (
        <div
          className={`md:hidden px-6 py-5 flex flex-col gap-5 ${isDark
              ? "bg-black border-t border-zinc-800"
              : "bg-white border-t border-zinc-200"
            }`}
        >
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setSideOpen(false)}
              className={`text-sm transition-colors ${textColor}`}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
