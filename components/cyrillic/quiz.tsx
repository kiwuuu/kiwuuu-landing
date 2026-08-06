"use client";

import { useEffect, useRef, useState } from "react";
import { AZBUKA, byCyr, lettersOf, pickDistractors, shuffle } from "@/lib/cyrillic";
import { loadProgress, saveProgress } from "@/lib/leitner";
import { ScoreBar } from "./score-bar";

type Question = {
  kind: "word" | "letter";
  img: string;
  imgAlt: string;
  /** For "letter" questions: the word with the hidden letter blanked out. */
  masked?: string;
  options: string[];
  answer: string;
};

type Props = { onExit: () => void };

function makeQuestion(round: number): Question {
  const letter = AZBUKA[Math.floor(Math.random() * AZBUKA.length)];
  const { word } = letter;
  if (round % 2 === 0) {
    const options = shuffle([
      word.cyr,
      ...pickDistractors(letter, 3).map((l) => l.word.cyr),
    ]);
    return { kind: "word", img: word.img, imgAlt: word.cyr, options, answer: word.cyr };
  }
  const letters = lettersOf(word.cyr);
  const i = Math.floor(Math.random() * letters.length);
  const hidden = letters[i];
  const hiddenLetter = byCyr.get(hidden) ?? letter;
  const options = shuffle([
    hidden,
    ...pickDistractors(hiddenLetter, 3).map((l) => l.cyr),
  ]);
  return {
    kind: "letter",
    img: word.img,
    imgAlt: word.cyr,
    masked: letters.map((ch, j) => (j === i ? "_" : ch)).join(""),
    options,
    answer: hidden,
  };
}

export function Quiz({ onExit }: Props) {
  const [q, setQ] = useState<Question | null>(null);
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setBest(loadProgress().bestStreak);
    setQ(makeQuestion(0));
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  if (!q) {
    return <ScoreBar stats={[]} onExit={onExit} />;
  }

  const pick = (opt: string) => {
    if (picked !== null) return;
    setPicked(opt);
    if (opt === q.answer) {
      setScore((s) => s + 1);
      const ns = streak + 1;
      setStreak(ns);
      if (ns > best) {
        setBest(ns);
        const p = loadProgress();
        if (ns > p.bestStreak) {
          saveProgress({ ...p, bestStreak: ns });
        }
      }
    } else {
      setStreak(0);
    }
    timers.current.push(
      setTimeout(() => {
        const next = round + 1;
        setRound(next);
        setQ(makeQuestion(next));
        setPicked(null);
      }, 1100)
    );
  };

  return (
    <div>
      <ScoreBar
        stats={[
          { label: "Поени", value: score },
          { label: "Низ", value: streak },
          { label: "Рекорд", value: best },
        ]}
        onExit={onExit}
      />
      <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 text-center sm:p-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={q.img}
          alt={q.imgAlt}
          width={192}
          height={192}
          className="mx-auto h-40 w-40 rounded-2xl sm:h-48 sm:w-48"
        />
        {q.kind === "letter" && (
          <p className="mt-4 text-3xl font-bold tracking-widest text-[var(--ink)]">
            {q.masked}
          </p>
        )}
        <p lang="en" className="mt-3 text-sm text-[var(--muted)]">
          {q.kind === "word" ? "Which word matches the picture?" : "Which letter is missing?"}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {q.options.map((opt) => {
            const isAnswer = opt === q.answer;
            const isPicked = opt === picked;
            const revealed = picked !== null;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => pick(opt)}
                disabled={revealed}
                className={`min-h-14 rounded-2xl border px-4 text-xl font-semibold transition ${
                  revealed && isAnswer
                    ? "border-[var(--primary)] bg-[var(--accent-soft-strong)] text-[var(--primary-dark)]"
                    : revealed && isPicked
                      ? "border-red-400 bg-red-100 text-red-700"
                      : "border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] hover:border-[var(--primary)]"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
