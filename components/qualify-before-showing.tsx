const QUESTIONS = [
  {
    q: "Are you pre-approved or paying cash?",
    options: ["Pre-approved", "Cash buyer", "Not yet"],
    note: "Routes unqualified leads to a lender partner without burning your Saturday.",
  },
  {
    q: "When are you looking to move?",
    options: ["< 30 days", "30–90 days", "3+ months"],
    note: "Urgency tag drives show priority and which listings you surface first.",
  },
  {
    q: "Have you seen other homes in this range?",
    options: ["Yes, several", "One or two", "This is the first"],
    note: "Tire-kicker signal. Pairs with pre-approval to auto-score the lead.",
  },
];

export function QualifyBeforeShowing() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary-dark)]">
            Three questions before you burn a Saturday
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Every showing starts with three taps.
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Your time belongs to serious buyers. Everyone else gets a warm, qualifying reply — and a lender intro if they need one.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {QUESTIONS.map((q, i) => (
            <li
              key={i}
              className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] font-mono text-sm font-bold text-[var(--on-primary)]">
                {i + 1}
              </span>
              <p className="mt-4 text-lg font-semibold text-[var(--ink)]">{q.q}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {q.options.map((o) => (
                  <span
                    key={o}
                    className="rounded-full border border-[var(--primary)] px-3 py-1 text-xs font-medium text-[var(--primary-dark)]"
                  >
                    {o}
                  </span>
                ))}
              </div>
              <p className="mt-5 border-t border-[var(--line)] pt-4 text-xs text-[var(--muted)]">
                {q.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
