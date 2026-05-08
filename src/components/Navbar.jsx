import { useState, useEffect, useRef } from "react";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true); // Always visible on homepage
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // If on homepage, never hide navbar
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down -> hide
        setVisible(false);
      } else {
        // scrolling up -> show
        setVisible(true);

        // hide again after 3sec idle
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-center px-4 md:px-8 py-5 z-50 transition-transform duration-500 font-sans ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full max-w-5xl rounded-full border border-white/15 bg-black/45 backdrop-blur-xl px-4 md:px-7 py-3 flex items-center justify-between shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <a href="#home" className="text-sm md:text-base font-semibold tracking-[0.28em] uppercase text-white">
            T <span className="text-[var(--accent)]">SS</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-white/70">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="group rounded-full border border-white/20 px-4 md:px-5 py-2 text-xs uppercase tracking-[0.2em] text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
