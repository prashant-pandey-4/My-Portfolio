"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Exploring from "./components/Exploring";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contactform from "./components/Contactform";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Header />
      <Experience />
      <Skills />
      <Exploring />
      <About />
      <Projects />
      <Education />
      <Contactform />
      <Footer />
    </main>
  );
}
