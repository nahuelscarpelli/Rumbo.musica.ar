import type { CSSProperties } from "react";
import { RumboMark } from "./RumboMark";

type Props = {
  className?: string;
  /** Show the wordmark "RUMBO" next to the mark. Defaults to true. */
  showWordmark?: boolean;
  /** Stack the wordmark below the mark instead of next to it. */
  stacked?: boolean;
  style?: CSSProperties;
};

/**
 * Full RUMBO logo: mountain mark + wordmark in Anton.
 * Inherits color from CSS via `currentColor`.
 *
 * The container sets the height; mark and wordmark scale proportionally.
 */
export function RumboLogo({
  className = "",
  showWordmark = true,
  stacked = false,
  style,
}: Props) {
  if (!showWordmark) {
    return <RumboMark className={className} style={style} aria-label="RUMBO" />;
  }

  return (
    <span
      role="img"
      aria-label="RUMBO"
      className={`inline-flex ${stacked ? "flex-col" : "flex-row"} items-center gap-[0.4em] leading-none ${className}`}
      style={style}
    >
      <RumboMark aria-hidden className="h-[0.85em] w-auto" />
      <span
        aria-hidden
        className="font-display tracking-[0.04em] text-[1em]"
        style={{ fontSize: "1em" }}
      >
        RUMBO
      </span>
    </span>
  );
}
