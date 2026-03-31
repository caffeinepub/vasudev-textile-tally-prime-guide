import { BarChart2, Cpu, Lightbulb } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: Lightbulb,
    title: "Strategic Consulting",
    description:
      "We help businesses align strategy with market opportunities for sustainable growth and competitive advantage.",
  },
  {
    icon: BarChart2,
    title: "Data Analytics",
    description:
      "Turn your raw data into actionable insights that drive smarter decisions and unlock new revenue streams.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Modernize your operations with cutting-edge technology solutions designed for scale and agility.",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <div className="mt-5 mx-auto w-12 h-0.5 bg-primary" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                data-ocid={`services.item.${idx + 1}`}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: idx * 0.13 }}
                className="bg-card rounded-lg shadow-card p-8 flex flex-col items-start group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Icon badge */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-text-body text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="text-primary text-sm font-semibold uppercase tracking-widest hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  Read More →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
