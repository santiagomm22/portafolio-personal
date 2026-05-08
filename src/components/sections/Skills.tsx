import { motion, type Variants } from "framer-motion";

interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Frontend",
    icon: "⚡",
    skills: [
      "React 19", "TypeScript", "JavaScript", "Vite",
      "Tailwind CSS", "Redux Toolkit", "React Router",
      "TanStack Table", "shadcn/ui", "Radix UI",
    ],
  },
  {
    label: "Backend",
    icon: "🔩",
    skills: [
      "NestJS", "Node.js", "Express",
      "JWT", "Passport.js", "Swagger / OpenAPI",
      "RxJS", "class-validator", "bcrypt",
    ],
  },
  {
    label: "Bases de Datos",
    icon: "🗄️",
    skills: ["MySQL", "TypeORM", "Mongoose"],
  },
  {
    label: "Herramientas & Librerías",
    icon: "🛠️",
    skills: [
      "Git", "GitHub", "Jest", "ESLint", "Prettier",
      "Axios", "Recharts", "ExcelJS", "jsPDF",
      "Nodemailer", "date-fns",
    ],
  },
  {
    label: "Metodologías",
    icon: "📋",
    skills: ["Scrum", "Gestión de Sprints", "Dailys", "Planificación de Tareas"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const pillVariants: Variants = {
  hidden:  { opacity: 0, y: 16, scale: 0.94 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.45 } },
};

const Skills = () => {
  return (
    <section id="habilidades" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Stack tecnológico</span>
          <h2 className="section-title">
            Mis{" "}
            <span className="text-gradient">Habilidades</span>
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-md mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Tecnologías con las que trabajo en proyectos de producción reales.
          </p>
        </motion.div>

        {/* Groups */}
        <div className="space-y-12">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: gi * 0.06 }}
            >
              {/* Group heading */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl leading-none">{group.icon}</span>
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: "var(--purple)" }}
                >
                  {group.label}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--border)" }}
                />
              </div>

              {/* Pills */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-2.5"
              >
                {group.skills.map(skill => (
                  <motion.span key={skill} variants={pillVariants} className="skill-pill">
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
