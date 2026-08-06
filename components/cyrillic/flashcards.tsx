"use client";

import { useEffect, useState } from "react";
import { AZBUKA, byCyr } from "@/lib/cyrillic";
import {
  type Progress,
  boxCounts,
  buildQueue,
  freshCard,
  grade,
  loadProgress,
  resetProgress,
  saveProgress,
} from "@/lib/leitner";
import { ScoreBar } from "./score-bar";

type Props = { onExit: () => void };

const ALL_KEYS = AZBUKA.map((l) => l.cyr);

export function Flashcards({ onExit }: Props) {
  const [progress, setProgress] = useState<Progress | null>(null);
  const [queue, setQueue] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [session, setSession] = useState({ right: 0, wrong: 0 });

  useEffect(() => {
    const p = loadProgress();
    setProgress(p);
    setQueue(buildQueue(p, ALL_KEYS, Date.now(), 10));
  }, []);

  if (!progress) {
    return (
      <div>
        <ScoreBar stats={[]} onExit={onExit} />
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-[var(--muted)]">
          …
        </div>
      </div>
    );
  }

  const finished = idx >= queue.length;
  const letter = finished ? null : byCyr.get(queue[idx])!;

  const answer = (knewIt: boolean) => {
    if (!letter) return;
    const now = Date.now();
    const card = progress.cards[letter.cyr] ?? freshCard();
    const next: Progress = {
      ...progress,
      cards: { ...progress.cards, [letter.cyr]: grade(card, knewIt, now) },
    };
    setProgress(next);
    saveProgress(next);
    setSession((s) => ({
      right: s.right + (knewIt ? 1 : 0),
      wrong: s.wrong + (knewIt ? 0 : 1),
    }));
    setRevealed(false);
    setIdx((i) => i + 1);
  };

  const reviewMore = () => {
    setQueue(buildQueue(progress, ALL_KEYS, Date.now(), 10));
    setIdx(0);
    setSession({ right: 0, wrong: 0 });
    setRevealed(false);
  };

  const reset = () => {
    if (!confirm("Обриши сав напредак?")) return;
    resetProgress();
    const p = loadProgress();
    setProgress(p);
    setQueue(buildQueue(p, ALL_KEYS, Date.now(), 10));
    setIdx(0);
    setSession({ right: 0, wrong: 0 });
    setRevealed(false);
  };

  const counts = boxCounts(progress, ALL_KEYS);

  return (
    <div>
      <ScoreBar
        stats={[
          { label: "Знам", value: session.right },
          { label: "Учим", value: session.wrong },
        ]}
        onExit={onExit}
      />
      {finished ? (
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center">
          <p className="text-3xl">🌟</p>
          <p className="mt-2 text-xl font-bold text-[var(--ink)]">
            Крај рунде!
          </p>
          <div
            className="mx-auto mt-6 flex h-4 max-w-sm overflow-hidden rounded-full border border-[var(--line)]"
            aria-label="Напредак по кутијама"
          >
            {([1, 2, 3, 4, 5] as const).map((box) => (
              <div
                key={box}
                style={{ width: `${(counts[box] / ALL_KEYS.length) * 100}%` }}
                className={
                  box === 1
                    ? "bg-[var(--line)]"
                    : box === 5
                      ? "bg-[var(--primary-dark)]"
                      : box === 4
                        ? "bg-[var(--primary)]"
                        : "bg-[var(--accent)]"
                }
              />
            ))}
          </div>
          <p lang="en" className="mt-2 text-xs text-[var(--muted)]">
            Letters move right as you learn them.
          </p>
          <button
            type="button"
            onClick={reviewMore}
            className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--on-primary)] transition hover:bg-[var(--primary-dark)]"
          >
            Још 10
          </button>
          <div className="mt-4">
            <button
              type="button"
              onClick={reset}
              className="text-xs text-[var(--muted)] underline-offset-2 hover:underline"
            >
              Обриши напредак
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => !revealed && setRevealed(true)}
          className="block w-full rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center"
        >
          {!revealed ? (
            <>
              <p className="text-7xl font-bold text-[var(--ink)]">
                {letter!.cyr} {letter!.cyrLower}
              </p>
              <p lang="en" className="mt-6 text-sm text-[var(--muted)]">
                Tap to see the word
              </p>
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={letter!.word.img}
                alt={letter!.word.cyr}
                width={160}
                height={160}
                className="mx-auto h-36 w-36 rounded-2xl"
              />
              <p className="mt-4 text-3xl font-bold text-[var(--ink)]">
                {letter!.word.cyr}
              </p>
            </>
          )}
        </button>
      )}
      {!finished && revealed && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => answer(false)}
            className="min-h-14 rounded-2xl border border-[var(--line)] bg-[var(--bg)] text-lg font-semibold text-[var(--ink)] transition hover:border-red-400"
          >
            ✗ Још не
          </button>
          <button
            type="button"
            onClick={() => answer(true)}
            className="min-h-14 rounded-2xl bg-[var(--primary)] text-lg font-semibold text-[var(--on-primary)] transition hover:bg-[var(--primary-dark)]"
          >
            ✓ Знам
          </button>
        </div>
      )}
    </div>
  );
}
