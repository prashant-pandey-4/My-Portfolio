"use client";
import { useTheme } from "../Theme";
import { useState } from "react";
import { MdEmail, MdLocationOn, MdSend, MdCheckCircle } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Mail } from "lucide-react";

const Contactform = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const text = isDark ? "text-white" : "text-zinc-900";
  const subText = isDark ? "text-zinc-400" : "text-zinc-500";
  const border = isDark ? "border-zinc-800" : "border-zinc-200";
  const inputBg = isDark
    ? "bg-zinc-900 border-zinc-700 text-white placeholder-zinc-600 focus:border-zinc-400"
    : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-500";
  const btnBg = isDark
    ? "bg-white text-black hover:bg-zinc-200"
    : "bg-zinc-900 text-white hover:bg-zinc-700";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socials = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/prashant-pandey-4" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/prashant-pandey01/" },
    { icon: MdEmail, label: "Email", href: "mailto:prashantpandey3103@gmail.com" },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className={`text-sm font-light mb-2 ${subText}`}>Let&apos;s work together</p>
          <h2 className={`text-2xl sm:text-3xl font-light ${text} flex items-center gap-2.5`}>
            <Mail className="w-6 h-6 text-zinc-400" />
            Contact
          </h2>
          <div className={`mt-4 w-full h-px ${border}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <p className={`text-sm leading-relaxed ${subText}`}>
                Have a project in mind or want to collaborate? I&apos;m currently open
                to freelance work and full-time opportunities.
              </p>
            </div>

            <div className={`space-y-4`}>
              <div className={`flex items-center gap-3 text-sm ${subText}`}>
                <MdEmail size={15} className="flex-shrink-0" />
                <a href="mailto:prashantpandey3103@gmail.com" className={`hover:${isDark ? "text-white" : "text-zinc-900"} transition-colors break-all`}>
                  prashantpandey3103@gmail.com
                </a>
              </div>
              <div className={`flex items-center gap-3 text-sm ${subText}`}>
                <MdLocationOn size={15} className="flex-shrink-0" />
                <span>India</span>
              </div>
            </div>

            <div>
              <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${subText}`}>
                Find me on
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm transition-colors ${subText} hover:${isDark ? "text-white" : "text-zinc-900"}`}
                    >
                      <Icon size={14} />
                      {s.label}
                      <MdArrowOutward size={12} className="ml-auto" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <MdCheckCircle size={44} className={subText} />
                <h3 className={`text-lg font-light ${text}`}>Message sent</h3>
                <p className={`text-sm text-center ${subText}`}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs uppercase tracking-widest mb-1.5 block ${subText}`}>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${inputBg}`}
                    />
                  </div>
                  <div>
                    <label className={`text-xs uppercase tracking-widest mb-1.5 block ${subText}`}>Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${inputBg}`}
                    />
                  </div>
                </div>
                <div>
                  <label className={`text-xs uppercase tracking-widest mb-1.5 block ${subText}`}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What&apos;s this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${inputBg}`}
                  />
                </div>
                <div>
                  <label className={`text-xs uppercase tracking-widest mb-1.5 block ${subText}`}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all resize-none ${inputBg}`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all disabled:opacity-50 ${btnBg}`}
                >
                  {loading ? (
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                  ) : (
                    <>Send Message <MdSend size={14} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
