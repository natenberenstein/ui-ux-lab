"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Circle,
  Search,
} from "lucide-react";

import { LearningBreadcrumbs } from "@/components/shared/learning-breadcrumbs";
import { type LawCategory, lawsOfUX } from "@/components/laws/laws-of-ux-data";
import { lawDemos } from "@/components/laws/law-demos";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const categoryLabels: Record<LawCategory, string> = {
  heuristic: "Heuristic",
  gestalt: "Gestalt",
  principle: "Principle",
};

const categoryOrder: LawCategory[] = ["heuristic", "gestalt", "principle"];

function toAnchorId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function LawsPageContent() {
  const [filter, setFilter] = useState<LawCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [reviewed, setReviewed] = useState<Set<string>>(new Set());

  const filteredLaws = useMemo(() => {
    return lawsOfUX.filter((law) => {
      const filterMatch = filter === "all" || law.category === filter;
      const queryMatch =
        query.trim().length === 0 ||
        law.title.toLowerCase().includes(query.toLowerCase()) ||
        law.oneLiner.toLowerCase().includes(query.toLowerCase());

      return filterMatch && queryMatch;
    });
  }, [filter, query]);

  const groupedLaws = categoryOrder
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat],
      laws: filteredLaws.filter((l) => l.category === cat),
    }))
    .filter((group) => group.laws.length > 0);

  const reviewedInView = filteredLaws.filter((law) =>
    reviewed.has(law.title),
  ).length;
  const completionPercent =
    filteredLaws.length === 0
      ? 0
      : Math.round((reviewedInView / filteredLaws.length) * 100);

  function toggleReviewed(lawTitle: string) {
    setReviewed((prev) => {
      const next = new Set(prev);
      if (next.has(lawTitle)) {
        next.delete(lawTitle);
      } else {
        next.add(lawTitle);
      }
      return next;
    });
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <LearningBreadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: "Laws of UX" }]}
      />

      <section className="hero-grid reveal-up rounded-3xl border bg-white/70 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-sm sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">20 Laws of UX</Badge>
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
          Laws of UX
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">
          Foundational heuristics, Gestalt principles, and design laws with
          interactive demos, audit workflows, and study tracking.
        </p>
      </section>

      <section className="reveal-up-delay mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-xl border border-slate-200/90 bg-white/70 p-4 backdrop-blur-sm lg:sticky lg:top-6 dark:border-slate-600/70 dark:bg-slate-900/40">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Wayfinding
          </h2>
          <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
            Filter, search, and mark laws as reviewed to build a guided study
            path.
          </p>

          <label className="mt-3 block text-[11px] text-slate-600 dark:text-slate-300">
            <span className="mb-1 flex items-center gap-1 font-medium">
              <Search className="h-3.5 w-3.5" /> Search laws
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. Hick, Fitts, Gestalt"
              className="w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
            />
          </label>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-full px-2 py-1 text-[11px] ${filter === "all" ? "bg-primary text-primary-foreground" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}
            >
              All
            </button>
            {categoryOrder.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-2 py-1 text-[11px] ${filter === cat ? "bg-primary text-primary-foreground" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="mt-3">
            <div className="h-2 overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700/60">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              Reviewed in current view: {reviewedInView}/{filteredLaws.length} (
              {completionPercent}%)
            </p>
          </div>

          <div className="mt-3 max-h-72 space-y-1 overflow-auto pr-1">
            {filteredLaws.map((law) => {
              const id = toAnchorId(law.title);
              const isDone = reviewed.has(law.title);

              return (
                <div
                  key={law.title}
                  className="flex items-center justify-between rounded-md border border-slate-200/80 bg-white/80 px-2 py-1 dark:border-slate-600/70 dark:bg-slate-900/40"
                >
                  <a
                    href={`#${id}`}
                    className="truncate text-[11px] text-slate-700 hover:text-primary dark:text-slate-200"
                  >
                    {law.title}
                  </a>
                  <button
                    type="button"
                    onClick={() => toggleReviewed(law.title)}
                    aria-label={`${isDone ? "Unmark" : "Mark"} ${law.title} as reviewed`}
                    className="ml-2 rounded p-0.5 text-slate-500 hover:text-primary"
                  >
                    {isDone ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </aside>

        <div>
          {groupedLaws.map((group) => (
            <div key={group.category} className="mb-10">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="font-display text-2xl text-slate-900">
                  {group.label} Laws
                </h2>
                <Badge variant="outline" className="ml-2">
                  {group.laws.length}
                </Badge>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {group.laws.map((law) => {
                  const Icon = law.icon;
                  const Demo = lawDemos[law.title];
                  const id = toAnchorId(law.title);
                  const isReviewed = reviewed.has(law.title);

                  return (
                    <Card
                      id={id}
                      key={law.title}
                      className="principle-card scroll-mt-24"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between gap-2">
                          <CardTitle className="flex items-center gap-3 text-xl">
                            <span className="icon-chip" aria-hidden>
                              <Icon className="h-5 w-5" />
                            </span>
                            {law.title}
                          </CardTitle>
                          <button
                            type="button"
                            onClick={() => toggleReviewed(law.title)}
                            className={`rounded-full border px-2 py-1 text-[11px] font-medium ${
                              isReviewed
                                ? "border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-900/30 dark:text-emerald-200"
                                : "border-slate-300 bg-white text-slate-600 dark:border-slate-500 dark:bg-slate-900/50 dark:text-slate-300"
                            }`}
                          >
                            {isReviewed ? "Reviewed" : "Mark reviewed"}
                          </button>
                        </div>
                        <p className="text-sm font-medium text-primary/80">
                          {law.oneLiner}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-slate-700">
                        <p>{law.description}</p>
                        {Demo && <Demo />}
                        <Separator />
                        <p>
                          <span className="font-semibold text-slate-900">
                            Key takeaway:
                          </span>{" "}
                          {law.keyTakeaway}
                        </p>
                        <Badge variant="outline" className="text-[10px]">
                          {law.source}
                        </Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
