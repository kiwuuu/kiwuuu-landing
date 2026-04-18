const LAYERS = [
  {
    label: "Your client's WhatsApp",
    sub: "Your branding. Your voice. Your invoice.",
    tone: "client",
  },
  {
    label: "White-label dashboard",
    sub: "Flow editor · conversation logs · API keys — all yours to relabel.",
    tone: "you",
  },
  {
    label: "Kiwuuu flow engine",
    sub: "YAML state machine · 18+ production flows · hot-reload · GDPR Art. 28.",
    tone: "kiwuuu",
  },
  {
    label: "22-agent mesh · mesh-coordinator :3003",
    sub: "Memory, scheduler, router, compliance, payments, 17 more — invisible to the client.",
    tone: "infra",
  },
];

export function WhiteLabelStack() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
            $ dig +stack kiwuuu.agency
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Your clients see you. Everything below the line is invisible.
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Four layers. Only the top two carry your brand. Everything below runs the work — and
            never appears in the client's inbox.
          </p>
        </div>

        <div className="space-y-3">
          {LAYERS.map((l, i) => (
            <div
              key={l.label}
              className={`relative overflow-hidden rounded-2xl border p-5 ${
                l.tone === "client"
                  ? "border-[var(--primary)] bg-[var(--primary)]/10"
                  : l.tone === "you"
                    ? "border-[var(--primary)]/50 bg-[var(--surface)]"
                    : "border-[var(--line)] bg-[var(--surface)]"
              }`}
              style={{
                marginLeft: `${i * 12}px`,
                marginRight: `${i * 12}px`,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--primary)]">
                      L{i + 1}
                    </span>
                    {l.tone === "client" && (
                      <span className="rounded-full bg-[var(--primary)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--on-primary)]">
                        Your brand
                      </span>
                    )}
                    {l.tone === "infra" && (
                      <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[10px] font-mono text-[var(--muted)]">
                        invisible
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-base font-semibold text-[var(--ink)]">{l.label}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{l.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--muted)]">
          Full export of flows + logs anytime. Month-to-month. If you churn past 5 clients, tier auto-upgrades.
        </p>
      </div>
    </section>
  );
}
