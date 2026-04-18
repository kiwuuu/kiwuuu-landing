import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

const BUBBLES: { from: "user" | "bot"; text: string; extra?: string[]; time: string }[] = [
  { from: "user", text: "Hi, I have a sharp toothache. Can I come in tomorrow?", time: "23:47" },
  { from: "bot", text: "So sorry — how long has it been hurting? Is the pain sharp or dull?", time: "23:47" },
  { from: "user", text: "Sharp. Since this afternoon.", time: "23:48" },
  {
    from: "bot",
    text: "Got it. Earliest slots tomorrow:",
    extra: ["Tomorrow · 09:00", "Tomorrow · 11:30", "Tomorrow · 14:00"],
    time: "23:48",
  },
  { from: "user", text: "09:00 please.", time: "23:48" },
  { from: "bot", text: "Booked. 📅 Care instructions for tonight sent. See you at 09:00.", time: "23:49" },
];

export function HeroDental({ eyebrow, headline, sub, prefill }: Props) {
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
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[var(--primary-dark)]">
              🕚 Saturday 23:47
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[var(--primary-dark)]">
              🦷 3 messages
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[var(--primary-dark)]">
              📅 Patient booked
            </span>
          </div>
          <div className="mt-10 flex flex-col items-start gap-4">
            <WaButton prefill={prefill} size="lg" label="Book your first after-hours patient" />
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
          <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-[var(--line)] bg-white shadow-2xl">
            <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white">
                K
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Kiwuuu Dental</p>
                <p className="text-xs text-[#ACE8D6]">typically replies instantly</p>
              </div>
              <span className="rounded-full bg-black/20 px-2 py-0.5 text-[10px] font-semibold text-white">
                23:47
              </span>
            </div>
            <div className="flex flex-col gap-2.5 bg-[#ECE5DD] px-4 py-4">
              {BUBBLES.map((b, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-1 ${b.from === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm text-[#111] shadow-sm ${
                      b.from === "user" ? "rounded-tr-sm bg-[#DCF8C6]" : "rounded-tl-sm bg-white"
                    }`}
                  >
                    {b.text}
                    {b.extra && (
                      <ul className="mt-2 space-y-1.5">
                        {b.extra.map((slot) => (
                          <li
                            key={slot}
                            className="cursor-pointer rounded-lg border border-[#25D366] px-3 py-1.5 text-center text-xs font-medium text-[#075E54] hover:bg-[#f0faf3]"
                          >
                            {slot}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="mt-1 block text-right text-[10px] text-[#667781]">
                      {b.time} {b.from === "user" ? "✓✓" : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
