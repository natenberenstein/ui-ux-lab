import Link from "next/link";
import { ArrowLeft, Palette } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

type TemplateVariant = {
  name: string;
  goal: string;
  kind: "landing" | "dashboard" | "onboarding";
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

const templateVariants: TemplateVariant[] = [
  {
    name: "Landing Page Template",
    goal: "Communicate value quickly and drive a primary CTA.",
    kind: "landing"
  },
  {
    name: "Dashboard Template",
    goal: "Support frequent scanning and short decision loops.",
    kind: "dashboard"
  },
  {
    name: "Onboarding Template",
    goal: "Guide first-time users through progressive setup.",
    kind: "onboarding"
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

function FullPageTemplatePreview({ visualClass, kind }: { visualClass: string; kind: TemplateVariant["kind"] }) {
  return (
    <div className={`full-preview ${visualClass}`}>
      {kind === "landing" ? (
        <>
          <div className="fp-nav" />
          <div className="fp-hero" />
          <div className="fp-cta-row">
            <div className="fp-pill" />
            <div className="fp-pill short" />
          </div>
          <div className="fp-grid fp-grid-3">
            <div className="fp-tile" />
            <div className="fp-tile" />
            <div className="fp-tile" />
          </div>
        </>
      ) : null}

      {kind === "dashboard" ? (
        <div className="fp-dashboard-layout">
          <div className="fp-sidebar" />
          <div>
            <div className="fp-nav" />
            <div className="fp-grid fp-grid-3 mt-2">
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
            </div>
            <div className="fp-table mt-2">
              <div className="fp-row" />
              <div className="fp-row" />
              <div className="fp-row" />
            </div>
          </div>
        </div>
      ) : null}

      {kind === "onboarding" ? (
        <>
          <div className="fp-stepper">
            <div className="fp-dot active" />
            <div className="fp-dot" />
            <div className="fp-dot" />
          </div>
          <div className="fp-grid fp-grid-2 mt-2">
            <div className="fp-tile h-10" />
            <div className="fp-tile h-10" />
          </div>
          <div className="fp-form mt-2">
            <div className="fp-input" />
            <div className="fp-input" />
            <div className="fp-pill mt-2" />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function StylesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="hero-grid reveal-up rounded-3xl border bg-white/70 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-sm sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">Dedicated Style Explorer</Badge>
          <Link href="/" className={buttonVariants({ variant: "outline", className: "demo-button gap-2" })}>
            <ArrowLeft className="h-4 w-4" />
            Back to overview
          </Link>
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
          Design Styles Gallery
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">
          Compare visual styles side by side, with practical recommendations and mini interface examples for each
          approach.
        </p>
      </section>

      <section className="reveal-up-delay mt-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-3xl text-slate-900">Style Cards + Live Examples</h2>
          <Badge variant="warning" className="flex items-center gap-1.5">
            <Palette className="h-3.5 w-3.5" />
            Match style to user goals
          </Badge>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {styleShowcases.map((style) => (
            <Card key={style.name} className={`style-panel style-card border-none ${style.visualClass}`}>
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl text-slate-900">{style.name}</CardTitle>
                <CardDescription className="text-slate-700">{style.tone}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-800">
                <p>{style.summary}</p>
                <p>
                  <span className="font-semibold">Best for:</span> {style.idealFor}
                </p>
                <p>
                  <span className="font-semibold">Watch out:</span> {style.caution}
                </p>
                <div className="rounded-lg border border-slate-300/60 bg-white/45 p-3">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-700">{style.exampleContext}</p>
                  <StyleMiniPreview visualClass={style.visualClass} />
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {style.components.map((component) => (
                    <Badge key={component} variant="outline" className="bg-white/40">
                      {component}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6">
          <h2 className="font-display text-3xl text-slate-900">Full-Page Templates by Style</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Each style includes three full-page template directions to show how the same UX goals can be expressed
            through different visual languages.
          </p>
        </div>

        <div className="space-y-8">
          {styleShowcases.map((style) => (
            <Card key={`${style.name}-templates`} className="rounded-2xl border-slate-200/80 bg-white/75 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-slate-900">{style.name}</CardTitle>
                <CardDescription className="text-slate-700">{style.tone}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 lg:grid-cols-3">
                  {templateVariants.map((template) => (
                    <div key={`${style.name}-${template.kind}`} className="rounded-xl border border-slate-300/70 bg-white/70 p-3">
                      <p className="text-sm font-semibold text-slate-900">{template.name}</p>
                      <p className="mt-1 text-xs text-slate-700">{template.goal}</p>
                      <div className="mt-3">
                        <FullPageTemplatePreview visualClass={style.visualClass} kind={template.kind} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
