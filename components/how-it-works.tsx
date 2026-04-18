const STEPS = [
  {
    n: 1,
    title: "Tell Kiwu about your business",
    desc: "20-min call. You describe your day. Kiwu listens.",
  },
  {
    n: 2,
    title: "We design the flow live",
    desc: "On the call. No slide decks. You see the conversation.",
  },
  {
    n: 3,
    title: "Live in 24 hours",
    desc: "You approve every message before it sends.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          How it works
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-[var(--on-primary)]">
                {s.n}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">
                {s.title}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
