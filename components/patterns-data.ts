import type { ComponentType } from "react";
import {
  Play,
  Palette,
  Type,
  Grid3x3,
  FormInput,
  Loader2
} from "lucide-react";

export type PatternCategory = "motion" | "color" | "typography" | "spacing" | "forms" | "states";

export type SubConcept = {
  name: string;
  description: string;
  demoKey: string;
};

export type PatternTopic = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  category: PatternCategory;
  oneLiner: string;
  description: string;
  keyTakeaway: string;
  subConcepts: SubConcept[];
};

export const categoryLabels: Record<PatternCategory, string> = {
  motion: "Motion",
  color: "Color",
  typography: "Typography",
  spacing: "Spacing",
  forms: "Forms",
  states: "States"
};

export const categoryOrder: PatternCategory[] = [
  "motion",
  "color",
  "typography",
  "spacing",
  "forms",
  "states"
];

export const categoryPaths: Record<PatternCategory, string> = {
  motion: "/patterns/motion",
  color: "/patterns/color",
  typography: "/patterns/typography",
  spacing: "/patterns/spacing",
  forms: "/patterns/forms",
  states: "/patterns/states"
};

export const patternTopics: PatternTopic[] = [
  {
    title: "Motion & Animation Design",
    icon: Play,
    category: "motion",
    oneLiner: "Purposeful motion guides attention and communicates change.",
    description:
      "Animation is not decoration — it is a functional layer that communicates spatial relationships, provides feedback, and directs focus. Good motion design feels invisible; bad motion design feels distracting or sluggish.",
    keyTakeaway:
      "Every animation should have a purpose: guide attention, show relationships, or confirm actions. If it doesn't serve one of those, remove it.",
    subConcepts: [
      {
        name: "Easing Curves",
        description:
          "Different easing functions produce dramatically different feels. Linear motion feels robotic; ease-out feels responsive; ease-in-out feels natural.",
        demoKey: "easing-curves"
      },
      {
        name: "Duration Guidelines",
        description:
          "Micro-interactions need 100–200ms, transitions 200–400ms, and page-level animations 400–600ms. Too fast feels jarring; too slow feels sluggish.",
        demoKey: "duration-guidelines"
      },
      {
        name: "Purpose-Driven Motion",
        description:
          "Functional animation communicates change (a notification slides in). Decorative animation adds no information (a button spins endlessly).",
        demoKey: "purpose-driven-motion"
      },
      {
        name: "Prefers Reduced Motion",
        description:
          "Some users experience motion sickness or vestibular disorders. The prefers-reduced-motion media query lets you respect their system preference.",
        demoKey: "prefers-reduced-motion"
      }
    ]
  },
  {
    title: "Color Systems & Accessibility",
    icon: Palette,
    category: "color",
    oneLiner: "Systematic color choices ensure consistency and inclusivity.",
    description:
      "Color carries meaning, establishes hierarchy, and affects mood. A well-constructed color system uses a limited palette with semantic roles (primary, success, danger) and ensures every combination meets contrast requirements.",
    keyTakeaway:
      "Build color scales from a base hue, assign semantic roles, and verify every text/background combination passes WCAG AA (4.5:1 for normal text).",
    subConcepts: [
      {
        name: "Palette Construction",
        description:
          "Generate a full lightness ramp from a single hue. This creates a cohesive scale from near-white to near-black that can serve as background, border, and text colors.",
        demoKey: "palette-construction"
      },
      {
        name: "Semantic Colors",
        description:
          "Success, warning, error, and info are universal status signals. Each needs a distinct hue, matching icon, and accessible contrast ratio.",
        demoKey: "semantic-colors"
      },
      {
        name: "Contrast Ratios",
        description:
          "WCAG requires 4.5:1 for normal text and 3:1 for large text. Failing contrast makes content unreadable for millions of users.",
        demoKey: "contrast-ratios"
      },
      {
        name: "Color Blindness Simulation",
        description:
          "Roughly 8% of males have some form of color vision deficiency. Never rely on color alone to convey information — always pair with shape, label, or pattern.",
        demoKey: "color-blindness-sim"
      }
    ]
  },
  {
    title: "Typography Scale & Readability",
    icon: Type,
    category: "typography",
    oneLiner: "A disciplined type scale creates rhythm and hierarchy.",
    description:
      "Typography accounts for 90%+ of most interfaces. A modular scale (where each step multiplies by a fixed ratio) creates visual harmony. Combine it with proper line height and measure to ensure comfortable reading.",
    keyTakeaway:
      "Pick a base size and ratio, generate your scale mathematically, and keep body text between 45–75 characters per line with 1.4–1.6 line height.",
    subConcepts: [
      {
        name: "Modular Type Scales",
        description:
          "A type scale uses a ratio (like 1.25 — the Major Third) to derive each step. This produces harmonious sizes instead of arbitrary pixel values.",
        demoKey: "modular-type-scales"
      },
      {
        name: "Line Height & Spacing",
        description:
          "Line height (leading) controls vertical rhythm. Too tight makes text claustrophobic; too loose disconnects lines. The sweet spot is 1.4–1.6 for body text.",
        demoKey: "line-height-spacing"
      },
      {
        name: "Measure (Characters Per Line)",
        description:
          "Long lines cause eye-tracking fatigue; short lines break reading flow. The ideal measure for body text is 45–75 characters (about 65ch optimal).",
        demoKey: "measure-cpl"
      }
    ]
  },
  {
    title: "Spacing & Layout Systems",
    icon: Grid3x3,
    category: "spacing",
    oneLiner: "Consistent spacing creates visual order and reduces cognitive load.",
    description:
      "Spacing is the most underrated design tool. A disciplined spacing system (4pt or 8pt grid) eliminates arbitrary gaps, aligns elements predictably, and makes layouts feel intentional. Combined with layout primitives and responsive rules, it creates a reliable framework for page composition and implementation.",
    keyTakeaway:
      "Define spacing tokens, layout primitives, and responsive spacing behavior together. That shared language helps design and engineering teams build consistent interfaces faster.",
    subConcepts: [
      {
        name: "4pt / 8pt Grid",
        description:
          "Constraining all spacing to multiples of 4px or 8px eliminates ambiguity and creates alignment across unrelated components.",
        demoKey: "grid-4pt-8pt"
      },
      {
        name: "Spacing Scale",
        description:
          "Like a type scale, a spacing scale provides named tokens (xs, sm, md, lg, xl) mapped to specific pixel values for consistent application.",
        demoKey: "spacing-scale"
      },
      {
        name: "Grid Overlay",
        description:
          "Column grids and baseline grids help align elements horizontally and vertically. Overlays during development catch misalignment early.",
        demoKey: "grid-overlay"
      },
      {
        name: "Layout Primitives",
        description:
          "Reusable patterns like Stack, Inline, Grid, and Sidebar prevent one-off layout decisions and make component composition predictable.",
        demoKey: "layout-primitives"
      },
      {
        name: "Responsive Spacing Rules",
        description:
          "Spacing should scale by breakpoint with clear rules for what compresses, what remains fixed, and what reflows first on smaller viewports.",
        demoKey: "responsive-spacing-rules"
      },
      {
        name: "Component Spacing Contracts",
        description:
          "Define which component owns internal padding and which layer owns external margin to avoid spacing bugs and double-gaps.",
        demoKey: "component-spacing-contracts"
      },
      {
        name: "Spacing Review Checklist",
        description:
          "A short audit list in design and PR reviews helps teams catch inconsistent spacing, alignment drift, and touch-target issues early.",
        demoKey: "spacing-review-checklist"
      }
    ]
  },
  {
    title: "Form Design Patterns",
    icon: FormInput,
    category: "forms",
    oneLiner: "Well-designed forms reduce friction and increase completion.",
    description:
      "Forms are where users exchange data for value. Every unnecessary field, confusing label, or delayed error message increases abandonment. Good form design validates inline, places errors clearly, maintains context, and breaks complex flows into manageable steps.",
    keyTakeaway:
      "Validate inline on blur, always use visible labels (not just placeholders), place errors near the field, and use multi-step forms for complex workflows.",
    subConcepts: [
      {
        name: "Validation Patterns",
        description:
          "Inline validation on blur gives immediate feedback. Summary validation on submit forces users to hunt for errors. Inline wins for usability.",
        demoKey: "validation-patterns"
      },
      {
        name: "Error Placement",
        description:
          "Errors can appear below the field, above it, or as tooltips. Below-field is the most scannable; above-field risks being missed; tooltips can be clipped.",
        demoKey: "error-placement"
      },
      {
        name: "Label vs Placeholder",
        description:
          "Placeholders disappear on focus, removing context. Labels persist and are accessible. Floating labels combine both but add implementation complexity.",
        demoKey: "label-vs-placeholder"
      },
      {
        name: "Multi-Step Forms",
        description:
          "Breaking long forms into steps reduces cognitive load and provides progress feedback. Each step should have a clear scope and Back/Next navigation.",
        demoKey: "multi-step-forms"
      }
    ]
  },
  {
    title: "Empty, Error & Loading States",
    icon: Loader2,
    category: "states",
    oneLiner: "How your app handles non-ideal states defines the experience.",
    description:
      "Users spend significant time in non-ideal states: waiting for data, encountering errors, or seeing empty screens. These moments are opportunities to guide, reassure, and retain users. Skeleton screens feel faster than spinners; helpful empty states convert better than blank pages.",
    keyTakeaway:
      "Design empty, loading, and error states first — they are the most common states and the ones users judge your app by.",
    subConcepts: [
      {
        name: "Empty States",
        description:
          "A blank page with 'No items' teaches nothing. A good empty state explains why, what to do, and provides a clear CTA to get started.",
        demoKey: "empty-states"
      },
      {
        name: "Error Recovery",
        description:
          "Errors should explain what happened in plain language and provide an actionable recovery path — usually a retry button that actually works.",
        demoKey: "error-recovery"
      },
      {
        name: "Skeleton Screens",
        description:
          "Skeleton screens show the shape of incoming content with pulsing placeholders. They feel faster than spinners because they set spatial expectations.",
        demoKey: "skeleton-screens"
      },
      {
        name: "Optimistic UI",
        description:
          "Optimistic updates assume success and show the result immediately, reverting only on failure. This makes interfaces feel instant.",
        demoKey: "optimistic-ui"
      }
    ]
  }
];

export function getPatternTopicByCategory(category: PatternCategory) {
  return patternTopics.find((topic) => topic.category === category);
}
