export type Box = 1 | 2 | 3 | 4 | 5;

export type CardState = {
  box: Box;
  dueAt: number;
  seen: number;
  correct: number;
};

export type Progress = {
  version: 1;
  cards: Record<string, CardState>;
  bestStreak: number;
};

export const STORAGE_KEY = "kiwuuu.cyrillic.v1";

/** Review intervals per box (box 1 is always due). Short on purpose — casual game, no reminders. */
const INTERVALS_MS: Record<Box, number> = {
  1: 0,
  2: 10 * 60_000,
  3: 60 * 60_000,
  4: 24 * 3_600_000,
  5: 3 * 24 * 3_600_000,
};

export function freshCard(): CardState {
  return { box: 1, dueAt: 0, seen: 0, correct: 0 };
}

export function defaultProgress(): Progress {
  return { version: 1, cards: {}, bestStreak: 0 };
}

export function grade(card: CardState, correct: boolean, now: number): CardState {
  const box = correct ? ((Math.min(card.box + 1, 5) as Box)) : 1;
  return {
    box,
    dueAt: correct ? now + INTERVALS_MS[box] : now,
    seen: card.seen + 1,
    correct: card.correct + (correct ? 1 : 0),
  };
}

/**
 * Build a review queue of `size` letter keys: everything due first
 * (lowest box, then longest overdue), padded with not-yet-due cards
 * so a session never runs dry.
 */
export function buildQueue(progress: Progress, allKeys: string[], now: number, size = 10): string[] {
  const state = (k: string) => progress.cards[k] ?? freshCard();
  const sorted = [...allKeys].sort((a, b) => {
    const sa = state(a);
    const sb = state(b);
    return sa.box - sb.box || sa.dueAt - sb.dueAt;
  });
  const due = sorted.filter((k) => state(k).dueAt <= now);
  const rest = sorted.filter((k) => state(k).dueAt > now);
  return [...due, ...rest].slice(0, size);
}

export function boxCounts(progress: Progress, allKeys: string[]): Record<Box, number> {
  const counts: Record<Box, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const k of allKeys) {
    counts[(progress.cards[k] ?? freshCard()).box]++;
  }
  return counts;
}

/** Only call from effects/handlers — never during render (SSR + hydration safety). */
export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Progress;
    if (parsed?.version !== 1 || typeof parsed.cards !== "object") return defaultProgress();
    return { ...defaultProgress(), ...parsed };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // private mode / quota — game stays playable without persistence
  }
}

export function resetProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
