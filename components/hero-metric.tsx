import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
  metric: string;
  metricLabel: string;
};

export function HeroMetric({ eyebrow, headline, sub, prefill, metric, metricLabel }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-[500px] w-[900px] rounded-full bg-gradient-to-b from-[var(--accent-soft-strong)] to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)]/70 px-4 py-1.5 text-sm font-medium text-[var(--primary-dark)]">
          {eyebrow}
        </span>
        <div className="mt-8 flex flex-col items-center">
          <span
            className="font-black leading-none tracking-tight text-[var(--primary)]"
            style={{ fontSize: "clamp(72px, 12vw, 120px)" }}
          >
            {metric}
          </span>
          <span className="mt-2 text-base font-medium text-[var(--muted)]">{metricLabel}</span>
        </div>
        <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)]">{sub}</p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <WaButton prefill={prefill} size="lg" />
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
          >
            Or book a 20-min call &rarr;
          </a>
          <p className="mt-2 text-xs text-[var(--muted)]">24h Live SLA · GDPR Art. 28 · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
