import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

export function HeroCartSave({ eyebrow, headline, sub, prefill }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-[520px] w-[920px] rounded-full bg-gradient-to-b from-[var(--accent-soft-strong)] to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)]/70 px-4 py-1.5 text-sm font-medium text-[var(--primary-dark)]">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">{sub}</p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <WaButton prefill={prefill} size="lg" label="Recover my abandoned carts" />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
            >
              Or book a 20-min call &rarr;
            </a>
            <p className="text-xs text-[var(--muted)]">Shopify · Woo · custom · 24h go-live</p>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-red-200 bg-red-50 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🛒</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  ✕
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-red-600">
                Abandoned
              </p>
              <p className="mt-1 text-sm font-semibold text-red-900">
                Linen shirt · M · Natural
              </p>
              <p className="text-xs text-red-700/80">$89.00 · cart 2h18m old</p>
              <div className="mt-3 border-t border-red-200 pt-3">
                <p className="text-[11px] text-red-700/70">
                  No email confirmed. Session gone.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-[var(--primary)] bg-[var(--surface)] p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🛒</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-[var(--on-primary)]">
                  ✓
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--primary-dark)]">
                Recovered
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--ink)]">
                Linen shirt · M · Natural
              </p>
              <p className="text-xs text-[var(--muted)]">$89.00 · checked out 14m later</p>
              <div className="mt-3 border-t border-[var(--line)] pt-3">
                <p className="text-[11px] text-[var(--muted)]">
                  WhatsApp: <em>"Still want this? Here's your checkout link"</em>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-[var(--accent-soft)] px-5 py-4 text-center">
            <p className="text-sm font-semibold text-[var(--primary-dark)]">
              <span className="text-xl font-black">~75%</span> of carts die →&nbsp;
              <span className="text-xl font-black">up to 31%</span> recovered with Kiwuuu
            </p>
            <p className="mt-1 text-[11px] text-[var(--muted)]">
              Shopify DTC client, ~€90 AOV: €2,800 recovered in month 1. Results vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
