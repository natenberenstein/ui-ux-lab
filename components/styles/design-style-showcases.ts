export type StyleVisualClass =
  | "style-flat"
  | "style-glass"
  | "style-neobrutal"
  | "style-editorial"
  | "style-bento"
  | "style-data"
  | "style-pixel"
  | "style-bauhaus"
  | "style-utilitarian"
  | "style-rebus"
  | "style-popart"
  | "style-memphis";

export type StyleShowcase = {
  name: string;
  tone: string;
  visualClass: StyleVisualClass;
  summary: string;
  idealFor: string;
  caution: string;
  components: string[];
  exampleContext: string;
};

export const styleShowcases: StyleShowcase[] = [
  {
    name: "Flat Functional",
    tone: "Fast and practical",
    visualClass: "style-flat",
    summary: "Prioritizes speed, clarity, and low visual noise.",
    idealFor: "SaaS workflows, internal tools, and operations dashboards.",
    caution: "Can feel generic without strong type rhythm and hierarchy.",
    components: ["Cards", "Badges", "Neutral buttons"],
    exampleContext: "Example: project dashboard",
  },
  {
    name: "Glassmorphism",
    tone: "Layered and futuristic",
    visualClass: "style-glass",
    summary: "Uses translucent surfaces to emphasize depth and state.",
    idealFor: "Creative software, media controls, and premium UI moments.",
    caution: "Needs careful contrast and blur limits for readability.",
    components: ["Frosted cards", "Glow badges", "Soft gradients"],
    exampleContext: "Example: media control center",
  },
  {
    name: "Neo-Brutalism",
    tone: "Expressive and bold",
    visualClass: "style-neobrutal",
    summary: "Leans on heavy outlines and punchy contrast for personality.",
    idealFor: "Marketing pages, portfolio products, and bold branding.",
    caution: "Strong styling can overpower dense information.",
    components: ["Hard borders", "Offset shadows", "Chunky buttons"],
    exampleContext: "Example: campaign landing panel",
  },
  {
    name: "Editorial Minimal",
    tone: "Calm and content-first",
    visualClass: "style-editorial",
    summary: "Lets typography and whitespace guide reading flow.",
    idealFor: "Knowledge bases, long-form content, and premium docs.",
    caution: "Requires disciplined spacing and concise copy.",
    components: ["Readable text blocks", "Muted accents", "Subtle separators"],
    exampleContext: "Example: long-form article layout",
  },
  {
    name: "Playful Bento",
    tone: "Friendly and modular",
    visualClass: "style-bento",
    summary: "Combines segmented blocks to communicate multiple ideas quickly.",
    idealFor: "Feature overviews, onboarding screens, and product launches.",
    caution: "Can become visually noisy if sections compete equally.",
    components: ["Split cards", "Color chips", "Mixed emphasis"],
    exampleContext: "Example: onboarding feature board",
  },
  {
    name: "Data Dense",
    tone: "Serious and analytical",
    visualClass: "style-data",
    summary: "Optimizes for scanability under heavy information load.",
    idealFor: "Reporting tools, admin consoles, and monitoring surfaces.",
    caution: "Must preserve spacing and affordances to avoid fatigue.",
    components: ["Compact cards", "Status labels", "Structured rows"],
    exampleContext: "Example: monitoring console",
  },
  {
    name: "Pixel Art",
    tone: "Retro and playful",
    visualClass: "style-pixel",
    summary: "Uses hard edges, chunky spacing, and arcade-inspired contrast.",
    idealFor: "Game interfaces, kids products, and nostalgic campaign moments.",
    caution: "Readability can drop quickly if density is too high.",
    components: ["8-bit cards", "Blocky badges", "Sharp corners"],
    exampleContext: "Example: quest progress screen",
  },
  {
    name: "Bauhaus",
    tone: "Geometric and expressive",
    visualClass: "style-bauhaus",
    summary:
      "Combines primary colors and strict geometry for high visual rhythm.",
    idealFor: "Brand storytelling, portfolios, and directional landing pages.",
    caution: "Strong composition can distract if content hierarchy is weak.",
    components: ["Color planes", "Shape accents", "Structured grids"],
    exampleContext: "Example: portfolio hero and modules",
  },
  {
    name: "Utilitarian",
    tone: "Plain and operational",
    visualClass: "style-utilitarian",
    summary:
      "Prefers maximum clarity and predictable controls over decoration.",
    idealFor:
      "Internal systems, support consoles, and compliance-heavy workflows.",
    caution: "Can feel austere without clear hierarchy and spacing.",
    components: ["Dense tables", "Direct labels", "No-frills controls"],
    exampleContext: "Example: ops ticket triage board",
  },
  {
    name: "Rebus",
    tone: "Symbolic and puzzle-like",
    visualClass: "style-rebus",
    summary:
      "Builds visual language from icon fragments, symbols, and coded motifs.",
    idealFor:
      "Narrative microsites, interactive explainers, and branded learning flows.",
    caution: "Overuse of symbolism can hurt immediate readability.",
    components: ["Glyph tiles", "Icon ladders", "Puzzle clusters"],
    exampleContext: "Example: interactive clueboard interface",
  },
  {
    name: "Pop Art",
    tone: "Comic-book and explosive",
    visualClass: "style-popart",
    summary:
      "Uses halftone fields, loud color collisions, and heavy ink-like borders.",
    idealFor: "Campaign launches, event pages, and high-energy showcases.",
    caution: "High contrast can fatigue users in long-form experiences.",
    components: ["Speech-bubble chips", "Burst cards", "Punch outlines"],
    exampleContext: "Example: launch countdown control center",
  },
  {
    name: "Memphis",
    tone: "Playful and maximalist",
    visualClass: "style-memphis",
    summary:
      "Mixes geometric confetti, zigzags, and saturated accents in layered blocks.",
    idealFor: "Creative studios, youth products, and expressive brand hubs.",
    caution: "Needs careful hierarchy so decoration does not obscure actions.",
    components: ["Pattern planes", "Geometric badges", "Color-stacked cards"],
    exampleContext: "Example: creative studio dashboard",
  },
];
