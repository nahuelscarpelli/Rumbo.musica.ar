import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  showWordmark?: boolean;
};

export function RumboLogo({ showWordmark = true, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 200 60"
      role="img"
      aria-label="RUMBO"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      {/* Symbol — three stylized peaks (mountains / frequency wave) */}
      <g strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter">
        {/* Diagonal slash to the left */}
        <path d="M2 44 L14 22" />
        {/* Peak 1 (small) */}
        <path d="M16 38 L24 24 L32 38" />
        {/* Peak 2 (tall) */}
        <path d="M30 40 L44 12 L58 40" />
        {/* Peak 3 (medium) */}
        <path d="M54 38 L64 22 L74 38" />
        {/* Baseline */}
        <path d="M2 48 L78 48" opacity="0.55" />
      </g>

      {showWordmark && (
        <text
          x="92"
          y="42"
          fill="currentColor"
          stroke="none"
          fontFamily="var(--font-display), system-ui, sans-serif"
          fontWeight="700"
          fontSize="34"
          letterSpacing="6"
        >
          RUMBO
        </text>
      )}
    </svg>
  );
}
