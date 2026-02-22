"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";

import {
  categoryLabels,
  categoryOrder,
  categoryPaths,
  type PatternCategory,
  getPatternTopicByCategory,
} from "@/components/patterns/patterns-data";
import { ColorEducationLab } from "@/components/patterns/color-education-lab";
import { LearningBreadcrumbs } from "@/components/shared/learning-breadcrumbs";
import { MotionGuidelines } from "@/components/patterns/motion-guidelines";
import { patternDemos } from "@/components/patterns/pattern-demos";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function toAnchorId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type PatternTopicPageContentProps = {
  category: PatternCategory;
};

export function PatternTopicPageContent({
  category,
}: PatternTopicPageContentProps) {
  const topic = getPatternTopicByCategory(category);
  const subConcepts = topic?.subConcepts ?? [];
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [completedSections, setCompletedSections] = useState<Set<string>>(
    new Set(),
  );

  const sectionIds = subConcepts.map((sub) => ({
    id: toAnchorId(sub.name),
    label: sub.name,
  }));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (inView?.target instanceof HTMLElement) {
          setActiveSection(inView.target.id);
        }
      },
      { rootMargin: "-25% 0px -50% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    sectionIds.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  if (!topic) {
    return null;
  }

  const Icon = topic.icon;

  const currentIndex = categoryOrder.indexOf(category);
  const previousCategory =
    currentIndex > 0 ? categoryOrder[currentIndex - 1] : null;
  const nextCategory =
    currentIndex < categoryOrder.length - 1
      ? categoryOrder[currentIndex + 1]
      : null;

  const completionPercent = Math.round(
    (completedSections.size / topic.subConcepts.length) * 100,
  );

  function toggleCompleted(sectionId: string) {
    setCompletedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <LearningBreadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Patterns", href: "/patterns" },
          { label: topic.title },
        ]}
      />

      <section className="hero-grid reveal-up rounded-3xl border bg-white/70 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-sm sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">UI/UX Pattern Section</Badge>
          <Link
            href="/patterns"
            className={buttonVariants({
              variant: "outline",
              className: "demo-button gap-2",
            })}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to patterns
          </Link>
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
          {topic.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">
          {topic.oneLiner}
        </p>
      </section>

      <section className="reveal-up-delay mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-xl border border-slate-200/90 bg-white/70 p-4 backdrop-blur-sm lg:sticky lg:top-6 dark:border-slate-600/70 dark:bg-slate-900/40">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Learning wayfinding
          </h2>
          <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
            Track completion and jump across sub-concepts while reviewing
            implementations.
          </p>

          <div className="mt-3">
            <div className="h-2 overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700/60">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              {completedSections.size}/{topic.subConcepts.length} sections
              reviewed ({completionPercent}%)
            </p>
          </div>

          <ul className="mt-3 space-y-1.5">
            {sectionIds.map((section) => {
              const done = completedSections.has(section.id);
              const isActive = activeSection === section.id;

              return (
                <li
                  key={section.id}
                  className="rounded-md border border-slate-200/80 bg-white/80 p-2 dark:border-slate-600/70 dark:bg-slate-900/40"
                >
                  <div className="flex items-center justify-between gap-1">
                    <a
                      href={`#${section.id}`}
                      className={`text-[11px] font-medium ${
                        isActive
                          ? "text-primary"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {section.label}
                    </a>
                    <button
                      type="button"
                      onClick={() => toggleCompleted(section.id)}
                      className="rounded p-0.5 text-slate-500 hover:text-primary"
                      aria-label={`${done ? "Unmark" : "Mark"} ${section.label} as reviewed`}
                    >
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <Circle className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 space-y-2 border-t border-slate-200/80 pt-3 dark:border-slate-600/70">
            {previousCategory && (
              <Link
                href={categoryPaths[previousCategory]}
                className="block text-[11px] text-slate-600 hover:text-primary dark:text-slate-300"
              >
                Previous: {categoryLabels[previousCategory]}
              </Link>
            )}
            {nextCategory && (
              <Link
                href={categoryPaths[nextCategory]}
                className="block text-[11px] text-slate-600 hover:text-primary dark:text-slate-300"
              >
                Next: {categoryLabels[nextCategory]}
              </Link>
            )}
          </div>
        </aside>

        <div className="space-y-6">
          <Card className="principle-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-xl">
                <span className="icon-chip" aria-hidden>
                  <Icon className="h-5 w-5" />
                </span>
                {topic.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-sm text-slate-700">
              <p>{topic.description}</p>
              {topic.category === "motion" && <MotionGuidelines />}
              {topic.category === "color" && <ColorEducationLab />}

              {topic.subConcepts.map((sub) => {
                const sectionId = toAnchorId(sub.name);
                const Demo = patternDemos[sub.demoKey];
                const completed = completedSections.has(sectionId);

                return (
                  <section
                    key={sub.demoKey}
                    id={sectionId}
                    className="scroll-mt-24 space-y-3 rounded-lg border border-slate-200/80 bg-white/50 p-3 dark:border-slate-600/70 dark:bg-slate-800/30"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold text-slate-900">
                        {sub.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => toggleCompleted(sectionId)}
                        className={`rounded-full border px-2 py-1 text-[11px] font-medium ${
                          completed
                            ? "border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-900/30 dark:text-emerald-200"
                            : "border-slate-300 bg-white text-slate-600 dark:border-slate-500 dark:bg-slate-900/50 dark:text-slate-300"
                        }`}
                      >
                        {completed ? "Reviewed" : "Mark reviewed"}
                      </button>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      {sub.description}
                    </p>
                    {Demo && <Demo />}
                  </section>
                );
              })}

              <Separator />
              <p>
                <span className="font-semibold text-slate-900">
                  Key takeaway:
                </span>{" "}
                {topic.keyTakeaway}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
