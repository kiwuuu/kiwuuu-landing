import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

export function HeroMarginMath({ eyebrow, headline, sub, prefill }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, var(--primary) 0%, transparent 40%), radial-gradient(circle at 80% 50%, var(--accent) 0%, transparent 35%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[var(--bg)]/60" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-6xl md:text-[68px] md:leading-[1.05]">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">{sub}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-[1fr_auto_1fr]">
          <div
            className="rounded-3xl border border-[var(--line)] p-6"
            style={{
              background:
                "linear-gradient(135deg, var(--surface) 0%, color-mix(in oklch, var(--primary) 12%, var(--surface)) 100%)",
            }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
              What you bill
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-4xl font-black text-[var(--ink)] sm:text-5xl">
                  $1.5–3k
                </p>
                <p className="text-xs text-[var(--muted)]">setup, one-time, per client</p>
              </div>
              <div className="border-t border-[var(--line)] pt-4">
                <p className="text-4xl font-black text-[var(--ink)] sm:text-5xl">
                  $299–499
                </p>
                <p className="text-xs text-[var(--muted)]">retainer, per client, per month</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <span
              className="rounded-full border border-[var(--primary)]/40 bg-[var(--bg)] px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]"
              aria-hidden
            >
              vs
            </span>
          </div>

          <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              What you pay Kiwuuu
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-4xl font-black text-[var(--ink)] sm:text-5xl">$899</p>
                <p className="text-xs text-[var(--muted)]">Agency tier · covers 5 clients</p>
              </div>
              <div className="border-t border-[var(--line)] pt-4">
                <p className="text-4xl font-black text-[var(--ink)] sm:text-5xl">$0</p>
                <p className="text-xs text-[var(--muted)]">revenue share · no hidden seats</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-5 rounded-3xl border-2 border-[var(--primary)] p-6 text-center"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklch, var(--primary) 14%, var(--bg)) 0%, var(--bg) 100%)",
          }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
            Your net margin · month 2 · 5 clients
          </p>
          <p className="mt-3 text-4xl font-black text-[var(--primary)] sm:text-6xl">
            $600–1,600
            <span className="ml-2 text-lg font-medium text-[var(--muted)] sm:text-2xl">
              / client / month
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <WaButton prefill={prefill} size="lg" label="Become a Kiwuuu reseller" />
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline"
          >
            Or book a 20-min agency call &rarr;
          </a>
          <p className="text-xs text-[var(--muted)]">Powered by the 22-agent Kiwuuu mesh · White-label · Month-to-month</p>
        </div>
      </div>
    </section>
  );
}
