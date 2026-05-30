import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <div className="bg-[#0d0d0d] text-white min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </>
  );
}
