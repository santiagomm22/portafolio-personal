import { motion, type Variants } from "framer-motion";
import { Mail, Phone, Github, MapPin, ArrowUpRight } from "lucide-react";

interface ContactItem {
  icon:    React.ReactNode;
  label:   string;
  value:   string;
  href:    string;
  isLink:  boolean;
}

const CONTACTS: ContactItem[] = [
  {
    icon:   <Mail size={20} />,
    label:  "Email",
    value:  "sntgmm22@gmail.com",
    href:   "mailto:sntgmm22@gmail.com",
    isLink: true,
  },
  {
    icon:   <Phone size={20} />,
    label:  "Teléfono",
    value:  "302 617 8163",
    href:   "tel:+573026178163",
    isLink: true,
  },
  {
    icon:   <Github size={20} />,
    label:  "GitHub",
    value:  "github.com/santiagomm22",
    href:   "https://github.com/santiagomm22",
    isLink: true,
  },
  {
    icon:   <MapPin size={20} />,
    label:  "Ubicación",
    value:  "Cali, Colombia",
    href:   "#",
    isLink: false,
  },
];

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const Contact = () => {
  return (
    <section id="contacto" className="py-28 px-6 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-6 text-center"
        >
          <span className="section-label">Hablemos</span>
          <h2 className="section-title">
            ¿Tienes un <span className="text-gradient">proyecto</span>?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-center text-sm md:text-base max-w-sm mx-auto mb-14"
          style={{ color: "var(--muted)" }}
        >
          Estoy disponible para proyectos freelance y nuevas oportunidades laborales.
          No dudes en escribirme.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {CONTACTS.map((item, i) =>
            item.isLink ? (
              <motion.a
                key={item.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-card group"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                  style={{ background: "var(--violet-dim)", color: "var(--purple-light)" }}
                >
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--purple)" }}
                />
              </motion.a>
            ) : (
              <motion.div
                key={item.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="contact-card"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                  style={{ background: "var(--violet-dim)", color: "var(--purple-light)" }}
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                    {item.value}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-xs mt-16"
          style={{ color: "var(--muted)" }}
        >
          Anderson Santiago Mendoza Muñoz · Cali, Colombia · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
