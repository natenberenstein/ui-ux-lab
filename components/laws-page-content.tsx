"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

import { type LawCategory, lawsOfUX } from "@/components/laws-of-ux-data";
import { lawDemos } from "@/components/law-demos";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const categoryLabels: Record<LawCategory, string> = {
  heuristic: "Heuristic",
  gestalt: "Gestalt",
  principle: "Principle"
};

const categoryOrder: LawCategory[] = ["heuristic", "gestalt", "principle"];

function toAnchorId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function LawsPageContent() {
  const [filter, setFilter] = useState<LawCategory | "all">("all");

  const filteredLaws = filter === "all" ? lawsOfUX : lawsOfUX.filter((l) => l.category === filter);
  const groupedLaws = categoryOrder
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat],
      laws: filteredLaws.filter((l) => l.category === cat)
    }))
    .filter((g) => g.laws.length > 0);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="hero-grid reveal-up rounded-3xl border bg-white/70 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-sm sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">20 Laws of UX</Badge>
          <Link href="/" className={buttonVariants({ variant: "outline", className: "demo-button gap-2" })}>
            <ArrowLeft className="h-4 w-4" />
            Back to overview
          </Link>
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
          Laws of UX
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">
          Foundational heuristics, Gestalt principles, and design laws that shape how users perceive and interact with
          interfaces — each with an interactive demo.
        </p>
      </section>

      <section className="reveal-up-delay mt-10">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${filter === "all" ? "bg-primary text-primary-foreground shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"}`}
          >
            All ({lawsOfUX.length})
          </button>
          {categoryOrder.map((cat) => {
            const count = lawsOfUX.filter((l) => l.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${filter === cat ? "bg-primary text-primary-foreground shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"}`}
              >
                {categoryLabels[cat]} ({count})
              </button>
            );
          })}
        </div>

        {groupedLaws.map((group) => (
          <div key={group.category} className="mb-10">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl text-slate-900">{group.label} Laws</h2>
              <Badge variant="outline" className="ml-2">{group.laws.length}</Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {group.laws.map((law) => {
                const Icon = law.icon;
                const Demo = lawDemos[law.title];
                return (
                  <Card id={toAnchorId(law.title)} key={law.title} className="principle-card scroll-mt-24">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <span className="icon-chip" aria-hidden>
                          <Icon className="h-5 w-5" />
                        </span>
                        {law.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-primary/80">{law.oneLiner}</p>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-slate-700">
                      <p>{law.description}</p>
                      {Demo && <Demo />}
                      <Separator />
                      <p>
                        <span className="font-semibold text-slate-900">Key takeaway:</span> {law.keyTakeaway}
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
      </section>
    </main>
  );
}
