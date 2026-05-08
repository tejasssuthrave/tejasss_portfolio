import { motion, AnimatePresence } from "framer-motion";

export default function OverlayMenu({ isOpen, onClose }) {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Articles", href: "#articles" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

          <motion.div
            className="absolute inset-3 sm:inset-6 border border-white/15 bg-[#0b1115]/95 rounded-3xl p-6 sm:p-10 lg:p-14"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.2em] uppercase text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            aria-label="Close menu"
          >
            Close
          </button>

          <div className="h-full grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
            <ul className="space-y-3 sm:space-y-4 text-left font-sans relative z-10 self-center">
              {links.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05 }}
                className="overflow-hidden"
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className="group inline-flex items-center gap-4 sm:gap-6 text-white/80 hover:text-white transition-colors"
                >
                  <span className="text-xs font-mono tracking-[0.2em] text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                    {item.label}
                  </span>
                </a>
              </motion.li>
            ))}
            </ul>

            <div className="hidden lg:flex flex-col justify-between border-l border-white/10 pl-8 py-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">Now</p>
                <p className="mt-2 text-lg text-white">Open to cloud and AI roles</p>
              </div>
              <div className="space-y-3 text-sm text-white/65">
                <a href="mailto:tejas.s.suthrave@gmail.com" className="block hover:text-white" onClick={onClose}>
                  tejas.s.suthrave@gmail.com
                </a>
                <a href="https://github.com/tejasssuthrave" target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                  github.com/tejasssuthrave
                </a>
              </div>
            </div>
          </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
