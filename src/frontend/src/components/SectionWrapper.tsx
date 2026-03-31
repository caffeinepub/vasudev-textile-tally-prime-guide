import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  number,
  title,
  children,
}: SectionWrapperProps) {
  const handlePrint = () => {
    const el = document.getElementById(id);
    if (!el) return;
    const printContent = el.innerHTML;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`
      <html><head><title>${title}</title>
      <style>
        body { font-family: sans-serif; padding: 20px; font-size: 13px; }
        table { border-collapse: collapse; width: 100%; margin: 12px 0; }
        th, td { border: 1px solid #ccc; padding: 6px 10px; text-align: left; }
        th { background: #eef2ff; font-weight: 600; }
        code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
        h1, h2, h3 { color: #1e3a5f; }
        .tally-path { background: #eef2ff; border: 1px solid #818cf8; padding: 8px 12px; border-radius: 6px; margin: 8px 0; }
      </style></head>
      <body><h1>${number}. ${title}</h1>${printContent}</body></html>
    `);
    win.document.close();
    win.print();
  };

  return (
    <section id={id} className="py-10 border-b border-border last:border-b-0">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-md">
            <span className="text-white font-display font-bold text-lg">
              {number}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-foreground leading-tight">
              {title}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Vasudev Textile — Tally Prime Tutorial
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          data-ocid={`section-${number}.button`}
          className="no-print flex-shrink-0 flex items-center gap-2 text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 rounded-lg px-3 py-2 transition-colors font-medium"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print Section
        </button>
      </div>
      <div>{children}</div>
    </section>
  );
}
