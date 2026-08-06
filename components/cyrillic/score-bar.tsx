"use client";

type Props = {
  stats: { label: string; value: string | number }[];
  onExit: () => void;
};

export function ScoreBar({ stats, onExit }: Props) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <button
        type="button"
        onClick={onExit}
        className="rounded-full px-4 py-2 text-sm font-medium text-[var(--primary-dark)] transition hover:bg-[var(--accent-soft-strong)]"
      >
        ← Назад
      </button>
      <div className="flex flex-wrap gap-2">
        {stats.map((s) => (
          <span
            key={s.label}
            className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm text-[var(--primary-dark)]"
          >
            {s.label}: <strong>{s.value}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}
