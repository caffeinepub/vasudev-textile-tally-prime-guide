import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Brand wordmark */}
        <a
          href="#home"
          data-ocid="nav.brand.link"
          className="font-display text-lg font-bold text-foreground tracking-[0.15em] uppercase select-none"
        >
          QUANTUM LEAP
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className="text-sm font-medium text-text-body hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          data-ocid="nav.cta.primary_button"
          className="hidden md:inline-flex uppercase tracking-widest text-xs font-semibold px-6 bg-primary hover:bg-primary-hover text-primary-foreground"
          asChild
        >
          <a href="#contact">Get Started</a>
        </Button>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="nav.mobile.toggle"
          className="md:hidden p-2 rounded-md text-text-body hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav
              className="flex flex-col px-6 py-4 gap-3"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-text-body hover:text-primary py-1 uppercase tracking-wider transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                type="button"
                data-ocid="nav.mobile.cta.primary_button"
                className="mt-2 uppercase tracking-widest text-xs bg-primary hover:bg-primary-hover text-primary-foreground"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setMobileOpen(false);
                }}
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
