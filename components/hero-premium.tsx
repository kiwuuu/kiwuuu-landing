import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

export function HeroPremium({ eyebrow, headline, sub, prefill }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-[600px] w-[1000px] rounded-full bg-gradient-to-b from-[var(--accent-soft-strong)] to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
          style={{
            borderColor: "var(--accent)",
            backgroundColor: "var(--accent-soft)",
            color: "var(--primary-dark)",
          }}
        >
          {eyebrow}
        </span>
        <h1 className="mt-8 text-balance text-5xl font-bold tracking-tight text-[var(--ink)] sm:text-6xl md:text-[68px] md:leading-[1.05]">
          {headline}
        </h1>
        <div
          className="mx-auto mt-4 h-1 w-20 rounded-full"
          style={{ background: "var(--accent)" }}
        />
        <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">{sub}</p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <WaButton prefill={prefill} size="lg" label="Qualify your buyers now" />
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
          >
            Or book a 20-min call &rarr;
          </a>
          <p className="mt-2 text-xs text-[var(--muted)]">
            24h Live SLA · GDPR Art. 28 · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
