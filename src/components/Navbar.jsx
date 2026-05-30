import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["Home", "About", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/5 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            Anand.
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActive(link)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active === link ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {active === link && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                    />
                  )}
                  <span className="relative z-10">{link}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-5 py-2 text-sm font-semibold bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
            >
              Hire Me
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/5 px-4 py-4 flex flex-col gap-1 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => { setActive(link); setMenuOpen(false); }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active === link ? "bg-white/5 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-semibold text-center transition-colors"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
