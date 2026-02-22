"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, MousePointerClick, RotateCcw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CheckCategory = "planning" | "visual" | "interaction" | "qa";

type CheckItem = {
  label: string;
  description: string;
  relatedLaw?: string;
  category: CheckCategory;
};

const categoryMeta: Record<CheckCategory, { title: string; color: string }> = {
  planning: { title: "Planning", color: "text-blue-600 dark:text-blue-400" },
  visual: {
    title: "Visual Design",
    color: "text-amber-600 dark:text-amber-400",
  },
  interaction: {
    title: "Interaction",
    color: "text-violet-600 dark:text-violet-400",
  },
  qa: { title: "QA & Polish", color: "text-emerald-600 dark:text-emerald-400" },
};

const checklistItems: CheckItem[] = [
  // Planning
  {
    label: "Pick a style based on product context, not trend pressure.",
    description:
      "Users expect interfaces to match the domain — a banking app should feel different from a social platform.",
    relatedLaw: "Jakob's Law",
    category: "planning",
  },
  {
    label: "Define hierarchy first: title, supporting text, then actions.",
    description:
      "Clear information order lets users find what matters in under 3 seconds.",
    relatedLaw: "Serial Position Effect",
    category: "planning",
  },
  {
    label: "Map user flows before building screens.",
    description:
      "Understanding task sequences prevents dead-ends and unnecessary navigation.",
    relatedLaw: "Zeigarnik Effect",
    category: "planning",
  },
  {
    label: "Identify the core 20% of features that serve 80% of users.",
    description:
      "Focus development effort on the interactions that matter most.",
    relatedLaw: "Pareto Principle",
    category: "planning",
  },
  // Visual Design
  {
    label: "Use one spacing scale and one interaction pattern set.",
    description: "Consistent rhythm reduces cognitive effort and builds trust.",
    relatedLaw: "Proximity",
    category: "visual",
  },
  {
    label: "Apply a consistent type scale with clear size steps.",
    description:
      "Typography hierarchy is the fastest way to communicate importance.",
    relatedLaw: "Similarity",
    category: "visual",
  },
  {
    label: "Ensure interactive elements look clickable before interaction.",
    description:
      "Buttons should look pressable; links should be distinguishable from text.",
    relatedLaw: "Fitts's Law",
    category: "visual",
  },
  {
    label: "Invest in aesthetic polish — it increases perceived usability.",
    description:
      "Users are more forgiving of minor issues in beautiful interfaces.",
    relatedLaw: "Aesthetic-Usability Effect",
    category: "visual",
  },
  // Interaction
  {
    label: "Add visible state feedback for hover, active, and focus.",
    description:
      "Every action should produce a visible response so users never wonder if it registered.",
    relatedLaw: "Doherty Threshold",
    category: "interaction",
  },
  {
    label: "Keep system response time under 400ms for direct actions.",
    description:
      "Fast feedback maintains the feeling of direct manipulation and flow.",
    relatedLaw: "Doherty Threshold",
    category: "interaction",
  },
  {
    label: "Accept flexible input formats where possible.",
    description:
      "Be liberal in what you accept — reduce friction from formatting requirements.",
    relatedLaw: "Postel's Law",
    category: "interaction",
  },
  {
    label: "Use progressive disclosure for complex features.",
    description:
      "Show only what is needed at each step to reduce decision overhead.",
    relatedLaw: "Hick's Law",
    category: "interaction",
  },
  // QA & Polish
  {
    label: "Validate contrast and keyboard flow before visual polish.",
    description: "Accessibility is a baseline requirement, not a polish step.",
    relatedLaw: "Tesler's Law",
    category: "qa",
  },
  {
    label: "Review each screen for cognitive load and copy length.",
    description:
      "Chunked, concise content improves comprehension and reduces bounce.",
    relatedLaw: "Miller's Law",
    category: "qa",
  },
  {
    label: "Test placement of first and last items in lists.",
    description:
      "Users remember beginnings and endings — put critical content there.",
    relatedLaw: "Serial Position Effect",
    category: "qa",
  },
  {
    label: "Add celebratory moments for task completion.",
    description: "Positive endings shape overall perception of the experience.",
    relatedLaw: "Peak-End Rule",
    category: "qa",
  },
];

const categories: CheckCategory[] = ["planning", "visual", "interaction", "qa"];

function itemsByCategory(cat: CheckCategory) {
  return checklistItems
    .map((item, index) => ({ ...item, index }))
    .filter((item) => item.category === cat);
}

function toAnchorId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function ImplementationChecklist({ compact }: { compact?: boolean }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const reset = () => setChecked(new Set());

  const total = checklistItems.length;
  const done = checked.size;
  const pct = Math.round((done / total) * 100);

  if (compact) {
    return (
      <div>
        <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-slate-900">
          <MousePointerClick className="h-5 w-5 text-primary" />
          Implementation Checklist
        </h3>
        <div className="mb-3 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700/50">
            <div
              className="checklist-progress-bar h-full rounded-full bg-emerald-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">
            {done}/{total}
          </span>
        </div>
        <ul className="grid gap-1.5 text-xs text-slate-800 sm:grid-cols-2">
          {checklistItems.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <button
                type="button"
                onClick={() => toggle(i)}
                className={`mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border transition-colors ${
                  checked.has(i)
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-slate-300 bg-white/80 dark:border-slate-600 dark:bg-slate-800/60"
                }`}
                aria-label={`Mark "${item.label}" as ${checked.has(i) ? "incomplete" : "complete"}`}
              >
                {checked.has(i) && <Check className="h-2.5 w-2.5" />}
              </button>
              <span className={checked.has(i) ? "line-through opacity-50" : ""}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
        {done > 0 && (
          <button
            type="button"
            onClick={reset}
            className="mt-2 flex items-center gap-1 text-[10px] text-slate-500 underline hover:text-slate-700 dark:hover:text-slate-300"
          >
            <RotateCcw className="h-2.5 w-2.5" />
            Reset
          </button>
        )}
      </div>
    );
  }

  return (
    <Card className="rounded-2xl border-slate-200 bg-white/75 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-display text-3xl text-slate-900">
          <MousePointerClick className="h-7 w-7 text-primary" />
          UI/UX Implementation Checklist
        </CardTitle>
        <CardDescription className="text-slate-700">
          A direct playbook your team can apply to new screens and features.
        </CardDescription>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700/50">
            <div
              className="checklist-progress-bar h-full rounded-full bg-emerald-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {done} of {total} complete
          </span>
          {done > 0 && (
            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {categories.map((cat) => {
          const meta = categoryMeta[cat];
          const items = itemsByCategory(cat);
          return (
            <div key={cat}>
              <h3
                className={`mb-3 text-sm font-semibold uppercase tracking-wide ${meta.color}`}
              >
                {meta.title}
              </h3>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {items.map(({ index, label, description, relatedLaw }) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 rounded-lg border border-slate-200/90 bg-white/75 p-3 dark:border-slate-700/60 dark:bg-slate-800/40"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border-2 transition-all ${
                        checked.has(index)
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-slate-300 bg-white hover:border-emerald-400 dark:border-slate-600 dark:bg-slate-800 dark:hover:border-emerald-500"
                      }`}
                      aria-label={`Mark "${label}" as ${checked.has(index) ? "incomplete" : "complete"}`}
                    >
                      {checked.has(index) && (
                        <Check className="feedback-check h-3 w-3" />
                      )}
                    </button>
                    <div className="min-w-0 flex-1 space-y-1">
                      <span
                        className={`block text-sm font-medium text-slate-800 dark:text-slate-200 ${
                          checked.has(index) ? "line-through opacity-50" : ""
                        }`}
                      >
                        {label}
                      </span>
                      <span className="block text-xs text-slate-600 dark:text-slate-400">
                        {description}
                      </span>
                      {relatedLaw && (
                        <Link
                          href={`/laws#${toAnchorId(relatedLaw)}`}
                          className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          aria-label={`Open ${relatedLaw} on the Laws of UX page`}
                        >
                          <Badge
                            variant="outline"
                            className="mt-0.5 cursor-pointer text-[10px] font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {relatedLaw}
                          </Badge>
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
