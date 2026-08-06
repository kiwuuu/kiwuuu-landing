export type CyrillicWord = {
  cyr: string;
  img: string;
  en: string;
};

export type CyrillicLetter = {
  cyr: string;
  cyrLower: string;
  /** Latin equivalent — data only for the future Latin phase, never rendered in the game. */
  lat: string;
  word: CyrillicWord;
};

const w = (cyr: string, slug: string, en: string): CyrillicWord => ({
  cyr,
  img: `/cyrillic/${slug}.svg`,
  en,
});

/** Вукова азбука — the 30 letters of Serbian Cyrillic, in azbuka order. */
export const AZBUKA: CyrillicLetter[] = [
  { cyr: "А", cyrLower: "а", lat: "A", word: w("АВИОН", "avion", "airplane") },
  { cyr: "Б", cyrLower: "б", lat: "B", word: w("БРОД", "brod", "ship") },
  { cyr: "В", cyrLower: "в", lat: "V", word: w("ВОДА", "voda", "water") },
  { cyr: "Г", cyrLower: "г", lat: "G", word: w("ГРАД", "grad", "city") },
  { cyr: "Д", cyrLower: "д", lat: "D", word: w("ДРВО", "drvo", "tree") },
  { cyr: "Ђ", cyrLower: "ђ", lat: "Đ", word: w("ЂАК", "djak", "pupil") },
  { cyr: "Е", cyrLower: "е", lat: "E", word: w("ЕВРО", "evro", "euro") },
  { cyr: "Ж", cyrLower: "ж", lat: "Ž", word: w("ЖАБА", "zaba", "frog") },
  { cyr: "З", cyrLower: "з", lat: "Z", word: w("ЗЕЦ", "zec", "rabbit") },
  { cyr: "И", cyrLower: "и", lat: "I", word: w("ИГЛА", "igla", "needle") },
  { cyr: "Ј", cyrLower: "ј", lat: "J", word: w("ЈАБУКА", "jabuka", "apple") },
  { cyr: "К", cyrLower: "к", lat: "K", word: w("КУЋА", "kuca", "house") },
  { cyr: "Л", cyrLower: "л", lat: "L", word: w("ЛАВ", "lav", "lion") },
  { cyr: "Љ", cyrLower: "љ", lat: "Lj", word: w("ЉУБАВ", "ljubav", "love") },
  { cyr: "М", cyrLower: "м", lat: "M", word: w("МАЧКА", "macka", "cat") },
  { cyr: "Н", cyrLower: "н", lat: "N", word: w("НОС", "nos", "nose") },
  { cyr: "Њ", cyrLower: "њ", lat: "Nj", word: w("ЊИВА", "njiva", "field") },
  { cyr: "О", cyrLower: "о", lat: "O", word: w("ОКО", "oko", "eye") },
  { cyr: "П", cyrLower: "п", lat: "P", word: w("ПАС", "pas", "dog") },
  { cyr: "Р", cyrLower: "р", lat: "R", word: w("РИБА", "riba", "fish") },
  { cyr: "С", cyrLower: "с", lat: "S", word: w("СУНЦЕ", "sunce", "sun") },
  { cyr: "Т", cyrLower: "т", lat: "T", word: w("ТОРТА", "torta", "cake") },
  { cyr: "Ћ", cyrLower: "ћ", lat: "Ć", word: w("ЋЕВАП", "cevap", "ćevap") },
  { cyr: "У", cyrLower: "у", lat: "U", word: w("УВО", "uvo", "ear") },
  { cyr: "Ф", cyrLower: "ф", lat: "F", word: w("ФРУЛА", "frula", "flute") },
  { cyr: "Х", cyrLower: "х", lat: "H", word: w("ХЛЕБ", "hleb", "bread") },
  { cyr: "Ц", cyrLower: "ц", lat: "C", word: w("ЦВЕТ", "cvet", "flower") },
  { cyr: "Ч", cyrLower: "ч", lat: "Č", word: w("ЧАЈ", "caj", "tea") },
  { cyr: "Џ", cyrLower: "џ", lat: "Dž", word: w("ЏЕП", "dzep", "pocket") },
  { cyr: "Ш", cyrLower: "ш", lat: "Š", word: w("ШУМА", "suma", "forest") },
];

export const byCyr = new Map(AZBUKA.map((l) => [l.cyr, l]));

/** Visually or phonetically confusable letters — preferred as quiz distractors. */
export const CONFUSABLE_GROUPS: string[][] = [
  ["Ђ", "Ћ", "Ч", "Џ", "Ц"],
  ["Ж", "Ш"],
  ["Љ", "Њ", "Ј"],
  ["В", "Б"],
  ["Н", "П", "И"],
  ["Р", "С", "У", "Х"],
  ["Г", "Т"],
  ["Д", "Л"],
];

/** Fisher-Yates shuffle; returns a new array. */
export function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Pick `n` distractor letters for `answer`: letters sharing a confusable
 * group come first, the rest are drawn randomly from the whole azbuka.
 */
export function pickDistractors(answer: CyrillicLetter, n: number): CyrillicLetter[] {
  const confusable = CONFUSABLE_GROUPS.filter((g) => g.includes(answer.cyr))
    .flat()
    .filter((c) => c !== answer.cyr);
  const preferred = shuffle(confusable.map((c) => byCyr.get(c)!));
  const rest = shuffle(AZBUKA.filter((l) => l.cyr !== answer.cyr && !confusable.includes(l.cyr)));
  const picked: CyrillicLetter[] = [];
  for (const l of [...preferred, ...rest]) {
    if (picked.length >= n) break;
    if (!picked.some((p) => p.cyr === l.cyr)) picked.push(l);
  }
  return picked;
}

/** Split a Cyrillic word into letters (every Serbian letter is one code point). */
export function lettersOf(word: string): string[] {
  return [...word];
}
