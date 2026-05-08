import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="trend-section w-full relative font-sans py-12 sm:py-14 md:py-16"
      aria-label="About me"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 opacity-20 blur-[100px]" 
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 opacity-15 blur-[120px]" 
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <div className="tech-label text-[var(--accent)] text-xs sm:text-sm font-mono tracking-widest">
              02 // ABOUT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Cloud Infrastructure & DevOps
            </h2>
          </div>
        </motion.div>

        {/* Main content card */}
        <motion.div
          className="trend-card backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Decorative top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent"></div>
          
          <div className="space-y-5 sm:space-y-6 md:space-y-8 max-w-3xl mx-auto">
            {/* Main description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed text-justify">
                I build at the intersection of <span className="text-[var(--accent)] font-semibold">cloud systems, automation, and intelligent applications</span> — the skill stack modern engineering teams are actively hiring for. Electronics & Communication Engineering graduate with hands-on experience deploying and managing cloud environments.
              </p>
            </motion.div>

            {/* AWS & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed text-justify">
                <span className="text-white font-semibold">Infrastructure First:</span> Hands-on with AWS infrastructure (EC2, IAM, VPC, S3, CloudWatch) and Linux server administration with 15+ real-world cloud projects. Building shell scripts and managing production environments across multiple cloud deployments.
              </p>
            </motion.div>

            {/* DevOps & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed text-justify">
                <span className="text-white font-semibold">Automate Everything:</span> CI/CD pipelines, Git workflows, and DevOps practices. Bridging the gap between development and operations through infrastructure automation and intelligent system design.
              </p>
            </motion.div>

            {/* AI & Development */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed text-justify">
                <span className="text-white font-semibold">Make it Intelligent:</span> Python-based systems, ML fundamentals, and prompt engineering. Applying machine learning to practical problems and engineering intelligent automation solutions.
              </p>
            </motion.div>

            {/* Certified & Recognition */}
            <motion.div
              className="pt-4 sm:pt-6 border-t border-white/10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <p className="text-[var(--accent)] text-sm sm:text-base md:text-lg font-semibold">
                ✦ Certified across multiple domains | McKinsey.org Forward Program ✦
              </p>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-3 leading-relaxed text-justify">
                Currently transitioning into full-time engineering, focused on contributing to large-scale systems and growing within high-performance teams.
              </p>
            </motion.div>

            {/* Highlight stats */}
            <motion.div
              className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                <p className="text-lg sm:text-2xl font-bold text-[var(--accent)]">15+</p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">AWS Projects</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                <p className="text-lg sm:text-2xl font-bold text-[var(--accent)]">AWS</p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">Cloud</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                <p className="text-lg sm:text-2xl font-bold text-[var(--accent)]">5+</p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">Languages</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

