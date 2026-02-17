"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Eye,
  Goal,
  Hand,
  Layers,
  Play,
  Radar,
  Route,
  Sparkles
} from "lucide-react";

import { useDesignStyle } from "@/components/design-style-context";
import { ImplementationChecklist } from "@/components/implementation-checklist";
import { LawsSummary } from "@/components/laws-summary";
import { principleDemos } from "@/components/principle-demos";
import { StyleGallery } from "@/components/style-gallery";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Principle = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  whyItMatters: string;
  implementation: string;
  successSignal: string;
};

const principles: Principle[] = [
  {
    title: "Visual Hierarchy",
    icon: Layers,
    whyItMatters: "Users should know what matters first in under 3 seconds.",
    implementation: "Large headline scale, section labels, and tiered card content.",
    successSignal: "The main CTA and top message are instantly noticeable."
  },
  {
    title: "Consistency",
    icon: Compass,
    whyItMatters: "Predictable patterns reduce decision effort.",
    implementation: "Shared spacing tokens, repeated card anatomy, and button variants.",
    successSignal: "Users transfer learning from one section to the next."
  },
  {
    title: "Feedback",
    icon: Sparkles,
    whyItMatters: "Every action should return visible response.",
    implementation: "Hover lift, clear active states, and status badges.",
    successSignal: "Users never wonder whether interaction was registered."
  },
  {
    title: "Accessibility",
    icon: CheckCircle2,
    whyItMatters: "Interfaces must work for varied abilities and contexts.",
    implementation: "Semantic headings, visible focus rings, and contrast-aware palettes.",
    successSignal: "Keyboard navigation remains clear across all sections."
  },
  {
    title: "Affordance",
    icon: Hand,
    whyItMatters: "Controls should look usable before interaction.",
    implementation: "Buttons look pressable; interactive chips show boundaries.",
    successSignal: "Low misclick and hesitation around controls."
  },
  {
    title: "Cognitive Load",
    icon: Eye,
    whyItMatters: "Chunked information improves comprehension and memory.",
    implementation: "Short copy blocks, grouped cards, and concise labels.",
    successSignal: "Users can summarize sections without rereading."
  },
  {
    title: "Wayfinding",
    icon: Route,
    whyItMatters: "Users should always know where they are and what is next.",
    implementation: "Section sequencing from overview to application checklist.",
    successSignal: "Smooth progression from style exploration to execution."
  },
  {
    title: "Goal Clarity",
    icon: Goal,
    whyItMatters: "Clear outcomes improve completion rates.",
    implementation: "Each principle card includes an explicit success signal.",
    successSignal: "Teams can evaluate design quality with objective criteria."
  }
];

const bentoColors = [
  "bento-blue",
  "bento-amber",
  "bento-violet",
  "bento-green",
  "bento-rose",
  "bento-orange",
  "bento-teal",
  "bento-indigo"
];

function DefaultLayout() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="hero-grid reveal-up rounded-3xl border bg-white/70 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-sm sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="success">Next.js + shadcn/ui</Badge>
          <Badge variant="secondary">Responsive by default</Badge>
          <Badge variant="outline">Design and UX reference app</Badge>
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Design Styles and UI/UX Principles, applied in one practical interface.
        </h1>
        <p className="mt-5 max-w-3xl text-base text-slate-700 sm:text-lg">
          This application demonstrates how visual style choices can change presentation, while core UX principles
          remain stable and measurable.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/patterns" className={buttonVariants({ className: "demo-button gap-2" })}>
            <Play className="h-4 w-4" />
            UI/UX patterns
          </Link>
          <Link href="/styles" className={buttonVariants({ className: "demo-button gap-2" })}>
            Explore styles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/laws" className={buttonVariants({ variant: "outline", className: "demo-button gap-2" })}>
            <BookOpen className="h-4 w-4" />
            Laws of UX
          </Link>
          <Link href="#checklist" className={buttonVariants({ variant: "outline", className: "demo-button gap-2" })}>
            <Radar className="h-4 w-4" />
            Review principle checklist
          </Link>
        </div>
      </section>

      <section className="reveal-up-delay mt-12">
        <StyleGallery />
      </section>

      <section className="mt-14">
        <LawsSummary />
      </section>

      <section id="checklist" className="mt-14">
        <div className="mb-6">
          <h2 className="font-display text-3xl text-slate-900">UI/UX Principles in Practice</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Principles below map directly to implementation choices used in this app.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <Card key={principle.title} className="principle-card">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="icon-chip" aria-hidden>
                      <Icon className="h-5 w-5" />
                    </span>
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-700">
                  <p>{principle.whyItMatters}</p>
                  {principleDemos[principle.title] && (() => {
                    const Demo = principleDemos[principle.title];
                    return <Demo />;
                  })()}
                  <Separator />
                  <p>
                    <span className="font-semibold text-slate-900">Implemented as:</span> {principle.implementation}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Success signal:</span> {principle.successSignal}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <ImplementationChecklist />
      </section>
    </main>
  );
}

function BentoLayout() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="bento-grid">
        {/* Hero — spans 3 cols */}
        <div className="bento-tile bento-hero bg-white/70 backdrop-blur-sm" style={{ gridColumn: "1 / -2", gridRow: "1" }}>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="success">Next.js + shadcn/ui</Badge>
            <Badge variant="secondary">Responsive by default</Badge>
          </div>
          <h1 className="mt-4 font-display text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Design Styles &amp; UI/UX Principles
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
            Visual style choices change presentation, while core UX principles remain stable and measurable.
          </p>
        </div>

        {/* CTA tile — col 4, row 1 */}
        <div className="bento-tile bento-cta flex flex-col items-center justify-center gap-3 text-center" style={{ gridColumn: "-2 / -1", gridRow: "1" }}>
          <Sparkles className="h-8 w-8 text-primary" />
          <Link href="/patterns" className={buttonVariants({ size: "sm", className: "demo-button gap-2" })}>
            <Play className="h-3.5 w-3.5" />
            Patterns
          </Link>
          <Link href="/styles" className={buttonVariants({ size: "sm", className: "demo-button gap-2" })}>
            Explore
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#checklist" className={buttonVariants({ variant: "outline", size: "sm", className: "demo-button gap-1.5 text-xs" })}>
            <Radar className="h-3.5 w-3.5" />
            Checklist
          </Link>
        </div>

        {/* Style Gallery — spans full width, row 2 */}
        <div className="bento-tile bento-gallery" style={{ gridColumn: "1 / -1", gridRow: "2" }}>
          <StyleGallery />
        </div>

        {/* Laws of UX — spans full width, row 3 */}
        <div className="bento-tile bento-laws" style={{ gridColumn: "1 / -1", gridRow: "3" }}>
          <LawsSummary />
        </div>

        {/* Principle tiles — rows 4-7 */}
        {principles.map((principle, i) => {
          const Icon = principle.icon;
          const color = bentoColors[i];
          const gridStyle = getBentoPrincipleGrid(i);
          return (
            <div key={principle.title} className={`bento-tile ${color}`} style={gridStyle}>
              <div className="mb-3 flex items-center gap-2">
                <span className="bento-icon-chip" aria-hidden>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-slate-900">{principle.title}</h3>
              </div>
              {principleDemos[principle.title] && (() => {
                const Demo = principleDemos[principle.title];
                return <Demo />;
              })()}
              <p className="text-sm text-slate-700">{principle.whyItMatters}</p>
              <p className="mt-2 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">How:</span> {principle.implementation}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Signal:</span> {principle.successSignal}
              </p>
            </div>
          );
        })}

        {/* Checklist — bottom left, 2 cols */}
        <div className="bento-tile bento-checklist" style={{ gridColumn: "1 / 3", gridRow: "7" }}>
          <ImplementationChecklist compact />
        </div>
      </div>
    </main>
  );
}

/** Returns grid placement styles for each principle tile in the bento layout */
function getBentoPrincipleGrid(index: number): React.CSSProperties {
  // Layout (shifted +1 for laws tile at row 3):
  // Row 4: P1(col1) P2(col2) P3(col3-4, spans rows 4-5)
  // Row 5: P4(col1-2)        P3 continues
  // Row 6: P5(col1) P6(col2) P7(col3-4)
  // Row 7: checklist(col1-2)  P8(col3-4)
  switch (index) {
    case 0: return { gridColumn: "1 / 2", gridRow: "4" };
    case 1: return { gridColumn: "2 / 3", gridRow: "4" };
    case 2: return { gridColumn: "3 / 5", gridRow: "4 / 6" };
    case 3: return { gridColumn: "1 / 3", gridRow: "5" };
    case 4: return { gridColumn: "1 / 2", gridRow: "6" };
    case 5: return { gridColumn: "2 / 3", gridRow: "6" };
    case 6: return { gridColumn: "3 / 5", gridRow: "6" };
    case 7: return { gridColumn: "3 / 5", gridRow: "7" };
    default: return {};
  }
}

export function PageContent() {
  const { activeStyle } = useDesignStyle();
  const isBento = activeStyle === "style-bento";

  return isBento ? <BentoLayout /> : <DefaultLayout />;
}
