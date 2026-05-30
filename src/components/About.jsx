import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Get to know me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-5">
            A passionate <span className="gradient-text">Full-Stack Developer</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
            Hello! I'm Anand Prajapati, a passionate Full-Stack Developer from India. I love creating websites and web applications that are simple, fast, and easy to use.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Over the years, I've worked on different projects that have helped me improve my skills in frontend and backend development. I'm always curious about new technologies and enjoy learning something new every day. My goal is to build products that not only work well but also provide a great experience for users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
