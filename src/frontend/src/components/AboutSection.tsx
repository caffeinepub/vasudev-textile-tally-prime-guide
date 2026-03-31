import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label centered above content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            About Us
          </h2>
          <div className="mt-5 mx-auto w-12 h-0.5 bg-primary" />
        </motion.div>

        {/* 2-column content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-card">
              <img
                src="/assets/generated/about-team.dim_700x500.jpg"
                alt="Our diverse, expert team at work"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "7/5" }}
              />
              {/* Accent corner decoration */}
              <div
                className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                style={{
                  background: "oklch(var(--primary) / 0.18)",
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 hidden lg:flex bg-primary text-primary-foreground rounded-lg shadow-card p-5 flex-col items-center justify-center min-w-[120px]">
              <span className="font-display text-3xl font-bold leading-none">
                14+
              </span>
              <span className="text-xs uppercase tracking-widest mt-1 text-primary-foreground/80">
                Years
              </span>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.18 }}
          >
            <p className="text-text-body text-base lg:text-lg leading-relaxed mb-6">
              We are a forward-thinking consultancy helping companies navigate
              the complexities of the modern business landscape. Since 2010, we
              have partnered with leaders across industries to deliver
              measurable impact and lasting transformation.
            </p>
            <p className="text-text-body text-base leading-relaxed mb-8">
              Our multidisciplinary team blends deep industry expertise with
              cutting-edge analytical methods, ensuring every engagement
              delivers real, sustainable results tailored to your unique
              context.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { num: "200+", label: "Clients Served" },
                { num: "98%", label: "Satisfaction Rate" },
                { num: "30+", label: "Industry Verticals" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-primary">
                    {stat.num}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Button
              data-ocid="about.team.secondary_button"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs font-semibold px-8 transition-colors"
              asChild
            >
              <a href="#contact">Meet the Team</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
