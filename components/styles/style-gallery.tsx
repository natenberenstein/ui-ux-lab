"use client";

import { Check, RotateCcw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { styleShowcases } from "@/components/styles/design-style-showcases";
import { StyleMiniPreview } from "@/components/styles/style-mini-preview";

import { useDesignStyle, type DesignStyle } from "./design-style-context";

export function StyleGallery() {
  const { activeStyle, setActiveStyle } = useDesignStyle();

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl text-slate-900">
            Design Style Gallery
          </h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Nine common visual approaches with guidance on when to use each one.
            <span className="ml-1 text-sm text-slate-600">
              Click a style to apply it to the entire page.
            </span>
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
          <Badge variant="warning">
            Choose based on user need and task context
          </Badge>
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
                setActiveStyle(
                  isActive ? "default" : (style.visualClass as DesignStyle),
                )
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
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
    </>
  );
}
