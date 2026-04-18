const STEPS = [
  { icon: "📸", label: "Customer sends photo", sub: "of the broken fixture, car dent, pipe, anything" },
  { icon: "🤖", label: "Bot pre-diagnoses", sub: "gives a ballpark quote range in 60 seconds" },
  { icon: "📅", label: "Slot booked", sub: "confirmation + pre-visit checklist sent automatically" },
];

export function PhotoIntakeStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          How customers get a quote in 60 seconds
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-sm"
                style={{ backgroundColor: "var(--accent-soft-strong)" }}
              >
                {s.icon}
              </div>
              {i < STEPS.length - 1 && (
                <div className="my-3 hidden text-[var(--muted)] sm:block">→</div>
              )}
              <p className="mt-4 font-semibold text-[var(--ink)]">{s.label}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
