import type { PainCard } from "@/lib/verticals";

type Props = {
  heading: string;
  cards: PainCard[];
};

export function PainSolutionGrid({ heading, cards }: Props) {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="flex flex-col rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7"
            >
              <div className="text-3xl" aria-hidden>
                {c.emoji}
              </div>
              <blockquote className="mt-4 text-lg font-semibold text-[var(--ink)]">
                &ldquo;{c.question}&rdquo;
              </blockquote>
              <div
                className="mt-4 flex items-start gap-3 rounded-2xl bg-[var(--accent-soft)] p-4"
                aria-hidden="false"
              >
                <span className="mt-0.5 text-[var(--primary)]" aria-hidden>
                  →
                </span>
                <p className="text-sm leading-relaxed text-[var(--primary-dark)]">
                  {c.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
