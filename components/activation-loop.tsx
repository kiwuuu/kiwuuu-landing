const STEPS = [
  {
    n: "01",
    title: "Signup webhook → WhatsApp",
    body: "As soon as the user confirms their email, we trigger a single message tied to their plan tier.",
    accent: "Stripe · Paddle · custom",
  },
  {
    n: "02",
    title: "Nudge tied to first action",
    body: "If they don't complete onboarding step 1 in 48h, the bot offers a 2-click assist — not a generic 'need help?'",
    accent: "Intercom · Segment · Rudderstack",
  },
  {
    n: "03",
    title: "Activated → expansion handoff",
    body: "Once they hit the activation event, the bot steps back. Sales gets a Slack ping — no more poking.",
    accent: "Slack · HubSpot · Pipedrive",
  },
];

export function ActivationLoop() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary-dark)]">
            The activation loop
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Three messages. Tied to your event model. Nothing generic.
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Your PLG funnel on WhatsApp — not another drip tool your users ignore.
          </p>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:border-[var(--primary)]"
            >
              <span className="font-mono text-4xl font-black text-[var(--primary)]/20 transition group-hover:text-[var(--primary)]/40">
                {s.n}
              </span>
              <p className="mt-3 text-lg font-semibold text-[var(--ink)]">{s.title}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{s.body}</p>
              <p className="mt-5 border-t border-[var(--line)] pt-3 text-xs font-mono text-[var(--muted)]">
                {s.accent}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
