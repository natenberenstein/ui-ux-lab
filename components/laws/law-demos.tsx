"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ── Fitts's Law ── */
function FittsLawDemo() {
  const [smallClicks, setSmallClicks] = useState(0);
  const [largeClicks, setLargeClicks] = useState(0);

  return (
    <div className="principle-demo space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Click each button 5 times — feel the difference
      </p>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => setSmallClicks((c) => c + 1)}
            className="h-6 w-12 rounded border border-slate-300 bg-white text-[10px] font-medium text-slate-700 transition-colors hover:bg-slate-50 active:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            Small
          </button>
          <span className="text-[10px] text-slate-500">{smallClicks} hits</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => setLargeClicks((c) => c + 1)}
            className="h-10 w-24 rounded-lg border border-primary/40 bg-primary/10 text-xs font-semibold text-primary transition-colors hover:bg-primary/20 active:bg-primary/30"
          >
            Large
          </button>
          <span className="text-[10px] text-slate-500">{largeClicks} hits</span>
        </div>
      </div>
      {(smallClicks > 0 || largeClicks > 0) && (
        <button
          type="button"
          onClick={() => {
            setSmallClicks(0);
            setLargeClicks(0);
          }}
          className="text-[10px] text-slate-400 underline"
        >
          reset
        </button>
      )}
    </div>
  );
}

/* ── Hick's Law ── */
function HicksLawDemo() {
  const [mode, setMode] = useState<"flat" | "grouped">("flat");
  const [selected, setSelected] = useState<string | null>(null);
  const flatOptions = [
    "Home",
    "About",
    "Blog",
    "Docs",
    "Pricing",
    "Team",
    "Careers",
    "Press",
    "Support",
    "Contact",
    "Legal",
    "API",
  ];
  const groups: Record<string, string[]> = {
    Company: ["About", "Team", "Careers"],
    Product: ["Pricing", "Docs", "API"],
    Help: ["Support", "Contact", "Legal"],
  };

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            setMode("flat");
            setSelected(null);
          }}
          className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${mode === "flat" ? "bg-primary/15 text-primary" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          12 flat options
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("grouped");
            setSelected(null);
          }}
          className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${mode === "grouped" ? "bg-primary/15 text-primary" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          3 grouped categories
        </button>
      </div>
      {mode === "flat" ? (
        <div className="flex flex-wrap gap-1">
          {flatOptions.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => setSelected(o)}
              className={`rounded border px-1.5 py-0.5 text-[10px] transition-colors ${selected === o ? "border-primary/40 bg-primary/10 text-primary" : "border-slate-200 bg-white/60 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400"}`}
            >
              {o}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-1.5">
          {Object.entries(groups).map(([group, items]) => (
            <div key={group}>
              <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                {group}
              </span>
              <div className="mt-0.5 flex gap-1">
                {items.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setSelected(o)}
                    className={`rounded border px-1.5 py-0.5 text-[10px] transition-colors ${selected === o ? "border-primary/40 bg-primary/10 text-primary" : "border-slate-200 bg-white/60 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400"}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {selected && (
        <p className="text-[10px] text-slate-500">
          Selected:{" "}
          <span className="font-semibold text-primary">{selected}</span>
        </p>
      )}
    </div>
  );
}

/* ── Jakob's Law ── */
function JakobsLawDemo() {
  const [scrambled, setScrambled] = useState(false);
  const standard = ["Logo", "Home", "About", "Pricing", "Contact"];
  const weird = ["Contact", "Pricing", "Logo", "Home", "About"];

  return (
    <div className="principle-demo space-y-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setScrambled(false)}
          className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${!scrambled ? "bg-primary/15 text-primary" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          Standard
        </button>
        <button
          type="button"
          onClick={() => setScrambled(true)}
          className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${scrambled ? "bg-primary/15 text-primary" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          Scrambled
        </button>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/60 px-3 py-2 dark:border-slate-600/50 dark:bg-slate-800/40">
        {(scrambled ? weird : standard).map((item, i) => (
          <span
            key={item}
            className={`text-[10px] ${i === 0 && !scrambled ? "font-bold text-slate-900 dark:text-slate-100" : "text-slate-600 dark:text-slate-400"}`}
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-[10px] text-slate-500">
        {scrambled
          ? "Unfamiliar layout — harder to navigate"
          : "Familiar pattern — feels intuitive"}
      </p>
    </div>
  );
}

/* ── Miller's Law ── */
function MillersLawDemo() {
  const [showChunked, setShowChunked] = useState(false);
  const raw = "2125551234";
  const chunked = "(212) 555-1234";

  return (
    <div className="principle-demo space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Remember this number:
      </p>
      <div className="flex items-center gap-3">
        <span
          className={`font-mono text-sm font-bold ${showChunked ? "text-primary" : "text-slate-700 dark:text-slate-300"}`}
        >
          {showChunked ? chunked : raw}
        </span>
        <button
          type="button"
          onClick={() => setShowChunked(!showChunked)}
          className="rounded border border-slate-300 px-2 py-0.5 text-[10px] text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          {showChunked ? "Show raw" : "Chunk it"}
        </button>
      </div>
      <p className="text-[10px] text-slate-500">
        {showChunked
          ? "Chunked — much easier to remember"
          : "10 raw digits — hard to hold in memory"}
      </p>
    </div>
  );
}

/* ── Postel's Law ── */
function PostelsLawDemo() {
  const [input, setInput] = useState("");
  const normalize = (val: string): string | null => {
    const cleaned = val.replace(/[^\d]/g, "");
    if (cleaned.length === 8) {
      const y = cleaned.slice(4, 8);
      const m = cleaned.slice(0, 2);
      const d = cleaned.slice(2, 4);
      return `${y}-${m}-${d}`;
    }
    const match = val.match(/(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})/);
    if (match)
      return `${match[3]}-${match[1].padStart(2, "0")}-${match[2].padStart(2, "0")}`;
    const isoMatch = val.match(/(\d{4})[/\-.](\d{1,2})[/\-.](\d{1,2})/);
    if (isoMatch)
      return `${isoMatch[1]}-${isoMatch[2].padStart(2, "0")}-${isoMatch[3].padStart(2, "0")}`;
    return null;
  };
  const normalized = input ? normalize(input) : null;

  return (
    <div className="principle-demo space-y-2">
      <p className="text-[10px] text-slate-500">
        Try: <span className="font-mono">02/16/2026</span>,{" "}
        <span className="font-mono">2026-02-16</span>,{" "}
        <span className="font-mono">02.16.2026</span>
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a date in any format"
        className="w-full rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 placeholder:text-slate-400 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
      />
      {normalized && (
        <p className="text-[10px] text-slate-500">
          Normalized:{" "}
          <span className="font-mono font-semibold text-primary">
            {normalized}
          </span>
        </p>
      )}
      {input && !normalized && (
        <p className="text-[10px] text-red-500">
          Could not parse — try a common date format
        </p>
      )}
    </div>
  );
}

/* ── Peak-End Rule ── */
function PeakEndRuleDemo() {
  const [step, setStep] = useState(0);
  const steps = [
    { label: "Step 1", content: "Enter your details", icon: "📝" },
    { label: "Step 2", content: "Review your info", icon: "🔍" },
    { label: "Complete!", content: "You're all set!", icon: "🎉" },
  ];

  return (
    <div className="principle-demo space-y-2">
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-1">
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${i <= step ? "bg-primary text-primary-foreground" : "border border-slate-300 text-slate-400 dark:border-slate-600"}`}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-0.5 w-4 rounded-full ${i < step ? "bg-primary/40" : "bg-slate-200 dark:bg-slate-700"}`}
              />
            )}
          </div>
        ))}
      </div>
      <div
        className={`rounded-lg border p-3 text-center transition-all ${step === 2 ? "border-primary/30 bg-primary/5" : "border-slate-200/80 bg-white/60 dark:border-slate-600/50 dark:bg-slate-800/40"}`}
      >
        <span className="text-lg">{steps[step].icon}</span>
        <p className="mt-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
          {steps[step].content}
        </p>
      </div>
      <div className="flex gap-2">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="rounded border border-slate-300 px-2 py-0.5 text-[10px] text-slate-600 dark:border-slate-600 dark:text-slate-400"
          >
            Back
          </button>
        )}
        {step < 2 && (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
          >
            Next
          </button>
        )}
        {step === 2 && (
          <button
            type="button"
            onClick={() => setStep(0)}
            className="text-[10px] text-slate-400 underline"
          >
            restart
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Aesthetic-Usability Effect ── */
function AestheticUsabilityDemo() {
  return (
    <div className="principle-demo space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Same form — different polish
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <span className="text-[10px] font-semibold text-red-500/80">
            Plain
          </span>
          <div className="space-y-1 rounded border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-800">
            <div className="h-4 w-full border border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-700" />
            <div className="h-4 w-full border border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-700" />
            <div className="h-5 w-12 bg-slate-400 text-center text-[9px] leading-5 text-white">
              Go
            </div>
          </div>
        </div>
        <div className="space-y-1.5">
          <span className="text-[10px] font-semibold text-emerald-600/80">
            Polished
          </span>
          <div className="space-y-1.5 rounded-lg border border-slate-200/80 bg-white/80 p-2.5 shadow-sm dark:border-slate-600/50 dark:bg-slate-800/60">
            <div className="h-5 w-full rounded-md border border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-700/60" />
            <div className="h-5 w-full rounded-md border border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-700/60" />
            <div className="flex h-6 w-16 items-center justify-center rounded-md bg-primary text-[10px] font-semibold text-primary-foreground shadow-sm">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Von Restorff Effect ── */
function VonRestorffDemo() {
  const [revealed, setRevealed] = useState(false);
  const items = ["Item A", "Item B", "Item C", "Special", "Item E", "Item F"];

  return (
    <div className="principle-demo space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Which item stands out?
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded px-2 py-1 text-[10px] font-medium transition-all ${
              item === "Special"
                ? "border-2 border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                : "border border-slate-200 bg-white/60 text-slate-600 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setRevealed(!revealed)}
        className="text-[10px] text-slate-400 underline"
      >
        {revealed ? "hide" : "reveal answer"}
      </button>
      {revealed && (
        <p className="text-[10px] text-slate-500">
          The distinct styling on &quot;Special&quot; makes it the most
          memorable item.
        </p>
      )}
    </div>
  );
}

/* ── Tesler's Law ── */
function TeslersLawDemo() {
  const [advanced, setAdvanced] = useState(false);

  return (
    <div className="principle-demo space-y-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setAdvanced(false)}
          className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${!advanced ? "bg-primary/15 text-primary" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          Simple
        </button>
        <button
          type="button"
          onClick={() => setAdvanced(true)}
          className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${advanced ? "bg-primary/15 text-primary" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          Advanced
        </button>
      </div>
      <div className="space-y-1 rounded-lg border border-slate-200/80 bg-white/60 p-2 dark:border-slate-600/50 dark:bg-slate-800/40">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-slate-600 dark:text-slate-400">
            Notifications
          </span>
          <div className="h-3 w-6 rounded-full bg-primary/30" />
        </div>
        {advanced && (
          <>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-600 dark:text-slate-400">
                Email frequency
              </span>
              <span className="text-[10px] text-slate-400">Daily ▾</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-600 dark:text-slate-400">
                Push alerts
              </span>
              <div className="h-3 w-6 rounded-full bg-slate-300 dark:bg-slate-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-600 dark:text-slate-400">
                Quiet hours
              </span>
              <span className="text-[10px] text-slate-400">10pm–8am</span>
            </div>
          </>
        )}
      </div>
      <p className="text-[10px] text-slate-500">
        {advanced
          ? "Complexity exposed — more control but more effort"
          : "Complexity hidden — simple but less control"}
      </p>
    </div>
  );
}

/* ── Doherty Threshold ── */
function DohertyThresholdDemo() {
  const [fastState, setFastState] = useState<"idle" | "loading" | "done">(
    "idle",
  );
  const [slowState, setSlowState] = useState<"idle" | "loading" | "done">(
    "idle",
  );
  const fastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (fastTimer.current) clearTimeout(fastTimer.current);
      if (slowTimer.current) clearTimeout(slowTimer.current);
    };
  }, []);

  const clickFast = () => {
    setFastState("loading");
    fastTimer.current = setTimeout(() => setFastState("done"), 400);
  };
  const clickSlow = () => {
    setSlowState("loading");
    slowTimer.current = setTimeout(() => setSlowState("done"), 2000);
  };

  return (
    <div className="principle-demo space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Compare response times
      </p>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={clickFast}
            disabled={fastState === "loading"}
            className="rounded border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-medium text-primary transition-colors hover:bg-primary/20 disabled:opacity-50"
          >
            Fast (400ms)
          </button>
          <span className="text-[10px] text-slate-500">
            {fastState === "loading"
              ? "Loading..."
              : fastState === "done"
                ? "✓ Done!"
                : "—"}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={clickSlow}
            disabled={slowState === "loading"}
            className="rounded border border-slate-300 bg-white px-3 py-1 text-[10px] font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            Slow (2s)
          </button>
          <span className="text-[10px] text-slate-500">
            {slowState === "loading"
              ? "Loading..."
              : slowState === "done"
                ? "✓ Done!"
                : "—"}
          </span>
        </div>
      </div>
      {(fastState !== "idle" || slowState !== "idle") && (
        <button
          type="button"
          onClick={() => {
            setFastState("idle");
            setSlowState("idle");
          }}
          className="text-[10px] text-slate-400 underline"
        >
          reset
        </button>
      )}
    </div>
  );
}

/* ── Parkinson's Law ── */
function ParkinsonsLawDemo() {
  const [withDeadline, setWithDeadline] = useState(false);
  const [progress, setProgress] = useState(0);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback((fast: boolean) => {
    setProgress(0);
    setWithDeadline(fast);
    if (interval.current) clearInterval(interval.current);
    const speed = fast ? 60 : 200;
    interval.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (interval.current) clearInterval(interval.current);
          return 100;
        }
        return p + 2;
      });
    }, speed);
  }, []);

  useEffect(() => {
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => start(false)}
          className="rounded border border-slate-300 px-2 py-0.5 text-[10px] font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400"
        >
          No deadline
        </button>
        <button
          type="button"
          onClick={() => start(true)}
          className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
        >
          With deadline
        </button>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-full transition-all ${withDeadline ? "bg-primary" : "bg-slate-400"}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-[10px] text-slate-500">
        {progress >= 100
          ? "Complete!"
          : progress > 0
            ? `${progress}% — ${withDeadline ? "constrained pace" : "leisurely pace"}`
            : "Press a button to start"}
      </p>
    </div>
  );
}

/* ── Zeigarnik Effect ── */
function ZeigarnikEffectDemo() {
  const items = [
    { label: "Create account", done: true },
    { label: "Set up profile", done: true },
    { label: "Invite team", done: true },
    { label: "Complete onboarding", done: false },
  ];

  return (
    <div className="principle-demo space-y-1.5">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        3 of 4 complete — notice the pull to finish
      </p>
      <div className="space-y-1">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2 rounded-md px-2 py-1 text-[10px] ${item.done ? "text-slate-500 line-through" : "font-semibold text-primary"}`}
          >
            <div
              className={`h-3.5 w-3.5 rounded-full border-2 flex items-center justify-center ${item.done ? "border-emerald-400 bg-emerald-50 dark:border-emerald-500/60 dark:bg-emerald-900/30" : "animate-pulse border-primary/60"}`}
            >
              {item.done && (
                <span className="text-[8px] text-emerald-600 dark:text-emerald-400">
                  ✓
                </span>
              )}
            </div>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Common Region ── */
function CommonRegionDemo() {
  const [grouped, setGrouped] = useState(false);

  return (
    <div className="principle-demo space-y-2">
      <button
        type="button"
        onClick={() => setGrouped(!grouped)}
        className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
      >
        {grouped ? "Remove regions" : "Add regions"}
      </button>
      <div className="flex items-center justify-center gap-2">
        {grouped ? (
          <>
            <div className="flex gap-1.5 rounded-lg border border-slate-200/80 bg-white/50 px-2 py-1.5 dark:border-slate-600/50 dark:bg-slate-800/40">
              <div className="h-4 w-4 rounded-full bg-blue-400" />
              <div className="h-4 w-4 rounded-full bg-blue-400" />
            </div>
            <div className="flex gap-1.5 rounded-lg border border-slate-200/80 bg-white/50 px-2 py-1.5 dark:border-slate-600/50 dark:bg-slate-800/40">
              <div className="h-4 w-4 rounded-full bg-amber-400" />
              <div className="h-4 w-4 rounded-full bg-amber-400" />
            </div>
            <div className="flex gap-1.5 rounded-lg border border-slate-200/80 bg-white/50 px-2 py-1.5 dark:border-slate-600/50 dark:bg-slate-800/40">
              <div className="h-4 w-4 rounded-full bg-green-400" />
              <div className="h-4 w-4 rounded-full bg-green-400" />
            </div>
          </>
        ) : (
          <div className="flex gap-1.5">
            <div className="h-4 w-4 rounded-full bg-blue-400" />
            <div className="h-4 w-4 rounded-full bg-blue-400" />
            <div className="h-4 w-4 rounded-full bg-amber-400" />
            <div className="h-4 w-4 rounded-full bg-amber-400" />
            <div className="h-4 w-4 rounded-full bg-green-400" />
            <div className="h-4 w-4 rounded-full bg-green-400" />
          </div>
        )}
      </div>
      <p className="text-[10px] text-slate-500">
        {grouped
          ? "Borders create perceived groups"
          : "Same dots — no visual grouping"}
      </p>
    </div>
  );
}

/* ── Proximity ── */
function ProximityDemo() {
  const [clustered, setClustered] = useState(false);

  return (
    <div className="principle-demo space-y-2">
      <button
        type="button"
        onClick={() => setClustered(!clustered)}
        className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
      >
        {clustered ? "Uniform spacing" : "Cluster into groups"}
      </button>
      <div className="flex items-center justify-center">
        {clustered ? (
          <div className="flex gap-4">
            <div className="flex gap-1">
              <div className="h-4 w-4 rounded-full bg-primary/60" />
              <div className="h-4 w-4 rounded-full bg-primary/60" />
              <div className="h-4 w-4 rounded-full bg-primary/60" />
            </div>
            <div className="flex gap-1">
              <div className="h-4 w-4 rounded-full bg-primary/60" />
              <div className="h-4 w-4 rounded-full bg-primary/60" />
              <div className="h-4 w-4 rounded-full bg-primary/60" />
            </div>
            <div className="flex gap-1">
              <div className="h-4 w-4 rounded-full bg-primary/60" />
              <div className="h-4 w-4 rounded-full bg-primary/60" />
              <div className="h-4 w-4 rounded-full bg-primary/60" />
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-4 w-4 rounded-full bg-primary/60" />
            ))}
          </div>
        )}
      </div>
      <p className="text-[10px] text-slate-500">
        {clustered
          ? "3 groups of 3 — proximity creates structure"
          : "9 equal circles — no implied grouping"}
      </p>
    </div>
  );
}

/* ── Prägnanz ── */
function PragnanzDemo() {
  const [simplified, setSimplified] = useState(false);

  return (
    <div className="principle-demo space-y-2">
      <button
        type="button"
        onClick={() => setSimplified(!simplified)}
        className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
      >
        {simplified ? "Show overlap" : "Reveal simple shapes"}
      </button>
      <div className="flex items-center justify-center py-2">
        {simplified ? (
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-full border-2 border-blue-400 bg-blue-100 dark:bg-blue-900/40" />
            <div className="h-10 w-10 rounded border-2 border-amber-400 bg-amber-100 dark:bg-amber-900/40" />
            <div className="h-10 w-10 rounded-full border-2 border-green-400 bg-green-100 dark:bg-green-900/40" />
          </div>
        ) : (
          <div
            className="relative flex items-center justify-center"
            style={{ width: "7rem", height: "3rem" }}
          >
            <div className="absolute left-0 h-10 w-10 rounded-full border-2 border-blue-400 bg-blue-100/80 dark:bg-blue-900/40" />
            <div className="absolute left-6 h-10 w-10 rounded border-2 border-amber-400 bg-amber-100/80 dark:bg-amber-900/40" />
            <div className="absolute left-12 h-10 w-10 rounded-full border-2 border-green-400 bg-green-100/80 dark:bg-green-900/40" />
          </div>
        )}
      </div>
      <p className="text-[10px] text-slate-500">
        {simplified
          ? "Three simple shapes — easier to parse"
          : "Overlapping forms — your brain already separates them"}
      </p>
    </div>
  );
}

/* ── Similarity ── */
function SimilarityDemo() {
  const [colored, setColored] = useState(false);
  const grid = [
    ["circle", "square", "circle", "square"],
    ["square", "circle", "square", "circle"],
    ["circle", "square", "circle", "square"],
  ];

  return (
    <div className="principle-demo space-y-2">
      <button
        type="button"
        onClick={() => setColored(!colored)}
        className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
      >
        {colored ? "Remove color" : "Add color by shape"}
      </button>
      <div className="flex flex-col items-center gap-1.5">
        {grid.map((row, ri) => (
          <div key={ri} className="flex gap-1.5">
            {row.map((shape, ci) => (
              <div
                key={ci}
                className={`h-5 w-5 ${shape === "circle" ? "rounded-full" : "rounded-sm"} ${
                  colored
                    ? shape === "circle"
                      ? "bg-blue-400"
                      : "bg-amber-400"
                    : "bg-slate-400 dark:bg-slate-500"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
      <p className="text-[10px] text-slate-500">
        {colored
          ? "Color reinforces shape grouping"
          : "Shape alone creates subtle groups"}
      </p>
    </div>
  );
}

/* ── Uniform Connectedness ── */
function UniformConnectednessDemo() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="principle-demo space-y-2">
      <button
        type="button"
        onClick={() => setConnected(!connected)}
        className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
      >
        {connected ? "Remove lines" : "Add connections"}
      </button>
      <div className="flex items-center justify-center gap-4">
        {["A", "B", "C"].map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 text-[10px] font-bold text-primary">
              {label}
            </div>
            {connected && i < 2 && <div className="h-0.5 w-6 bg-primary/40" />}
          </div>
        ))}
      </div>
      <p className="text-[10px] text-slate-500">
        {connected
          ? "Lines imply a sequence or relationship"
          : "Three items — no implied connection"}
      </p>
    </div>
  );
}

/* ── Serial Position Effect ── */
function SerialPositionDemo() {
  const items = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta"];
  const [hidden, setHidden] = useState(false);
  const [guess, setGuess] = useState<string[]>([]);

  return (
    <div className="principle-demo space-y-2">
      {!hidden ? (
        <>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Memorize these 7 items:
          </p>
          <div className="flex flex-wrap gap-1">
            {items.map((item) => (
              <span
                key={item}
                className="rounded border border-slate-200 bg-white/60 px-1.5 py-0.5 text-[10px] text-slate-700 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setHidden(true)}
            className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
          >
            Hide & recall
          </button>
        </>
      ) : (
        <>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Which do you remember? (tap to select)
          </p>
          <div className="flex flex-wrap gap-1">
            {items.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setGuess((g) =>
                    g.includes(item)
                      ? g.filter((x) => x !== item)
                      : [...g, item],
                  )
                }
                className={`rounded border px-1.5 py-0.5 text-[10px] transition-colors ${guess.includes(item) ? "border-primary/40 bg-primary/10 text-primary" : "border-slate-200 bg-white/60 text-slate-600 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-500">
            Most people recall <span className="font-semibold">Alpha</span>{" "}
            (first) and <span className="font-semibold">Eta</span> (last) best.
          </p>
          <button
            type="button"
            onClick={() => {
              setHidden(false);
              setGuess([]);
            }}
            className="text-[10px] text-slate-400 underline"
          >
            restart
          </button>
        </>
      )}
    </div>
  );
}

/* ── Occam's Razor ── */
function OccamsRazorDemo() {
  return (
    <div className="principle-demo space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Two paths to the same goal
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <span className="text-[10px] font-semibold text-red-500/80">
            5 steps
          </span>
          <div className="flex flex-col items-center gap-0.5">
            {["Select", "Review", "Confirm", "Verify", "Done"].map((s, i) => (
              <div key={s} className="flex flex-col items-center">
                <div className="flex h-5 w-full items-center justify-center rounded border border-slate-200 bg-white/60 text-[9px] text-slate-600 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
                  {s}
                </div>
                {i < 4 && (
                  <div className="h-2 w-0.5 bg-slate-300 dark:bg-slate-600" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-semibold text-emerald-600/80">
            2 steps
          </span>
          <div className="flex flex-col items-center gap-0.5">
            {["Choose", "Done"].map((s, i) => (
              <div key={s} className="flex flex-col items-center">
                <div className="flex h-5 w-full items-center justify-center rounded border border-primary/30 bg-primary/5 text-[9px] font-medium text-primary">
                  {s}
                </div>
                {i < 1 && <div className="h-2 w-0.5 bg-primary/40" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Pareto Principle ── */
function ParetoPrincipleDemo() {
  const features = [
    { name: "Search", usage: 42 },
    { name: "Dashboard", usage: 38 },
    { name: "Export", usage: 9 },
    { name: "Settings", usage: 7 },
    { name: "Reports", usage: 4 },
  ];
  const maxUsage = Math.max(...features.map((f) => f.usage));

  return (
    <div className="principle-demo space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Feature usage — 2 of 5 = 80% of traffic
      </p>
      <div className="space-y-1">
        {features.map((f, i) => (
          <div key={f.name} className="flex items-center gap-2">
            <span className="w-16 text-right text-[10px] text-slate-600 dark:text-slate-400">
              {f.name}
            </span>
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
              <div
                className={`h-full rounded-full transition-all ${i < 2 ? "bg-primary" : "bg-slate-300 dark:bg-slate-500"}`}
                style={{ width: `${(f.usage / maxUsage) * 100}%` }}
              />
            </div>
            <span className="w-8 text-[10px] text-slate-500">{f.usage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Export map keyed by law title ── */
export const lawDemos: Record<string, () => React.JSX.Element> = {
  "Fitts's Law": FittsLawDemo,
  "Hick's Law": HicksLawDemo,
  "Jakob's Law": JakobsLawDemo,
  "Miller's Law": MillersLawDemo,
  "Postel's Law": PostelsLawDemo,
  "Peak-End Rule": PeakEndRuleDemo,
  "Aesthetic-Usability Effect": AestheticUsabilityDemo,
  "Von Restorff Effect": VonRestorffDemo,
  "Tesler's Law": TeslersLawDemo,
  "Doherty Threshold": DohertyThresholdDemo,
  "Parkinson's Law": ParkinsonsLawDemo,
  "Zeigarnik Effect": ZeigarnikEffectDemo,
  "Common Region": CommonRegionDemo,
  Proximity: ProximityDemo,
  "Pr\u00e4gnanz": PragnanzDemo,
  Similarity: SimilarityDemo,
  "Uniform Connectedness": UniformConnectednessDemo,
  "Serial Position Effect": SerialPositionDemo,
  "Occam's Razor": OccamsRazorDemo,
  "Pareto Principle": ParetoPrincipleDemo,
};
