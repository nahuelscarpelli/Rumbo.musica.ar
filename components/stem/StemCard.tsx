"use client";

import type { StemMeta } from "@/lib/stems";
import type { PerStemState } from "@/hooks/useStemPlayer";
import { StemVisualizer } from "./StemVisualizer";

type Props = {
  stem: StemMeta;
  state: PerStemState;
  isSolo: boolean;
  disabled: boolean;
  getLevel: () => number;
  onToggle: () => void;
  onVolume: (value: number) => void;
  onSolo: () => void;
};

export function StemCard({
  stem,
  state,
  isSolo,
  disabled,
  getLevel,
  onToggle,
  onVolume,
  onSolo,
}: Props) {
  const isActive = state.active && !disabled;

  return (
    <div
      className={`relative flex flex-col gap-4 border bg-bg/60 p-5 backdrop-blur-sm transition-all duration-300 ${
        isActive ? "border-2" : "border border-border opacity-60"
      } ${disabled ? "opacity-30" : ""} ${isSolo ? "ring-1 ring-offset-2 ring-offset-bg" : ""}`}
      style={{
        borderColor: isActive ? stem.color : undefined,
        boxShadow: isSolo ? `0 0 24px -8px ${stem.color}` : undefined,
      }}
    >
      {/* Header: symbol + label + toggle */}
      <button
        type="button"
        onClick={onToggle}
        disabled={disabled}
        className="flex items-center justify-between gap-3 text-left disabled:cursor-not-allowed"
        aria-pressed={isActive}
        aria-label={`${isActive ? "Apagar" : "Encender"} ${stem.label}`}
      >
        <span className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center border font-mono text-[10px] font-bold uppercase tracking-widest2"
            style={{
              borderColor: stem.color,
              color: isActive ? stem.color : "var(--color-muted)",
            }}
          >
            {stem.symbol}
          </span>
          <span className="font-display text-xl uppercase tracking-wider2">
            {stem.label}
          </span>
        </span>
        <span
          className={`block h-2.5 w-2.5 rounded-full transition-colors ${
            isActive ? "" : "bg-muted"
          }`}
          style={{ backgroundColor: isActive ? stem.color : undefined }}
        />
      </button>

      {/* Visualizer */}
      <div className="h-14 px-1">
        <StemVisualizer
          active={isActive}
          color={stem.color}
          getLevel={getLevel}
          expanded={isSolo}
        />
      </div>

      {/* Volume fader */}
      <label className="flex flex-col gap-2">
        <span className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest2 text-muted">
          <span>Volumen</span>
          <span>{state.volume}</span>
        </span>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={state.volume}
          onChange={(e) => onVolume(Number(e.target.value))}
          disabled={disabled || !isActive}
          aria-label={`Volumen ${stem.label}`}
          className="stem-fader"
          style={{ ["--fader-color" as string]: stem.color }}
        />
      </label>

      {/* Solo button */}
      <button
        type="button"
        onClick={onSolo}
        disabled={disabled}
        aria-pressed={isSolo}
        className={`border px-3 py-2 font-mono text-[10px] uppercase tracking-widest2 transition-colors disabled:cursor-not-allowed ${
          isSolo
            ? "border-text bg-text text-bg"
            : "border-border text-text/70 hover:border-text hover:text-text"
        }`}
      >
        {isSolo ? "★ Solo" : "Solo"}
      </button>
    </div>
  );
}
