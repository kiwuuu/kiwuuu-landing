import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

export function HeroTableNight({ eyebrow, headline, sub, prefill }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-[540px] w-[940px] rounded-full bg-gradient-to-b from-[var(--accent-soft-strong)] to-transparent blur-3xl" />
      </div>
      <div className="pointer-events-none absolute right-[-80px] bottom-[-80px] h-[360px] w-[360px] rounded-full bg-[var(--primary)]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)]/70 px-4 py-1.5 text-sm font-medium text-[var(--primary-dark)]">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">{sub}</p>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-3 py-3">
              <p className="text-2xl font-black text-[var(--primary)]">23:14</p>
              <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">Booked</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-3 py-3">
              <p className="text-2xl font-black text-[var(--primary)]">00:02</p>
              <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">Booked</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-3 py-3">
              <p className="text-2xl font-black text-[var(--primary)]">01:47</p>
              <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">Booked</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">
            Three tables booked while the floor staff were closing up.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <WaButton prefill={prefill} size="lg" label="Fill my empty tables tonight" />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
            >
              Or book a 20-min call &rarr;
            </a>
            <p className="text-xs text-[var(--muted)]">GDPR · POS-synced · 24h go-live</p>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="w-full max-w-xs rotate-[2deg] overflow-hidden rounded-[32px] border-[10px] border-black bg-black shadow-2xl">
            <div className="bg-[#075E54] px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] font-bold">
                  🍝
                </div>
                <div>
                  <p className="text-sm font-semibold">Trattoria Da Luca</p>
                  <p className="text-[11px] text-[#ACE8D6]">online</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 bg-[#ECE5DD] px-3 py-4">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 text-sm text-[#111] shadow-sm">
                Table for 2, 20:30 tonight?
                <span className="mt-1 block text-right text-[10px] text-[#667781]">23:12 ✓✓</span>
              </div>
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-[#111] shadow-sm">
                20:30 is taken, but I have 20:45 on the patio. Works?
                <span className="mt-1 block text-right text-[10px] text-[#667781]">23:13</span>
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 text-sm text-[#111] shadow-sm">
                Perfect 🙌
                <span className="mt-1 block text-right text-[10px] text-[#667781]">23:13 ✓✓</span>
              </div>
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-[#111] shadow-sm">
                Booked. See you at 20:45. Cancelling? Reply CANCEL.
                <span className="mt-1 block text-right text-[10px] text-[#667781]">23:14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
