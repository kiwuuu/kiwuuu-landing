"use client";

import { useState } from "react";
import { Spell } from "./spell";
import { Quiz } from "./quiz";
import { Match } from "./match";
import { Flashcards } from "./flashcards";

type Mode = "menu" | "spell" | "quiz" | "match" | "cards";

const MODES: { key: Exclude<Mode, "menu">; emoji: string; title: string; sub: string }[] = [
  {
    key: "spell",
    emoji: "🖼️",
    title: "Слажи речи",
    sub: "See a picture, tap the letters to spell the word",
  },
  {
    key: "quiz",
    emoji: "❓",
    title: "Квиз",
    sub: "Pick the right word or the missing letter",
  },
  {
    key: "match",
    emoji: "🃏",
    title: "Парови",
    sub: "Match capital letters with their small forms",
  },
  {
    key: "cards",
    emoji: "📚",
    title: "Картице",
    sub: "Smart flashcards that remember what you know",
  },
];

export function CyrillicGame() {
  const [mode, setMode] = useState<Mode>("menu");
  const exit = () => setMode("menu");

  return (
    <section lang="sr-Cyrl" className="px-6 py-10" aria-label="Игра">
      <div className="mx-auto max-w-3xl">
        {mode === "menu" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {MODES.map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setMode(m.key)}
                className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 text-left transition hover:border-[var(--primary)] hover:shadow-sm"
              >
                <span className="text-3xl" aria-hidden>
                  {m.emoji}
                </span>
                <h3 className="mt-3 text-xl font-bold text-[var(--ink)]">
                  {m.title}
                </h3>
                <p lang="en" className="mt-1 text-sm text-[var(--muted)]">
                  {m.sub}
                </p>
              </button>
            ))}
          </div>
        )}
        {mode === "spell" && <Spell onExit={exit} />}
        {mode === "quiz" && <Quiz onExit={exit} />}
        {mode === "match" && <Match onExit={exit} />}
        {mode === "cards" && <Flashcards onExit={exit} />}
      </div>
    </section>
  );
}
