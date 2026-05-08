import { motion, type Variants } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company:    string;
  role:       string;
  period:     string;
  isCurrent:  boolean;
  bullets:    string[];
  stack:      string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company:   "EMCALI",
    role:      "Desarrollador Fullstack · Contratista",
    period:    "Marzo 2025 — Presente",
    isCurrent: true,
    bullets: [
      "Desarrollo de plataforma web para la gestión y planeación de trámites internos de la empresa, como la administración de vacaciones del personal, reduciendo procesos que tomaban semanas a simples minutos.",
      "Desarrollo de sistema de control operativo para la gestión de ingresos, medición y facturación en planta de tratamiento, automatizando por completo la operación del área.",
      "Participación en módulo de atención ciudadana para digitalizar trámites presenciales como cambios en facturación y planes de pago, mejorando la experiencia del usuario externo.",
      "Mantenimiento, soporte y mejoras continuas en proyectos existentes del área de desarrollo.",
      "Trabajo bajo metodología Scrum: dailys, gestión de sprints y reporte de impedimentos.",
    ],
    stack: ["TypeScript", "React 19", "NestJS", "MySQL", "TypeORM", "Redux Toolkit", "JWT", "Swagger"],
  },
  {
    company:   "EMCALI",
    role:      "Practicante Desarrollador Fullstack",
    period:    "Junio 2024 — Diciembre 2024",
    isCurrent: false,
    bullets: [
      "Participación en el inicio del desarrollo de una plataforma para la gestión interna de trámites del personal, contribuyendo al diseño de arquitectura y las primeras funcionalidades.",
      "Apoyo en el desarrollo de módulos y funcionalidades bajo la guía del equipo de desarrollo.",
      "Primeros acercamientos al trabajo en equipo bajo metodología Scrum en un entorno empresarial real.",
    ],
    stack: ["TypeScript", "React", "NestJS", "TypeORM", "MySQL"],
  },
];

const cardVariants: Variants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <section id="experiencia" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Trayectoria profesional</span>
          <h2 className="section-title">
            Mi <span className="text-gradient">Experiencia</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-2 bottom-2 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--violet) 10%, var(--purple) 80%, transparent)",
            }}
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex gap-8 md:gap-10"
              >
                {/* Dot (desktop) */}
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div className={exp.isCurrent ? "timeline-dot" : "timeline-dot-muted"} />
                </div>

                {/* Card */}
                <div
                  className="glass flex-1 p-7 md:p-8"
                  style={{
                    borderColor: exp.isCurrent
                      ? "rgba(124, 58, 237, 0.35)"
                      : "var(--border)",
                    boxShadow: exp.isCurrent
                      ? "0 0 30px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)"
                      : "none",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <Briefcase
                          size={16}
                          style={{ color: "var(--purple)", flexShrink: 0 }}
                        />
                        <h3
                          className="text-base font-bold"
                          style={{ color: "var(--text)" }}
                        >
                          {exp.company}
                        </h3>
                        {exp.isCurrent && (
                          <span className="badge-current">Actual</span>
                        )}
                      </div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--purple-light)" }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className="text-xs font-medium shrink-0 mt-0.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bi * 0.07, duration: 0.4 }}
                        className="flex gap-2.5 text-sm leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        <span
                          className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                          style={{ background: "var(--purple)", minWidth: "6px", minHeight: "6px" }}
                        />
                        {b}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(s => (
                      <span key={s} className="stack-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
