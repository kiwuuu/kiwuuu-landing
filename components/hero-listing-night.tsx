import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

const LISTINGS = [
  {
    addr: "412 Maple Drive",
    price: "$789k",
    beds: "4 bd · 3 ba · 2,340 sqft",
    status: "Saturday 14:00 showing booked",
    booked: true,
  },
  {
    addr: "68 Harbor Point",
    price: "$1.24M",
    beds: "3 bd · 2 ba · waterfront",
    status: "2 qualified leads this week",
    booked: false,
  },
  {
    addr: "1901 Oakridge Ct",
    price: "$619k",
    beds: "3 bd · 2 ba · remodeled",
    status: "Open house Sunday 11–13",
    booked: false,
  },
];

export function HeroListingNight({ eyebrow, headline, sub, prefill }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-[520px] w-[920px] rounded-full bg-gradient-to-b from-[var(--accent-soft-strong)] to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)]/70 px-4 py-1.5 text-sm font-medium text-[var(--primary-dark)]">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">{sub}</p>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">No-show reduction</p>
              <p className="mt-1 text-2xl font-black text-[var(--primary)]">40%</p>
              <p className="text-xs text-[var(--muted)]">qualified before booking</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Response time</p>
              <p className="mt-1 text-2xl font-black text-[var(--primary)]">&lt;60s</p>
              <p className="text-xs text-[var(--muted)]">before they bounce to Zillow</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start gap-4">
            <WaButton prefill={prefill} size="lg" label="Qualify my buyers on WhatsApp" />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
            >
              Or book a 20-min call &rarr;
            </a>
            <p className="text-xs text-[var(--muted)]">MLS synced · Per agent or team · Cancel anytime</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-3">
            {LISTINGS.map((l, i) => (
              <div
                key={l.addr}
                className={`relative rounded-3xl border bg-[var(--surface)] p-5 shadow-sm transition ${
                  l.booked ? "border-[var(--accent)]" : "border-[var(--line)]"
                }`}
                style={{
                  transform: `translateX(${i === 0 ? 0 : i * 12}px)`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[var(--ink)]">{l.addr}</p>
                    <p className="text-xs text-[var(--muted)]">{l.beds}</p>
                  </div>
                  <p className="text-lg font-black text-[var(--primary)]">{l.price}</p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {l.booked && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--on-primary)]">
                      📅 Booked
                    </span>
                  )}
                  <p className={`text-xs ${l.booked ? "text-[var(--ink)]" : "text-[var(--muted)]"}`}>
                    {l.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
