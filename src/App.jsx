import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  // Smooth scrolling
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {
      const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };

      anchor.addEventListener("click", handleClick);

      // cleanup on unmount
      return () => anchor.removeEventListener("click", handleClick);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
