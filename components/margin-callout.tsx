const ROWS = [
  {
    label: "Your cost (Kiwuuu Agency tier)",
    value: "$899/mo",
    note: "covers up to 5 client flows",
    highlight: false,
  },
  {
    label: "Setup fee you charge",
    value: "$1,500–3,000",
    note: "one-time, per client",
    highlight: false,
  },
  {
    label: "Monthly retainer you charge",
    value: "$299–499/mo",
    note: "per client, recurring",
    highlight: false,
  },
  {
    label: "Your net margin (month 2, 5 clients)",
    value: "$600–1,600/client",
    note: "per client · per month",
    highlight: true,
  },
];

export function MarginCallout() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-[var(--ink)] sm:text-3xl">Do the math.</h2>
        <p className="mt-2 text-[var(--muted)]">
          5 clients. Month 2. Every dollar above $899 is yours.
        </p>
        <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--line)]">
          {ROWS.map((r, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-6 py-4 ${
                i < ROWS.length - 1 ? "border-b border-[var(--line)]" : ""
              } ${r.highlight ? "bg-[var(--accent-soft)]" : ""}`}
            >
              <div>
                <p className="font-medium text-[var(--ink)]">{r.label}</p>
                <p className="text-xs text-[var(--muted)]">{r.note}</p>
              </div>
              <span
                className={`ml-4 shrink-0 text-lg font-bold ${
                  r.highlight ? "text-[var(--primary)]" : "text-[var(--ink)]"
                }`}
              >
                {r.value}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--muted)]">
          Your pricing. Your branding. We don&rsquo;t share in the upside — you do.
        </p>
      </div>
    </section>
  );
}
