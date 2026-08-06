"use client";

import { useEffect, useRef, useState } from "react";
import { AZBUKA, lettersOf, shuffle } from "@/lib/cyrillic";
import { ScoreBar } from "./score-bar";

type Tile = { id: number; ch: string; used: boolean };

type Round = {
  wordIdx: number;
  letters: string[];
  tiles: Tile[];
  filled: number;
};

type Props = { onExit: () => void };

function buildRound(wordIdx: number): Round {
  const word = AZBUKA[wordIdx].word;
  const letters = lettersOf(word.cyr);
  const extras = shuffle(
    AZBUKA.map((l) => l.cyr).filter((c) => !letters.includes(c))
  ).slice(0, 4);
  const tiles = shuffle([...letters, ...extras]).map((ch, i) => ({
    id: i,
    ch,
    used: false,
  }));
  return { wordIdx, letters, tiles, filled: 0 };
}

export function Spell({ onExit }: Props) {
  const [order, setOrder] = useState<number[] | null>(null);
  const [pos, setPos] = useState(0);
  const [round, setRound] = useState<Round | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [done, setDone] = useState(0);
  const [wrongId, setWrongId] = useState<number | null>(null);
  const [celebrating, setCelebrating] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const o = shuffle(AZBUKA.map((_, i) => i));
    setOrder(o);
    setRound(buildRound(o[0]));
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  if (!order || !round) {
    return <ScoreBar stats={[]} onExit={onExit} />;
  }

  const word = AZBUKA[round.wordIdx].word;

  const tap = (tile: Tile) => {
    if (tile.used || celebrating) return;
    if (tile.ch === round.letters[round.filled]) {
      const filled = round.filled + 1;
      setRound({
        ...round,
        filled,
        tiles: round.tiles.map((t) => (t.id === tile.id ? { ...t, used: true } : t)),
      });
      if (filled === round.letters.length) {
        setCelebrating(true);
        setDone((d) => d + 1);
        timers.current.push(
          setTimeout(() => {
            const next = (pos + 1) % order.length;
            setPos(next);
            setRound(buildRound(order[next]));
            setCelebrating(false);
          }, 1300)
        );
      }
    } else {
      setMistakes((m) => m + 1);
      setWrongId(tile.id);
      timers.current.push(setTimeout(() => setWrongId(null), 400));
    }
  };

  return (
    <div>
      <ScoreBar
        stats={[
          { label: "Речи", value: done },
          { label: "Грешке", value: mistakes },
        ]}
        onExit={onExit}
      />
      <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 text-center sm:p-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={word.img}
          alt={word.cyr}
          width={192}
          height={192}
          className="mx-auto h-40 w-40 rounded-2xl sm:h-48 sm:w-48"
        />
        <div
          className="mt-6 flex min-h-16 flex-wrap items-center justify-center gap-2"
          aria-label="Реч"
        >
          {round.letters.map((ch, i) => (
            <span
              key={i}
              className={`flex h-14 w-12 items-center justify-center rounded-2xl border text-2xl font-bold transition ${
                i < round.filled
                  ? "border-[var(--primary)] bg-[var(--accent-soft)] text-[var(--ink)]"
                  : "border-dashed border-[var(--line)] text-transparent"
              }`}
            >
              {i < round.filled ? ch : "·"}
            </span>
          ))}
        </div>
        {celebrating && (
          <p className="mt-3 text-lg font-semibold text-[var(--primary-dark)]">
            Браво! 🎉
          </p>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {round.tiles.map((tile) => (
            <button
              key={tile.id}
              type="button"
              onClick={() => tap(tile)}
              disabled={tile.used}
              className={`h-14 w-12 rounded-2xl border text-2xl font-bold transition ${
                tile.used
                  ? "border-transparent bg-transparent text-transparent"
                  : wrongId === tile.id
                    ? "border-red-400 bg-red-100 text-red-700"
                    : "border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] hover:border-[var(--primary)]"
              }`}
            >
              {tile.ch}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
