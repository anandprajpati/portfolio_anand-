import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { useState } from "react";

const recipientEmail = "anandvprajapati905@gmail.com";

const info = [
  { icon: <FiMail size={18} />, label: "Email", value: recipientEmail, href: `mailto:${recipientEmail}` },
  { icon: <FiGithub size={18} />, label: "GitHub", value: "github.com/anandprajpati", href: "https://github.com/anandprajpati" },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/anand-prajapati-346964243", href: "https://www.linkedin.com/in/anand-prajapati-346964243" },
  { icon: <FiMapPin size={18} />, label: "Location", value: "India", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailBody = [
      form.message,
      "",
      "------------------------------",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", recipientEmail);
    gmailUrl.searchParams.set("su", form.subject);
    gmailUrl.searchParams.set("body", emailBody);

    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Get in touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Let's Work Together</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm sm:text-base">
            Have a project in mind? I'd love to hear about it. Send me a message and let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-3 mb-8">
              {info.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-white/3 border border-white/8 rounded-2xl hover:border-purple-500/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-white hover:text-purple-400 transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm font-medium text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 border border-purple-500/20 rounded-2xl">
              <p className="text-sm text-gray-400 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
                Response time is usually within <span className="text-purple-400 font-semibold">24 hours</span>.
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Name</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="John Doe" required
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Email</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="john@email.com" required
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Subject</label>
                <input
                  name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Project Inquiry" required
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..." rows={5} required
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25"
              >
                {sent ? "Opening Gmail..." : <><FiSend size={16} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
