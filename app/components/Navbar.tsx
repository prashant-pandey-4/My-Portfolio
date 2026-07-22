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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? scrolled
            ? "bg-black/90 border-b border-zinc-800 backdrop-blur-md"
            : "bg-black/60 backdrop-blur-sm"
          : scrolled
          ? "bg-white/90 border-b border-zinc-200 backdrop-blur-md"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className={`text-lg font-bold tracking-tight ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Prashant<span className="text-indigo-500">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`text-sm font-semibold transition-all px-2 py-1 rounded-md ${
                  isDark
                    ? "text-zinc-100 hover:text-white hover:bg-zinc-800/60"
                    : "text-zinc-800 hover:text-black hover:bg-zinc-100"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:prashantpandey3103@gmail.com"
              className={`hidden md:flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                isDark
                  ? "border-zinc-700 text-white bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-500"
                  : "border-zinc-300 text-zinc-800 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-400"
              }`}
            >
              Hire Me <MdArrowOutward size={13} />
            </a>
            <button
              onClick={() => Setmode(isDark ? "light" : "dark")}
              className={`p-2 rounded-full transition-all ${
                isDark
                  ? "text-zinc-200 hover:text-white hover:bg-zinc-800"
                  : "text-zinc-700 hover:text-black hover:bg-zinc-100"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
            </button>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden p-1.5 rounded-md ${
                isDark ? "text-white" : "text-zinc-900"
              }`}
              onClick={() => setSideOpen(!sideOpen)}
              aria-label="Toggle menu"
            >
              {sideOpen ? <RxCross2 size={22} /> : <RxHamburgerMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {sideOpen && (
        <div
          className={`md:hidden px-6 py-5 flex flex-col gap-4 border-t ${
            isDark
              ? "bg-black border-zinc-800"
              : "bg-white border-zinc-200"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setSideOpen(false)}
              className={`text-sm font-semibold transition-colors py-1 ${
                isDark ? "text-zinc-200 hover:text-white" : "text-zinc-800 hover:text-black"
              }`}
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
