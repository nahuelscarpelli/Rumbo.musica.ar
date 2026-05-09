export const STEM_NAMES = ["drums", "vocals", "guitars", "keys", "fx"] as const;

export type StemName = (typeof STEM_NAMES)[number];

export type StemMeta = {
  name: StemName;
  label: string;
  symbol: string;
  color: string;
};

export const STEMS: StemMeta[] = [
  { name: "drums", label: "Batería", symbol: "BAT", color: "#c0392b" },
  { name: "vocals", label: "Voz", symbol: "VOZ", color: "#e8d5b7" },
  { name: "guitars", label: "Guitarras", symbol: "GTR", color: "#e67e22" },
  { name: "keys", label: "Teclados", symbol: "TEC", color: "#2980b9" },
  { name: "fx", label: "FX", symbol: "FX", color: "#8e44ad" },
];

export function isStemName(value: string): value is StemName {
  return (STEM_NAMES as readonly string[]).includes(value);
}
