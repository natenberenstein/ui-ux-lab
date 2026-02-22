"use client";

import { useEffect, useMemo, useState } from "react";

const easingRows = [
  {
    curve: "linear",
    useCase: "Progress indicators, constant movement",
    notes: "Use sparingly for UI transitions; can feel mechanical.",
  },
  {
    curve: "ease-out",
    useCase: "Entrances, hover/focus feedback",
    notes: "Feels responsive because it settles quickly.",
  },
  {
    curve: "ease-in",
    useCase: "Exits, dismissals",
    notes: "Signals acceleration away from the user.",
  },
  {
    curve: "ease-in-out",
    useCase: "State changes between equivalent surfaces",
    notes: "Balanced motion when neither direction dominates.",
  },
];

const durationRows = [
  {
    interaction: "Tap / hover / focus feedback",
    duration: "100-180ms",
    rationale: "Must feel immediate.",
  },
  {
    interaction: "Element enter/exit",
    duration: "180-280ms",
    rationale: "Enough time to communicate direction.",
  },
  {
    interaction: "Panel/modal transition",
    duration: "240-360ms",
    rationale: "Supports spatial comprehension.",
  },
  {
    interaction: "Page/route transition",
    duration: "320-500ms",
    rationale: "Longer movement needs clearer pacing.",
  },
];

const motionChecklist = [
  "Defines why motion exists: attention, continuity, or feedback.",
  "Uses one primary easing family per product surface.",
  "Matches duration to distance and interaction priority.",
  "Supports interruption; users can click before animation ends.",
  "Respects prefers-reduced-motion and removes non-essential movement.",
  "Preserves context by animating position/opacity before scale-heavy effects.",
];

const avoidPatterns = [
  "Looping decorative animation with no user value.",
  "Competing animations in the same viewport.",
  "Long delays before controls become interactive.",
  "Relying on motion alone to communicate a critical state.",
];

const easingOptions = [
  { label: "Ease-out (recommended)", value: "cubic-bezier(0.22, 1, 0.36, 1)" },
  { label: "Ease-in-out", value: "ease-in-out" },
  { label: "Linear", value: "linear" },
  { label: "Ease-in", value: "ease-in" },
];

const presets = [
  { label: "Micro", duration: 140, distance: 20, delay: 0 },
  { label: "Transition", duration: 280, distance: 90, delay: 0 },
  { label: "Page", duration: 460, distance: 140, delay: 60 },
];

type MotionMode = "enter" | "exit" | "scale-blur";

type MotionPreviewProps = {
  replayKey: number;
  mode: MotionMode;
  easing: string;
  durationMs: number;
  delayMs: number;
  distancePx: number;
  withOpacity: boolean;
};

function MotionPreview({
  replayKey,
  mode,
  easing,
  durationMs,
  delayMs,
  distancePx,
  withOpacity,
}: MotionPreviewProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const startState = mode === "exit";
    const endState = !startState;

    setActive(startState);

    let frameA = 0;
    let frameB = 0;

    frameA = window.requestAnimationFrame(() => {
      frameB = window.requestAnimationFrame(() => {
        setActive(endState);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameA);
      window.cancelAnimationFrame(frameB);
    };
  }, [mode, replayKey]);

  const transform = (() => {
    if (mode === "enter")
      return active ? "translateX(0px)" : `translateX(-${distancePx}px)`;
    if (mode === "exit")
      return active ? "translateX(0px)" : `translateX(${distancePx}px)`;
    return active ? "translateY(0px) scale(1)" : "translateY(10px) scale(0.86)";
  })();

  const opacity = withOpacity ? (active ? 1 : 0) : 1;
  const filter =
    mode === "scale-blur" ? (active ? "blur(0px)" : "blur(6px)") : "none";

  return (
    <div className="relative h-28 overflow-hidden rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
      <div className="absolute inset-y-3 left-3 right-3 rounded-md border border-dashed border-slate-300/70 dark:border-slate-600/70" />
      <div className="absolute left-4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-slate-400" />
      <div className="absolute right-4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-slate-400" />
      <div
        className="relative z-10 h-14 w-14 rounded-md border-2 border-primary/40 bg-primary/20 text-primary shadow-sm"
        style={{
          transform,
          opacity,
          filter,
          transitionProperty:
            mode === "scale-blur"
              ? "transform, opacity, filter"
              : withOpacity
                ? "transform, opacity"
                : "transform",
          transitionDuration: `${durationMs}ms`,
          transitionTimingFunction: easing,
          transitionDelay: `${delayMs}ms`,
        }}
      />
      <div className="absolute bottom-2 right-3 text-[10px] text-slate-500 dark:text-slate-400">
        {mode === "enter" ? "Enter" : mode === "exit" ? "Exit" : "Scale + blur"}
      </div>
    </div>
  );
}

export function MotionGuidelines() {
  const [mode, setMode] = useState<MotionMode>("enter");
  const [easing, setEasing] = useState(easingOptions[0].value);
  const [duration, setDuration] = useState(280);
  const [distance, setDistance] = useState(90);
  const [delay, setDelay] = useState(0);
  const [withOpacity, setWithOpacity] = useState(true);
  const [simulateReducedMotion, setSimulateReducedMotion] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const effectiveDuration = simulateReducedMotion ? 1 : duration;
  const effectiveDistance = simulateReducedMotion ? 0 : distance;
  const effectiveEasing = simulateReducedMotion ? "linear" : easing;
  const effectiveDelay = simulateReducedMotion ? 0 : delay;

  const generatedCss = useMemo(
    () =>
      mode === "enter"
        ? `.motion-enter {
  transform: translateX(-${effectiveDistance}px);
  opacity: ${withOpacity ? "0" : "1"};
  transition: transform ${effectiveDuration}ms ${effectiveEasing} ${effectiveDelay}ms${
    withOpacity
      ? `,
              opacity ${effectiveDuration}ms ${effectiveEasing} ${effectiveDelay}ms`
      : ""
  };
}
.motion-enter-active { transform: translateX(0); opacity: 1; }`
        : mode === "exit"
          ? `.motion-exit {
  transform: translateX(0);
  opacity: 1;
  transition: transform ${effectiveDuration}ms ${effectiveEasing} ${effectiveDelay}ms${
    withOpacity
      ? `,
              opacity ${effectiveDuration}ms ${effectiveEasing} ${effectiveDelay}ms`
      : ""
  };
}
.motion-exit-active { transform: translateX(${effectiveDistance}px); opacity: ${withOpacity ? "0" : "1"}; }`
          : `.motion-scale-enter {
  transform: translateY(10px) scale(0.86);
  filter: blur(6px);
  opacity: ${withOpacity ? "0" : "1"};
  transition:
    transform ${effectiveDuration}ms ${effectiveEasing} ${effectiveDelay}ms,
    filter ${effectiveDuration}ms ${effectiveEasing} ${effectiveDelay}ms${
      withOpacity
        ? `,
    opacity ${effectiveDuration}ms ${effectiveEasing} ${effectiveDelay}ms`
        : ""
    };
}
.motion-scale-enter-active {
  transform: translateY(0) scale(1);
  filter: blur(0);
  opacity: 1;
}`,
    [
      effectiveDelay,
      effectiveDistance,
      effectiveDuration,
      effectiveEasing,
      mode,
      withOpacity,
    ],
  );

  return (
    <section className="space-y-4">
      <div className="rounded-lg border border-sky-200/70 bg-sky-50/70 p-4 dark:border-sky-500/30 dark:bg-sky-950/20">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Motion System Guideline
        </h4>
        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
          Treat motion as a communication system. Every transition should answer
          at least one question: What changed, where it changed, and what the
          user should do next.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Motion Playground
          </h5>
          <button
            type="button"
            onClick={() => setReplayKey((k) => k + 1)}
            className="rounded-md border border-slate-300 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
          >
            Replay animation
          </button>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <div className="mr-2 flex items-center gap-1 rounded-full border border-slate-300 px-2 py-1 text-[11px] dark:border-slate-600">
            <button
              type="button"
              onClick={() => {
                setMode("enter");
                setReplayKey((k) => k + 1);
              }}
              className={`rounded px-1.5 py-0.5 ${mode === "enter" ? "bg-primary/15 text-primary" : "text-slate-600 dark:text-slate-300"}`}
            >
              Enter
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("exit");
                setReplayKey((k) => k + 1);
              }}
              className={`rounded px-1.5 py-0.5 ${mode === "exit" ? "bg-primary/15 text-primary" : "text-slate-600 dark:text-slate-300"}`}
            >
              Exit
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("scale-blur");
                setReplayKey((k) => k + 1);
              }}
              className={`rounded px-1.5 py-0.5 ${mode === "scale-blur" ? "bg-primary/15 text-primary" : "text-slate-600 dark:text-slate-300"}`}
            >
              Scale + blur
            </button>
          </div>
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                setDuration(preset.duration);
                setDistance(preset.distance);
                setDelay(preset.delay);
                setReplayKey((k) => k + 1);
              }}
              className="rounded-full border border-slate-300 px-2 py-1 text-[11px] text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700/30"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <label className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            Easing
            <select
              value={easing}
              onChange={(e) => setEasing(e.target.value)}
              className="block w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
            >
              {easingOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            Duration: {duration}ms
            <input
              type="range"
              min={80}
              max={800}
              step={10}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full"
            />
          </label>

          <label className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            Distance: {distance}px
            <input
              type="range"
              min={0}
              max={220}
              step={5}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full"
              disabled={mode === "scale-blur"}
            />
          </label>

          <label className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            Delay: {delay}ms
            <input
              type="range"
              min={0}
              max={400}
              step={10}
              value={delay}
              onChange={(e) => setDelay(Number(e.target.value))}
              className="w-full"
            />
          </label>
        </div>

        <div className="mt-2 flex flex-wrap gap-4 text-[11px] text-slate-600 dark:text-slate-300">
          <label className="inline-flex items-center gap-1.5">
            <input
              type="checkbox"
              checked={withOpacity}
              onChange={(e) => setWithOpacity(e.target.checked)}
            />
            Include opacity transition
          </label>
          <label className="inline-flex items-center gap-1.5">
            <input
              type="checkbox"
              checked={simulateReducedMotion}
              onChange={(e) => setSimulateReducedMotion(e.target.checked)}
            />
            Simulate prefers-reduced-motion
          </label>
        </div>

        <div className="mt-3">
          <MotionPreview
            replayKey={replayKey}
            mode={mode}
            easing={effectiveEasing}
            durationMs={effectiveDuration}
            delayMs={effectiveDelay}
            distancePx={effectiveDistance}
            withOpacity={withOpacity}
          />
        </div>

        <pre className="mt-3 overflow-x-auto rounded-md bg-slate-900 p-2 text-[11px] text-slate-100">
          <code>{generatedCss}</code>
        </pre>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Easing Curves
          </h5>
          <div className="mt-2 space-y-2">
            {easingRows.map((row) => (
              <div
                key={row.curve}
                className="rounded-md border border-slate-200/80 bg-white/70 p-2 dark:border-slate-600/60 dark:bg-slate-900/30"
              >
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {row.curve}
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Best for: {row.useCase}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {row.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Duration Targets
          </h5>
          <div className="mt-2 space-y-2">
            {durationRows.map((row) => (
              <div
                key={row.interaction}
                className="rounded-md border border-slate-200/80 bg-white/70 p-2 dark:border-slate-600/60 dark:bg-slate-900/30"
              >
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {row.interaction}
                </p>
                <p className="text-[11px] text-primary">
                  Target: {row.duration}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {row.rationale}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-emerald-200/70 bg-emerald-50/70 p-3 dark:border-emerald-500/30 dark:bg-emerald-950/20">
          <h5 className="text-xs font-semibold uppercase tracking-wide text-emerald-900 dark:text-emerald-200">
            Purpose-Driven Motion Checklist
          </h5>
          <ul className="mt-2 space-y-1.5 text-[11px] text-emerald-900/90 dark:text-emerald-100/90">
            {motionChecklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-rose-200/70 bg-rose-50/70 p-3 dark:border-rose-500/30 dark:bg-rose-950/20">
          <h5 className="text-xs font-semibold uppercase tracking-wide text-rose-900 dark:text-rose-200">
            Avoid
          </h5>
          <ul className="mt-2 space-y-1.5 text-[11px] text-rose-900/90 dark:text-rose-100/90">
            {avoidPatterns.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
        <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
          Prefers Reduced Motion Implementation
        </h5>
        <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
          Keep information hierarchy intact while reducing transforms, parallax,
          and continuous motion.
        </p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-2 text-[11px] text-slate-100">
          <code>{`@media (prefers-reduced-motion: reduce) {
  .animated,
  .page-transition {
    animation: none !important;
    transition-duration: 1ms !important;
    transform: none !important;
  }
}`}</code>
        </pre>
      </div>
    </section>
  );
}
