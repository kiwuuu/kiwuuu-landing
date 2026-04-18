import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

export function HeroTrialRescue({ eyebrow, headline, sub, prefill }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-[520px] w-[920px] rounded-full bg-gradient-to-b from-[var(--accent-soft-strong)] to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)]/70 px-4 py-1.5 text-sm font-medium text-[var(--primary-dark)]">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">{sub}</p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <WaButton prefill={prefill} size="lg" label="Rescue my trial signups" />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
            >
              Or book a 20-min founder call &rarr;
            </a>
            <p className="text-xs text-[var(--muted)]">Founder-built · Month-to-month · Cancel anytime</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              A trial, three states
            </p>
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 rounded-2xl bg-[var(--accent-soft)] p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-[var(--on-primary)]">
                  1
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--ink)]">Day 1 · signed up</p>
                  <p className="text-xs text-[var(--muted)]">Email captured, product never touched.</p>
                </div>
                <span className="text-xl">🟢</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-dashed border-[var(--line)] p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--muted)]/30 text-sm font-bold text-[var(--muted)]">
                  2
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--muted)] line-through">Day 7 · ghost</p>
                  <p className="text-xs text-[var(--muted)]">
                    Your drip email landed in promotions. Dead.
                  </p>
                </div>
                <span className="text-xl grayscale">💤</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border-2 border-[var(--primary)] bg-[var(--surface)] p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary-dark)] text-sm font-bold text-[var(--on-primary)]">
                  3
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--ink)]">Day 8 · activated</p>
                  <p className="text-xs text-[var(--muted)]">
                    WhatsApp: <em>"Need a hand? Here's your first setup in 2 clicks."</em>
                  </p>
                </div>
                <span className="text-xl">⚡</span>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-[var(--accent-soft-strong)] px-4 py-3 text-center">
              <p className="text-sm font-semibold text-[var(--primary-dark)]">
                Up to <span className="text-lg">23%</span> of ghosted trials recovered into paying users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
