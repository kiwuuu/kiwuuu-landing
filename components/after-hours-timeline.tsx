const STEPS = [
  { time: "23:47", label: "Patient messages", sub: '"Sharp toothache since this afternoon"', icon: "🦷" },
  { time: "23:47", label: "Triage", sub: "Bot asks pain type + urgency", icon: "🤖" },
  { time: "23:48", label: "Slot offered", sub: "Earliest 3 from your calendar", icon: "📅" },
  { time: "23:49", label: "Booked + aftercare", sub: "Confirmation + care instructions sent", icon: "✅" },
];

export function AfterHoursTimeline() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)] px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
            23:47 · Saturday night · practice closed
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Four minutes from toothache to booked.
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={i} className="relative">
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-5">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-xl"
                    style={{ backgroundColor: "var(--accent-soft-strong)" }}
                  >
                    {s.icon}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[var(--primary-dark)]">
                    {s.time}
                  </span>
                </div>
                <p className="mt-4 font-semibold text-[var(--ink)]">{s.label}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{s.sub}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-[var(--muted)] sm:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          No staff on call. No missed revenue. The patient wakes up tomorrow with a booked slot and aftercare in their pocket.
        </p>
      </div>
    </section>
  );
}
