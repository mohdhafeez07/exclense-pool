export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const ROMAN_NUMERALS = [
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
] as const;

export function toRoman(index: number) {
  return ROMAN_NUMERALS[index] ?? String(index + 1);
}
