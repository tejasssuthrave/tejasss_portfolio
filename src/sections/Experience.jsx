import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Cloud Intern",
    company: "ITSN",
    duration: "Oct 2025 - Apr 2026",
    location: "Remote, Bengaluru",
    description: [
      "Designed and deployed AWS cloud infrastructure solutions including EC2 instances, S3 buckets, and RDS databases for enterprise applications.",
      "Gained foundational Linux administration skills including user management, file systems, permissions, and shell scripting for system automation.",
      "Implemented AWS Lambda functions and API Gateway integrations to build scalable serverless architectures.",
      "Configured VPC, security groups, and IAM policies to ensure secure and isolated cloud environments.",
      "Monitored cloud resources using CloudWatch and optimized costs through AWS best practices and resource management strategies."
    ],
  },
  {
    role: "Student Ambassador",
    company: "E-Cell, IIT Guwahati",
    duration: "Nov 2025 - Feb 2026",
    location: "Remote",
    description: [
      "Promoted the IIT Guwahati Internship Program as a Campus Ambassador, significantly increasing student engagement and participation.",
      "Facilitated communication between students and the organizing team, serving as the primary liaison for program updates.",
      "Coordinated outreach initiatives and peer engagement strategies to maximize program visibility across campus."
    ],
  },
  {
    role: "VLSI Design Engineer Trainee",
    company: "Rooman Technologies Pvt Ltd",
    duration: "Oct 2024 - May 2025",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Designed and implemented digital circuits using Verilog (RTL), ensuring robust hardware functionality and efficient implementation.",
      "Performed rigorous RTL verification and debugging to maintain functional correctness across complex digital designs.",
      "Utilized the OpenROAD toolchain to execute the complete ASIC design flow, including the verification of up/down counters."
    ],
  },
  {
    role: "Embedded system intern",
    company: "Technologics Global Pvt Ltd",
    duration: "Aug 2024 - Feb 2025",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Developed resource-optimized embedded applications using Embedded C for various microcontroller architectures.",
      "Integrated IoT-based systems with hardware components to build responsive and connected industrial solutions.",
      "Conducted hardware interfacing, testing, and low-level debugging to ensure long-term system stability and reliability."
    ],
  },
  {
    role: "INTEL Unnati Industrial Training Program 2024",
    company: "Intel Corporation",
    duration: "May 2024 - Aug 2024",
    location: "Remote / Hybrid",
    description: [
      "Trained in advanced security technologies, focusing on Trusted Execution Environments (TEEs) and secure system architectures.",
      "Implemented secure key management protocols using Intel SGX to enhance system-level data protection and integrity.",
      "Analyzed secure computing frameworks to implement robust hardware-based security solutions for industrial applications."
    ],
  },
  {
    role: "Python AI/ML intern",
    company: "Dotch endeavours",
    duration: "Oct 2023 - Nov 2023",
    location: "Mysore, Karnataka, India",
    description: [
      "Developed Python-based AI/ML solutions, specializing in predictive modeling and robust data preprocessing pipelines.",
      "Engineered machine learning models using industry-standard libraries to improve prediction accuracy and performance.",
      "Conducted data analysis and experimentation to optimize model performance for specific research use cases."
    ],
  },
  {
    role: "Python Engineer",
    company: "Dhanaina Technologies",
    duration: "Oct 2023 - Nov 2023",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Developed and maintained high-performance Python applications with a focus on scalable code and system quality.",
      "Designed and implemented intuitive desktop user interfaces (UIs) using the Tkinter framework for internal tools.",
      "Collaborated in an agile team environment, participating in code reviews to enhance overall system reliability."
    ],
  }
];

function ExperienceItem({ exp, idx }) {
  const isLeft = idx % 2 === 0;

  const card = (side) => (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: side === "left" ? -50 : 50,
        y: 20 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: idx * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className="relative trend-card p-5 sm:p-7 md:p-8 max-w-[450px] w-full hover:border-[var(--accent)] transition-colors duration-500 group"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: idx * 0.1 + 0.3 }}
        className="inline-block px-2 py-1 tech-label tech-text-accent mb-3 border border-[var(--accent)]/20 bg-[var(--accent)]/5 text-[10px] sm:text-[11px]"
      >
        {exp.duration}
      </motion.span>
      <h3 className="text-base sm:text-lg md:text-lg font-bold text-white mb-1 tracking-tight">{exp.role}</h3>
      <p className="text-[13px] sm:text-sm md:text-sm text-[var(--text-secondary)] mb-2 font-mono border-l-2 border-[var(--accent)]/30 pl-2">{exp.company}</p>
      {exp.location && (
        <span className="text-[9px] sm:text-[10px] font-mono tracking-widest px-2 py-1 bg-[var(--bg-base)] text-[var(--text-secondary)] inline-block mb-4 border border-[var(--border-color)] uppercase">{exp.location}</span>
      )}
      <ul className="text-sm sm:text-base md:text-base text-zinc-300 leading-relaxed font-normal list-disc list-outside ml-4 space-y-1.5 md:space-y-2">
        {exp.description.map((item, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 + 0.5 + (i * 0.1) }}
            className="text-[13px] sm:text-[14px] md:text-base"
          >
            {item}
          </motion.li>
        ))}
      </ul>
      <div className={`absolute top-1/2 ${side === "left" ? "-right-[14px] border-r border-t" : "-left-[14px] border-l border-b"} w-2.5 h-2.5 rotate-45 bg-[var(--bg-base)] border-[var(--border-color)] hidden md:block`} />
    </motion.div>
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-[1fr_50px_1fr] items-center w-full mb-10 lg:mb-12">
        <div className={`flex ${isLeft ? "justify-end pr-6" : "justify-end pr-6 invisible"}`}>
          {isLeft && card("left")}
        </div>

        <div className="flex justify-center relative h-full">
          <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-[var(--border-color)] origin-top" 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="w-4 h-4 rounded-full bg-[var(--accent)] ring-[3px] ring-[var(--accent)]/30 shadow-[0_0_10px_var(--accent)] z-10"
          />
        </div>

        <div className={`flex ${!isLeft ? "justify-start pl-6" : "justify-start pl-6 invisible"}`}>
          {!isLeft && card("right")}
        </div>
      </div>

      {/* Mobile */}
      <motion.div 
        className="md:hidden relative flex items-start mb-6 sm:mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
      >
        <div className="absolute left-6 top-4 w-4 h-4 rounded-full bg-[var(--accent)] ring-[3px] ring-[var(--accent)]/30 shadow-[0_0_10px_var(--accent)] z-10" />
        <div className="ml-10 sm:ml-12 trend-card p-4 sm:p-5 w-full group hover:border-[var(--accent)] transition-colors duration-500">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 + 0.2 }}
            className="inline-block px-2 py-1 tech-label tech-text-accent mb-3 border border-[var(--accent)]/20 bg-[var(--accent)]/5 text-[10px] sm:text-[11px]"
          >
            {exp.duration}
          </motion.span>
          <h3 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight leading-snug">{exp.role}</h3>
          <p className="text-[13px] sm:text-sm text-[var(--text-secondary)] mb-2 font-mono border-l-2 border-[var(--accent)]/30 pl-2">{exp.company}</p>
          {exp.location && (
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest px-2 py-1 bg-[var(--bg-base)] text-[var(--text-secondary)] inline-block mb-4 border border-[var(--border-color)] uppercase">{exp.location}</span>
          )}
          <ul className="text-sm text-zinc-300 leading-relaxed font-normal list-disc list-outside ml-4 space-y-1.5">
            {exp.description.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.4 + (i * 0.1) }}
                className="text-[13px] sm:text-sm"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="trend-section relative font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 opacity-20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 opacity-20 blur-[120px] animate-pulse delay-500" />
        </div>

        {/* Title */}
        <div className="relative z-10 flex flex-col items-center justify-center mb-12 md:mb-20 lg:mb-28 text-center">
          <div className="mb-4 tech-label tech-text-accent flex items-center justify-center gap-3 flex-wrap">
            <span className="w-8 h-[1px] bg-indigo-400/50"></span>
            04 // Timeline
            <span className="w-8 h-[1px] bg-indigo-400/50"></span>
          </div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional Journey
          </motion.h2>
        </div>

        {/* Timeline container */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          {/* Mobile Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[var(--border-color)] md:hidden"></div>
          
          {experiences.map((exp, idx) => (
            <ExperienceItem
              key={`${exp.company}-${exp.role}-${idx}`}
              exp={exp}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
