import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  prefill: string;
};

export function FinalCta({ prefill }: Props) {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
          Ready to see it?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--muted)]">
          Chat with Kiwu now — he replies within 1 hour (EU business hours).
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <WaButton prefill={prefill} size="lg" />
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
          >
            Or book a call &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
