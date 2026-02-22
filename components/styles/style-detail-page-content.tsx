import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { BackToTop } from "@/components/styles/back-to-top";
import type { StyleVisualClass } from "@/components/styles/design-style-showcases";
import type { StyleProfile } from "@/components/styles/style-profiles";
import { StyleDetailSidebar } from "@/components/styles/style-detail-sidebar";
import { StyleMiniPreview } from "@/components/styles/style-mini-preview";
import { LearningBreadcrumbs } from "@/components/shared/learning-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StyleDetailPageContentProps = {
  profile: StyleProfile;
};

type SectionHeaderProps = {
  title: string;
  description: string;
  eyebrow: string;
};

function SectionHeader({ title, description, eyebrow }: SectionHeaderProps) {
  return (
    <div className="sd-surface sd-section-header rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-4 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/70">
      <p className="sd-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        {eyebrow}
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-2xl text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

type PatternPreviewProps = {
  visualClass: StyleVisualClass;
  variant: "callout" | "buttons" | "cards" | "forms" | "inline";
  className?: string;
  mode?: "do" | "dont";
};

function PatternPreview({
  visualClass,
  variant,
  className,
  mode = "do",
}: PatternPreviewProps) {
  return (
    <div
      className={`full-preview ${visualClass} min-h-[120px] ${className ?? ""}`}
      aria-hidden="true"
    >
      {variant === "callout" ? (
        mode === "do" ? (
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
        ) : (
          <>
            <div className="fp-grid fp-grid-2">
              <div className="fp-hero" />
              <div className="fp-hero" />
            </div>
            <div className="fp-cta-row">
              <div className="fp-pill" />
              <div className="fp-pill" />
              <div className="fp-pill short" />
            </div>
            <div className="fp-grid fp-grid-3">
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
            </div>
          </>
        )
      ) : null}

      {variant === "buttons" ? (
        mode === "do" ? (
          <>
            <div className="fp-nav" />
            <div className="fp-cta-row">
              <div className="fp-pill" />
              <div className="fp-pill short" />
            </div>
            <div className="fp-grid fp-grid-2">
              <div className="fp-tile h-10" />
              <div className="fp-tile h-10" />
            </div>
          </>
        ) : (
          <>
            <div className="fp-cta-row">
              <div className="fp-pill" />
              <div className="fp-pill" />
              <div className="fp-pill" />
              <div className="fp-pill short" />
            </div>
            <div className="fp-grid fp-grid-3">
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
            </div>
          </>
        )
      ) : null}

      {variant === "cards" ? (
        mode === "do" ? (
          <>
            <div className="fp-nav" />
            <div className="fp-grid fp-grid-3 mt-2">
              <div className="fp-tile h-10" />
              <div className="fp-tile h-10" />
              <div className="fp-tile h-10" />
            </div>
            <div className="fp-grid fp-grid-2 mt-2">
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
            </div>
          </>
        ) : (
          <>
            <div className="fp-grid fp-grid-3">
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
            </div>
            <div className="fp-grid fp-grid-3 mt-2">
              <div className="fp-tile h-6" />
              <div className="fp-tile h-6" />
              <div className="fp-tile h-6" />
            </div>
            <div className="fp-grid fp-grid-3 mt-2">
              <div className="fp-tile h-6" />
              <div className="fp-tile h-6" />
              <div className="fp-tile h-6" />
            </div>
          </>
        )
      ) : null}

      {variant === "forms" ? (
        mode === "do" ? (
          <>
            <div className="fp-form">
              <div className="fp-input" />
              <div className="fp-input" />
              <div className="fp-pill mt-2" />
            </div>
            <div className="fp-cta-row">
              <div className="fp-pill" />
              <div className="fp-pill short" />
            </div>
          </>
        ) : (
          <>
            <div className="fp-grid fp-grid-2">
              <div className="fp-input" />
              <div className="fp-input" />
            </div>
            <div className="fp-grid fp-grid-2 mt-2">
              <div className="fp-input" />
              <div className="fp-input" />
            </div>
            <div className="fp-cta-row">
              <div className="fp-pill" />
              <div className="fp-pill" />
            </div>
          </>
        )
      ) : null}

      {variant === "inline" ? (
        mode === "do" ? (
          <>
            <div className="fp-grid fp-grid-2">
              <div className="fp-tile h-8" />
              <div className="fp-tile h-8" />
            </div>
            <div className="fp-table mt-2">
              <div className="fp-row" />
              <div className="fp-row" />
              <div className="fp-row" />
            </div>
          </>
        ) : (
          <>
            <div className="fp-grid fp-grid-3">
              <div className="fp-tile h-6" />
              <div className="fp-tile h-6" />
              <div className="fp-tile h-6" />
            </div>
            <div className="fp-cta-row">
              <div className="fp-pill" />
              <div className="fp-pill" />
              <div className="fp-pill" />
            </div>
            <div className="fp-table mt-2">
              <div className="fp-row" />
              <div className="fp-row" />
              <div className="fp-row" />
            </div>
          </>
        )
      ) : null}
    </div>
  );
}

function getPatternVariant(title: string): PatternPreviewProps["variant"] {
  switch (title) {
    case "Hero Callout":
      return "callout";
    case "Primary Button Set":
      return "buttons";
    case "Feature Cards":
      return "cards";
    case "Form Fields":
      return "forms";
    case "Inline Callouts":
      return "inline";
    default:
      return "cards";
  }
}

export function StyleDetailPageContent({
  profile,
}: StyleDetailPageContentProps) {
  const deepDive = profile.deepDive;
  const navItems = [
    { id: "overview", label: "Overview" },
    ...(deepDive
      ? [
          { id: "foundation", label: "Foundation" },
          { id: "fit", label: "Where It Fits" },
          { id: "principles", label: "Principles" },
          { id: "patterns", label: "Pattern Examples" },
          { id: "accessibility", label: "Accessibility" },
          { id: "libraries", label: "Component Libraries" },
          { id: "resources", label: "Resources" },
        ]
      : []),
  ];

  return (
    <main
      data-style={profile.slug}
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <LearningBreadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Styles", href: "/styles" },
          { label: profile.name },
        ]}
      />

      <section
        className={`hero-grid sd-hero reveal-up rounded-3xl border p-6 shadow-xl shadow-slate-900/10 dark:shadow-black/30 sm:p-10 ${profile.visualClass}`}
      >
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">Style Deep Dive</Badge>
          <Link
            href="/styles"
            className={buttonVariants({
              variant: "outline",
              className: "demo-button gap-2",
            })}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to styles
          </Link>
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-base font-medium text-slate-700 dark:text-slate-300 sm:text-lg">
          {profile.tone}
        </p>
        <p className="mt-4 max-w-3xl text-base text-slate-700 dark:text-slate-300 sm:text-lg">
          {profile.summary}
        </p>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="space-y-10">
          <section id="overview" className="sd-section sd-delay-1 scroll-mt-28">
            <SectionHeader
              eyebrow="Section 01"
              title="Overview"
              description="A quick scan of the style at a glance."
            />

            <div className="mt-4 grid gap-5 lg:grid-cols-3">
              <Card className="sd-surface rounded-2xl border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-slate-900 dark:text-slate-100">
                    History
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <p>{profile.history}</p>
                  {deepDive?.overview ? (
                    <>
                      <p className="text-slate-600 dark:text-slate-400">
                        {deepDive.overview.origin}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {deepDive.overview.modernUsage}
                      </p>
                    </>
                  ) : null}
                </CardContent>
              </Card>

              <Card
                className={`style-panel sd-surface rounded-2xl border-none ${profile.visualClass}`}
              >
                <CardHeader>
                  <CardTitle className="font-display text-xl text-slate-900">
                    Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-800">
                  <p>{profile.message}</p>
                  <StyleMiniPreview visualClass={profile.visualClass} />
                </CardContent>
              </Card>
            </div>

            <div className="sd-surface mt-5 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
              <div className="grid gap-4 divide-y divide-slate-200/80 dark:divide-slate-700/80 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                <div className="p-5">
                  <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                    Core Elements
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {profile.coreElements.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                    Mood
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.mood.map((moodWord) => (
                      <Badge
                        key={moodWord}
                        variant="outline"
                        className="bg-white/60 dark:bg-slate-800/60"
                      >
                        {moodWord}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                    Usage Guidance
                  </h3>
                  <div className="mt-3 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        Best for:
                      </span>{" "}
                      {profile.idealFor}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        Watch out:
                      </span>{" "}
                      {profile.caution}
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {profile.watchouts.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {deepDive?.overview ? (
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div className="sd-surface rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                    Influences
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {deepDive.overview.influences.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="sd-surface rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                    Signature Signals
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {deepDive.overview.signals.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}

            {deepDive?.visualExamples ? (
              <div className="mt-6">
                <h3 className="font-display text-xl text-slate-900 dark:text-slate-100">
                  Visual Examples
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Concrete snapshots that show the style&apos;s shape language.
                </p>
                <div className="mt-4 grid gap-5 lg:grid-cols-3">
                  {deepDive.visualExamples.map((example) => (
                    <div
                      key={example.title}
                      className="sd-surface overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80"
                    >
                      <img
                        src={example.image.src}
                        alt={example.image.alt}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="space-y-2 p-4">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {example.title}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {example.description}
                        </p>
                        <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          {example.image.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          <div className="sd-section sd-delay-2 h-px bg-slate-200/80 dark:bg-slate-700/80" />

          {deepDive ? (
            <>
              <section
                id="foundation"
                className="sd-section sd-delay-2 scroll-mt-28"
              >
                <SectionHeader
                  eyebrow="Section 02"
                  title="Foundation"
                  description="Definition, intent, and core traits."
                />

                <div className="sd-surface mt-4 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <div className="grid gap-4 divide-y divide-slate-200/80 dark:divide-slate-700/80 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                    <div className="p-5">
                      <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                        Definition
                      </h3>
                      <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                        {deepDive.definition}
                      </p>
                      {deepDive.foundation ? (
                        <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                          {deepDive.foundation.definitionDetails.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                        Intention
                      </h3>
                      <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                        {deepDive.intention}
                      </p>
                      {deepDive.foundation ? (
                        <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                          {deepDive.foundation.intentionDetails.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="sd-surface mt-5 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <div className="p-5">
                    <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                      Characteristics
                    </h3>
                    <ul className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                      {deepDive.characteristics.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <div className="sd-section sd-delay-3 h-px bg-slate-200/80 dark:bg-slate-700/80" />

              <section id="fit" className="sd-section sd-delay-3 scroll-mt-28">
                <SectionHeader
                  eyebrow="Section 03"
                  title="Where It Fits"
                  description="Best contexts and where to avoid."
                />

                <div className="sd-surface mt-4 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <div className="grid gap-4 divide-y divide-slate-200/80 dark:divide-slate-700/80 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                    <div className="p-5">
                      <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                        Best For
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        {deepDive.bestFor.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                        Not Ideal For
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        {deepDive.avoidFor.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="sd-section sd-delay-4 h-px bg-slate-200/80 dark:bg-slate-700/80" />

              <section
                id="principles"
                className="sd-section sd-delay-4 scroll-mt-28"
              >
                <SectionHeader
                  eyebrow="Section 04"
                  title="Principles"
                  description="Do's and don'ts for execution."
                />

                <div className="sd-surface mt-4 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <div className="grid gap-4 divide-y divide-slate-200/80 dark:divide-slate-700/80 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                    <div className="p-5">
                      <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                        Do
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                        {deepDive.principles.do.map((item) => (
                          <li key={item.title} className="space-y-1">
                            <p>• {item.title}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {item.example}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                        Don&apos;t
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                        {deepDive.principles.dont.map((item) => (
                          <li key={item.title} className="space-y-1">
                            <p>• {item.title}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {item.example}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="sd-section sd-delay-5 h-px bg-slate-200/80 dark:bg-slate-700/80" />

              <section
                id="patterns"
                className="sd-section sd-delay-5 scroll-mt-28"
              >
                <SectionHeader
                  eyebrow="Section 05"
                  title="Pattern Examples"
                  description="Practical UI patterns shaped by the style."
                />

                <div className="mt-4 grid gap-5">
                  {deepDive.patternExamples.map((example) => (
                    <div
                      key={example.title}
                      className="sd-surface rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80"
                    >
                      <div className="border-b border-slate-200/80 p-5 dark:border-slate-700/80">
                        <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                          {example.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                          {example.description}
                        </p>
                      </div>
                      <div className="grid gap-4 p-5 sm:grid-cols-2">
                        <div className="space-y-3">
                          <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                            Do
                          </div>
                          <PatternPreview
                            visualClass={profile.visualClass}
                            variant={getPatternVariant(example.title)}
                            mode="do"
                          />
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {example.doExample}
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="text-xs font-semibold uppercase tracking-wide text-rose-500 dark:text-rose-400">
                            Don&apos;t
                          </div>
                          <PatternPreview
                            visualClass={profile.visualClass}
                            variant={getPatternVariant(example.title)}
                            mode="dont"
                            className="opacity-80"
                          />
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {example.dontExample}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="sd-section sd-delay-6 h-px bg-slate-200/80 dark:bg-slate-700/80" />

              <section
                id="accessibility"
                className="sd-section sd-delay-6 scroll-mt-28"
              >
                <SectionHeader
                  eyebrow="Section 06"
                  title="Accessibility"
                  description="Guardrails for contrast and focus clarity."
                />

                <div className="sd-surface mt-4 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <div className="p-5">
                    <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                      Checks
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {deepDive.accessibility.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <div className="sd-section sd-delay-7 h-px bg-slate-200/80 dark:bg-slate-700/80" />

              <section
                id="libraries"
                className="sd-section sd-delay-7 scroll-mt-28"
              >
                <SectionHeader
                  eyebrow="Section 07"
                  title="Component Libraries"
                  description="Top GitHub libraries and kits to start building."
                />

                <div className="sd-surface mt-4 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <div className="divide-y divide-slate-200/80 dark:divide-slate-700/80">
                    {deepDive.componentLibraries.map((library) => (
                      <div
                        key={library.title}
                        className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                            {library.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            {library.description}
                          </p>
                          {library.meta ? (
                            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                              {library.meta}
                            </p>
                          ) : null}
                          {library.note ? (
                            <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                              {library.note}
                            </p>
                          ) : null}
                        </div>
                        <a
                          href={library.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold uppercase tracking-wide text-slate-900 hover:underline dark:text-slate-100"
                        >
                          Visit library
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="sd-section sd-delay-8 h-px bg-slate-200/80 dark:bg-slate-700/80" />

              <section
                id="resources"
                className="sd-section sd-delay-8 scroll-mt-28"
              >
                <SectionHeader
                  eyebrow="Section 08"
                  title="Resources"
                  description="Deep dives, references, and inspiration."
                />

                <div className="sd-surface mt-4 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <div className="divide-y divide-slate-200/80 dark:divide-slate-700/80">
                    {deepDive.resources.map((resource) => (
                      <div
                        key={resource.title}
                        className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">
                            {resource.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            {resource.description}
                          </p>
                        </div>
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold uppercase tracking-wide text-slate-900 hover:underline dark:text-slate-100"
                        >
                          Visit resource
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          ) : null}
        </div>

        <StyleDetailSidebar items={navItems} />
      </div>

      <BackToTop />
    </main>
  );
}
