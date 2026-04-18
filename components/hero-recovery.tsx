import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

export function HeroRecovery({ eyebrow, headline, sub, prefill }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-[500px] w-[900px] rounded-full bg-gradient-to-b from-[var(--accent-soft-strong)] to-transparent blur-3xl" />
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
            <WaButton prefill={prefill} size="lg" label="Get the recovery flow" />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
            >
              Or book a 20-min call &rarr;
            </a>
            <p className="text-xs text-[var(--muted)]">24h Live SLA · GDPR Art. 28 · Cancel anytime</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              The painful truth
            </p>
            <div className="mt-5 flex items-end justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-5xl font-black text-red-500">~75%</span>
                <span className="text-center text-xs text-[var(--muted)]">
                  of your carts<br />are abandoned
                </span>
              </div>
              <span className="mb-5 text-2xl text-[var(--muted)]">→</span>
              <div className="flex flex-col items-center gap-2">
                <span className="text-5xl font-black text-[var(--primary)]">up to 31%</span>
                <span className="text-center text-xs text-[var(--muted)]">
                  recovered<br />with Kiwuuu
                </span>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--accent-soft)] p-4">
              <p className="text-sm font-medium text-[var(--primary-dark)]">
                A Shopify DTC client with ~€90 AOV recovered{" "}
                <span className="font-bold">€2,800 in month 1</span> — results vary by store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
