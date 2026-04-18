const STEPS = [
  { time: "19:04", icon: "📸", label: "Photo arrives", sub: "Customer sends a pic of the broken thing" },
  { time: "19:04", icon: "🤖", label: "Bot pre-diagnoses", sub: "Ballpark quote in ~60 seconds" },
  { time: "19:05", icon: "📅", label: "Slot booked", sub: "Confirmation + pre-visit checklist sent" },
  { time: "08:00", icon: "🔔", label: "Morning reminder", sub: "\"Still on? Clear the driveway?\" — friction-free reschedule" },
];

export function PhotoIntakeTimeline() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)] px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary-dark)]">
            A job request, start to finish
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Customer sends a photo. You show up.
          </h2>
        </div>
        <ol className="relative ml-4 border-l-2 border-dashed border-[var(--line)] pl-8">
          {STEPS.map((s, i) => (
            <li key={i} className={i === STEPS.length - 1 ? "" : "pb-8"}>
              <span
                className="absolute -left-[18px] flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[var(--line)] bg-[var(--bg)] text-lg shadow-sm"
                aria-hidden
              >
                {s.icon}
              </span>
              <div className="flex items-center gap-3">
                <p className="font-semibold text-[var(--ink)]">{s.label}</p>
                <span className="font-mono text-[11px] font-semibold text-[var(--primary-dark)]">
                  · {s.time}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{s.sub}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
