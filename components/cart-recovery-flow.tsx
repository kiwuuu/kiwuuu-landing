const MESSAGES = [
  {
    from: "bot" as const,
    at: "+0h15m",
    body: "Hey — noticed your cart's still holding on to that Linen shirt (M, Natural). Want me to reserve it for 24h?",
    cta: ["Yes, reserve it", "Not right now"],
  },
  {
    from: "user" as const,
    at: "+0h18m",
    body: "Is it on sale?",
  },
  {
    from: "bot" as const,
    at: "+0h18m",
    body: "Not right now — but I can drop free shipping on it ($8 off). Your total: $81.00.",
    cta: ["Send me the checkout link"],
  },
  {
    from: "user" as const,
    at: "+0h19m",
    body: "Yes please",
  },
  {
    from: "bot" as const,
    at: "+0h19m",
    body: "Here you go → one-tap checkout: shop.example/c/9xq. Size M on its way once you tap.",
  },
];

export function CartRecoveryFlow() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary-dark)]">
            Anatomy of a recovery
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Five messages. Nineteen minutes. Cart saved.
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Not an email blast. Not a retargeting ad. A conversation in the channel they already check 150 times a day.
          </p>
        </div>
        <div className="mx-auto max-w-xl overflow-hidden rounded-3xl border border-[var(--line)] bg-[#ECE5DD] p-5">
          {MESSAGES.map((m, i) => (
            <div
              key={i}
              className={`mb-3 flex flex-col ${m.from === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm text-[#111] shadow-sm ${
                  m.from === "user" ? "rounded-tr-sm bg-[#DCF8C6]" : "rounded-tl-sm bg-white"
                }`}
              >
                <p>{m.body}</p>
                {m.cta && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.cta.map((c) => (
                      <span
                        key={c}
                        className="rounded-lg border border-[#25D366] px-2.5 py-1 text-[11px] font-medium text-[#075E54]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
                <span className="mt-1 block text-right text-[10px] text-[#667781]">
                  {m.at} {m.from === "user" ? "✓✓" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
