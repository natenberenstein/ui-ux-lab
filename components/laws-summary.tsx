"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { lawsOfUX } from "@/components/laws-of-ux-data";

export function LawsSummary() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-3xl text-slate-900">Laws of UX</h2>
        <Link
          href="/laws"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View all laws
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <p className="max-w-3xl text-slate-700">
        20 foundational heuristics, Gestalt principles, and design laws that shape how users perceive and interact with
        interfaces.
      </p>
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 lg:grid-cols-5">
        {lawsOfUX.map((law) => {
          const Icon = law.icon;
          return (
            <div key={law.title} className="law-summary-card rounded-xl border border-slate-200/80 bg-white/70 p-3 backdrop-blur-sm">
              <div className="mb-1.5 flex items-center gap-2">
                <span className="icon-chip" aria-hidden>
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-slate-900 leading-tight">{law.title}</span>
              </div>
              <p className="text-[10px] leading-snug text-slate-600">{law.oneLiner}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
