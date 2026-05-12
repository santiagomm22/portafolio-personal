import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { id: "inicio",      label: "Inicio" },
  { id: "habilidades", label: "Habilidades" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos",   label: "Proyectos" },
  { id: "contacto",    label: "Contacto" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [active, setActive]               = useState("inicio");
  const [mobileOpen, setMobileOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleLink = (id: string) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled ? "glass-nav" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleLink("inicio")}
          className="transition-opacity duration-200 hover:opacity-75"
          aria-label="Inicio"
        >
          <img
            src="/images/iconoS.webp"
            alt="Logo"
            className="h-8 w-auto"
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleLink(id)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-xl transition-colors duration-200 ${
                  active === id ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "rgba(124, 58, 237, 0.18)",
                      border: "1px solid rgba(124, 58, 237, 0.28)",
                    }}
                    transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            className="md:hidden max-w-5xl mx-auto mt-2 mx-4 glass-nav rounded-2xl overflow-hidden"
          >
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleLink(id)}
                className={`w-full text-left px-6 py-4 text-sm font-semibold border-b last:border-0 transition-colors duration-200 ${
                  active === id
                    ? "text-purple-400"
                    : "text-slate-400 hover:text-white"
                }`}
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
