import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const links = ["Home", "About", "Projects", "Experience", "Contact"];
const socials = [
  { icon: <FiGithub size={17} />, href: "https://github.com" },
  { icon: <FiLinkedin size={17} />, href: "https://linkedin.com" },
  { icon: <FiTwitter size={17} />, href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative border-t border-white/5"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="w-full px-4 sm:px-8 lg:px-16 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#home" className="text-xl font-bold gradient-text">Anand.</a>

          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-sm text-gray-500 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socials.map(({ icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition-all"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600 flex items-center justify-center gap-1">
          © 2026 Anand Prajapati. Made with <FiHeart className="text-purple-500" size={12} /> All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
