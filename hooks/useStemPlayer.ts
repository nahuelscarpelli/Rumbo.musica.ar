"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STEM_NAMES, type StemName } from "@/lib/stems";

type LoadState = "idle" | "loading" | "ready" | "error";

export type PerStemState = {
  active: boolean;
  volume: number; // 0..100
  loaded: boolean;
};

export type Meta = { ready: boolean; track: string | null };

type Refs = {
  ctx: AudioContext | null;
  master: GainNode | null;
  buffers: Partial<Record<StemName, AudioBuffer>>;
  sources: Partial<Record<StemName, AudioBufferSourceNode>>;
  gains: Partial<Record<StemName, GainNode>>;
  analysers: Partial<Record<StemName, AnalyserNode>>;
  startedAt: number; // ctx.currentTime when playback started
  pausedAt: number; // seconds within the loop
  duration: number;
};

const DEFAULT_STATE: Record<StemName, PerStemState> = {
  drums: { active: true, volume: 100, loaded: false },
  vocals: { active: true, volume: 100, loaded: false },
  guitars: { active: true, volume: 100, loaded: false },
  keys: { active: true, volume: 100, loaded: false },
  fx: { active: true, volume: 100, loaded: false },
};

export function useStemPlayer({ enabled }: { enabled: boolean }) {
  const [meta, setMeta] = useState<Meta>({ ready: false, track: null });
  const [loadState, setLoadState] = useState<LoadState>("idle");
  const [loadProgress, setLoadProgress] = useState(0);
  const [stems, setStems] = useState<Record<StemName, PerStemState>>(DEFAULT_STATE);
  const [solo, setSolo] = useState<StemName | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const refs = useRef<Refs>({
    ctx: null,
    master: null,
    buffers: {},
    sources: {},
    gains: {},
    analysers: {},
    startedAt: 0,
    pausedAt: 0,
    duration: 0,
  });

  // Fetch meta when component is enabled (visible)
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/stem/meta", { cache: "no-store" });
        if (!res.ok) throw new Error("meta");
        const data = (await res.json()) as Meta & { available: Record<StemName, boolean> };
        if (cancelled) return;
        setMeta({ ready: data.ready, track: data.track });
      } catch {
        if (cancelled) return;
        setMeta({ ready: false, track: null });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [enabled]);

  // Load + decode stems once meta says ready
  const loadAll = useCallback(async () => {
    if (loadState === "loading" || loadState === "ready") return;
    if (typeof window === "undefined") return;

    setLoadState("loading");
    setLoadProgress(0);

    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      refs.current.ctx = ctx;

      const master = ctx.createGain();
      master.gain.value = 1;
      master.connect(ctx.destination);
      refs.current.master = master;

      let done = 0;
      const total = STEM_NAMES.length;

      await Promise.all(
        STEM_NAMES.map(async (name) => {
          const res = await fetch(`/api/stem/${name}`, { cache: "no-store" });
          if (!res.ok) throw new Error(`stem ${name}`);
          const arr = await res.arrayBuffer();
          const buf = await ctx.decodeAudioData(arr);
          refs.current.buffers[name] = buf;

          const gain = ctx.createGain();
          gain.gain.value = 1;
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 64;
          gain.connect(analyser);
          analyser.connect(master);

          refs.current.gains[name] = gain;
          refs.current.analysers[name] = analyser;

          done += 1;
          setLoadProgress(Math.round((done / total) * 100));
          setStems((prev) => ({
            ...prev,
            [name]: { ...prev[name], loaded: true },
          }));
        })
      );

      // Take longest duration as the loop length
      const durations = Object.values(refs.current.buffers).map((b) => b!.duration);
      refs.current.duration = durations.length ? Math.max(...durations) : 0;

      setLoadState("ready");
    } catch (e) {
      console.warn("[stem-player] load failed", e);
      setLoadState("error");
    }
  }, [loadState]);

  // Apply effective gain (active + volume + solo) to a stem in real-time
  const applyGain = useCallback(
    (name: StemName, state: PerStemState, soloOverride: StemName | null) => {
      const g = refs.current.gains[name];
      if (!g || !refs.current.ctx) return;
      const muted = soloOverride !== null && soloOverride !== name;
      const target = state.active && !muted ? state.volume / 100 : 0;
      g.gain.linearRampToValueAtTime(target, refs.current.ctx.currentTime + 0.04);
    },
    []
  );

  const startSources = useCallback(
    (offset: number) => {
      const { ctx } = refs.current;
      if (!ctx) return;
      const now = ctx.currentTime;
      refs.current.startedAt = now - offset;

      for (const name of STEM_NAMES) {
        const buf = refs.current.buffers[name];
        const gain = refs.current.gains[name];
        if (!buf || !gain) continue;

        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.loop = true;
        src.connect(gain);
        src.start(0, offset % buf.duration);
        refs.current.sources[name] = src;
      }
    },
    []
  );

  const stopSources = useCallback(() => {
    for (const name of STEM_NAMES) {
      const src = refs.current.sources[name];
      if (src) {
        try {
          src.stop();
          src.disconnect();
        } catch {
          /* already stopped */
        }
      }
      delete refs.current.sources[name];
    }
  }, []);

  const play = useCallback(async () => {
    if (loadState === "idle") {
      await loadAll();
    }
    const ctx = refs.current.ctx;
    if (!ctx || loadState === "error") return;

    if (ctx.state === "suspended") await ctx.resume();

    // Apply current gains before starting
    for (const name of STEM_NAMES) {
      applyGain(name, stems[name], solo);
    }

    startSources(refs.current.pausedAt);
    setIsPlaying(true);
  }, [applyGain, loadAll, loadState, solo, startSources, stems]);

  const pause = useCallback(() => {
    const ctx = refs.current.ctx;
    if (!ctx) return;
    const elapsed = ctx.currentTime - refs.current.startedAt;
    refs.current.pausedAt = refs.current.duration > 0 ? elapsed % refs.current.duration : elapsed;
    stopSources();
    setIsPlaying(false);
  }, [stopSources]);

  const reset = useCallback(() => {
    stopSources();
    refs.current.pausedAt = 0;
    setCurrentTime(0);
    setStems(DEFAULT_STATE);
    setSolo(null);
    setIsPlaying(false);
  }, [stopSources]);

  // Toggle a stem on/off
  const toggleStem = useCallback(
    (name: StemName) => {
      setStems((prev) => {
        const next = { ...prev, [name]: { ...prev[name], active: !prev[name].active } };
        applyGain(name, next[name], solo);
        return next;
      });
    },
    [applyGain, solo]
  );

  const setVolume = useCallback(
    (name: StemName, volume: number) => {
      setStems((prev) => {
        const next = { ...prev, [name]: { ...prev[name], volume } };
        applyGain(name, next[name], solo);
        return next;
      });
    },
    [applyGain, solo]
  );

  const toggleSolo = useCallback(
    (name: StemName) => {
      setSolo((prev) => {
        const nextSolo = prev === name ? null : name;
        // Re-apply all gains with new solo
        for (const n of STEM_NAMES) {
          applyGain(n, stems[n], nextSolo);
        }
        return nextSolo;
      });
    },
    [applyGain, stems]
  );

  // Progress ticker
  useEffect(() => {
    if (!isPlaying) return;
    let raf = 0;
    const tick = () => {
      const ctx = refs.current.ctx;
      if (ctx && refs.current.duration > 0) {
        const elapsed = (ctx.currentTime - refs.current.startedAt) % refs.current.duration;
        setCurrentTime(elapsed);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      try {
        stopSources();
        refs.current.ctx?.close();
      } catch {
        /* noop */
      }
    };
  }, [stopSources]);

  // Sample the analyser for a stem (returns 0..1 average level)
  const getLevel = useCallback((name: StemName): number => {
    const a = refs.current.analysers[name];
    if (!a) return 0;
    const arr = new Uint8Array(a.frequencyBinCount);
    a.getByteFrequencyData(arr);
    let sum = 0;
    for (const v of arr) sum += v;
    return sum / arr.length / 255;
  }, []);

  const activeCount = Object.values(stems).filter((s) => s.active).length;
  const allMaxed =
    activeCount === STEM_NAMES.length &&
    Object.values(stems).every((s) => s.volume === 100);

  return {
    meta,
    loadState,
    loadProgress,
    stems,
    solo,
    isPlaying,
    currentTime,
    duration: refs.current.duration,
    activeCount,
    allMaxed,
    play,
    pause,
    reset,
    toggleStem,
    setVolume,
    toggleSolo,
    getLevel,
  };
}
