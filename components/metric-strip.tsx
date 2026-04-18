const METRICS = [
  { stat: "up to 23%", label: "trial-to-paid recovery", note: "ghosted signups re-engaged" },
  { stat: "73%", label: "support FAQ deflection", note: "before reaching a human" },
  { stat: "3×", label: "demo-to-close rate", note: "pre-qualified vs cold demos" },
];

export function MetricStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)] px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
        {METRICS.map((m) => (
          <div key={m.stat} className="flex flex-col items-center gap-1.5">
            <span className="text-5xl font-black text-[var(--primary)]">{m.stat}</span>
            <span className="text-sm font-semibold text-[var(--ink)]">{m.label}</span>
            <span className="text-xs text-[var(--muted)]">{m.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
