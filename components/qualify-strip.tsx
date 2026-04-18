const STEPS = [
  { q: "Pre-approved or cash buyer?", icon: "💰" },
  { q: "Timeline to purchase?", icon: "📅" },
  { q: "Budget range?", icon: "🏡" },
];

export function QualifyStrip() {
  return (
    <section className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Every showing request answers these first
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4"
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="text-xs font-semibold text-[var(--ink)]">{s.q}</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">answered before you reply</p>
              </div>
              <span
                className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                {i + 1}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-[var(--muted)]">
          Only serious buyers reach your calendar. No-shows drop 40%.
        </p>
      </div>
    </section>
  );
}
