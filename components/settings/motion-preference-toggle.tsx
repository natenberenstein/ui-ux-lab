"use client";

import { Gauge, Waves } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type MotionPreference = "default" | "reduced";

function applyMotionPreference(next: MotionPreference) {
  const root = document.documentElement;
  root.classList.toggle("motion-reduce-sim", next === "reduced");
  if (next === "reduced") {
    localStorage.setItem("motionPreference", "reduced");
  } else {
    localStorage.removeItem("motionPreference");
  }
}

export function MotionPreferenceToggle() {
  const [motionPreference, setMotionPreference] = useState<MotionPreference>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("motionPreference");
    const next: MotionPreference = stored === "reduced" ? "reduced" : "default";
    setMotionPreference(next);
    applyMotionPreference(next);
    setMounted(true);
  }, []);

  function toggleMotionPreference() {
    const next: MotionPreference = motionPreference === "default" ? "reduced" : "default";
    setMotionPreference(next);
    applyMotionPreference(next);
  }

  if (!mounted) {
    return null;
  }

  const reduced = motionPreference === "reduced";

  return (
    <div className="fixed right-16 top-4 z-50">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={toggleMotionPreference}
        className="border-slate-300/80 bg-white/80 backdrop-blur-sm dark:border-slate-600 dark:bg-slate-900/80"
        aria-label={reduced ? "Switch to standard motion" : "Reduce motion"}
        title={reduced ? "Switch to standard motion" : "Reduce motion"}
      >
        {reduced ? <Gauge className="h-4 w-4" /> : <Waves className="h-4 w-4" />}
      </Button>
    </div>
  );
}
