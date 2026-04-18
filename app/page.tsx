import type { Metadata } from "next";
import Link from "next/link";
import { listVerticals } from "@/lib/verticals";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Kiwuuu — WhatsApp flows, done for you in 24h",
  description:
    "Pick your industry. We design your WhatsApp business flow. Live in 24 hours.",
};

export default function Home() {
  const verticals = listVerticals();
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--surface-translucent)] backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-[var(--ink)]">
            Kiwuuu
          </span>
        </nav>
      </header>
      <main className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-6xl">
            What&rsquo;s your business?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
            Pick your industry. Founder-built WhatsApp flow. Live in 24 hours.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                href={`/${v.slug}`}
                className="group rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 text-left transition hover:border-[var(--primary)]"
              >
                <div className="text-3xl" aria-hidden>
                  {v.emoji}
                </div>
                <div className="mt-3 text-lg font-semibold text-[var(--ink)]">
                  {v.name}
                </div>
                <div className="mt-1 text-sm text-[var(--muted)]">
                  See the {v.slug} flow &rarr;
                </div>
              </Link>
            ))}
            <a
              href="https://wa.me/381628258341?text=Hi%2C%20my%20industry%20isn%27t%20listed"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-dashed border-[var(--line)] p-7 text-left text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary-dark)]"
            >
              <div className="text-3xl" aria-hidden>
                ✨
              </div>
              <div className="mt-3 text-lg font-semibold text-[var(--ink)]">
                Not listed?
              </div>
              <div className="mt-1 text-sm">
                Chat with Kiwu — we build custom flows too &rarr;
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
