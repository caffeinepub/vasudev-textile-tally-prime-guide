import { Facebook, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

function scrollTo(href: string) {
  if (href === "#") return;
  const id = href.slice(1);
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/10">
          {/* Brand + links */}
          <div>
            <p className="font-display text-xl font-bold tracking-[0.15em] uppercase text-white mb-6">
              QUANTUM LEAP
            </p>
            <p className="text-footer-text/70 text-sm leading-relaxed max-w-xs mb-6">
              Forward-thinking consultancy partnering with industry leaders to
              deliver measurable impact and lasting transformation.
            </p>
            <nav
              className="flex flex-wrap gap-x-6 gap-y-2"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}.link`}
                  onClick={(e) => {
                    if (link.href !== "#") {
                      e.preventDefault();
                      scrollTo(link.href);
                    }
                  }}
                  className="text-footer-text/70 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social icons */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-footer-text/50">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid={`footer.${label.toLowerCase()}.link`}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-footer-text/60 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-footer-text/50">
          <p>&copy; {year} Quantum Leap. All rights reserved.</p>
          <p>
            Built with <span aria-label="love">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-footer-text/80 underline underline-offset-2 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
