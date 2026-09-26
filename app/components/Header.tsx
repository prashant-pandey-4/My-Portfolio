"use client";
import { useTheme } from "../Theme";
import { MdArrowOutward } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const { mode } = useTheme();
  const [imgError, setImgError] = useState(false);
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const mutedText = isDark ? "text-zinc-500" : "text-zinc-400";

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center ${isDark ? "bg-black" : "bg-white"
        }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className={`text-sm font-light mb-4 flex items-center justify-center lg:justify-start gap-2 ${mutedText}`}>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </p>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl mb-2 font-light tracking-tight ${text}`}>
              Hi, I&apos;m Prashant Pandey
            </h1>
            <h2 className={`font-light text-lg sm:text-xl mb-6 ${subText}`}>
              Full-Stack Web Developer &amp; Software Engineer
            </h2>
            <p className={`text-sm leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 ${subText}`}>
              I build scalable full-stack web applications with clean architecture and intuitive UI.
              Specializing in Next.js, React, Node.js, and modern AI integrations. Open for freelance projects, full-time roles &amp; remote contracts.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${isDark
                  ? "border-zinc-600 text-zinc-200 hover:border-white hover:text-white"
                  : "border-zinc-300 text-zinc-700 hover:border-zinc-600 hover:text-zinc-900"
                  }`}
              >
                Get in touch <MdArrowOutward size={16} />
              </a>
              <a
                href="/Prashant_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${isDark
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-zinc-900 text-white hover:bg-zinc-700"
                  }`}
              >
                Resume <HiDownload size={16} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 justify-center lg:justify-start">
              <a
                href="https://github.com/prashant-pandey-4"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm flex items-center gap-1.5 transition-colors ${subText} hover:${isDark ? "text-white" : "text-zinc-900"}`}
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/prashant-pandey01/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm flex items-center gap-1.5 transition-colors ${subText} hover:${isDark ? "text-white" : "text-zinc-900"}`}
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className={`relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden border shadow-lg ${isDark ? "border-zinc-800 shadow-black/40" : "border-zinc-200 shadow-zinc-200/50"}`}>
              {!imgError ? (
                <Image
                  src="/dp/me.jpeg"
                  alt="Prashant Pandey"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className={`w-full h-full flex flex-col items-center justify-center ${isDark ? "bg-zinc-900" : "bg-zinc-100"}`}>
                  <span className={`text-5xl font-light ${isDark ? "text-zinc-500" : "text-zinc-300"}`}>PP</span>
                  <p className={`text-xs mt-3 text-center px-4 ${isDark ? "text-zinc-600" : "text-zinc-400"}`}>
                    Add photo to<br />
                    <code className="text-xs">public/dp/me.jpeg</code>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
