import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { StyleProfile } from "@/components/styles/style-profiles";
import { StyleMiniPreview } from "@/components/styles/style-mini-preview";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StyleDetailPageContentProps = {
  profile: StyleProfile;
};

export function StyleDetailPageContent({
  profile,
}: StyleDetailPageContentProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section
        className={`hero-grid reveal-up rounded-3xl border p-6 shadow-xl shadow-slate-900/10 sm:p-10 ${profile.visualClass}`}
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
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">
          {profile.tone}
        </p>
        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">
          {profile.summary}
        </p>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        <Card className="rounded-2xl border-slate-200/80 bg-white/80 backdrop-blur-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-slate-900">
              History
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            {profile.history}
          </CardContent>
        </Card>

        <Card
          className={`style-panel rounded-2xl border-none ${profile.visualClass}`}
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
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <Card className="rounded-2xl border-slate-200/80 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-display text-xl text-slate-900">
              Core Elements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-slate-700">
              {profile.coreElements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/80 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-display text-xl text-slate-900">
              Mood
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {profile.mood.map((moodWord) => (
              <Badge key={moodWord} variant="outline" className="bg-white/60">
                {moodWord}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/80 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-display text-xl text-slate-900">
              Usage Guidance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Best for:</span>{" "}
              {profile.idealFor}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Watch out:</span>{" "}
              {profile.caution}
            </p>
            <ul className="space-y-1 text-xs text-slate-600">
              {profile.watchouts.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
