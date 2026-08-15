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
              Cloud, AI & Enterprise Technology
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
                I build at the intersection of <span className="text-[var(--accent)] font-semibold">cloud infrastructure, automation, intelligent applications, and enterprise technology</span> — combining hands-on experience in AWS, Linux, Python, AI/ML, and SAP S/4HANA. Electronics & Communication Engineering graduate with practical exposure to cloud environments, software development, and enterprise transportation management.
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
  <span className="text-white font-semibold">Cloud & Infrastructure:</span> Hands-on with AWS services including EC2, IAM, VPC, S3, CloudWatch, Lambda, Auto Scaling, Elastic Load Balancing, and CloudFormation, along with Linux server administration, shell scripting, and infrastructure automation.
</p>
            </motion.div>

            {/* SAP S/4HANA TM */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.35 }}
  viewport={{ once: true }}
>
  <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed text-justify">
    <span className="text-white font-semibold">Enterprise Logistics:</span> Hands-on training in SAP S/4HANA Transportation Management, covering organizational structures, master data, transportation networks, Freight Unit Building Rules (FUBR), Freight Units (FU), Freight Orders (FO), Transportation Cockpit, planning, resources, means of transport, Transportation Charge Management, and Freight Settlement. Also familiar with <span className="text-[var(--accent)] font-semibold">SAP SD & MM fundamentals, SD–TM integration, and SAP Business Network for Logistics (BN4L)</span>.
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
  <span className="text-white font-semibold">Automate & Engineer:</span> Building Python and shell-based automation solutions, working with Git workflows, cloud automation, infrastructure concepts, and practical software engineering principles to create reliable and maintainable solutions.
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
  <span className="text-white font-semibold">Make it Intelligent:</span> Developing Python-based AI applications using machine learning, Vision Transformers, LangChain, FAISS, Google Gemini, and Streamlit. Interested in prompt engineering and building intelligent applications that solve practical problems.
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
               Currently in pre-joining software engineering training at one of the world's largest global technology & consulting corporations — sharpening fundamentals before contributing to large-scale systems and growing within a high-performance global team.
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

