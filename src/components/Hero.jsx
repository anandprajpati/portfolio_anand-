import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from "react-icons/fi";
import heroImg from "../assets/portfolioimg.jpeg";

const roles = ["Full-Stack Developer", "React Specialist", "Node.js Developer", "UI/UX Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const socials = [
    { icon: <FiGithub size={20} />, href: "https://github.com" },
    { icon: <FiLinkedin size={20} />, href: "https://linkedin.com" },
    { icon: <FiTwitter size={20} />, href: "https://twitter.com" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-28 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight mb-4"
          >
            Hi, I'm <br />
            <span className="gradient-text">Anand Prajapati</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-400 font-medium mb-6 h-8"
          >
            <span className="text-purple-400">{displayed}</span>
            <span className="animate-pulse text-purple-400">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 leading-relaxed mb-8 max-w-lg text-base sm:text-lg"
          >
            I build modern, scalable web applications with clean code and pixel-perfect UI.
            Passionate about creating experiences that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/15 hover:border-purple-500/50 rounded-xl font-semibold text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
            >
              <FiDownload size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4"
          >
            {socials.map(({ icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 blur-2xl opacity-30 scale-110" />
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 2xl:w-[420px] 2xl:h-[420px] rounded-full border-2 border-purple-500/30 overflow-hidden bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={heroImg} alt="Anand Prajapati" className="w-full h-full object-cover object-top" />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#1a1a2e] border border-white/10 rounded-2xl px-3 py-2 text-xs sm:text-sm font-semibold shadow-xl whitespace-nowrap"
            >
              💻 Open to Work
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs"
      >
        <span>Scroll down</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
}
