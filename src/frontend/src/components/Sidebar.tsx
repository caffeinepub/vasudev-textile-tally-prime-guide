import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";

interface SectionMeta {
  id: string;
  number: string;
  title: string;
  short: string;
}

interface SidebarProps {
  sections: SectionMeta[];
  activeSection: number;
  onSectionClick: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  sections,
  activeSection,
  onSectionClick,
  isOpen,
  onClose,
}: SidebarProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-sidebar">
      {/* Logo / Header */}
      <div className="px-5 py-6 border-b border-sidebar-border flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sidebar-primary flex items-center justify-center flex-shrink-0">
            <span className="text-xl">📊</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-sidebar-foreground font-display font-bold text-base leading-tight truncate">
              Vasudev Textile
            </h1>
            <p className="text-sidebar-foreground/60 text-xs mt-0.5 truncate">
              Tally Prime Guide
            </p>
          </div>
        </div>
        <div className="mt-3 text-sidebar-foreground/50 text-xs leading-relaxed">
          Cotton Printed Sarees · Jetpur, Gujarat
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 py-3 border-b border-sidebar-border flex-shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sidebar-foreground/60 text-xs">Progress</span>
          <Badge className="bg-sidebar-primary text-white text-xs px-2 py-0">
            {activeSection + 1}/{sections.length}
          </Badge>
        </div>
        <div className="w-full bg-sidebar-border rounded-full h-1.5">
          <div
            className="bg-sidebar-primary h-1.5 rounded-full transition-all duration-300"
            style={{
              width: `${((activeSection + 1) / sections.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-2">
        <nav aria-label="Tutorial sections">
          {sections.map((section, index) => (
            <button
              type="button"
              key={section.id}
              onClick={() => onSectionClick(index)}
              data-ocid={`nav.link.${index + 1}`}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-all duration-150 border-l-2 ${
                activeSection === index
                  ? "bg-sidebar-accent border-sidebar-primary text-sidebar-foreground"
                  : "border-transparent hover:bg-sidebar-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground"
              }`}
            >
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 transition-colors ${
                  activeSection === index
                    ? "bg-sidebar-primary text-white"
                    : "bg-sidebar-border/40 text-sidebar-foreground/60"
                }`}
              >
                {section.number}
              </span>
              <span className="text-xs leading-snug font-medium">
                {section.short}
              </span>
            </button>
          ))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-sidebar-border flex-shrink-0">
        <p className="text-sidebar-foreground/40 text-xs text-center">
          GST No: 24AAABV1234C1ZX
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="no-print hidden lg:flex flex-col w-72 flex-shrink-0 h-full border-r border-sidebar-border">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="no-print lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
            role="button"
            tabIndex={-1}
          />
          <aside
            className="relative w-72 flex-shrink-0 flex flex-col h-full shadow-xl"
            data-ocid="nav.modal"
          >
            {sidebarContent}
          </aside>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white p-2"
            data-ocid="nav.close_button"
            aria-label="Close navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
