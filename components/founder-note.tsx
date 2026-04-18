export function FounderNote() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-10">
          <div className="flex items-start gap-5">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-2xl font-bold text-[var(--on-primary)] shadow-sm"
              aria-label="Founder portrait placeholder"
            >
              K
            </div>
            <div>
              <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
                Hey, I&rsquo;m Kiwu — founder of Kiwuuu. I build every DFY flow
                personally, no sales team, no BDRs. If it doesn&rsquo;t pay for
                itself in month 1, I refund you. Chat with me on WhatsApp —
                fastest way to talk.
              </p>
              <p className="mt-5 text-sm text-[var(--muted)]">
                — Kiwu · Kiwuuu LLC · Wyoming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
