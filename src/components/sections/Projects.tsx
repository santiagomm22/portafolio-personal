import { motion, type Variants } from "framer-motion";
import { ExternalLink, Lock, ArrowUpRight } from "lucide-react";

/* ─── Data ───────────────────────────────────────────── */
interface FeaturedProject {
  title:       string;
  subtitle:    string;
  description: string;
  image:       string;
  link:        string;
  stack:       string[];
  accent:      string;
  accentDim:   string;
}

interface PrivateProject {
  title:       string;
  description: string;
  stack:       string[];
}

const FEATURED: FeaturedProject[] = [
  {
    title:       "VERTIEM",
    subtitle:    "Sistema de Gestión de Vertimientos",
    description:
      "Sistema de control operativo para la gestión de vertimientos, ingresos de vehículos, medición y facturación en la planta de tratamiento de aguas residuales.",
    image:     "/images/VERTIEM.png",
    link:      "https://vertiem-front.vercel.app/",
    stack:     ["React 19", "NestJS", "TypeScript", "MySQL", "TypeORM", "Tailwind CSS"],
    accent:    "#16a34a",
    accentDim: "rgba(22, 163, 74, 0.12)",
  },
  {
    title:       "LAFAOM",
    subtitle:    "Gastro Bar · Menú Digital",
    description:
      "Página de presentación y menú digital para restaurante-bar en Cali, inspirado en la gastronomía y la salsa caleña, con una experiencia visual premium.",
    image:     "/images/LAFAOM.png",
    link:      "https://lafaom-food.vercel.app/",
    stack:     ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    accent:    "#b59235",
    accentDim: "rgba(181, 146, 53, 0.12)",
  },
];

const PRIVATE: PrivateProject[] = [
  {
    title:       "Plataforma de Gestión Interna",
    description:
      "Plataforma web para la gestión y planeación de trámites internos de la empresa, como la administración de vacaciones del personal, reduciendo procesos de semanas a minutos.",
    stack: ["React 19", "NestJS", "TypeScript", "MySQL", "TypeORM", "Redux Toolkit", "JWT"],
  },
  {
    title:       "Módulo de Trámites Ciudadanos",
    description:
      "Módulo de atención ciudadana para digitalizar trámites presenciales como cambios en facturación y planes de pago, mejorando la experiencia del usuario externo.",
    stack: ["React 19", "NestJS", "TypeScript", "MySQL", "Tailwind CSS"],
  },
];

/* ─── Variants ───────────────────────────────────────── */
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.62, delay: i * 0.13 },
  }),
};

const fadeUpSimple: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/* ─── Component ──────────────────────────────────────── */
const Projects = () => {
  return (
    <section id="proyectos" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Trabajo destacado</span>
          <h2 className="section-title">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-sm mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Proyectos reales desarrollados en entornos de producción.
          </p>
        </motion.div>

        {/* ── Featured projects (with image) ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {FEATURED.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "var(--card-bg)",
                border: `1px solid ${project.accent}28`,
                backdropFilter: "blur(24px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  `0 20px 55px ${project.accent}22`;
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  `${project.accent}55`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  `${project.accent}28`;
              }}
            >
              {/* ── Screenshot ── */}
              <div
                className="relative overflow-hidden"
                style={{ height: "210px", flexShrink: 0 }}
              >
                <img
                  src={project.image}
                  alt={`Captura de pantalla de ${project.title}`}
                  className="w-full h-full"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    transition: "transform 0.7s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, var(--navy) 0%, rgba(12,22,40,0.5) 40%, transparent 100%)",
                  }}
                />
                {/* Live badge */}
                <div
                  className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(5,10,20,0.75)",
                    backdropFilter: "blur(8px)",
                    border: `1px solid ${project.accent}44`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: project.accent,
                      boxShadow: `0 0 6px ${project.accent}`,
                    }}
                  />
                  <span
                    className="text-xs font-bold tracking-wider"
                    style={{ color: project.accent }}
                  >
                    LIVE
                  </span>
                </div>
              </div>

              {/* ── Content ── */}
              <div className="flex flex-col flex-1 p-6">
                {/* Title row */}
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3
                    className="text-lg font-bold leading-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
                    style={{
                      background: project.accentDim,
                      border: `1px solid ${project.accent}33`,
                      color: project.accent,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        `${project.accent}22`;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        `${project.accent}66`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        project.accentDim;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        `${project.accent}33`;
                    }}
                  >
                    <ExternalLink size={12} />
                    Ver proyecto
                  </a>
                </div>

                {/* Subtitle */}
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: project.accent }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map(s => (
                    <span key={s} className="stack-tag">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Private projects separator ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <Lock size={13} style={{ color: "var(--muted)", flexShrink: 0 }} />
          <span
            className="text-xs font-bold uppercase tracking-widest whitespace-nowrap"
            style={{ color: "var(--muted)" }}
          >
            Proyectos privados
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </motion.div>

        {/* ── Private project cards ── */}
        <div className="grid md:grid-cols-2 gap-4">
          {PRIVATE.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUpSimple}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="project-card"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, var(--violet), var(--purple))",
                    boxShadow: "0 4px 14px rgba(124,58,237,0.35)",
                  }}
                >
                  <span className="text-white font-betron font-bold text-xs">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <span
                  className="flex items-center gap-1.5 text-xs font-medium mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  <Lock size={11} />
                  Privado
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-base font-bold mb-3"
                style={{ color: "var(--text)" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: "var(--muted)" }}
              >
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.stack.map(s => (
                  <span key={s} className="stack-tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/santiagomm22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <ArrowUpRight size={15} />
            Ver perfil en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
