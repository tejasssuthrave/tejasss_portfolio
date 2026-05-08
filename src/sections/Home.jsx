
import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import avatar from "../assets/hero-astronaut.png";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import ParticleBackground from "../components/ParticlesBackground";

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/tejas-s-suthrave/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/tejasssuthrave" },
  { Icon: SiSubstack, label: "Substack", href: "https://substack.com/@tejasssuthrave" },
];


const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(99,102,241,0.9)) drop-shadow(0 0 18px rgba(244,63,94,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

const Home = React.forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const roles = useMemo(
    () => ["Cloud Infrastructure Engineer", "DevOps Engineer", "AI Systems Engineer", "Infrastructure Automation"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing effect logic
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60); // original typing speed
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex flex-col trend-section"
      style={{ paddingBottom: "0.5rem" }}
    >
      <ParticleBackground />

      {/* gradient blobs - simplified for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 
          w-[60vw] sm:w-[45vw] md:w-[35vw] 
          h-[60vw] sm:h-[45vw] md:h-[35vw]
          max-w-[400px] max-h-[400px]
          rounded-full
          bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900
          opacity-25 sm:opacity-20 md:opacity-15 
          blur-[80px] sm:blur-[110px] md:blur-[140px]
          animate-pulse"
        />
        <div
          className="absolute bottom-10 right-0 
          w-[60vw] sm:w-[45vw] md:w-[35vw] 
          h-[60vw] sm:h-[45vw] md:h-[35vw]
          max-w-[400px] max-h-[400px] 
          rounded-full 
          bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 
          opacity-20 sm:opacity-15 md:opacity-10
          blur-[80px] sm:blur-[110px] md:blur-[140px] 
          animate-pulse delay-500"
        />
      </div>

      <div className="relative z-10 flex-1 w-full flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-8 items-center justify-center pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6">
        {/* left - text content */}
        <motion.div
          className="w-full flex flex-col justify-center text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-6 sm:space-y-8">
            {/* name */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-white">TEJAS</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-white to-[var(--accent-light)] font-light">SUTHRAVE</span>
            </motion.h1>

            {/* typing text */}
            <motion.div
              className="flex flex-col items-center lg:items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 text-[var(--accent)] tech-label text-sm sm:text-base">
                <span className="w-6 sm:w-8 h-px bg-[var(--accent)]/50"></span>
                <span className="font-mono tracking-wide">Specialized in</span>
                <span className="w-6 sm:w-8 h-px bg-[var(--accent)]/50"></span>
              </div>
              <div className="min-h-[2.5em] flex items-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--accent)]">
                  {roles[index].substring(0, subIndex)}<span className="animate-pulse">▌</span>
                </p>
              </div>
            </motion.div>

            {/* description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Building at the intersection of cloud systems, automation, and intelligent applications. ECE graduate with hands-on AWS infrastructure experience and a passion for engineering scalable solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex gap-3 justify-center lg:justify-start pt-4 flex-wrap"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="#projects"
                className="trend-button inline-flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium"
                aria-label="View projects"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--accent)] text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 text-sm font-medium"
                aria-label="Download resume"
              >
                Download Resume
              </a>
            </motion.div>

            {/* social links */}
            <motion.div
              className="flex gap-4 sm:gap-5 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {socials.map(({ Icon, label, href }) => (
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
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 p-3 sm:p-3.5 trend-card rounded-full text-lg sm:text-xl"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* right - avatar */}
        <motion.div
          className="relative w-full flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Subtle background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(79,70,229,0.15) 0%, transparent 70%)",
            }}
          />
          
          <motion.div 
            style={{ y: yParallax }}
            className="relative z-10 flex items-center justify-center w-full h-full"
          >
            <motion.img
              src={avatar}
              alt="Tejas S Suthrave avatar"
              className="object-contain select-none pointer-events-none w-4/5 sm:w-3/4 max-w-[380px] md:max-w-[500px] lg:max-w-[600px] mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_35%,transparent_85%)] drop-shadow-[0_0_80px_rgba(79,70,229,0.4)] brightness-100 contrast-125"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0],
              }}
              transition={{ 
                opacity: { delay: 0.8, duration: 1.2 },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
});

export default Home;
