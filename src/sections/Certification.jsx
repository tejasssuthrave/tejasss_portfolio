import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";

// Import certificate images
import MLCert from "../assets/ML_certi.jpeg";
import VLSICert from "../assets/VLSI_certi.jpeg";
import PYTCert from "../assets/PYT_certi.jpeg";
import PYTIBMCert from "../assets/PYT_IBM_certi.png";
import PYTINFOCert from "../assets/PYT_INFO_certi.jpeg";
import AWSINFOCert from "../assets/AWS_INFO_Certi.png"
import AWSAWSCert from "../assets/AWS_AWS_QUEST.png"

const certifications = [
  {
  title: "AWS Cloud Quest: Cloud Practitioner",
  issuer: "Amazon Web Services (AWS)",
  date: "Apr 2026",
  description: "Successfully completed the AWS Cloud Quest: Cloud Practitioner learning journey, gaining hands-on experience in core cloud concepts, AWS services, architecture fundamentals, security, billing, and real-world cloud problem-solving through interactive simulations.",
  skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM", "Cloud Fundamentals"],
  image: AWSAWSCert,
  verifyLink: "#"
},
{
  title: "TechA AWS Solution Architect Certification",
  issuer: "Infosys Springboard",
  date: "Apr 2026",
  description: "Completed an industry-oriented AWS Solution Architect certification program focused on designing scalable, secure, and highly available cloud architectures using AWS services including EC2, VPC, IAM, S3, Load Balancing, and monitoring solutions.",
  skills: ["AWS", "Solution Architecture", "Cloud Infrastructure", "VPC", "EC2", "IAM"],
  image: AWSINFOCert,
  verifyLink: "#"
},
  {
    title: "Machine Learning for Cyber Security",
    issuer: "C-DAC Hyderabad",
    date: "Oct 2025",
    description: "An intensive program focused on the intersection of AI and security. Mastered anomaly detection, malware analysis using ML, and building robust defense systems against automated cyber threats.",
    skills: ["Machine Learning", "Cybersecurity", "Threat Detection", "Anomaly Detection", "Python"],
    image: MLCert,
    verifyLink: "#"
  },
  {
    title: "VLSI Design Engineer",
    issuer: "National Skill Development Corporation",
    date: "May 2025",
    description: "Professional certification covering the complete VLSI design flow. Expertise in RTL design using Verilog, functional verification, and logic synthesis for high-performance integrated circuits.",
    skills: ["VLSI", "Verilog", "RTL Design", "Digital Electronics", "ASIC Design", "FPGA"],
    image: VLSICert,
    verifyLink: "#"
  },
  {
    title: "Programming in Python",
    issuer: "SWAYAM MHRD",
    date: "Jan 2025",
    description: "Comprehensive certification from the Ministry of Education. Covered advanced data structures, algorithmic complexity, and software engineering principles using Python for real-world applications.",
    skills: ["Python", "Algorithms", "Data Structures", "Problem Solving", "Software Engineering"],
    image: PYTCert,
    verifyLink: "#"
  },
  {
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class",
    date: "Dec 2024",
    description: "Mastered the fundamentals of data science using Python. Expertise in data manipulation with Pandas, numerical computing with NumPy, and data visualization with Matplotlib and Seaborn.",
    skills: ["Python", "Data Science", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
    image: PYTIBMCert,
    verifyLink: "https://courses.cognitiveclass.ai/certificates/64b0bc6710f643e8a47fb738a564401a"
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    description: "Validated core programming proficiency through the Infosys Springboard platform. Focused on writing clean, efficient code and understanding the underlying architecture of Python applications.",
    skills: ["Python", "Software Development", "Programming Fundamentals", "Clean Code", "OOP"],
    image: PYTINFOCert,
    verifyLink: "#"
  },
];

function MobileCertItem({ cert, isOpen, onToggle }) {
  return (
    <div className="trend-card overflow-hidden border border-white/10 bg-black/15 backdrop-blur-md">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="min-w-0">
          <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[var(--accent-light)]/90 mb-1">
            {cert.date}
          </p>
          <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
            {cert.title}
          </h3>
          <p className="text-[11px] text-[var(--text-secondary)] mt-1">
            {cert.issuer}
          </p>
        </div>
        <span className="shrink-0 text-[var(--accent-light)] text-lg leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-white/10 px-4 py-4 space-y-4">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {cert.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
            <img
              src={cert.image}
              alt={`${cert.title} Certificate`}
              className="w-full h-auto object-cover"
            />
          </div>

          {cert.verifyLink && cert.verifyLink !== "#" && (
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-light)]"
            >
              Verify certificate <span>↗</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
const PageCover = React.forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="relative h-full w-full overflow-hidden bg-[var(--bg-surface)]"
    style={{
      backgroundColor: "var(--bg-surface)",
      background: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1000px var(--bg-surface)",
    }}
  >
    {/* Decorative border */}
    <div className="absolute inset-3 border-2 border-[var(--border-color)] rounded-lg" />
    <div className="absolute inset-5 border border-[var(--border-color)]/50 rounded-lg" />

    {/* Corner ornaments */}
    {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
      <div
        key={i}
        className={`absolute ${pos} w-4 h-4 border-[var(--accent)]/50 ${
          i < 2 ? "border-t-2" : "border-b-2"
        } ${i % 2 === 0 ? "border-l-2" : "border-r-2"}`}
      />
    ))}

    <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
      {children}
    </div>
  </div>
));

// Left page - Certificate details
const DetailPage = React.forwardRef(({ cert, pageNumber }, ref) => (
  <div
    ref={ref}
    className="relative h-full w-full overflow-hidden bg-[var(--bg-surface)]"
    style={{
      backgroundColor: "var(--bg-surface)",
      background: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1000px var(--bg-surface)",
    }}
  >
    {/* Spine shadow (Right side for left page) */}
    <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/40 to-transparent z-20 pointer-events-none" />

    {/* Page texture */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

    {/* Inner border */}
    <div className="absolute inset-3 sm:inset-4 border border-[var(--border-color)] rounded-lg" />

    <div className="relative z-10 flex flex-col h-full p-3 sm:p-8 md:p-10">
      {/* Header ribbon */}
      <div className="text-center mb-1.5 sm:mb-6">
        <div className="inline-block px-2 sm:px-5 py-0.5 sm:py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
          <span className="text-[7px] sm:text-xs font-mono font-bold tracking-[0.05em] sm:tracking-[0.2em] uppercase text-[var(--accent)]">
            Credential Record
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-1.5 sm:gap-4 mb-1.5 sm:mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
        <div className="w-1 h-1 sm:w-2 sm:h-2 rotate-45 border border-[var(--accent)]/50" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
      </div>

      {/* Title */}
      <div className="relative">
        <h3 className="text-[10px] sm:text-xl md:text-2xl font-bold text-center text-white mb-0.5 sm:mb-2 leading-tight tracking-tight px-1 sm:px-4">
          {cert.title}
        </h3>
        {/* Decorative Seal */}
        <div className="absolute -top-3 -right-0.5 sm:-top-6 sm:-right-2 opacity-10 pointer-events-none">
          <svg className="w-6 h-6 sm:w-12 sm:h-12 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L9 4H5V8L2 11V13L5 16V20H9L12 23L15 20H19V16L22 13V11L19 8V4H15L12 1M12 17A5 5 0 1 1 17 12A5 5 0 0 1 12 17M12 9A3 3 0 1 0 15 12A3 3 0 0 0 12 9Z" />
          </svg>
        </div>
      </div>

      {/* Issuer */}
      <p className="text-center text-[7px] sm:text-xs md:text-sm font-mono text-[var(--text-secondary)] mb-1.5 sm:mb-8">
        Issued by <span className="text-[var(--accent-light)] font-bold">{cert.issuer}</span>
      </p>

      {/* Description & Skills Container */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden px-0.5 sm:px-4">
        <div className="flex-1 overflow-y-auto py-1 custom-scrollbar">
          <p className="text-[8px] sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed text-center mb-2 italic opacity-90 border-l border-r border-[var(--accent)]/20 py-0.5 sm:py-2 px-1">
            "{cert.description}"
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-3 mb-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-1 sm:px-3 py-0.5 sm:py-1 text-[6px] sm:text-[10px] md:text-xs font-mono rounded-none bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-auto pt-1.5 sm:pt-4 border-t border-[var(--border-color)]/30">
        <div className="flex justify-between items-center text-[7px] sm:text-[10px] md:text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <span className="text-[var(--accent)]/60 text-[6px] sm:text-[7px] uppercase tracking-tighter">Issue Date</span>
            <span className="text-white/80">{cert.date}</span>
          </div>
          {cert.verifyLink && cert.verifyLink !== "#" && (
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 sm:px-3 py-0.5 sm:py-1 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 flex items-center gap-1 sm:gap-1.5"
            >
              Verify <span className="text-[7px] sm:text-[10px]">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
));

// Right page - Certificate image
const ImagePage = React.forwardRef(({ cert, pageNumber }, ref) => (
  <div
    ref={ref}
    className="relative h-full w-full overflow-hidden bg-[var(--bg-surface)]"
    style={{
      backgroundColor: "var(--bg-surface)",
      background: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1000px var(--bg-surface)",
    }}
  >
    {/* Spine shadow (Left side for right page) */}
    <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/40 to-transparent z-20 pointer-events-none" />

    {/* Inner border */}
    <div className="absolute inset-4 border border-[var(--border-color)] rounded-lg" />

    <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 sm:p-10">
      {/* Small label */}
      <div className="mb-2 sm:mb-6 text-center">
        <span className="text-[9px] sm:text-xs font-mono font-medium tracking-[0.3em] uppercase text-[var(--text-secondary)]/60">
          Visual Documentation
        </span>
      </div>

      {/* Certificate image */}
      <div className="flex-1 flex items-center justify-center w-full px-1 sm:px-4 min-h-0">
        <div className="relative group/img">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-lg blur opacity-20 group-hover/img:opacity-40 transition duration-500"></div>
          <img
            src={cert.image}
            alt={`${cert.title} Certificate`}
            className="relative max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-[var(--border-color)] grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  </div>
));

const Certification = () => {
  const bookRef = useRef(null);
  const [screenSize, setScreenSize] = useState("desktop");
  const [openMobileCert, setOpenMobileCert] = useState(0);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 480) setScreenSize("xs");
      else if (w < 768) setScreenSize("sm");
      else setScreenSize("desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const bookDimensions = {
    xs: { width: 160, height: 240, minWidth: 150, maxWidth: 180, minHeight: 220, maxHeight: 280 },
    sm: { width: 220, height: 320, minWidth: 200, maxWidth: 250, minHeight: 300, maxHeight: 380 },
    desktop: { width: 450, height: 550, minWidth: 300, maxWidth: 550, minHeight: 400, maxHeight: 680 },
  };

  const dims = bookDimensions[screenSize];
  const isMobile = screenSize !== "desktop";

  return (
    <section id="certifications" className="trend-section relative text-white overflow-hidden ">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--bg-surface)] opacity-15 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--accent-light)] via-[var(--accent)] to-[var(--bg-surface)] opacity-15 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        <motion.p
          className="text-[var(--text-secondary)] text-xs sm:text-sm text-center mb-8 md:mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {isMobile ? "Tap each certificate to open its details and image" : "Click on the pages to flip through my certifications"}
        </motion.p>

        {isMobile ? (
          <motion.div
            className="relative z-10 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {certifications.map((cert, idx) => (
              <MobileCertItem
                key={`${cert.title}-${idx}`}
                cert={cert}
                isOpen={openMobileCert === idx}
                onToggle={() => setOpenMobileCert(openMobileCert === idx ? -1 : idx)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HTMLFlipBook
              key={screenSize}
              ref={bookRef}
              width={dims.width}
              height={dims.height}
              size="stretch"
              minWidth={dims.minWidth}
              maxWidth={dims.maxWidth}
              minHeight={dims.minHeight}
              maxHeight={dims.maxHeight}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="certification-book"
              style={{}}
              flippingTime={800}
              usePortrait={false}
              startZIndex={0}
              autoSize={true}
              drawShadow={true}
              useMouseEvents={true}
              swipeDistance={30}
            >
              {/* Front Cover */}
              <PageCover>
                <div className="w-16 h-16 mb-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  My Certifications
                </h2>
                <p className="text-[var(--text-secondary)] text-xs">Click to open</p>
              </PageCover>

              {/* Certification pairs: Detail (left) + Image (right) */}
              {certifications.flatMap((cert, idx) => [
                <DetailPage key={`detail-${idx}`} cert={cert} pageNumber={idx * 2 + 1} />,
                <ImagePage key={`image-${idx}`} cert={cert} pageNumber={idx * 2 + 2} />,
              ])}

              {/* Back Cover */}
              <PageCover>
                <div className="w-12 h-12 mb-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-[var(--text-secondary)] text-xs">Always Learning...</p>
              </PageCover>
            </HTMLFlipBook>
          </motion.div>
        )}

        {!isMobile && (
          <motion.div
            className="flex justify-center gap-6 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
              className="trend-button"
            >
              ← Prev
            </button>
            <button
              onClick={() => bookRef.current?.pageFlip()?.flipNext()}
              className="trend-button"
            >
              Next →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certification;
