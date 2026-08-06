import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CyrillicGame } from "@/components/cyrillic/game";
import { AZBUKA } from "@/lib/cyrillic";

export const metadata: Metadata = {
  title: "Учи ћирилицу — free Serbian Cyrillic game by Kiwuuu",
  description:
    "Learn all 30 letters of Serbian Cyrillic (Vukova azbuka) with picture spelling, a quiz, memory pairs and smart flashcards. Free, mobile-first, no signup.",
  openGraph: {
    title: "Учи ћирилицу — free Serbian Cyrillic game by Kiwuuu",
    description:
      "Picture spelling, quiz, memory pairs and smart flashcards for all 30 letters of Serbian Cyrillic.",
    type: "website",
    url: "https://kiwuuu.com/cyrillic",
    siteName: "Kiwuuu",
  },
  alternates: { canonical: "https://kiwuuu.com/cyrillic" },
};

export default function CyrillicPage() {
  return (
    <div className="min-h-screen">
      <Nav prefill="Zdravo! I found the Cyrillic game on kiwuuu.com" />
      <main>
        <section className="px-6 pt-14 pb-4 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary-dark)]">
              Free learning game
            </p>
            <h1
              lang="sr-Cyrl"
              className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl"
            >
              Учи ћирилицу
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Learn all 30 letters of Serbian Cyrillic through pictures and
              play — spell words, take quizzes, match pairs and review with
              smart flashcards.
            </p>
          </div>
        </section>

        <CyrillicGame />

        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2
              lang="sr-Cyrl"
              className="text-center text-2xl font-bold tracking-tight text-[var(--ink)]"
            >
              Азбука
            </h2>
            <p className="mt-2 text-center text-sm text-[var(--muted)]">
              The 30 letters of the azbuka, in order.
            </p>
            <ul
              lang="sr-Cyrl"
              className="mt-8 grid grid-cols-5 gap-2 sm:grid-cols-6"
            >
              {AZBUKA.map((l) => (
                <li
                  key={l.cyr}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-3 text-center"
                >
                  <span className="text-2xl font-semibold text-[var(--ink)]">
                    {l.cyr}
                  </span>
                  <span className="ml-1 text-lg text-[var(--muted)]">
                    {l.cyrLower}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
