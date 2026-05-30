import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const EcommercePreview = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="200" fill="url(#eg)" />
    <defs>
      <linearGradient id="eg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#312e81" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Navbar bar */}
    <rect x="20" y="18" width="360" height="28" rx="6" fill="#ffffff08" />
    <rect x="32" y="26" width="50" height="12" rx="3" fill="#a855f7" opacity="0.8" />
    <rect x="290" y="26" width="40" height="12" rx="3" fill="#ffffff15" />
    <rect x="340" y="26" width="28" height="12" rx="3" fill="#ffffff15" />
    {/* Product cards */}
    <rect x="20" y="58" width="108" height="120" rx="8" fill="#ffffff08" />
    <rect x="20" y="58" width="108" height="72" rx="8" fill="#7c3aed30" />
    <rect x="30" y="140" width="60" height="8" rx="2" fill="#ffffff40" />
    <rect x="30" y="154" width="40" height="8" rx="2" fill="#a855f7" opacity="0.8" />
    <rect x="146" y="58" width="108" height="120" rx="8" fill="#ffffff08" />
    <rect x="146" y="58" width="108" height="72" rx="8" fill="#4f46e530" />
    <rect x="156" y="140" width="60" height="8" rx="2" fill="#ffffff40" />
    <rect x="156" y="154" width="40" height="8" rx="2" fill="#a855f7" opacity="0.8" />
    <rect x="272" y="58" width="108" height="120" rx="8" fill="#ffffff08" />
    <rect x="272" y="58" width="108" height="72" rx="8" fill="#6d28d930" />
    <rect x="282" y="140" width="60" height="8" rx="2" fill="#ffffff40" />
    <rect x="282" y="154" width="40" height="8" rx="2" fill="#a855f7" opacity="0.8" />
    {/* Cart icon top right */}
    <circle cx="370" cy="32" r="8" fill="#a855f7" opacity="0.6" />
    <text x="367" y="36" fontSize="9" fill="white" fontWeight="bold">3</text>
  </svg>
);

const LMSPreview = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="200" fill="url(#lg)" />
    <defs>
      <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#312e81" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Sidebar */}
    <rect x="20" y="18" width="90" height="164" rx="8" fill="#ffffff06" />
    <rect x="30" y="30" width="50" height="10" rx="3" fill="#a855f7" opacity="0.8" />
    <rect x="30" y="48" width="65" height="8" rx="2" fill="#ffffff20" />
    <rect x="30" y="62" width="55" height="8" rx="2" fill="#ffffff15" />
    <rect x="30" y="76" width="60" height="8" rx="2" fill="#ffffff15" />
    <rect x="30" y="90" width="50" height="8" rx="2" fill="#ffffff15" />
    {/* Main content */}
    <rect x="124" y="18" width="256" height="40" rx="8" fill="#ffffff08" />
    <rect x="134" y="28" width="120" height="10" rx="3" fill="#ffffff30" />
    <rect x="134" y="42" width="80" height="6" rx="2" fill="#ffffff15" />
    {/* Course cards */}
    <rect x="124" y="68" width="120" height="114" rx="8" fill="#ffffff08" />
    <rect x="124" y="68" width="120" height="60" rx="8" fill="#4f46e530" />
    <rect x="134" y="138" width="70" height="8" rx="2" fill="#ffffff30" />
    <rect x="134" y="152" width="50" height="8" rx="2" fill="#ffffff15" />
    {/* Progress bar */}
    <rect x="134" y="166" width="100" height="6" rx="3" fill="#ffffff10" />
    <rect x="134" y="166" width="65" height="6" rx="3" fill="#a855f7" opacity="0.8" />
    <rect x="256" y="68" width="124" height="114" rx="8" fill="#ffffff08" />
    <rect x="256" y="68" width="124" height="60" rx="8" fill="#7c3aed30" />
    <rect x="266" y="138" width="70" height="8" rx="2" fill="#ffffff30" />
    <rect x="266" y="152" width="50" height="8" rx="2" fill="#ffffff15" />
    <rect x="266" y="166" width="104" height="6" rx="3" fill="#ffffff10" />
    <rect x="266" y="166" width="40" height="6" rx="3" fill="#a855f7" opacity="0.8" />
  </svg>
);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce app with authentication, cart, payments via Stripe, and an admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#", live: "#",
    border: "hover:border-purple-500/50",
    Preview: EcommercePreview,
  },
  {
    title: "LMS Management System",
    description: "A full-featured learning management system with course creation, student enrollment, progress tracking, and quizzes.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    github: "#", live: "#",
    border: "hover:border-indigo-500/50",
    Preview: LMSPreview,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">My Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group bg-[#111111] border border-white/8 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${p.border}`}
            >
              {/* SVG Preview */}
              <div className="h-44 sm:h-48 overflow-hidden">
                <p.Preview />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span key={s} className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-medium">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a href={p.github} className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                    <FiGithub size={15} /> Source Code
                  </a>
                  <a href={p.live} className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors">
                    <FiExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
