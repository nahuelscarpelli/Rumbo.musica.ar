"use client";

import type { StemMeta } from "@/lib/stems";
import type { PerStemState } from "@/hooks/useStemPlayer";

type Props = {
  stem: StemMeta;
  state: PerStemState;
  isSolo: boolean;
  disabled: boolean;
  onToggle: () => void;
  onVolume: (value: number) => void;
  onSolo: () => void;
};

export function StemCard({
  stem,
  state,
  isSolo,
  disabled,
  onToggle,
  onVolume,
  onSolo,
}: Props) {
  const isActive = state.active && !disabled;

  return (
    <div
      className={`flex h-full flex-col items-center gap-2 border bg-bg/60 px-1.5 py-3 backdrop-blur-sm transition-all duration-300 sm:px-2 sm:py-4 ${
        isActive ? "border-2" : "border-border opacity-60"
      } ${disabled ? "opacity-30" : ""}`}
      style={{
        borderColor: isActive ? stem.color : undefined,
        boxShadow: isSolo ? `0 0 16px -6px ${stem.color}` : undefined,
      }}
    >
      {/* Symbol */}
      <span
        className="font-mono text-[10px] font-bold uppercase tracking-widest2 transition-colors"
        style={{ color: isActive ? stem.color : "var(--color-muted)" }}
      >
        {stem.symbol}
      </span>

      {/* Volume number */}
      <span className="font-mono text-[10px] tabular-nums text-muted">
        {state.volume}
      </span>

      {/* Vertical fader */}
      <div className="flex h-36 w-full items-center justify-center sm:h-44">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={state.volume}
          onChange={(e) => onVolume(Number(e.target.value))}
          disabled={disabled || !isActive}
          aria-label={`Volumen ${stem.label}`}
          className="stem-fader-vertical"
          style={{ ["--fader-color" as string]: stem.color }}
        />
      </div>

      {/* On/off toggle (colored dot) */}
      <button
        type="button"
        onClick={onToggle}
        disabled={disabled}
        aria-pressed={isActive}
        aria-label={`${isActive ? "Apagar" : "Encender"} ${stem.label}`}
        className="grid h-5 w-5 place-items-center rounded-full border transition-colors disabled:cursor-not-allowed"
        style={{
          borderColor: isActive ? stem.color : "var(--color-border)",
          backgroundColor: isActive ? stem.color : "transparent",
        }}
      />

      {/* Label */}
      <span className="line-clamp-2 min-h-[2em] text-center font-mono text-[9px] uppercase leading-tight tracking-widest2 text-text/70 sm:text-[10px]">
        {stem.label}
      </span>

      {/* Solo */}
      <button
        type="button"
        onClick={onSolo}
        disabled={disabled}
        aria-pressed={isSolo}
        className={`w-full border py-1 font-mono text-[9px] uppercase tracking-widest2 transition-colors disabled:cursor-not-allowed sm:text-[10px] ${
          isSolo
            ? "border-text bg-text text-bg"
            : "border-border text-text/70 hover:border-text hover:text-text"
        }`}
      >
        {isSolo ? "★" : "S"}
      </button>
    </div>
  );
}
