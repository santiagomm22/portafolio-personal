import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import DecryptedText from "@/components/ui/DecryptedText";

const MAIN_TECHS = ["React 19", "TypeScript", "NestJS", "MySQL", "Tailwind CSS"];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center relative pt-28 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="badge-available mb-10 w-fit"
        >
          <span
            className="w-2 h-2 rounded-full bg-emerald-400"
            style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
          />
          <span className="text-xs text-emerald-400 font-semibold tracking-widest uppercase">
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex items-center gap-2 mb-5"
          style={{ color: "var(--muted)" }}
        >
          <MapPin size={14} />
          <span className="text-xs tracking-widest uppercase font-medium">Cali, Colombia</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-betron uppercase tracking-wider leading-none mb-6"
          style={{ fontSize: "clamp(3.2rem, 11vw, 9rem)", color: "var(--text)" }}
        >
          Santiago
          <br />
          <span className="text-glow" style={{ color: "var(--purple-light)" }}>
            Mendoza
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-7"
        >
          <p
            className="uppercase tracking-widest font-semibold"
            style={{
              fontSize: "clamp(0.85rem, 2vw, 1.15rem)",
              color: "var(--purple)",
            }}
          >
            <DecryptedText
              text="DESARROLLADOR FULLSTACK"
              animateOn="view"
              speed={55}
              maxIterations={14}
              sequential={true}
              revealDirection="start"
            />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.65 }}
          className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
          style={{ color: "var(--muted)" }}
        >
          Desarrollador Fullstack autodidacta con experiencia en entornos empresariales reales.
          Especializado en <span style={{ color: "var(--purple-light)" }}>React</span> y{" "}
          <span style={{ color: "var(--purple-light)" }}>NestJS</span>. Enfocado en diseñar soluciones escalables y centradas en el usuario.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <button onClick={() => scrollTo("proyectos")} className="btn-primary">
            Ver Proyectos
          </button>
          <a
            href="https://github.com/santiagomm22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={15} />
            GitHub
          </a>
          <button onClick={() => scrollTo("contacto")} className="btn-outline">
            <Mail size={15} />
            Contacto
          </button>
        </motion.div>

        {/* Tech chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="flex flex-wrap gap-2"
        >
          {MAIN_TECHS.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05 + i * 0.07, duration: 0.4 }}
              className="tech-chip"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => scrollTo("habilidades")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-200 group"
        style={{ color: "var(--muted)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase group-hover:text-purple-400 transition-colors">
          Scroll
        </span>
        <span className="scroll-bounce group-hover:text-purple-400 transition-colors">
          <ArrowDown size={15} />
        </span>
      </motion.button>
    </section>
  );
};

export default Hero;
