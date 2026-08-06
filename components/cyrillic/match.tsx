"use client";

import { useEffect, useRef, useState } from "react";
import { AZBUKA, shuffle } from "@/lib/cyrillic";
import { ScoreBar } from "./score-bar";

type Card = {
  id: number;
  pairKey: string;
  face: string;
  state: "down" | "up" | "matched";
};

type Props = { onExit: () => void };

function deal(): Card[] {
  const eight = shuffle(AZBUKA).slice(0, 8);
  const cards = eight.flatMap((l) => [
    { pairKey: l.cyr, face: l.cyr },
    { pairKey: l.cyr, face: l.cyrLower },
  ]);
  return shuffle(cards).map((c, id) => ({ ...c, id, state: "down" as const }));
}

export function Match({ onExit }: Props) {
  const [cards, setCards] = useState<Card[] | null>(null);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [locked, setLocked] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const won = cards !== null && cards.every((c) => c.state === "matched");

  useEffect(() => {
    setCards(deal());
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (cards === null || won) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [cards === null, won]);

  if (!cards) {
    return <ScoreBar stats={[]} onExit={onExit} />;
  }

  const flip = (card: Card) => {
    if (locked || card.state !== "down") return;
    const up = cards.filter((c) => c.state === "up");
    if (up.length === 0) {
      setCards(cards.map((c) => (c.id === card.id ? { ...c, state: "up" } : c)));
      return;
    }
    const [first] = up;
    setMoves((m) => m + 1);
    if (first.pairKey === card.pairKey && first.face !== card.face) {
      setCards(
        cards.map((c) =>
          c.id === card.id || c.id === first.id ? { ...c, state: "matched" } : c
        )
      );
    } else {
      setCards(cards.map((c) => (c.id === card.id ? { ...c, state: "up" } : c)));
      setLocked(true);
      timers.current.push(
        setTimeout(() => {
          setCards((cur) =>
            cur
              ? cur.map((c) => (c.state === "up" ? { ...c, state: "down" } : c))
              : cur
          );
          setLocked(false);
        }, 800)
      );
    }
  };

  const replay = () => {
    setCards(deal());
    setMoves(0);
    setSeconds(0);
    setLocked(false);
  };

  return (
    <div>
      <ScoreBar
        stats={[
          { label: "Потези", value: moves },
          { label: "Време", value: `${seconds}с` },
        ]}
        onExit={onExit}
      />
      {won ? (
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center">
          <p className="text-3xl">🎉</p>
          <p className="mt-2 text-xl font-bold text-[var(--ink)]">Браво!</p>
          <p lang="en" className="mt-1 text-sm text-[var(--muted)]">
            All pairs found in {moves} moves and {seconds}s.
          </p>
          <button
            type="button"
            onClick={replay}
            className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--on-primary)] transition hover:bg-[var(--primary-dark)]"
          >
            Још једном
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {cards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => flip(card)}
              aria-label={card.state === "down" ? "Затворена карта" : card.face}
              className={`aspect-square rounded-2xl border text-3xl font-bold transition sm:text-4xl ${
                card.state === "down"
                  ? "border-[var(--line)] bg-[var(--accent-soft-strong)]"
                  : card.state === "matched"
                    ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--on-primary)]"
                    : "border-[var(--primary)] bg-[var(--surface)] text-[var(--ink)]"
              }`}
            >
              {card.state !== "down" ? card.face : ""}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
