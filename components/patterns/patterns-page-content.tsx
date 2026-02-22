"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  patternTopics,
  categoryLabels,
  categoryPaths,
} from "@/components/patterns/patterns-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PatternsPageContent() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Hero */}
      <section className="hero-grid reveal-up rounded-3xl border bg-white/70 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-sm sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">6 Pattern Topics</Badge>
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
          UI/UX Patterns
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">
          Choose a topic to open its dedicated page. Each section has in-depth
          guidance and interactive demos.
        </p>
      </section>

      {/* Topic Index */}
      <section className="reveal-up-delay mt-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {patternTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card key={topic.title} className="principle-card h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="icon-chip" aria-hidden>
                      <Icon className="h-5 w-5" />
                    </span>
                    {topic.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-primary/80">
                    {topic.oneLiner}
                  </p>
                </CardHeader>
                <CardContent className="space-y-5 text-sm text-slate-700">
                  <Badge variant="outline">
                    {categoryLabels[topic.category]}
                  </Badge>
                  <p className="line-clamp-3">{topic.description}</p>
                  <Link
                    href={categoryPaths[topic.category]}
                    className={buttonVariants({
                      variant: "outline",
                      className: "demo-button gap-2",
                    })}
                  >
                    Open section
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
