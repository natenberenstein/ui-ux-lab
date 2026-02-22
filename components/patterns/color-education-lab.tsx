"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ProductTone = "professional" | "calm" | "energetic";
type SurfaceStrategy = "light-first" | "dark-first" | "balanced";
type UiDensity = "content-heavy" | "dashboard" | "marketing";

function clampHue(value: number) {
  if (value < 0) return 0;
  if (value > 360) return 360;
  return value;
}

function wrapHue(value: number) {
  const mod = value % 360;
  return mod < 0 ? mod + 360 : mod;
}

export function ColorEducationLab() {
  const [baseHue, setBaseHue] = useState(210);
  const [tone, setTone] = useState<ProductTone>("professional");
  const [surfaces, setSurfaces] = useState<SurfaceStrategy>("balanced");
  const [density, setDensity] = useState<UiDensity>("dashboard");
  const initialBodyVars = useRef<Record<string, string> | null>(null);

  const themeTokens = useMemo(() => {
    const hue = clampHue(baseHue);
    const saturationByTone: Record<ProductTone, number> = {
      professional: 62,
      calm: 46,
      energetic: 78,
    };
    const primarySat = saturationByTone[tone];
    const primary = `hsl(${hue} ${primarySat}% 48%)`;
    const primarySoft = `hsl(${hue} ${Math.max(primarySat - 20, 20)}% 92%)`;
    const primaryStrong = `hsl(${hue} ${Math.min(primarySat + 10, 90)}% 36%)`;

    const neutralHue = tone === "calm" ? 200 : tone === "energetic" ? 215 : 220;
    const neutralSurface =
      surfaces === "light-first"
        ? `hsl(${neutralHue} 20% 98%)`
        : surfaces === "dark-first"
          ? `hsl(${neutralHue} 22% 12%)`
          : `hsl(${neutralHue} 20% 96%)`;

    const semanticSat = tone === "energetic" ? 74 : 62;
    const success = `hsl(152 ${semanticSat}% 42%)`;
    const warning = `hsl(38 ${semanticSat}% 48%)`;
    const error = `hsl(352 ${semanticSat}% 52%)`;
    const info = `hsl(${hue} ${semanticSat}% 46%)`;

    const densityGuidance =
      density === "content-heavy"
        ? "Reduce accent usage. Use neutral surfaces and reserve saturated color for actions and status only."
        : density === "dashboard"
          ? "Use one strong primary, one subdued accent, and strict semantic state colors for rapid scanning."
          : "Allow broader accent usage, but keep body text and CTA contrast at AA+ targets.";

    const primaryLightness = surfaces === "dark-first" ? 58 : 46;
    const primaryForeground =
      surfaces === "dark-first" ? "222 47% 11%" : "0 0% 98%";

    const secondaryHue = wrapHue(hue + 35);
    const secondarySat = tone === "calm" ? 28 : 42;
    const secondaryLight = surfaces === "dark-first" ? 22 : 92;
    const secondaryForeground =
      surfaces === "dark-first" ? "210 33% 92%" : "220 25% 18%";

    const accentSat = Math.max(primarySat - 20, 24);
    const accentLight = surfaces === "dark-first" ? 24 : 88;
    const accentForeground =
      surfaces === "dark-first" ? "170 70% 90%" : "215 28% 16%";

    return {
      primary,
      primarySoft,
      primaryStrong,
      neutralSurface,
      success,
      warning,
      error,
      info,
      densityGuidance,
      cssVars: {
        "--primary": `${hue} ${primarySat}% ${primaryLightness}%`,
        "--primary-foreground": primaryForeground,
        "--secondary": `${secondaryHue} ${secondarySat}% ${secondaryLight}%`,
        "--secondary-foreground": secondaryForeground,
        "--accent": `${hue} ${accentSat}% ${accentLight}%`,
        "--accent-foreground": accentForeground,
        "--ring": `${hue} ${primarySat}% ${primaryLightness}%`,
      },
    };
  }, [baseHue, tone, surfaces, density]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const trackedVars = Object.keys(themeTokens.cssVars);
    const bodyStyle = document.body.style;

    if (!initialBodyVars.current) {
      const snapshot: Record<string, string> = {};
      for (const name of trackedVars) {
        snapshot[name] = bodyStyle.getPropertyValue(name);
      }
      initialBodyVars.current = snapshot;
    }

    for (const [name, value] of Object.entries(themeTokens.cssVars)) {
      bodyStyle.setProperty(name, value);
    }
  }, [themeTokens.cssVars]);

  useEffect(() => {
    return () => {
      if (!initialBodyVars.current) return;
      const bodyStyle = document.body.style;
      for (const [name, value] of Object.entries(initialBodyVars.current)) {
        if (value) {
          bodyStyle.setProperty(name, value);
        } else {
          bodyStyle.removeProperty(name);
        }
      }
    };
  }, []);

  return (
    <section className="space-y-4">
      <div className="rounded-lg border border-cyan-200/70 bg-cyan-50/70 p-4 dark:border-cyan-500/30 dark:bg-cyan-950/20">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Color Learning Lab
        </h4>
        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
          Use this as a practical workflow: choose a hue, set product tone,
          validate contrast, then refine semantic states.
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            1) Decision Framework
          </h5>
          <ol className="mt-2 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
            <li>
              1. Define roles first: surface, text, primary action, semantic
              states.
            </li>
            <li>
              2. Pick one base hue and build tonal steps before styling
              components.
            </li>
            <li>
              3. Verify contrast for body text, labels, and action controls.
            </li>
            <li>4. Validate color-vision variants and add non-color cues.</li>
            <li>
              5. Lock tokens and reuse them consistently across the product.
            </li>
          </ol>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            2) Common Mistakes to Avoid
          </h5>
          <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
            <li>
              • Choosing colors from screenshots instead of from token roles.
            </li>
            <li>
              • Reusing brand color for both text and backgrounds without
              contrast checks.
            </li>
            <li>• Making warning/error visually too similar.</li>
            <li>
              • Assuming dark mode can be built by simply inverting light mode.
            </li>
            <li>• Communicating status by color only (without icon/text).</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
        <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
          3) Interactive Theme Coach
        </h5>
        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
          Live mode: this page theme updates in real time as you change
          controls.
        </p>

        <div className="mt-2 grid gap-2 md:grid-cols-2">
          <label className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            Base hue: {baseHue}
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={baseHue}
              onChange={(e) => setBaseHue(Number(e.target.value))}
              className="w-full"
            />
          </label>

          <label className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            Product tone
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as ProductTone)}
              className="block w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
            >
              <option value="professional">Professional</option>
              <option value="calm">Calm</option>
              <option value="energetic">Energetic</option>
            </select>
          </label>

          <label className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            Surface strategy
            <select
              value={surfaces}
              onChange={(e) => setSurfaces(e.target.value as SurfaceStrategy)}
              className="block w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
            >
              <option value="light-first">Light-first</option>
              <option value="dark-first">Dark-first</option>
              <option value="balanced">Balanced</option>
            </select>
          </label>

          <label className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            UI density
            <select
              value={density}
              onChange={(e) => setDensity(e.target.value as UiDensity)}
              className="block w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
            >
              <option value="content-heavy">Content-heavy</option>
              <option value="dashboard">Dashboard</option>
              <option value="marketing">Marketing</option>
            </select>
          </label>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
          <div
            className="rounded border border-slate-300 p-2 text-[10px]"
            style={{ backgroundColor: themeTokens.primarySoft }}
          >
            <p className="font-semibold text-slate-900">Primary soft</p>
            <p className="text-slate-700">{themeTokens.primarySoft}</p>
          </div>
          <div
            className="rounded border border-slate-300 p-2 text-[10px]"
            style={{ backgroundColor: themeTokens.primary }}
          >
            <p className="font-semibold text-white">Primary</p>
            <p className="text-white">{themeTokens.primary}</p>
          </div>
          <div
            className="rounded border border-slate-300 p-2 text-[10px]"
            style={{ backgroundColor: themeTokens.primaryStrong }}
          >
            <p className="font-semibold text-white">Primary strong</p>
            <p className="text-white">{themeTokens.primaryStrong}</p>
          </div>
          <div
            className="rounded border border-slate-300 p-2 text-[10px]"
            style={{ backgroundColor: themeTokens.neutralSurface }}
          >
            <p className="font-semibold text-slate-900">Surface neutral</p>
            <p className="text-slate-700">{themeTokens.neutralSurface}</p>
          </div>
          <div className="rounded border border-slate-300 p-2 text-[10px]">
            <p className="font-semibold text-slate-900">Semantic set</p>
            <div className="mt-1 flex gap-1">
              <span
                className="h-4 w-4 rounded-full border"
                style={{ backgroundColor: themeTokens.success }}
              />
              <span
                className="h-4 w-4 rounded-full border"
                style={{ backgroundColor: themeTokens.warning }}
              />
              <span
                className="h-4 w-4 rounded-full border"
                style={{ backgroundColor: themeTokens.error }}
              />
              <span
                className="h-4 w-4 rounded-full border"
                style={{ backgroundColor: themeTokens.info }}
              />
            </div>
          </div>
        </div>

        <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-400">
          Recommendation: {themeTokens.densityGuidance}
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-slate-600 dark:bg-slate-800/50">
        <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
          4) Resource Stack
        </h5>
        <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
          <li>
            • WCAG 2.2 Contrast Understanding:
            https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
          </li>
          <li>
            • WebAIM Contrast Checker:
            https://webaim.org/resources/contrastchecker/
          </li>
          <li>
            • Repo deep dive notes:
            `docs/02-visual-design-fundamentals/typography-and-color.md`
          </li>
          <li>
            • Accessibility reference: `docs/07-accessibility/wcag-and-aria.md`
          </li>
        </ul>
        <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
          Next step: use the interactive demos below (palette, semantic states,
          contrast ratio, color blindness simulation) to validate these
          decisions.
        </p>
      </div>
    </section>
  );
}
