import { motion } from "framer-motion";
import { FiBriefcase, FiBook, FiCode } from "react-icons/fi";

const experience = [
  {
    year: "Nov 2025 — March 2026",
    role: "Full-Stack Developer Intern (MERN)",
    company: "Za Charity Feed Foundation",
    desc: "Built and maintained full-stack web applications using the MERN stack, contributed to charity management features, and collaborated with the team on delivering impactful solutions.",
  },
];

const education = [
  {
    year: "June 2023 — March 2026",
    degree: "BSc Computer Science",
    institute: "R.P Degree College",
  },
  {
    year: "April 2024 — Dec 2025",
    degree: "Diploma in Full Stack Web Development",
    institute: "Institute of Technology",
  },
];

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB / PostgreSQL", level: 80 },
  { name: "Tailwind CSS", level: 92 },
  { name: "TypeScript", level: 75 },
  { name: "Docker / DevOps", level: 65 },
];

export default function Journey() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">My Path</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Experience & Education</h2>
        </motion.div>

        {/* Row 1 — Experience + Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-12">

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <FiBriefcase className="text-purple-400" size={20} />
              <h3 className="text-lg sm:text-xl font-bold">Work Experience</h3>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />
              <div className="space-y-8">
                {experience.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="pl-10 relative"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#0d0d0d] border-2 border-purple-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    <span className="text-xs text-purple-400 font-mono font-semibold">{item.year}</span>
                    <h4 className="text-white font-bold mt-1 text-sm sm:text-base">{item.role}</h4>
                    <span className="text-sm text-gray-500">{item.company}</span>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <FiBook className="text-purple-400" size={20} />
              <h3 className="text-lg sm:text-xl font-bold">Education</h3>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />
              <div className="space-y-8">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="pl-10 relative"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#0d0d0d] border-2 border-indigo-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    </div>
                    <span className="text-xs text-indigo-400 font-mono font-semibold">{item.year}</span>
                    <h4 className="text-white font-bold mt-1 text-sm sm:text-base">{item.degree}</h4>
                    <span className="text-sm text-gray-500">{item.institute}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 — Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <FiCode className="text-purple-400" size={20} />
              <h3 className="text-lg sm:text-xl font-bold">Technical Skills</h3>
            </div>
            <div className="space-y-5">
              {skills.map(({ name, level }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">{name}</span>
                    <span className="text-purple-400 font-semibold">{level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
