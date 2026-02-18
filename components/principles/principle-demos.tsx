"use client";

import { useState } from "react";
import { Check } from "lucide-react";

/* ── 1. Visual Hierarchy ── */
function VisualHierarchyDemo() {
  return (
    <div className="principle-demo space-y-1.5">
      <div className="flex items-center gap-2">
        <span className="text-base font-bold text-slate-900">Primary heading</span>
        <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
          Most important
        </span>
      </div>
      <span className="block text-sm font-medium text-slate-700">Supporting detail</span>
      <span className="block text-xs text-slate-500">Tertiary info — least emphasis</span>
    </div>
  );
}

/* ── 2. Consistency ── */
function ConsistencyDemo() {
  return (
    <div className="principle-demo">
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white/60 p-2 dark:border-slate-600/50 dark:bg-slate-800/40"
          >
            <div className="h-5 w-5 rounded-md bg-primary/20" />
            <div className="h-1.5 w-8 rounded-full bg-slate-300 dark:bg-slate-600" />
          </div>
        ))}
      </div>
      <p className="mt-1.5 text-center text-[10px] text-slate-500">
        Identical structure across all three
      </p>
    </div>
  );
}

/* ── 3. Feedback ── */
function FeedbackDemo() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="principle-demo">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
        >
          Hover me
        </button>
        <button
          type="button"
          onClick={() => setClicked(true)}
          className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-all ${
            clicked
              ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-900/30 dark:text-emerald-300"
              : "border-slate-300 bg-white text-slate-700 hover:border-primary/40 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
          }`}
        >
          {clicked && <Check className="feedback-check h-3.5 w-3.5" />}
          {clicked ? "Done!" : "Click me"}
        </button>
        {clicked && (
          <button
            type="button"
            onClick={() => setClicked(false)}
            className="text-[10px] text-slate-500 underline"
          >
            reset
          </button>
        )}
      </div>
    </div>
  );
}

/* ── 4. Accessibility ── */
function AccessibilityDemo() {
  return (
    <div className="principle-demo space-y-2">
      <div className="flex items-center gap-3">
        <div className="rounded-md border border-slate-300 px-3 py-1 text-xs text-slate-700 ring-2 ring-primary/60 ring-offset-2 dark:border-slate-600 dark:text-slate-300 dark:ring-offset-slate-900">
          Visible focus ring
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded bg-slate-900 dark:bg-slate-100" />
          <div className="h-4 w-4 rounded bg-white dark:bg-slate-900" />
          <span className="text-[10px] font-medium text-emerald-600">4.5:1 ✓</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded bg-slate-300 dark:bg-slate-600" />
          <div className="h-4 w-4 rounded bg-slate-200 dark:bg-slate-700" />
          <span className="text-[10px] font-medium text-red-500">1.4:1 ✗</span>
        </div>
      </div>
    </div>
  );
}

/* ── 5. Affordance ── */
function AffordanceDemo() {
  return (
    <div className="principle-demo">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-slate-600 dark:text-slate-400">Submit</span>
          <span className="text-[10px] text-slate-400">Flat text — unclear</span>
        </div>
        <div className="text-slate-300 dark:text-slate-600">→</div>
        <div className="flex flex-col items-center gap-1">
          <button
            type="button"
            className="cursor-default rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-sm"
          >
            Submit
          </button>
          <span className="text-[10px] text-slate-400">Styled — looks clickable</span>
        </div>
      </div>
    </div>
  );
}

/* ── 6. Cognitive Load ── */
function CognitiveLoadDemo() {
  return (
    <div className="principle-demo">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-red-500/80">Before</span>
          <div className="rounded-md border border-slate-200/80 bg-white/50 p-1.5 dark:border-slate-600/50 dark:bg-slate-800/40">
            <div className="space-y-0.5">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-1 rounded-full bg-slate-300/80 dark:bg-slate-600/70" style={{ width: `${90 - n * 8}%` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-600/80">After</span>
          <div className="space-y-1">
            {["Name", "Role", "Team"].map((label) => (
              <div key={label} className="flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white/50 px-1.5 py-0.5 dark:border-slate-600/50 dark:bg-slate-800/40">
                <span className="text-[9px] font-semibold text-primary">{label}</span>
                <div className="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 7. Wayfinding ── */
function WayfindingDemo() {
  const steps = ["Start", "Current", "Done"];
  return (
    <div className="principle-demo">
      <div className="flex items-center justify-center gap-0">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                  i === 1
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : i === 0
                    ? "bg-primary/20 text-primary"
                    : "border border-slate-300 bg-white text-slate-400 dark:border-slate-600 dark:bg-slate-800"
                }`}
              >
                {i + 1}
              </div>
              <span className={`text-[9px] ${i === 1 ? "font-semibold text-primary" : "text-slate-400"}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`mx-1.5 h-0.5 w-6 rounded-full ${i === 0 ? "bg-primary/40" : "bg-slate-200 dark:bg-slate-700"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 8. Goal Clarity ── */
function GoalClarityDemo() {
  return (
    <div className="principle-demo space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">Progress</span>
        <span className="text-[10px] text-slate-500">3 of 4 complete</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div className="h-full w-3/4 rounded-full bg-primary transition-all" />
      </div>
      <p className="text-[10px] text-slate-500">Clear outcome — users see exactly where they stand</p>
    </div>
  );
}

/* ── Export map keyed by principle title ── */
export const principleDemos: Record<string, () => React.JSX.Element> = {
  "Visual Hierarchy": VisualHierarchyDemo,
  "Consistency": ConsistencyDemo,
  "Feedback": FeedbackDemo,
  "Accessibility": AccessibilityDemo,
  "Affordance": AffordanceDemo,
  "Cognitive Load": CognitiveLoadDemo,
  "Wayfinding": WayfindingDemo,
  "Goal Clarity": GoalClarityDemo,
};
