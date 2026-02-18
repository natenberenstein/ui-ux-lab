"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
  ReferenceLine,
} from "recharts";

type DemoComponent = () => React.JSX.Element;

// ─── shared data ─────────────────────────────────────────────────────────────

const weeklyData = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 68 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 82 },
  { day: "Fri", value: 74 },
  { day: "Sat", value: 31 },
  { day: "Sun", value: 28 },
];

// ─── 1. Chart Type Selection ──────────────────────────────────────────────────

function ChartTypeSelectionDemo() {
  type ChartType = "bar" | "line" | "area";
  const [type, setType] = useState<ChartType>("bar");

  const descriptions: Record<ChartType, string> = {
    bar: "Bar — compare discrete categories side by side",
    line: "Line — show trends and change over time",
    area: "Area — emphasise the magnitude of change over time; use stacked area for cumulative totals",
  };

  const commonProps = {
    data: weeklyData,
    margin: { top: 4, right: 4, left: -20, bottom: 0 },
  };

  const axisProps = {
    tick: { fontSize: 9, fill: "currentColor" },
    stroke: "transparent",
  };

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-1.5 flex-wrap">
        {(["bar", "line", "area"] as ChartType[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
              type === t
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={120}>
        {type === "bar" ? (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
            <XAxis dataKey="day" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip contentStyle={{ fontSize: 10 }} />
            <Bar dataKey="value" fill="hsl(197,92%,37%)" radius={[2, 2, 0, 0]} />
          </BarChart>
        ) : type === "line" ? (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
            <XAxis dataKey="day" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip contentStyle={{ fontSize: 10 }} />
            <Line dataKey="value" stroke="hsl(197,92%,37%)" strokeWidth={2} dot={{ r: 2 }} />
          </LineChart>
        ) : (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
            <XAxis dataKey="day" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip contentStyle={{ fontSize: 10 }} />
            <Area
              dataKey="value"
              stroke="hsl(197,92%,37%)"
              fill="hsl(197,92%,37%,0.15)"
              strokeWidth={2}
            />
          </AreaChart>
        )}
      </ResponsiveContainer>

      <p className="text-[10px] text-slate-500 dark:text-slate-400">{descriptions[type]}</p>
    </div>
  );
}

// ─── 2. Color Encoding Scales ─────────────────────────────────────────────────

type PaletteType = "categorical" | "sequential" | "diverging";

// Each mode uses data that actually suits that palette type
const categoricalData = [
  { label: "Shirts", value: 42 },
  { label: "Hats", value: 68 },
  { label: "Shoes", value: 55 },
  { label: "Bags", value: 82 },
  { label: "Belts", value: 31 },
  { label: "Socks", value: 28 },
];

const sequentialData = [
  { label: "9am", value: 12 },
  { label: "10am", value: 28 },
  { label: "11am", value: 45 },
  { label: "12pm", value: 72 },
  { label: "1pm", value: 68 },
  { label: "2pm", value: 38 },
];

// Positive/negative delta from goal — diverging palette is the natural fit
const divergingData = [
  { label: "APAC", value: 23 },
  { label: "EMEA", value: -8 },
  { label: "AMER", value: 15 },
  { label: "MENA", value: -12 },
  { label: "LatAm", value: 7 },
  { label: "ANZ", value: -4 },
];

const categoricalColors = ["#0ea5e9", "#f59e0b", "#22c55e", "#8b5cf6", "#ef4444", "#06b6d4"];

function buildSequential(count: number) {
  return Array.from({ length: count }, (_, i) => `hsl(197,82%,${28 + i * 10}%)`);
}

function getDivergingColor(value: number): string {
  if (value > 15) return "hsl(197, 85%, 30%)";
  if (value > 0) return "hsl(197, 72%, 50%)";
  if (value > -8) return "hsl(0, 68%, 58%)";
  return "hsl(0, 75%, 42%)";
}

const paletteData: Record<PaletteType, { label: string; value: number }[]> = {
  categorical: categoricalData,
  sequential: sequentialData,
  diverging: divergingData,
};

const paletteDescriptions: Record<PaletteType, string> = {
  categorical: "Product sales — unrelated categories use distinct hues so each item is independently identifiable.",
  sequential: "Support tickets by hour — ordered data uses light→dark to encode increasing magnitude.",
  diverging: "Revenue vs. target by region — positive (blue) and negative (red) delta from goal, centered on zero.",
};

function ColorEncodingScalesDemo() {
  const [palette, setPalette] = useState<PaletteType>("categorical");
  const data = paletteData[palette];

  function getColor(index: number, value: number): string {
    if (palette === "categorical") return categoricalColors[index % categoricalColors.length];
    if (palette === "sequential") return buildSequential(data.length)[index];
    return getDivergingColor(value);
  }

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-1.5 flex-wrap">
        {(["categorical", "sequential", "diverging"] as PaletteType[]).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPalette(p)}
            className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
              palette === p
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <XAxis dataKey="label" tick={{ fontSize: 9, fill: "currentColor" }} stroke="transparent" />
          <YAxis tick={{ fontSize: 9, fill: "currentColor" }} stroke="transparent" />
          {palette === "diverging" && (
            <ReferenceLine y={0} stroke="rgba(148,163,184,0.6)" />
          )}
          <Tooltip contentStyle={{ fontSize: 10 }} />
          <Bar dataKey="value" radius={[2, 2, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={getColor(i, entry.value)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p className="text-[10px] text-slate-500 dark:text-slate-400">{paletteDescriptions[palette]}</p>
    </div>
  );
}

// ─── 3. Data–Ink Ratio ────────────────────────────────────────────────────────

type JunkFlag = "gridlines" | "fill" | "border" | "shadow";

function DataInkRatioDemo() {
  // Start clean — users add junk to degrade the chart, which is more instructive
  const [junk, setJunk] = useState<Set<JunkFlag>>(new Set());

  function toggle(flag: JunkFlag) {
    setJunk((prev) => {
      const next = new Set(prev);
      if (next.has(flag)) next.delete(flag);
      else next.add(flag);
      return next;
    });
  }

  const labels: Record<JunkFlag, string> = {
    gridlines: "Heavy grid",
    fill: "BG fill",
    border: "Box border",
    shadow: "Shadows",
  };

  const dataInkPercent = Math.round(((4 - junk.size) / 4) * 100);

  return (
    <div className="principle-demo space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {(Object.keys(labels) as JunkFlag[]).map((flag) => (
          <button
            key={flag}
            type="button"
            onClick={() => toggle(flag)}
            className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
              junk.has(flag)
                ? "border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300"
                : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {junk.has(flag) ? `✗ ${labels[flag]}` : `+ ${labels[flag]}`}
          </button>
        ))}
      </div>

      <div
        className="rounded transition-all duration-300"
        style={{
          background: junk.has("fill") ? "#f8fafc" : "transparent",
          border: junk.has("border") ? "1.5px solid #cbd5e1" : "1.5px solid transparent",
          boxShadow: junk.has("shadow") ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
          padding: "4px",
        }}
      >
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={weeklyData} margin={{ top: 2, right: 2, left: -24, bottom: 0 }}>
            {junk.has("gridlines") && (
              <CartesianGrid strokeDasharray="2 2" stroke="rgba(148,163,184,0.5)" strokeWidth={1.5} />
            )}
            <XAxis dataKey="day" tick={{ fontSize: 9, fill: "currentColor" }} stroke="transparent" />
            <YAxis tick={{ fontSize: 9, fill: "currentColor" }} stroke="transparent" />
            <Bar dataKey="value" fill="hsl(197,92%,37%)" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[10px] text-slate-500 dark:text-slate-400">
        Data-ink ratio:{" "}
        <span className={`font-semibold ${dataInkPercent >= 75 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}>
          {dataInkPercent}%
        </span>
        {junk.size === 0
          ? " — clean start. Add elements to see non-data ink accumulate."
          : " — each added element competes with the data signal."}
      </p>
    </div>
  );
}

// ─── 4. Axis & Label Clarity ──────────────────────────────────────────────────

const honestData = [
  { month: "Jan", revenue: 18000 },
  { month: "Feb", revenue: 22000 },
  { month: "Mar", revenue: 21000 },
  { month: "Apr", revenue: 26000 },
  { month: "May", revenue: 24000 },
  { month: "Jun", revenue: 29000 },
];

function AxisLabelClarityDemo() {
  const [misleading, setMisleading] = useState(false);

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-1.5">
        <button
          type="button"
          onClick={() => setMisleading(false)}
          className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
            !misleading
              ? "border-emerald-300 bg-emerald-50 text-emerald-600 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300"
              : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Clear
        </button>
        <button
          type="button"
          onClick={() => setMisleading(true)}
          className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
            misleading
              ? "border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300"
              : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Misleading
        </button>
      </div>

      <div className="relative">
        {!misleading && (
          <p className="absolute right-0 top-0 text-[8px] text-slate-400">Revenue (USD)</p>
        )}
        <ResponsiveContainer width="100%" height={120}>
          <BarChart
            data={honestData}
            margin={{ top: 10, right: 4, left: misleading ? -10 : -4, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 9, fill: "currentColor" }}
              stroke="transparent"
            />
            <YAxis
              domain={misleading ? [17000, 30000] : [0, 35000]}
              tickFormatter={(v) => misleading ? v.toLocaleString() : `$${(v / 1000).toFixed(0)}k`}
              tick={{ fontSize: 8, fill: "currentColor" }}
              stroke="transparent"
            />
            <Tooltip
              contentStyle={{ fontSize: 10 }}
              formatter={(v) => [`$${Number(v).toLocaleString()}`, "Revenue"]}
            />
            <Bar dataKey="revenue" fill="hsl(197,92%,37%)" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[10px] text-slate-500 dark:text-slate-400">
        {misleading
          ? "Truncated axis ($17k baseline): June looks 12× taller than January. The actual ratio is 1.6×."
          : "Baseline at zero with $k units: bar heights are proportional to the real values."}
      </p>
    </div>
  );
}

// ─── 5. Chart Accessibility ───────────────────────────────────────────────────

type A11yMode = "color-only" | "redundant" | "deuteranopia";

const a11yData = [
  { category: "Direct", value: 38 },
  { category: "Organic", value: 27 },
  { category: "Referral", value: 21 },
  { category: "Social", value: 14 },
];

const normalColors = ["#0ea5e9", "#22c55e", "#f59e0b", "#8b5cf6"];
const deuteranopiaColors = ["#7b9ebe", "#6b9e7b", "#c4a86e", "#8b7baa"];

function ChartAccessibilityDemo() {
  const [mode, setMode] = useState<A11yMode>("color-only");

  const modeLabels: Record<A11yMode, string> = {
    "color-only": "Color only",
    "redundant": "Redundant encoding",
    "deuteranopia": "Simulated deuteranopia",
  };

  const colors = mode === "deuteranopia" ? deuteranopiaColors : normalColors;

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-1.5 flex-wrap">
        {(["color-only", "redundant", "deuteranopia"] as A11yMode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
              mode === m
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {modeLabels[m]}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={115}>
        <BarChart
          data={a11yData}
          layout="vertical"
          margin={{ top: 2, right: 24, left: 4, bottom: 2 }}
        >
          <XAxis
            type="number"
            tick={{ fontSize: 9, fill: "currentColor" }}
            stroke="transparent"
            tickFormatter={(v) => `${v}%`}
          />
          <YAxis
            type="category"
            dataKey="category"
            tick={{ fontSize: 9, fill: "currentColor" }}
            stroke="transparent"
            width={42}
          />
          <Tooltip
            contentStyle={{ fontSize: 10 }}
            formatter={(v) => [`${v}%`, "Share"]}
          />
          <Bar dataKey="value" radius={[0, 2, 2, 0]}>
            {a11yData.map((entry, i) => (
              <Cell
                key={`cell-${i}`}
                fill={colors[i]}
                fillOpacity={mode === "redundant" ? 0.65 + i * 0.1 : 1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {mode === "redundant" && (
        <div className="flex flex-wrap gap-2">
          {a11yData.map((entry, i) => (
            <span
              key={entry.category}
              className="flex items-center gap-1 text-[9px] text-slate-600 dark:text-slate-400"
            >
              <span
                className="inline-block h-2 w-2 rounded-sm"
                style={{ backgroundColor: colors[i] }}
              />
              {entry.category} {entry.value}%
            </span>
          ))}
        </div>
      )}

      <p className="text-[10px] text-slate-500 dark:text-slate-400">
        {mode === "color-only" && "Color only: fails for ~8% of users with color vision deficiency."}
        {mode === "redundant" && "Redundant encoding adds labels + opacity variation so meaning survives without color."}
        {mode === "deuteranopia" && "Simulated deuteranopia: green/red confusion makes color-only charts unreadable."}
      </p>
    </div>
  );
}

// ─── 6. Aggregation Level ─────────────────────────────────────────────────────

// 42 days — deterministic noise + upward trend + weekend dips
const _noiseValues = [5,-3,8,-1,12,-8,3,-5,9,2,-7,11,-4,6,-2,13,1,-9,7,-3,10,4,-6,8,-1,5,-8,12,3,-4,9,-2,7,1,-5,11,6,-3,8,2,-7,10];
const rawDailyData = _noiseValues.map((n, i) => ({
  label: `D${i + 1}`,
  value: Math.max(4, Math.round(28 + Math.floor(i / 7) * 5 + (i % 7 < 5 ? 8 : -18) + n)),
}));

const weeklyAggData = Array.from({ length: 6 }, (_, w) => ({
  label: `Wk ${w + 1}`,
  value: Math.round(rawDailyData.slice(w * 7, (w + 1) * 7).reduce((s, d) => s + d.value, 0) / 7),
}));

const monthlyAggData = [0, 1, 2].map((m) => ({
  label: `Mo ${m + 1}`,
  value: Math.round(rawDailyData.slice(m * 14, m * 14 + 14).reduce((s, d) => s + d.value, 0) / 14),
}));

type GrainType = "daily" | "weekly" | "monthly";

function AggregationLevelDemo() {
  const [grain, setGrain] = useState<GrainType>("daily");
  const data = grain === "daily" ? rawDailyData : grain === "weekly" ? weeklyAggData : monthlyAggData;

  const descriptions: Record<GrainType, string> = {
    daily: "Daily (42 pts) — noisy. Weekend dips obscure the upward trend.",
    weekly: "Weekly (6 pts) — weekend noise averages out; the upward trend emerges clearly.",
    monthly: "Monthly (3 pts) — high-level direction is obvious, but individual spikes are gone.",
  };

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-1.5">
        {(["daily", "weekly", "monthly"] as GrainType[]).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGrain(g)}
            className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
              grain === g
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {g.charAt(0).toUpperCase() + g.slice(1)}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={115}>
        <LineChart data={data} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 8, fill: "currentColor" }}
            stroke="transparent"
            interval={grain === "daily" ? 6 : 0}
          />
          <YAxis
            tick={{ fontSize: 8, fill: "currentColor" }}
            stroke="transparent"
            domain={[0, 70]}
          />
          <Tooltip contentStyle={{ fontSize: 10 }} />
          <Line
            dataKey="value"
            stroke="hsl(197,92%,37%)"
            strokeWidth={grain === "monthly" ? 2.5 : grain === "weekly" ? 2 : 1.5}
            dot={grain === "daily" ? false : { r: grain === "monthly" ? 4 : 2.5 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-[10px] text-slate-500 dark:text-slate-400">{descriptions[grain]}</p>
    </div>
  );
}

// ─── 7. Annotation & Direct Labeling ─────────────────────────────────────────

const annotationData = [
  { product: "Alpha", value: 42 },
  { product: "Beta", value: 67 },
  { product: "Gamma", value: 28 },
  { product: "Delta", value: 89 },
  { product: "Eps", value: 71 },
];

type LabelMode = "tooltip" | "direct" | "callout";

function AnnotationLabelingDemo() {
  const [mode, setMode] = useState<LabelMode>("tooltip");

  const modeLabels: Record<LabelMode, string> = {
    tooltip: "Tooltip only",
    direct: "Direct labels",
    callout: "Callout",
  };

  const descriptions: Record<LabelMode, string> = {
    tooltip: "Values only accessible on hover — minimal clutter but requires interaction to read any number.",
    direct: "Values printed on every bar — fully scannable without interaction, but dense with many series.",
    callout: "Annotate only the thing that matters. Sparse callouts are far more memorable than labelling everything.",
  };

  const peakIndex = 3; // Delta = 89

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-1.5 flex-wrap">
        {(["tooltip", "direct", "callout"] as LabelMode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
              mode === m
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {modeLabels[m]}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={120}>
        <BarChart
          data={annotationData}
          margin={{ top: mode === "direct" ? 14 : mode === "callout" ? 18 : 4, right: 4, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
          <XAxis dataKey="product" tick={{ fontSize: 9, fill: "currentColor" }} stroke="transparent" />
          <YAxis tick={{ fontSize: 9, fill: "currentColor" }} stroke="transparent" domain={[0, 105]} />
          {mode !== "callout" && <Tooltip contentStyle={{ fontSize: 10 }} />}
          {mode === "callout" && (
            <ReferenceLine
              y={89}
              stroke="hsl(44,80%,50%)"
              strokeDasharray="3 3"
              label={{
                value: "← launch week",
                position: "insideTopRight",
                fontSize: 7,
                fill: "hsl(44,65%,32%)",
              }}
            />
          )}
          <Bar dataKey="value" radius={[2, 2, 0, 0]}>
            {annotationData.map((_, i) => (
              <Cell
                key={`cell-${i}`}
                fill={mode === "callout" && i === peakIndex ? "hsl(44,96%,52%)" : "hsl(197,92%,37%)"}
              />
            ))}
            {mode === "direct" && (
              <LabelList dataKey="value" position="top" style={{ fontSize: 8 }} />
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {mode === "tooltip" && (
        <p className="text-[9px] italic text-slate-400 dark:text-slate-500">↑ Hover bars to read values</p>
      )}
      <p className="text-[10px] text-slate-500 dark:text-slate-400">{descriptions[mode]}</p>
    </div>
  );
}

// ─── 8. Aspect Ratio ─────────────────────────────────────────────────────────

const trendData = [
  { month: "Jan", v: 44 },
  { month: "Feb", v: 48 },
  { month: "Mar", v: 45 },
  { month: "Apr", v: 53 },
  { month: "May", v: 58 },
  { month: "Jun", v: 62 },
];

type HeightMode = "tall" | "standard" | "flat";

const chartHeights: Record<HeightMode, number> = {
  tall: 140,
  standard: 85,
  flat: 32,
};

function AspectRatioDemo() {
  const [heightMode, setHeightMode] = useState<HeightMode>("standard");

  const descriptions: Record<HeightMode, string> = {
    tall: "Tall — the 44→62 rise looks dramatic. Viewers perceive rapid, significant growth.",
    standard: "Standard — slope is legible and roughly proportional to the real rate of change.",
    flat: "Flat — the same rise looks negligible. Viewers may perceive a stable plateau.",
  };

  return (
    <div className="principle-demo space-y-2">
      <div className="flex gap-1.5">
        {(["flat", "standard", "tall"] as HeightMode[]).map((h) => (
          <button
            key={h}
            type="button"
            onClick={() => setHeightMode(h)}
            className={`rounded border px-2 py-0.5 text-[10px] font-medium transition ${
              heightMode === h
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {h.charAt(0).toUpperCase() + h.slice(1)}
          </button>
        ))}
      </div>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ height: chartHeights[heightMode] }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: "currentColor" }} stroke="transparent" />
            <YAxis tick={{ fontSize: 9, fill: "currentColor" }} stroke="transparent" domain={[35, 70]} />
            <Tooltip contentStyle={{ fontSize: 10 }} />
            <Line
              dataKey="v"
              stroke="hsl(197,92%,37%)"
              strokeWidth={2}
              dot={{ r: 2.5 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[10px] text-slate-500 dark:text-slate-400">{descriptions[heightMode]}</p>
    </div>
  );
}

// ─── export map ──────────────────────────────────────────────────────────────

export const datavizDemos: Record<string, DemoComponent> = {
  "chart-type-selection": ChartTypeSelectionDemo,
  "color-encoding-scales": ColorEncodingScalesDemo,
  "data-ink-ratio": DataInkRatioDemo,
  "axis-label-clarity": AxisLabelClarityDemo,
  "chart-accessibility": ChartAccessibilityDemo,
  "aggregation-level": AggregationLevelDemo,
  "annotation-labeling": AnnotationLabelingDemo,
  "aspect-ratio": AspectRatioDemo,
};
