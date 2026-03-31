import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const DIAGONAL_ANGLES = [
  0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5,
  315, 337.5,
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-card pt-16"
      style={{ minHeight: "92vh" }}
    >
      <div
        className="flex flex-col lg:flex-row"
        style={{ minHeight: "calc(92vh - 0px)" }}
      >
        {/* ── Left column: text ── */}
        <div className="relative z-10 bg-card flex-shrink-0 lg:w-[52%] flex items-center justify-start px-8 sm:px-14 xl:px-20 py-24 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Strategic Innovation Partners
            </p>

            <h1
              className="font-display font-bold uppercase leading-[1.02] mb-7 text-foreground"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)" }}
            >
              Transform
              <br />
              Your
              <br />
              Business
            </h1>

            <p className="text-text-body text-base lg:text-lg leading-relaxed mb-10 max-w-md">
              We help forward-thinking companies navigate complexity and unlock
              sustainable growth through strategic innovation and data-driven
              decisions.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Button
                data-ocid="hero.cta.primary_button"
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground uppercase tracking-[0.12em] text-xs font-semibold px-8 transition-colors"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>

              <a
                href="#services"
                data-ocid="hero.learn_more.link"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Right column: city image with diagonal ── */}
        <div className="relative flex-1 min-h-[55vw] lg:min-h-0">
          {/* City image */}
          <img
            src="/assets/generated/hero-city.dim_800x600.jpg"
            alt="Modern city skyline representing innovation and progress"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Diagonal white wedge on left edge (desktop only) */}
          <div
            className="hidden lg:block absolute left-0 top-0 bottom-0 pointer-events-none z-10"
            style={{
              width: "120px",
              background: "oklch(var(--card))",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />

          {/* Geometric radial accent at diagonal junction */}
          <div
            className="hidden lg:block absolute z-20 pointer-events-none"
            style={{ left: "0px", top: "50%", transform: "translateY(-50%)" }}
          >
            <svg
              width="90"
              height="90"
              viewBox="-45 -45 90 90"
              fill="none"
              aria-hidden="true"
            >
              {DIAGONAL_ANGLES.map((deg, i) => (
                <line
                  key={deg}
                  x1={0}
                  y1={0}
                  x2={38 * Math.cos((deg * Math.PI) / 180)}
                  y2={38 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#19A6D8"
                  strokeWidth="0.75"
                  opacity={i % 2 === 0 ? "0.45" : "0.2"}
                />
              ))}
              <circle cx={0} cy={0} r="3" fill="#19A6D8" opacity="0.6" />
              <circle
                cx={0}
                cy={0}
                r="12"
                stroke="#19A6D8"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle
                cx={0}
                cy={0}
                r="26"
                stroke="#19A6D8"
                strokeWidth="0.4"
                fill="none"
                opacity="0.18"
              />
            </svg>
          </div>

          {/* Mobile gradient overlay */}
          <div
            className="lg:hidden absolute inset-x-0 top-0 h-16 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, oklch(var(--card)), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
