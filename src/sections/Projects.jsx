import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "CloudCost AI Assistant",
        link: "https://github.com/tejasssuthrave/CloudCost-AI-Smart-AWS-Cost-Optimization-Assistant",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        technologies: ["AWS Lambda", "Python", "Gemini API", "CloudWatch"],
      },
      {
        title: "BloodConnect Serverless",
        link: "https://github.com/tejasssuthrave/BloodConnect-Serverless-Blood-Donation-Alert-System",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
        technologies: ["AWS Lambda", "SNS", "DynamoDB", "Python"],
      },
      {
        title: "Serverless Food Ordering",
        link: "https://github.com/tejasssuthrave/Serverless-Food-Ordering-App-Using-AWS",
        image: "https://tse2.mm.bing.net/th/id/OIP.VXZkydhp6kdozVdKgjoGuAHaEi?rs=1&pid=ImgDetMain&o=7&rm=3",
        technologies: ["AWS Lambda", "API Gateway", "S3", "DynamoDB"],
      },
      {
        title: "EC2 AutoPark",
        link: "https://github.com/tejasssuthrave/EC2-AutoPark-AWS-EC2-Cost-Optimization-Automation",
        image: "https://tse4.mm.bing.net/th/id/OIP.a-ICu98pGswahpO8BOfw2wHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
        technologies: ["AWS Lambda", "Python", "EventBridge", "EC2"],
      },
      {
        title: "Linux Secure File Management",
        link: "https://github.com/tejasssuthrave/Linux-Secure-File-Management-Access-Control-System",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
        technologies: ["Linux", "Shell Scripting", "ACL", "Security"],
      },
      {
        title: "Serverless File Upload Notification",
        link: "https://github.com/tejasssuthrave/Serverless-File-Upload-Notification-System",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
        technologies: ["AWS S3", "Lambda", "SES", "Python"],
      },
      
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % projects.length), 6000);
    return () => clearInterval(autoplayRef.current);
  }, [projects.length]);

  const draggingRef = useRef(false);
  const [isHover, setIsHover] = useState(false);

  const onDragStart = () => {
    draggingRef.current = true;
    clearInterval(autoplayRef.current);
  };

  const onDragEnd = (event, info) => {
    draggingRef.current = false;
    const { offset, velocity } = info;
    if (offset.x < -80 || velocity.x < -500) setIndex((i) => (i + 1) % projects.length);
    else if (offset.x > 80 || velocity.x > 500) setIndex((i) => (i - 1 + projects.length) % projects.length);
    // restart autoplay
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % projects.length), 6000);
  };

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + projects.length) % projects.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % projects.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projects.length]);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  return (
    <section id="projects" className="trend-section relative font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="relative z-10 flex flex-col items-center justify-center mb-8 md:mb-12 text-center">
          <div className="mb-4 tech-label tech-text-accent flex items-center gap-3">
            <span className="w-8 h-[1px] bg-indigo-400/50"></span>
            05 // Portfolio
            <span className="w-8 h-[1px] bg-indigo-400/50"></span>
          </div>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Featured Works
          </motion.h2>
        </div>

        {/* Centered carousel */}
        <div className="relative flex items-center justify-center">
          <button aria-label="Prev" onClick={prev} className="absolute left-0 ml-2 z-30 tech-panel p-2 rounded-full">
            ‹
          </button>

          <div className="w-full max-w-5xl flex items-center justify-center overflow-visible py-6">
            <div className="relative w-full flex items-center justify-center">
              {isSmall ? (
                <motion.article
                  key={projects[index].title}
                  className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl bg-[var(--bg-surface)] cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  onClick={() => {
                    if (!draggingRef.current) window.open(projects[index].link, "_blank");
                  }}
                >
                  <div className={`relative h-56 bg-black`}> 
                    <img src={projects[index].image} alt={projects[index].title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{projects[index].title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {projects[index].technologies.slice(0, 4).map((t, idx) => (
                        <span key={idx} className="trend-chip text-[11px]">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <a href={projects[index].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-light)] hover:underline">Repository ↗</a>
                    </div>
                  </div>
                </motion.article>
              ) : (
                <div
                  style={{ perspective: 1400 }}
                  className="relative w-full h-[360px]"
                  onMouseEnter={() => {
                    setIsHover(true);
                    clearInterval(autoplayRef.current);
                  }}
                  onMouseLeave={() => {
                    setIsHover(false);
                    clearInterval(autoplayRef.current);
                    autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % projects.length), 6000);
                  }}
                >
                  <div style={{ transformStyle: 'preserve-3d' }} className="relative w-full h-full">
                  {projects.map((proj, i) => {
                    const rawPos = i - index;
                    let pos = rawPos;
                    if (rawPos > projects.length / 2) pos = rawPos - projects.length;
                    if (rawPos < -projects.length / 2) pos = rawPos + projects.length;

                    const x = pos * 360;
                    const rotateY = -pos * 14;
                    const scale = pos === 0 ? 1 : 0.78;
                    const z = pos === 0 ? 30 : 10;
                    const opacity = Math.abs(pos) > 2 ? 0 : 1 - Math.abs(pos) * 0.2;

                    const transition = isHover
                      ? { type: "spring", stiffness: 48, damping: 64, mass: 1.4 }
                      : { type: "spring", stiffness: 220, damping: 28 };

                    return (
                      <motion.article
                        key={proj.title}
                        className="absolute top-0 w-80 sm:w-96 md:w-[420px] rounded-xl overflow-hidden shadow-2xl bg-[var(--bg-surface)] cursor-pointer"
                        style={{ zIndex: z, transformOrigin: '50% 50% -200px' }}
                        initial={{ opacity: 0 }}
                        animate={{ x, rotateY, scale, opacity, translateZ: pos === 0 ? 140 : 0 }}
                        transition={transition}
                        drag={i === index ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        onMouseEnter={() => setIndex(i)}
                        onClick={() => {
                          if (!draggingRef.current) window.open(proj.link, "_blank");
                        }}
                      >
                        <div className="relative h-48 md:h-56 bg-black">
                          <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-white mb-1">{proj.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {proj.technologies.slice(0, 4).map((t, idx) => (
                              <span key={idx} className="trend-chip text-[11px]">{t}</span>
                            ))}
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-light)] hover:underline">Repository ↗</a>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button aria-label="Next" onClick={next} className="absolute right-0 mr-2 z-30 tech-panel p-2 rounded-full">
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {projects.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-[var(--accent)]' : 'w-3 bg-white/20'}`} aria-label={`Go to project ${i+1}`}></button>
          ))}
        </div>
      </div>
    </section>
  );
}
