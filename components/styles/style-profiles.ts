import {
  styleShowcases,
  type StyleVisualClass,
} from "@/components/styles/design-style-showcases";

type StyleDetail = {
  history: string;
  message: string;
  coreElements: string[];
  mood: string[];
  watchouts: string[];
};

const styleSlugByVisualClass: Record<StyleVisualClass, string> = {
  "style-flat": "flat",
  "style-glass": "glass",
  "style-neobrutal": "neobrutal",
  "style-editorial": "editorial",
  "style-bento": "bento",
  "style-data": "data",
  "style-pixel": "pixel",
  "style-bauhaus": "bauhaus",
  "style-utilitarian": "utilitarian",
  "style-rebus": "rebus",
  "style-popart": "popart",
  "style-memphis": "memphis",
};

const styleDetailsByVisualClass: Record<StyleVisualClass, StyleDetail> = {
  "style-flat": {
    history:
      "Flat UI emerged from early mobile platforms in the 2010s as teams prioritized speed, clarity, and simple rendering.",
    message:
      "The product is direct, efficient, and focused on helping users complete tasks quickly.",
    coreElements: [
      "Low visual noise and restrained gradients",
      "Strong spacing rhythm and hierarchy",
      "Simple surfaces with clear labels",
    ],
    mood: ["Practical", "Calm", "Reliable"],
    watchouts: [
      "Can feel generic without typographic personality",
      "Over-minimization can hide affordances",
    ],
  },
  "style-glass": {
    history:
      "Glassmorphism evolved from skeuomorphic translucency and modern GPU-accelerated blur effects.",
    message: "The experience is premium, layered, and spatially rich.",
    coreElements: [
      "Translucent cards with background blur",
      "Subtle glows and depth layering",
      "Careful contrast management on text",
    ],
    mood: ["Futuristic", "Elegant", "Cinematic"],
    watchouts: [
      "Blur and transparency can reduce readability",
      "Heavy effects can hurt performance on weak devices",
    ],
  },
  "style-neobrutal": {
    history:
      "Neo-brutalism draws from print/poster brutalist graphics and anti-polish web design trends.",
    message: "The brand is bold, unapologetic, and intentionally loud.",
    coreElements: [
      "Heavy outlines and offset shadows",
      "High-contrast, saturated accents",
      "Hard edges and chunky controls",
    ],
    mood: ["Edgy", "Confident", "Playful"],
    watchouts: [
      "Can overwhelm dense content",
      "Needs consistent spacing to avoid chaos",
    ],
  },
  "style-editorial": {
    history:
      "Editorial interfaces inherit from magazine and newspaper layout systems where typography carries hierarchy.",
    message: "Content matters most; visual style supports reading flow.",
    coreElements: [
      "Readable serif-led typography",
      "Generous whitespace",
      "Muted separators and understated accents",
    ],
    mood: ["Refined", "Thoughtful", "Scholarly"],
    watchouts: [
      "Weak hierarchy can make pages feel flat",
      "Long-form density needs careful rhythm",
    ],
  },
  "style-bento": {
    history:
      "Bento-style dashboards gained traction in product marketing and onboarding to communicate many ideas quickly.",
    message: "The product is modular, approachable, and rich in capability.",
    coreElements: [
      "Segmented block layouts",
      "Mixed emphasis tiles",
      "Color-coded grouping",
    ],
    mood: ["Friendly", "Dynamic", "Modular"],
    watchouts: [
      "Too many equally loud tiles create noise",
      "Needs clear content priority per block",
    ],
  },
  "style-data": {
    history:
      "Data-dense UI comes from ops, trading, and analytics software where information throughput is the core requirement.",
    message:
      "The interface is analytical, serious, and designed for fast scanning.",
    coreElements: [
      "Compact spacing and mono-friendly typography",
      "Grid and tabular alignment",
      "Explicit state labels and structure",
    ],
    mood: ["Technical", "Focused", "Operational"],
    watchouts: [
      "Crowded spacing increases fatigue",
      "Must preserve clear affordances and contrast",
    ],
  },
  "style-pixel": {
    history:
      "Pixel aesthetics come from low-resolution game interfaces where shape language had to be iconic and block-based.",
    message: "The experience is nostalgic, playful, and rule-driven.",
    coreElements: [
      "Hard-edged geometry and block grids",
      "High-contrast retro palettes",
      "Chunky borders and 8-bit visual cues",
    ],
    mood: ["Nostalgic", "Energetic", "Game-like"],
    watchouts: [
      "Small text can become hard to read quickly",
      "Overuse can feel gimmicky outside the right context",
    ],
  },
  "style-bauhaus": {
    history:
      "Bauhaus visual systems originate from early 20th-century modernist design focused on geometry, utility, and composition.",
    message: "Form, structure, and function are intentionally unified.",
    coreElements: [
      "Primary color anchors",
      "Strong geometric composition",
      "Deliberate asymmetry and directional rhythm",
    ],
    mood: ["Architectural", "Confident", "Curated"],
    watchouts: [
      "Composition can overpower content hierarchy",
      "Requires strict spacing discipline",
    ],
  },
  "style-utilitarian": {
    history:
      "Utilitarian UI is rooted in enterprise and public-sector systems where clarity and predictability outrank decoration.",
    message: "The system is dependable, explicit, and task-first.",
    coreElements: [
      "Neutral palette and dense structure",
      "Straightforward controls",
      "Predictable patterns and labels",
    ],
    mood: ["Serious", "Stable", "No-nonsense"],
    watchouts: [
      "Can feel sterile without clear hierarchy",
      "Needs typographic tuning to avoid visual fatigue",
    ],
  },
  "style-rebus": {
    history:
      "Rebus-inspired visuals borrow from symbolic puzzles and icon-driven storytelling where meaning is encoded into visual fragments.",
    message:
      "The interface invites interpretation, curiosity, and pattern recognition.",
    coreElements: [
      "Symbol clusters and glyph motifs",
      "Dashed outlines and coded tiles",
      "Narrative arrangement of visual clues",
    ],
    mood: ["Mysterious", "Playful", "Intellectual"],
    watchouts: [
      "Too much symbolism can reduce immediate clarity",
      "Needs textual anchors for accessibility",
    ],
  },
  "style-popart": {
    history:
      "Pop Art UI draws from mid-century comic and poster language with halftones, bold outlines, and dramatic color clashes.",
    message: "This is high-energy, expressive, and impossible to ignore.",
    coreElements: [
      "Halftone textures and bold contour lines",
      "Explosive color pairings",
      "Speech-bubble and punch-card motifs",
    ],
    mood: ["Explosive", "Youthful", "Attention-grabbing"],
    watchouts: [
      "Can fatigue users over long reading sessions",
      "Requires strict contrast checks with bright colors",
    ],
  },
  "style-memphis": {
    history:
      "Memphis style comes from 1980s postmodern design that intentionally rejected minimalism through playful geometric maximalism.",
    message: "The brand is creative, irreverent, and joyfully unconventional.",
    coreElements: [
      "Geometric confetti and pattern layering",
      "Unexpected color combinations",
      "Playful asymmetry and decorative accents",
    ],
    mood: ["Vibrant", "Whimsical", "Experimental"],
    watchouts: [
      "Decoration can overpower task focus",
      "Needs hierarchy guardrails to remain usable",
    ],
  },
};

export const styleProfiles = styleShowcases.map((showcase) => ({
  ...showcase,
  slug: styleSlugByVisualClass[showcase.visualClass],
  ...styleDetailsByVisualClass[showcase.visualClass],
}));

export type StyleProfile = (typeof styleProfiles)[number];
export type StyleSlug = StyleProfile["slug"];

export const styleSlugs = styleProfiles.map((profile) => profile.slug);

export function getStyleProfileBySlug(slug: string) {
  return styleProfiles.find((profile) => profile.slug === slug);
}

export function getStyleHref(visualClass: StyleVisualClass) {
  return `/styles/${styleSlugByVisualClass[visualClass]}`;
}
