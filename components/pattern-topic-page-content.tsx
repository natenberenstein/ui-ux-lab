"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import {
  type PatternCategory,
  getPatternTopicByCategory
} from "@/components/patterns-data";
import { ColorEducationLab } from "@/components/color-education-lab";
import { MotionGuidelines } from "@/components/motion-guidelines";
import { patternDemos } from "@/components/pattern-demos";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type PatternTopicPageContentProps = {
  category: PatternCategory;
};

export function PatternTopicPageContent({ category }: PatternTopicPageContentProps) {
  const topic = getPatternTopicByCategory(category);
  if (!topic) {
    return null;
  }

  const Icon = topic.icon;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="hero-grid reveal-up rounded-3xl border bg-white/70 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-sm sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">UI/UX Pattern Section</Badge>
          <Link
            href="/patterns"
            className={buttonVariants({
              variant: "outline",
              className: "demo-button gap-2"
            })}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to patterns
          </Link>
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
          {topic.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">{topic.oneLiner}</p>
      </section>

      <section className="reveal-up-delay mt-10">
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
              const Demo = patternDemos[sub.demoKey];
              return (
                <div key={sub.demoKey} className="space-y-2">
                  <h4 className="font-semibold text-slate-900">{sub.name}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{sub.description}</p>
                  {Demo && <Demo />}
                </div>
              );
            })}

            <Separator />
            <p>
              <span className="font-semibold text-slate-900">Key takeaway:</span>{" "}
              {topic.keyTakeaway}
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
