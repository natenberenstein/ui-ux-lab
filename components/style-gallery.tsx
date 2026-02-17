"use client";

import { Check, RotateCcw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { useDesignStyle, type DesignStyle } from "./design-style-context";

type StyleShowcase = {
  name: string;
  tone: string;
  visualClass: string;
  summary: string;
  idealFor: string;
  caution: string;
  components: string[];
  exampleContext: string;
};

const styleShowcases: StyleShowcase[] = [
  {
    name: "Flat Functional",
    tone: "Fast and practical",
    visualClass: "style-flat",
    summary: "Prioritizes speed, clarity, and low visual noise.",
    idealFor: "SaaS workflows, internal tools, and operations dashboards.",
    caution: "Can feel generic without strong type rhythm and hierarchy.",
    components: ["Cards", "Badges", "Neutral buttons"],
    exampleContext: "Example: project dashboard"
  },
  {
    name: "Glassmorphism",
    tone: "Layered and futuristic",
    visualClass: "style-glass",
    summary: "Uses translucent surfaces to emphasize depth and state.",
    idealFor: "Creative software, media controls, and premium UI moments.",
    caution: "Needs careful contrast and blur limits for readability.",
    components: ["Frosted cards", "Glow badges", "Soft gradients"],
    exampleContext: "Example: media control center"
  },
  {
    name: "Neo-Brutalism",
    tone: "Expressive and bold",
    visualClass: "style-neobrutal",
    summary: "Leans on heavy outlines and punchy contrast for personality.",
    idealFor: "Marketing pages, portfolio products, and bold branding.",
    caution: "Strong styling can overpower dense information.",
    components: ["Hard borders", "Offset shadows", "Chunky buttons"],
    exampleContext: "Example: campaign landing panel"
  },
  {
    name: "Editorial Minimal",
    tone: "Calm and content-first",
    visualClass: "style-editorial",
    summary: "Lets typography and whitespace guide reading flow.",
    idealFor: "Knowledge bases, long-form content, and premium docs.",
    caution: "Requires disciplined spacing and concise copy.",
    components: ["Readable text blocks", "Muted accents", "Subtle separators"],
    exampleContext: "Example: long-form article layout"
  },
  {
    name: "Playful Bento",
    tone: "Friendly and modular",
    visualClass: "style-bento",
    summary: "Combines segmented blocks to communicate multiple ideas quickly.",
    idealFor: "Feature overviews, onboarding screens, and product launches.",
    caution: "Can become visually noisy if sections compete equally.",
    components: ["Split cards", "Color chips", "Mixed emphasis"],
    exampleContext: "Example: onboarding feature board"
  },
  {
    name: "Data Dense",
    tone: "Serious and analytical",
    visualClass: "style-data",
    summary: "Optimizes for scanability under heavy information load.",
    idealFor: "Reporting tools, admin consoles, and monitoring surfaces.",
    caution: "Must preserve spacing and affordances to avoid fatigue.",
    components: ["Compact cards", "Status labels", "Structured rows"],
    exampleContext: "Example: monitoring console"
  }
];

function StyleMiniPreview({ visualClass }: { visualClass: string }) {
  if (visualClass === "style-flat") {
    return (
      <div className="mini-showcase">
        <div className="mini-row">
          <div className="mini-pill" />
          <div className="mini-pill w-16" />
        </div>
        <div className="mini-grid mini-grid-2">
          <div className="mini-block h-10" />
          <div className="mini-block h-10" />
        </div>
        <div className="mini-stack">
          <div className="mini-line" />
          <div className="mini-line w-5/6" />
          <div className="mini-line w-3/4" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-glass") {
    return (
      <div className="mini-showcase">
        <div className="mini-grid mini-grid-3">
          <div className="mini-block h-12" />
          <div className="mini-block h-12" />
          <div className="mini-block h-12" />
        </div>
        <div className="mini-row mt-2">
          <div className="mini-circle" />
          <div className="mini-line w-2/3" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-neobrutal") {
    return (
      <div className="mini-showcase">
        <div className="mini-block h-12" />
        <div className="mini-grid mini-grid-2 mt-2">
          <div className="mini-block h-8" />
          <div className="mini-block h-8" />
        </div>
        <div className="mini-row mt-2">
          <div className="mini-pill w-20" />
          <div className="mini-pill w-14" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-editorial") {
    return (
      <div className="mini-showcase">
        <div className="mini-line h-3 w-2/3" />
        <div className="mini-stack mt-2">
          <div className="mini-line" />
          <div className="mini-line w-11/12" />
          <div className="mini-line w-10/12" />
        </div>
        <div className="mini-block mt-3 h-9" />
      </div>
    );
  }

  if (visualClass === "style-bento") {
    return (
      <div className="mini-showcase mini-bento">
        <div className="mini-grid mini-grid-bento">
          <div className="mini-block h-9" />
          <div className="mini-block h-9" />
          <div className="mini-block col-span-2 h-20" />
          <div className="mini-block h-20" />
        </div>
      </div>
    );
  }

  return (
    <div className="mini-showcase">
      <div className="mini-grid mini-grid-3">
        <div className="mini-block h-10" />
        <div className="mini-block h-10" />
        <div className="mini-block h-10" />
      </div>
      <div className="mini-stack mt-2">
        <div className="mini-line" />
        <div className="mini-line w-4/5" />
        <div className="mini-line w-3/5" />
      </div>
    </div>
  );
}

export function StyleGallery() {
  const { activeStyle, setActiveStyle } = useDesignStyle();

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl text-slate-900">Design Style Gallery</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Six common visual approaches with guidance on when to use each one.
            <span className="ml-1 text-sm text-slate-600">Click a style to apply it to the entire page.</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          {activeStyle !== "default" && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveStyle("default")}
              className="gap-1.5 border-slate-300/80 bg-white/80 text-sm backdrop-blur-sm dark:border-slate-600 dark:bg-slate-900/80"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset style
            </Button>
          )}
          <Badge variant="warning">Choose based on user need and task context</Badge>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {styleShowcases.map((style) => {
          const isActive = activeStyle === style.visualClass;
          return (
            <button
              key={style.name}
              type="button"
              onClick={() =>
                setActiveStyle(isActive ? "default" : (style.visualClass as DesignStyle))
              }
              className="h-full text-left"
            >
              <Card
                className={`style-panel style-card flex h-full flex-col border-none ${style.visualClass} ${
                  isActive
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : ""
                }`}
              >
                <CardHeader className="space-y-2">
                  <CardTitle className="flex items-center justify-between text-2xl text-slate-900">
                    {style.name}
                    {isActive && (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-4 w-4" />
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-slate-700">{style.tone}</CardDescription>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-4 text-sm text-slate-800">
                  <p>{style.summary}</p>
                  <p>
                    <span className="font-semibold">Best for:</span> {style.idealFor}
                  </p>
                  <p>
                    <span className="font-semibold">Watch out:</span> {style.caution}
                  </p>
                  <div className="rounded-lg border border-slate-300/60 bg-white/45 p-3">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
                      {style.exampleContext}
                    </p>
                    <StyleMiniPreview visualClass={style.visualClass} />
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    {style.components.map((component) => (
                      <Badge key={component} variant="outline" className="bg-white/40">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
    </>
  );
}
