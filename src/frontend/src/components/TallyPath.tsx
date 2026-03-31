interface TallyPathProps {
  path: string;
  description?: string;
}

export default function TallyPath({ path, description }: TallyPathProps) {
  const parts = path.split(">").map((p) => p.trim());
  return (
    <div className="my-4 rounded-lg bg-tally-bg border border-tally-border p-4">
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-xs font-semibold text-primary uppercase tracking-wide mr-1">
          📍 Tally Path:
        </span>
        {parts.map((part) => (
          <span key={part} className="flex items-center gap-1.5">
            <code className="text-sm font-semibold text-foreground bg-white border border-border rounded px-2 py-0.5">
              {part}
            </code>
            {parts.indexOf(part) < parts.length - 1 && (
              <span className="text-muted-foreground text-sm">›</span>
            )}
          </span>
        ))}
      </div>
      {description && (
        <p className="mt-2 text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
