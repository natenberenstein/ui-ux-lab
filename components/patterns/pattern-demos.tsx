"use client";

import { useMemo, useState } from "react";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info
} from "lucide-react";
import { datavizDemos } from "@/components/patterns/dataviz-demos";

type DemoComponent = () => React.JSX.Element;

function EasingCurvesDemo() {
  return (
    <div className="principle-demo">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        Same movement, different easing
      </p>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="w-14 text-[10px] text-slate-500">Linear</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div className="h-full w-1/2 rounded-full bg-sky-500 transition-all duration-700 ease-linear hover:translate-x-16" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-14 text-[10px] text-slate-500">Ease-out</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div className="h-full w-1/2 rounded-full bg-emerald-500 transition-all duration-700 ease-out hover:translate-x-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DurationGuidelinesDemo() {
  return (
    <div className="principle-demo">
      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="rounded border border-slate-200 bg-white/70 p-2 dark:border-slate-600 dark:bg-slate-800/50">
          <div className="mx-auto h-3 w-3 rounded-full bg-primary transition-transform duration-150 hover:scale-125" />
          <p className="mt-1 text-slate-500">150ms micro</p>
        </div>
        <div className="rounded border border-slate-200 bg-white/70 p-2 dark:border-slate-600 dark:bg-slate-800/50">
          <div className="mx-auto h-3 w-3 rounded-full bg-amber-500 transition-transform duration-300 hover:scale-125" />
          <p className="mt-1 text-slate-500">300ms transition</p>
        </div>
        <div className="rounded border border-slate-200 bg-white/70 p-2 dark:border-slate-600 dark:bg-slate-800/50">
          <div className="mx-auto h-3 w-3 rounded-full bg-rose-500 transition-transform duration-500 hover:scale-125" />
          <p className="mt-1 text-slate-500">500ms page</p>
        </div>
      </div>
    </div>
  );
}

function PurposeDrivenMotionDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="principle-demo space-y-2">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
      >
        {expanded ? "Hide details" : "Show details"}
      </button>
      <div
        className={`overflow-hidden rounded-md border border-slate-200 bg-white/70 transition-all dark:border-slate-600 dark:bg-slate-800/50 ${
          expanded ? "max-h-20 p-2 opacity-100" : "max-h-0 p-0 opacity-0"
        }`}
      >
        <p className="text-[10px] text-slate-600 dark:text-slate-400">
          This transition reveals new information, so the motion explains a state change.
        </p>
      </div>
    </div>
  );
}

function PrefersReducedMotionDemo() {
  return (
    <div className="principle-demo">
      <p className="text-[10px] text-slate-500">
        Respect `prefers-reduced-motion`: reduce transforms and keep state changes instant.
      </p>
      <div className="mt-2 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary motion-safe:animate-pulse motion-reduce:animate-none" />
        <span className="text-[10px] text-slate-600 dark:text-slate-400">
          Pulse only when motion is allowed
        </span>
      </div>
    </div>
  );
}

const paletteSteps = [
  { token: "50", lightness: 95 },
  { token: "100", lightness: 88 },
  { token: "200", lightness: 80 },
  { token: "300", lightness: 70 },
  { token: "400", lightness: 60 },
  { token: "500", lightness: 50 },
  { token: "600", lightness: 42 },
  { token: "700", lightness: 34 },
  { token: "800", lightness: 26 },
  { token: "900", lightness: 18 }
];

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const value = clean.length === 3
    ? clean.split("").map((c) => c + c).join("")
    : clean;
  const intValue = Number.parseInt(value, 16);
  return {
    r: (intValue >> 16) & 255,
    g: (intValue >> 8) & 255,
    b: intValue & 255
  };
}

function relativeLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const toLinear = (channel: number) => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const R = toLinear(r);
  const G = toLinear(g);
  const B = toLinear(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(foreground: string, background: string) {
  const l1 = relativeLuminance(foreground);
  const l2 = relativeLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function PaletteConstructionDemo() {
  const [hue, setHue] = useState(210);

  return (
    <div className="principle-demo space-y-2">
      <label className="block text-[10px] text-slate-600 dark:text-slate-400">
        Hue: {hue}
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
          className="mt-1 w-full"
        />
      </label>
      <div className="grid grid-cols-5 gap-1 md:grid-cols-10">
        {paletteSteps.map((step) => (
          <div
            key={step.token}
            className="rounded p-1 text-center text-[9px] font-semibold"
            style={{
              backgroundColor: `hsl(${hue} 72% ${step.lightness}%)`,
              color: step.lightness < 45 ? "#ffffff" : "#0f172a"
            }}
          >
            {step.token}
          </div>
        ))}
      </div>
      <p className="text-[10px] text-slate-500 dark:text-slate-400">
        Ramp generated from `hsl({hue}, 72%, L)` across steps 50-900.
      </p>
    </div>
  );
}

function SemanticColorsDemo() {
  const variants = {
    success: {
      label: "Success",
      icon: CheckCircle2,
      className: "border-emerald-300 bg-emerald-100 text-emerald-700",
      message: "Profile was updated successfully."
    },
    warning: {
      label: "Warning",
      icon: AlertTriangle,
      className: "border-amber-300 bg-amber-100 text-amber-700",
      message: "Storage is almost full."
    },
    error: {
      label: "Error",
      icon: AlertCircle,
      className: "border-rose-300 bg-rose-100 text-rose-700",
      message: "Payment failed. Try again."
    },
    info: {
      label: "Info",
      icon: Info,
      className: "border-sky-300 bg-sky-100 text-sky-700",
      message: "A new version is available."
    }
  } as const;
  const [active, setActive] = useState<keyof typeof variants>("success");
  const current = variants[active];
  const CurrentIcon = current.icon;

  return (
    <div className="principle-demo space-y-2">
      <div className="flex flex-wrap gap-1.5 text-[10px]">
        {(Object.keys(variants) as (keyof typeof variants)[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`rounded border px-2 py-1 font-medium transition ${
              active === key
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {variants[key].label}
          </button>
        ))}
      </div>
      <div className={`flex items-center gap-2 rounded-md border px-2 py-2 text-[11px] font-medium ${current.className}`}>
        <CurrentIcon className="h-4 w-4" />
        {current.message}
      </div>
    </div>
  );
}

function ContrastRatiosDemo() {
  const [foreground, setForeground] = useState("#0f172a");
  const [background, setBackground] = useState("#ffffff");
  const ratio = useMemo(() => contrastRatio(foreground, background), [foreground, background]);
  const aaNormal = ratio >= 4.5;
  const aaLarge = ratio >= 3;
  const aaaNormal = ratio >= 7;

  return (
    <div className="principle-demo space-y-2 text-[10px]">
      <div className="grid grid-cols-2 gap-2">
        <label className="space-y-1 text-slate-600 dark:text-slate-400">
          Foreground
          <input
            type="color"
            value={foreground}
            onChange={(e) => setForeground(e.target.value)}
            className="block h-8 w-full cursor-pointer rounded border border-slate-300 bg-white p-1 dark:border-slate-600 dark:bg-slate-800"
          />
        </label>
        <label className="space-y-1 text-slate-600 dark:text-slate-400">
          Background
          <input
            type="color"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            className="block h-8 w-full cursor-pointer rounded border border-slate-300 bg-white p-1 dark:border-slate-600 dark:bg-slate-800"
          />
        </label>
      </div>
      <div
        className="rounded border p-2 text-sm font-semibold"
        style={{ backgroundColor: background, color: foreground }}
      >
        Accessible text preview
      </div>
      <div className="flex items-center justify-between rounded bg-white/70 p-1.5 dark:bg-slate-900/60">
        <span className="font-medium text-slate-700 dark:text-slate-200">Contrast ratio</span>
        <span className="font-semibold text-slate-900 dark:text-slate-100">{ratio.toFixed(2)}:1</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <span className={`rounded border px-1.5 py-0.5 ${aaNormal ? "border-emerald-300 bg-emerald-100 text-emerald-700" : "border-rose-300 bg-rose-100 text-rose-700"}`}>
          WCAG AA normal {aaNormal ? "pass" : "fail"}
        </span>
        <span className={`rounded border px-1.5 py-0.5 ${aaLarge ? "border-emerald-300 bg-emerald-100 text-emerald-700" : "border-rose-300 bg-rose-100 text-rose-700"}`}>
          WCAG AA large {aaLarge ? "pass" : "fail"}
        </span>
        <span className={`rounded border px-1.5 py-0.5 ${aaaNormal ? "border-emerald-300 bg-emerald-100 text-emerald-700" : "border-rose-300 bg-rose-100 text-rose-700"}`}>
          WCAG AAA normal {aaaNormal ? "pass" : "fail"}
        </span>
      </div>
    </div>
  );
}

function ColorBlindnessSimDemo() {
  const baseColors = ["#ef4444", "#f59e0b", "#22c55e", "#0ea5e9", "#8b5cf6"];
  const mappings: Record<string, string[]> = {
    Normal: baseColors,
    Protanopia: ["#a17f7f", "#c4aa66", "#8aa87f", "#6fa2b0", "#9077a8"],
    Deuteranopia: ["#9b8585", "#bfa96e", "#7ea47f", "#79a7b5", "#8f79aa"],
    Tritanopia: ["#d45f66", "#cb9b7f", "#5dae8c", "#6f9bc8", "#9d7abf"]
  };
  const [mode, setMode] = useState<keyof typeof mappings>("Normal");

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-2 text-[10px]">
        {(Object.keys(mappings) as (keyof typeof mappings)[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setMode(option)}
            className={`rounded px-2 py-0.5 ${
              mode === option
                ? "bg-primary/15 text-primary"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {mappings[mode].map((color, i) => (
          <span
            key={`${mode}-${i}`}
            className="h-6 w-6 rounded-full border border-slate-300 dark:border-slate-600"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
      <p className="text-[10px] text-slate-500 dark:text-slate-400">
        Pre-computed mapping for {mode}.
      </p>
    </div>
  );
}

function ModularTypeScalesDemo() {
  const sizes = ["text-xs", "text-sm", "text-base", "text-lg", "text-xl"];
  return (
    <div className="principle-demo space-y-1">
      {sizes.map((size, i) => (
        <p key={size} className={`${size} ${i === sizes.length - 1 ? "font-semibold text-slate-900 dark:text-slate-100" : "text-slate-600 dark:text-slate-400"}`}>
          Scale step {i + 1}
        </p>
      ))}
    </div>
  );
}

function LineHeightSpacingDemo() {
  return (
    <div className="principle-demo grid grid-cols-2 gap-2 text-[10px]">
      <p className="leading-none text-slate-600 dark:text-slate-400">
        Tight leading can make paragraphs feel cramped and harder to scan quickly.
      </p>
      <p className="leading-relaxed text-slate-600 dark:text-slate-400">
        Relaxed leading improves readability and creates comfortable reading rhythm.
      </p>
    </div>
  );
}

function MeasureCplDemo() {
  return (
    <div className="principle-demo grid gap-2 text-[10px] md:grid-cols-2">
      <p className="max-w-[35ch] rounded border border-slate-200 bg-white/70 p-1.5 text-slate-600 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
        Very short lines interrupt reading cadence and increase eye movement between lines.
      </p>
      <p className="max-w-[65ch] rounded border border-slate-200 bg-white/70 p-1.5 text-slate-600 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
        Around sixty-five characters per line is usually the most comfortable for body copy.
      </p>
    </div>
  );
}

function Grid4pt8ptDemo() {
  return (
    <div className="principle-demo">
      <div
        className="rounded border border-slate-200 bg-white/70 p-2 dark:border-slate-600 dark:bg-slate-800/50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)",
          backgroundSize: "8px 8px"
        }}
      >
        <div className="h-8 rounded bg-primary/20" />
      </div>
    </div>
  );
}

function SpacingScaleDemo() {
  const tokens = [
    { label: "xs", size: "h-2 w-2" },
    { label: "sm", size: "h-3 w-3" },
    { label: "md", size: "h-4 w-4" },
    { label: "lg", size: "h-5 w-5" },
    { label: "xl", size: "h-6 w-6" }
  ];
  return (
    <div className="principle-demo">
      <div className="flex items-end gap-2">
        {tokens.map((token) => (
          <div key={token.label} className="text-center">
            <div className={`${token.size} mx-auto rounded bg-primary/25`} />
            <span className="mt-1 block text-[9px] text-slate-500">{token.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GridOverlayDemo() {
  return (
    <div className="principle-demo">
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 rounded border border-dashed border-primary/40 bg-primary/5" />
        ))}
      </div>
    </div>
  );
}

function LayoutPrimitivesDemo() {
  const primitives = [
    { name: "Stack", rule: "Vertical flow with consistent gap" },
    { name: "Inline", rule: "Horizontal flow with wrap support" },
    { name: "Grid", rule: "Two-dimensional layout for cards" },
    { name: "Sidebar", rule: "Asymmetric split for nav/content" }
  ];

  return (
    <div className="principle-demo space-y-2 text-[10px]">
      {primitives.map((primitive) => (
        <div
          key={primitive.name}
          className="flex items-center justify-between rounded border border-slate-200 bg-white/70 px-2 py-1 dark:border-slate-600 dark:bg-slate-800/50"
        >
          <span className="font-semibold text-slate-700 dark:text-slate-200">{primitive.name}</span>
          <span className="text-slate-500 dark:text-slate-400">{primitive.rule}</span>
        </div>
      ))}
    </div>
  );
}

function ResponsiveSpacingRulesDemo() {
  const rows = [
    { bp: "Mobile", section: "24px", card: "12px", gap: "8px" },
    { bp: "Tablet", section: "32px", card: "16px", gap: "12px" },
    { bp: "Desktop", section: "48px", card: "24px", gap: "16px" }
  ];

  return (
    <div className="principle-demo space-y-2 text-[10px]">
      <div className="grid grid-cols-4 gap-1 text-center font-semibold text-slate-600 dark:text-slate-300">
        <span>Breakpoint</span>
        <span>Section</span>
        <span>Card</span>
        <span>Gap</span>
      </div>
      {rows.map((row) => (
        <div key={row.bp} className="grid grid-cols-4 gap-1 text-center">
          <span className="rounded bg-slate-100 px-1 py-1 font-medium text-slate-700 dark:bg-slate-700/60 dark:text-slate-200">
            {row.bp}
          </span>
          <span className="rounded bg-primary/10 px-1 py-1 text-primary">{row.section}</span>
          <span className="rounded bg-emerald-100 px-1 py-1 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            {row.card}
          </span>
          <span className="rounded bg-amber-100 px-1 py-1 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
            {row.gap}
          </span>
        </div>
      ))}
    </div>
  );
}

function ComponentSpacingContractsDemo() {
  return (
    <div className="principle-demo grid gap-2 text-[10px] md:grid-cols-2">
      <div className="rounded border border-rose-300 bg-rose-50 p-2 text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300">
        <p className="font-semibold">Don&apos;t</p>
        <p className="mt-1">Component adds external margin and parent also adds gap, causing double spacing.</p>
      </div>
      <div className="rounded border border-emerald-300 bg-emerald-50 p-2 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
        <p className="font-semibold">Do</p>
        <p className="mt-1">Component owns padding only; parent layout primitive owns spacing between siblings.</p>
      </div>
    </div>
  );
}

function SpacingReviewChecklistDemo() {
  const checklist = [
    "Uses spacing tokens, not arbitrary pixel values",
    "Touch targets meet at least 44x44 px",
    "Section rhythm is consistent across breakpoints",
    "Related items are grouped with stronger proximity",
    "No double spacing between component and parent"
  ];

  return (
    <div className="principle-demo space-y-1.5 text-[10px]">
      {checklist.map((item) => (
        <label key={item} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
          <input type="checkbox" className="mt-0.5 h-3 w-3 rounded border-slate-300" />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}

function ValidationPatternsDemo() {
  const [value, setValue] = useState("");
  const isValid = value.includes("@");
  return (
    <div className="principle-demo space-y-1.5">
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="name@example.com"
        className="w-full rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 placeholder:text-slate-400 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
      />
      {value.length > 0 && (
        <p className={`text-[10px] ${isValid ? "text-emerald-600" : "text-rose-600"}`}>
          {isValid ? "Looks good." : "Include @ in the email address."}
        </p>
      )}
    </div>
  );
}

function ErrorPlacementDemo() {
  return (
    <div className="principle-demo space-y-1">
      <label className="text-[10px] font-medium text-slate-700 dark:text-slate-300" htmlFor="demo-password">
        Password
      </label>
      <input
        id="demo-password"
        type="password"
        className="w-full rounded border border-rose-400 bg-white px-2 py-1 text-xs dark:bg-slate-800"
        defaultValue="123"
      />
      <p className="text-[10px] text-rose-600">Use at least 8 characters.</p>
    </div>
  );
}

function LabelVsPlaceholderDemo() {
  const [showLabel, setShowLabel] = useState(true);
  return (
    <div className="principle-demo space-y-2">
      <button
        type="button"
        onClick={() => setShowLabel((v) => !v)}
        className="rounded border border-slate-300 px-2 py-0.5 text-[10px] text-slate-600 dark:border-slate-600 dark:text-slate-400"
      >
        {showLabel ? "Show placeholder only" : "Show label + placeholder"}
      </button>
      {showLabel && (
        <label className="block text-[10px] font-medium text-slate-700 dark:text-slate-300" htmlFor="demo-name">
          Full name
        </label>
      )}
      <input
        id="demo-name"
        type="text"
        placeholder="Jane Doe"
        className="w-full rounded border border-slate-300 bg-white px-2 py-1 text-xs dark:border-slate-600 dark:bg-slate-800"
      />
    </div>
  );
}

function MultiStepFormsDemo() {
  const [step, setStep] = useState(1);
  return (
    <div className="principle-demo space-y-2">
      <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
        <div className={`h-full rounded-full bg-primary transition-all ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"}`} />
      </div>
      <p className="text-[10px] text-slate-500">Step {step} of 3</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          className="rounded border border-slate-300 px-2 py-0.5 text-[10px] text-slate-600 dark:border-slate-600 dark:text-slate-400"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => setStep((s) => Math.min(3, s + 1))}
          className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function EmptyStatesDemo() {
  return (
    <div className="principle-demo rounded-lg border border-dashed border-slate-300 text-center dark:border-slate-600">
      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">No projects yet</p>
      <p className="mt-1 text-[10px] text-slate-500">Create your first project to get started.</p>
      <button type="button" className="mt-2 rounded bg-primary/15 px-2 py-1 text-[10px] font-medium text-primary">
        New project
      </button>
    </div>
  );
}

function ErrorRecoveryDemo() {
  const [failed, setFailed] = useState(true);
  return (
    <div className="principle-demo space-y-2">
      {failed ? (
        <>
          <p className="text-[10px] text-rose-600">Couldn&apos;t load data. Check your connection.</p>
          <button
            type="button"
            onClick={() => setFailed(false)}
            className="rounded bg-rose-100 px-2 py-1 text-[10px] font-medium text-rose-700"
          >
            Retry
          </button>
        </>
      ) : (
        <p className="text-[10px] text-emerald-600">Recovered. Data loaded successfully.</p>
      )}
    </div>
  );
}

function SkeletonScreensDemo() {
  return (
    <div className="principle-demo space-y-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="animate-pulse space-y-1">
          <div className="h-2 w-1/3 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-2 w-full rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      ))}
    </div>
  );
}

function OptimisticUiDemo() {
  const [items, setItems] = useState(["Design audit", "Accessibility pass"]);
  const [pending, setPending] = useState(false);

  async function addItem() {
    const optimistic = "New task (saving...)";
    setPending(true);
    setItems((prev) => [...prev, optimistic]);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setItems((prev) => prev.map((item) => (item === optimistic ? "New task" : item)));
    setPending(false);
  }

  const canSubmit = useMemo(() => !pending, [pending]);

  return (
    <div className="principle-demo space-y-2">
      <ul className="space-y-1 text-[10px] text-slate-600 dark:text-slate-400">
        {items.map((item) => (
          <li key={item} className="rounded bg-white/70 px-1.5 py-1 dark:bg-slate-800/50">
            {item}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={addItem}
        disabled={!canSubmit}
        className="rounded bg-primary/15 px-2 py-1 text-[10px] font-medium text-primary disabled:opacity-50"
      >
        {pending ? "Saving..." : "Add task"}
      </button>
    </div>
  );
}

export const patternDemos: Record<string, DemoComponent> = {
  "easing-curves": EasingCurvesDemo,
  "duration-guidelines": DurationGuidelinesDemo,
  "purpose-driven-motion": PurposeDrivenMotionDemo,
  "prefers-reduced-motion": PrefersReducedMotionDemo,
  "palette-construction": PaletteConstructionDemo,
  "semantic-colors": SemanticColorsDemo,
  "contrast-ratios": ContrastRatiosDemo,
  "color-blindness-sim": ColorBlindnessSimDemo,
  "modular-type-scales": ModularTypeScalesDemo,
  "line-height-spacing": LineHeightSpacingDemo,
  "measure-cpl": MeasureCplDemo,
  "grid-4pt-8pt": Grid4pt8ptDemo,
  "spacing-scale": SpacingScaleDemo,
  "grid-overlay": GridOverlayDemo,
  "layout-primitives": LayoutPrimitivesDemo,
  "responsive-spacing-rules": ResponsiveSpacingRulesDemo,
  "component-spacing-contracts": ComponentSpacingContractsDemo,
  "spacing-review-checklist": SpacingReviewChecklistDemo,
  "validation-patterns": ValidationPatternsDemo,
  "error-placement": ErrorPlacementDemo,
  "label-vs-placeholder": LabelVsPlaceholderDemo,
  "multi-step-forms": MultiStepFormsDemo,
  "empty-states": EmptyStatesDemo,
  "error-recovery": ErrorRecoveryDemo,
  "skeleton-screens": SkeletonScreensDemo,
  "optimistic-ui": OptimisticUiDemo,
  ...datavizDemos
};
