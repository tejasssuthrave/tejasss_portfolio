import React from "react";
import { motion } from "framer-motion";

const educations = [
  {
    degree: "B.E in Electronics and Communication",
    school: "Atria Institute of Technology, Bengaluru",
    year: "Dec 2021 - Jul 2025",
    description:
      "GPA: 9.21/10.00. Specialized in Electronics and Communication Engineering.",
    highlights: ["GPA 9.21", "Electronics", "Engineering"],
  },
  {
    degree: "12th Standard",
    school: "Vidya Mandir IND PU College, Bengaluru",
    year: "2020 - 2021",
    description:
      "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
    highlights: ["PCM", "Computer Science", "Foundation"],
  },
  {
    degree: "10th Standard",
    school: "Sri Vidya Mandir High School, Bengaluru",
    year: "2018 - 2019",
    description:
      "Built a strong academic base across science, mathematics, social studies, and languages.",
    highlights: ["Core Subjects", "Problem Solving", "Discipline"],
  },
];

function EducationCard({ edu, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
      className="relative grid gap-4 md:grid-cols-[88px_minmax(0,1fr)] items-start md:items-center"
    >
      <div className="edu-meta hidden md:flex justify-center pt-1">
        <div className="relative flex h-full min-h-[220px] w-full items-center justify-center">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--border-color)] to-transparent" />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--bg-base)] shadow-[0_0_0_8px_rgba(39,214,176,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
            </div>
            <span className="tech-label text-[var(--accent-light)] text-center">0{idx + 1}</span>
          </div>
        </div>
      </div>

      <div className="edu-copy">
        <div className="trend-card p-5 sm:p-6 md:p-7 h-full group hover:border-[var(--accent)] transition-colors duration-300">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/8 px-3 py-1 text-[10px] tracking-[0.24em] uppercase text-[var(--accent-light)] font-mono">
              {edu.year}
            </span>
            {edu.highlights.map((tag) => (
              <span key={tag} className="trend-chip text-[10px] md:text-[11px]">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-[var(--accent-light)] transition-colors">
            {edu.degree}
          </h3>
          <p className="text-[11px] sm:text-sm md:text-base text-[var(--text-secondary)] font-mono uppercase tracking-[0.16em] mb-3">
            {edu.school}
          </p>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
            {edu.description}
          </p>
        </div>
      </div>

      <div className="edu-marker md:hidden flex items-center gap-3 pl-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--bg-base)] shadow-[0_0_0_8px_rgba(39,214,176,0.08)] shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent)]/40 to-transparent" />
      </div>
    </motion.div>
  );
}

const Education = () => {
  return (
    <section id="education" className="trend-section relative font-sans">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <motion.div
          className="mb-10 md:mb-14 flex flex-col gap-4 max-w-3xl mx-auto md:mx-0 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="tech-label tech-text-accent flex items-center justify-center md:justify-start gap-3">
            <span className="w-8 h-[1px] bg-indigo-400/50" />
            06 // Academics
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
            Education
          </h2>
          <p className="mx-auto md:mx-0 max-w-2xl text-[var(--text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed">
            A compact academic timeline showing the progression that shaped my engineering and systems thinking.
          </p>
        </motion.div>

        <div className="relative z-10 space-y-4 md:space-y-7">
          {educations.map((edu, idx) => (
            <EducationCard key={`${edu.degree}-${idx}`} edu={edu} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
