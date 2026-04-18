import { WaButton } from "./wa-button";
import { CALENDAR_URL } from "@/lib/verticals";

type Props = {
  eyebrow: string;
  headline: string;
  sub: string;
  prefill: string;
};

export function HeroPhotoQuote({ eyebrow, headline, sub, prefill }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-[520px] w-[920px] rounded-full bg-gradient-to-b from-[var(--accent-soft-strong)] to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.95fr] md:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)]/70 px-4 py-1.5 text-sm font-medium text-[var(--primary-dark)]">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">{sub}</p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium">
            {["🔧 Plumbing", "⚡ Electrical", "🚗 Auto", "💇 Beauty", "🧹 Cleaning", "🏋️ Fitness"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[var(--ink)]"
                >
                  {t}
                </span>
              ),
            )}
          </div>
          <div className="mt-10 flex flex-col items-start gap-4">
            <WaButton prefill={prefill} size="lg" label="Get quote requests on autopilot" />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--primary-dark)] underline-offset-4 hover:underline"
            >
              Or book a 20-min call &rarr;
            </a>
            <p className="text-xs text-[var(--muted)]">1–2 crews · 24h go-live · Cancel anytime</p>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-[var(--line)] bg-white shadow-2xl">
            <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white">
                K
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Rodriguez Plumbing</p>
                <p className="text-xs text-[#ACE8D6]">usually replies in &lt; 2 min</p>
              </div>
            </div>
            <div className="space-y-2.5 bg-[#ECE5DD] px-4 py-4">
              <div className="ml-auto max-w-[82%]">
                <div className="rounded-2xl rounded-tr-sm bg-[#DCF8C6] p-2 shadow-sm">
                  <div
                    className="flex h-32 w-full items-center justify-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #d1c4a8 0%, #a8946f 40%, #8b7a5c 100%)",
                    }}
                    aria-label="Photo of a leaking faucet"
                  >
                    <div className="relative">
                      <span className="text-4xl">🚰</span>
                      <span className="absolute -right-1 -top-1 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                      <span className="absolute -right-3 top-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                    </div>
                  </div>
                  <p className="mt-2 px-1 text-sm text-[#111]">Faucet drip under the sink</p>
                  <span className="mt-1 block text-right text-[10px] text-[#667781]">19:04 ✓✓</span>
                </div>
              </div>
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 text-sm text-[#111] shadow-sm">
                Thanks — looks like a ceramic disc cartridge. <strong>$120–150</strong> to fix (parts + 30 min). Tomorrow 10 AM or Friday 14:00?
                <span className="mt-1 block text-right text-[10px] text-[#667781]">19:04</span>
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 text-sm text-[#111] shadow-sm">
                Tomorrow 10 AM 🙏
                <span className="mt-1 block text-right text-[10px] text-[#667781]">19:05 ✓✓</span>
              </div>
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-[#111] shadow-sm">
                Booked. Reminder 8 AM. Please clear under the sink 🙏
                <span className="mt-1 block text-right text-[10px] text-[#667781]">19:05</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
