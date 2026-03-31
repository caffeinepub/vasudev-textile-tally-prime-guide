import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import SectionWrapper from "./components/SectionWrapper";
import Sidebar from "./components/Sidebar";
import Section01 from "./components/sections/Section01CreateCompany";
import Section02 from "./components/sections/Section02GSTSetup";
import Section03 from "./components/sections/Section03BusinessOverview";
import Section04 from "./components/sections/Section04MonthlyEntries";
import Section05 from "./components/sections/Section05LedgerCreation";
import Section06 from "./components/sections/Section06GSTHSNSetup";
import Section07 from "./components/sections/Section07StockRawMaterials";
import Section08 from "./components/sections/Section08Manufacturing";
import Section09 from "./components/sections/Section09GSTReturn";
import Section10 from "./components/sections/Section10YearEndAudit";
import Section11 from "./components/sections/Section11Adjustments";
import Section12 from "./components/sections/Section12SalesPurchaseBills";

export const SECTIONS = [
  {
    id: "section-01",
    number: "01",
    title: "Create Company in Tally Prime",
    short: "Company Setup",
  },
  {
    id: "section-02",
    number: "02",
    title: "GST Setup & Configuration",
    short: "GST Setup",
  },
  {
    id: "section-03",
    number: "03",
    title: "Business Overview",
    short: "Business Overview",
  },
  {
    id: "section-04",
    number: "04",
    title: "Monthly Journal Entries (60)",
    short: "Monthly Entries",
  },
  {
    id: "section-05",
    number: "05",
    title: "Ledger Creation",
    short: "Ledger Creation",
  },
  {
    id: "section-06",
    number: "06",
    title: "GST Rate & HSN Code Setup",
    short: "GST & HSN Codes",
  },
  {
    id: "section-07",
    number: "07",
    title: "Stock & Raw Materials",
    short: "Stock Setup",
  },
  {
    id: "section-08",
    number: "08",
    title: "Manufacturing Auto Adjustment",
    short: "Manufacturing",
  },
  {
    id: "section-09",
    number: "09",
    title: "GST Return Filing",
    short: "GST Returns",
  },
  {
    id: "section-10",
    number: "10",
    title: "Year-End Audit",
    short: "Year-End Audit",
  },
  {
    id: "section-11",
    number: "11",
    title: "All Types of Adjustments",
    short: "Adjustments",
  },
  {
    id: "section-12",
    number: "12",
    title: "Sales & Purchase Bills",
    short: "Bills & Vouchers",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActiveSection(idx);
          }
        }
      },
      { threshold: 0.1, rootMargin: "-60px 0px -70% 0px" },
    );
    const els = SECTIONS.map((s) => document.getElementById(s.id));
    sectionRefs.current = els;
    for (const el of els) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const el = document.getElementById(SECTIONS[index].id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Toaster position="top-right" richColors />
      <Sidebar
        sections={SECTIONS}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile header */}
        <header className="no-print lg:hidden flex items-center gap-3 px-4 py-3 bg-sidebar border-b border-sidebar-border flex-shrink-0">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            data-ocid="nav.open_modal_button"
            aria-label="Open navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="text-sidebar-foreground font-display font-semibold text-sm">
            Vasudev Textile — Tally Prime Guide
          </div>
        </header>

        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-0">
            {/* Hero banner */}
            <div className="mb-10 rounded-xl bg-gradient-to-br from-[oklch(0.44_0.19_265)] to-[oklch(0.32_0.15_255)] text-white p-8 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h1 className="text-2xl font-display font-bold">
                    Vasudev Textile
                  </h1>
                  <p className="text-white/80 text-sm">
                    Triveni Print, Dhoraji Road, Jetpur — Rajkot, Gujarat
                  </p>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-4 mb-2">
                Complete Tally Prime Accounting Guide
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Step-by-step guide covering company setup, GST configuration, 60
                monthly journal entries, ledger creation, stock management,
                manufacturing, GST returns, year-end audit, and detailed bills.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SECTIONS.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => scrollToSection(SECTIONS.indexOf(s))}
                    className="text-xs bg-white/20 hover:bg-white/30 text-white rounded-full px-3 py-1 transition-colors"
                  >
                    {s.number}. {s.short}
                  </button>
                ))}
              </div>
            </div>

            <SectionWrapper
              id="section-01"
              number="01"
              title="Create Company in Tally Prime"
            >
              <Section01 />
            </SectionWrapper>
            <SectionWrapper
              id="section-02"
              number="02"
              title="GST Setup & Configuration"
            >
              <Section02 />
            </SectionWrapper>
            <SectionWrapper
              id="section-03"
              number="03"
              title="Business Overview — Vasudev Textile"
            >
              <Section03 />
            </SectionWrapper>
            <SectionWrapper
              id="section-04"
              number="04"
              title="Monthly Journal Entries (60 Entries)"
            >
              <Section04 />
            </SectionWrapper>
            <SectionWrapper id="section-05" number="05" title="Ledger Creation">
              <Section05 />
            </SectionWrapper>
            <SectionWrapper
              id="section-06"
              number="06"
              title="GST Rate & HSN Code Setup"
            >
              <Section06 />
            </SectionWrapper>
            <SectionWrapper
              id="section-07"
              number="07"
              title="Stock & Raw Materials"
            >
              <Section07 />
            </SectionWrapper>
            <SectionWrapper
              id="section-08"
              number="08"
              title="Manufacturing Auto Adjustment (Bill of Materials)"
            >
              <Section08 />
            </SectionWrapper>
            <SectionWrapper
              id="section-09"
              number="09"
              title="GST Return Filing (GSTR-1 & GSTR-3B)"
            >
              <Section09 />
            </SectionWrapper>
            <SectionWrapper id="section-10" number="10" title="Year-End Audit">
              <Section10 />
            </SectionWrapper>
            <SectionWrapper
              id="section-11"
              number="11"
              title="All Types of Adjustments"
            >
              <Section11 />
            </SectionWrapper>
            <SectionWrapper
              id="section-12"
              number="12"
              title="Sales & Purchase Bills — Detailed"
            >
              <Section12 />
            </SectionWrapper>

            {/* Footer */}
            <footer className="no-print mt-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Vasudev Textile — Tally Prime
                Accounting Guide. Built with ❤️ using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
