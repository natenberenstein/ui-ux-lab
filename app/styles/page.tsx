import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Palette } from "lucide-react";

import {
  styleShowcases,
  type StyleVisualClass,
} from "@/components/styles/design-style-showcases";
import { getStyleHref } from "@/components/styles/style-profiles";
import { StyleMiniPreview } from "@/components/styles/style-mini-preview";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TemplateVariant = {
  name: string;
  goal: string;
  kind: "landing" | "dashboard" | "onboarding";
};

const templateVariants: TemplateVariant[] = [
  {
    name: "Landing Page Template",
    goal: "Communicate value quickly and drive a primary CTA.",
    kind: "landing",
  },
  {
    name: "Dashboard Template",
    goal: "Support frequent scanning and short decision loops.",
    kind: "dashboard",
  },
  {
    name: "Onboarding Template",
    goal: "Guide first-time users through progressive setup.",
    kind: "onboarding",
  },
];

function FullPageTemplatePreview({
  visualClass,
  kind,
}: {
  visualClass: StyleVisualClass;
  kind: TemplateVariant["kind"];
}) {
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
          <Link
            href="/"
            className={buttonVariants({
              variant: "outline",
              className: "demo-button gap-2",
            })}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to overview
          </Link>
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
          Design Styles Gallery
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">
          Compare visual styles side by side, with practical recommendations and
          mini interface examples for each approach.
        </p>
      </section>

      <section className="reveal-up-delay mt-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-slate-900">
              Style Cards + Live Examples
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Click a card to open its dedicated style brief.
            </p>
          </div>
          <Badge variant="warning" className="flex items-center gap-1.5">
            <Palette className="h-3.5 w-3.5" />
            Match style to user goals
          </Badge>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {styleShowcases.map((style) => (
            <Link
              key={style.name}
              href={getStyleHref(style.visualClass)}
              className="block h-full"
            >
              <Card
                className={`style-panel style-card flex h-full flex-col border-none ${style.visualClass}`}
              >
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl text-slate-900">
                    {style.name}
                  </CardTitle>
                  <CardDescription className="text-slate-700">
                    {style.tone}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-4 text-sm text-slate-800">
                  <p>{style.summary}</p>
                  <p>
                    <span className="font-semibold">Best for:</span>{" "}
                    {style.idealFor}
                  </p>
                  <p>
                    <span className="font-semibold">Watch out:</span>{" "}
                    {style.caution}
                  </p>
                  <div className="rounded-lg border border-slate-300/60 bg-white/45 p-3">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
                      {style.exampleContext}
                    </p>
                    <StyleMiniPreview visualClass={style.visualClass} />
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    {style.components.map((component) => (
                      <Badge
                        key={component}
                        variant="outline"
                        className="bg-white/40"
                      >
                        {component}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Open style brief
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6">
          <h2 className="font-display text-3xl text-slate-900">
            Full-Page Templates by Style
          </h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Each style includes three full-page template directions to show how
            the same UX goals can be expressed through different visual
            languages.
          </p>
        </div>

        <div className="space-y-8">
          {styleShowcases.map((style) => (
            <Card
              key={`${style.name}-templates`}
              className="rounded-2xl border-slate-200/80 bg-white/75 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="font-display text-2xl text-slate-900">
                  {style.name}
                </CardTitle>
                <CardDescription className="text-slate-700">
                  {style.tone}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 lg:grid-cols-3">
                  {templateVariants.map((template) => (
                    <div
                      key={`${style.name}-${template.kind}`}
                      className="rounded-xl border border-slate-300/70 bg-white/70 p-3"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        {template.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-700">
                        {template.goal}
                      </p>
                      <div className="mt-3">
                        <FullPageTemplatePreview
                          visualClass={style.visualClass}
                          kind={template.kind}
                        />
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
