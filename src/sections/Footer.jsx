import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaHeart
} from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/tejas-s-suthrave-33633a258/", color: "hover:text-blue-400" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/tejasssuthrave", color: "hover:text-white" },
  { Icon: SiSubstack, label: "Substack", href: "https://tejasssuthrave.substack.com/", color: "hover:text-orange-400" },
  { Icon: FaEnvelope, label: "Email", href: "mailto:tejas.s.suthrave@gmail.com", color: "hover:text-rose-400" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(99,102,241,0.6)) drop-shadow(0 0 18px rgba(244,63,94,0.4))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden font-sans border-t border-white/10 bg-[#0b1115]/70 backdrop-blur-md rounded-t-2xl mx-2 sm:mx-4 mb-2 sm:mb-3">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(39,214,176,0.08),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 py-4 sm:py-5 flex flex-col gap-3 sm:gap-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 justify-center sm:justify-start text-center sm:text-left">
            <div className="h-10 w-10 rounded-full border border-[var(--accent)]/30 bg-white/5 flex items-center justify-center shadow-[0_0_30px_rgba(39,214,176,0.12)]">
              <span className="text-[var(--accent)] text-sm font-bold">TS</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white">
                Tejas Suthrave
              </p>
              <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] mt-1">
                Cloud Infrastructure · DevOps · AI-Driven Development
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {socials.map(({ Icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`text-[var(--text-secondary)] ${color} transition-colors duration-300 trend-card p-2 rounded-full border border-white/10 bg-white/5`}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-white/10 pt-3">
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[var(--text-secondary)] text-center sm:text-left">
            © {new Date().getFullYear()} · Built for cloud, automation, and intelligent systems
          </p>
          <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] text-center sm:text-right opacity-70">
            Available for engineering roles
          </p>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
