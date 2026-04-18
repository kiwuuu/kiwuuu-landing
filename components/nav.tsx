import { waLink } from "@/lib/verticals";

type Props = {
  prefill: string;
};

export function Nav({ prefill }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--surface-translucent)] backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--ink)]"
          aria-label="Kiwuuu home"
        >
          Kiwuuu
        </a>
        <a
          href={waLink(prefill)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 text-sm font-medium text-[var(--primary-dark)] transition hover:bg-[var(--accent-soft-strong)]"
        >
          Chat with Kiwu &rarr;
        </a>
      </nav>
    </header>
  );
}
