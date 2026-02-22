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
  deepDive?: StyleDeepDive;
};

type StyleLinkItem = {
  title: string;
  description: string;
  href: string;
  meta?: string;
  note?: string;
};

type StylePatternExample = {
  title: string;
  description: string;
  doExample: string;
  dontExample: string;
};

type StylePrincipleItem = {
  title: string;
  example: string;
};

type StyleImageItem = {
  src: string;
  alt: string;
  caption: string;
};

type StyleVisualExample = {
  title: string;
  description: string;
  image: StyleImageItem;
};

type StyleDeepDive = {
  definition: string;
  intention: string;
  overview?: {
    origin: string;
    influences: string[];
    modernUsage: string;
    signals: string[];
  };
  foundation?: {
    definitionDetails: string[];
    intentionDetails: string[];
  };
  characteristics: string[];
  bestFor: string[];
  avoidFor: string[];
  principles: {
    do: StylePrincipleItem[];
    dont: StylePrincipleItem[];
  };
  patternExamples: StylePatternExample[];
  accessibility: string[];
  componentLibraries: StyleLinkItem[];
  resources: StyleLinkItem[];
  visualExamples?: StyleVisualExample[];
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
    deepDive: {
      definition:
        "Flat design is a minimalist UI approach that strips away three-dimensional effects like shadows, gradients, and textures in favor of clean, two-dimensional elements with crisp edges and solid colors.",
      intention:
        "Reduce cognitive load by eliminating decorative noise so that content, actions, and navigation are immediately clear.",
      overview: {
        origin:
          "Flat design gained mainstream traction with Microsoft's Metro language (2010) and Apple's iOS 7 (2013). Both rejected skeuomorphism in favor of typography-driven, color-coded interfaces that rendered fast on any screen.",
        influences: [
          "Swiss/International Typographic Style and grid-based layout",
          "Microsoft Metro / Modern UI language",
          "Apple iOS 7 and Google Material Design's early principles",
        ],
        modernUsage:
          "Flat design remains the default for SaaS dashboards, internal tools, and productivity apps where speed and scanability are paramount. Modern 'flat 2.0' adds subtle shadows and micro-interactions without abandoning simplicity.",
        signals: [
          "Solid color fills with no gradients or textures",
          "Even spacing and consistent grid alignment",
          "Simple iconography with uniform stroke weight",
          "Typography-led hierarchy with minimal decoration",
          "Restrained color palette (often 2–3 primaries plus neutrals)",
        ],
      },
      foundation: {
        definitionDetails: [
          "Every element serves a functional purpose; decoration is removed rather than added.",
          "Hierarchy comes from size, weight, and color contrast—not from depth or shadow.",
        ],
        intentionDetails: [
          "Let users focus on tasks without visual distraction.",
          "Ensure interfaces render consistently across devices and screen sizes.",
          "Make the design system easy to maintain and extend.",
        ],
      },
      characteristics: [
        "Solid, flat color fills without gradients",
        "Clean sans-serif typography with clear weight hierarchy",
        "Consistent spacing rhythm (often 4px or 8px base unit)",
        "Simple geometric iconography",
        "Minimal use of borders—relies on spacing for separation",
        "High information density without visual clutter",
      ],
      bestFor: [
        "SaaS dashboards and productivity tools",
        "Internal and enterprise applications",
        "Design systems that need to scale across many teams",
        "Mobile-first interfaces where rendering speed matters",
      ],
      avoidFor: [
        "Brand-heavy marketing pages that need strong visual personality",
        "Immersive or entertainment-focused experiences",
        "Contexts where affordance clarity depends on depth cues (e.g., drag targets)",
      ],
      principles: {
        do: [
          {
            title:
              "Use whitespace as the primary separator between content groups.",
            example:
              "Example: 24px between card groups, 8px between items within a group.",
          },
          {
            title:
              "Establish hierarchy through type size and weight, not color alone.",
            example:
              "Example: 24px semibold heading, 16px regular body, 14px muted secondary text.",
          },
          {
            title:
              "Keep the color palette tight—2 to 3 functional colors plus neutrals.",
            example:
              "Example: Blue for primary actions, green for success, red for destructive, rest in grays.",
          },
          {
            title:
              "Make interactive elements visually distinct from static content.",
            example:
              "Example: Buttons use filled backgrounds; links use underline or color shift.",
          },
          {
            title: "Use consistent icon style throughout the interface.",
            example:
              "Example: All icons use 1.5px stroke weight at 20×20px size.",
          },
        ],
        dont: [
          {
            title:
              "Remove so much chrome that interactive elements become invisible.",
            example:
              "Example: A text-only button with no background, border, or underline.",
          },
          {
            title:
              "Use color as the sole differentiator for states or categories.",
            example:
              "Example: Red, yellow, green status dots with no label or icon backup.",
          },
          {
            title: "Over-flatten depth where it provides useful spatial cues.",
            example:
              "Example: A dropdown menu flush with the page with no shadow or border.",
          },
          {
            title:
              "Neglect hover and focus states because the visual system is 'simple.'",
            example:
              "Example: Clickable rows with no visible hover or keyboard focus indicator.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A clean, centered headline with a single-color background and one CTA to drive focus.",
          doExample:
            "Do: One headline, short subtitle, and a single prominent button on a solid background.",
          dontExample:
            "Don't: Multiple competing headlines with decorative elements and several equal-weight buttons.",
        },
        {
          title: "Primary Button Set",
          description:
            "Solid-fill primary button with clear ghost or outline secondary option.",
          doExample:
            "Do: Filled primary button with visible hover darkening and outline secondary.",
          dontExample:
            "Don't: Multiple filled buttons of similar color competing for attention.",
        },
        {
          title: "Feature Cards",
          description:
            "Simple card grid with icon, title, and short description—no heavy borders or shadows.",
          doExample:
            "Do: Consistent card height, one icon per card, 2-line max description.",
          dontExample:
            "Don't: Mixed card sizes with long paragraphs and inconsistent icon styles.",
        },
        {
          title: "Form Fields",
          description:
            "Clean input fields with clear labels, subtle borders, and visible focus rings.",
          doExample:
            "Do: Labels above inputs, light border, visible blue focus ring, inline error messages.",
          dontExample:
            "Don't: Placeholder-only labels that disappear on focus, borderless inputs.",
        },
        {
          title: "Inline Callouts",
          description:
            "Tinted background strips with an icon and short message for contextual alerts.",
          doExample:
            "Do: Light blue background, info icon, single-line message with optional action link.",
          dontExample:
            "Don't: Bright saturated banners stacked in succession that overwhelm the content flow.",
        },
      ],
      accessibility: [
        "Ensure interactive flat elements have visible affordances (not just color).",
        "Maintain WCAG 1.4.3 contrast on text against flat color backgrounds.",
        "Provide visible focus indicators even in minimal chrome layouts.",
        "Use spacing and grouping to convey relationships, not just visual proximity.",
      ],
      componentLibraries: [
        {
          title: "shadcn/ui",
          description:
            "Copy-paste Radix + Tailwind components with a clean flat aesthetic and full customization.",
          href: "https://github.com/shadcn-ui/ui",
          meta: "React · Tailwind · Radix",
        },
        {
          title: "Headless UI",
          description:
            "Unstyled, accessible UI primitives from Tailwind Labs—ideal for building flat systems from scratch.",
          href: "https://github.com/tailwindlabs/headlessui",
          meta: "React · Vue · Unstyled",
        },
        {
          title: "Radix Primitives",
          description:
            "Low-level accessible UI primitives that pair naturally with flat design tokens.",
          href: "https://github.com/radix-ui/primitives",
          meta: "React · Unstyled · Accessible",
        },
      ],
      resources: [
        {
          title: "NN/g: Flat Design Best Practices",
          description:
            "Research-backed guidelines for maintaining usability in flat interfaces.",
          href: "https://www.nngroup.com/articles/flat-design-best-practices/",
        },
        {
          title: "Material Design 3",
          description:
            "Google's design system rooted in flat principles with elevation guidelines.",
          href: "https://m3.material.io/",
        },
        {
          title: "Apple Human Interface Guidelines",
          description:
            "Apple's design philosophy that shaped modern flat UI conventions.",
          href: "https://developer.apple.com/design/human-interface-guidelines/",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Glassmorphism is a UI style built on translucent, frosted-glass surfaces that reveal blurred layers beneath, creating a sense of physical depth and spatial hierarchy through transparency and light.",
      intention:
        "Communicate premium quality and spatial awareness by layering translucent panels that feel like they float above rich backgrounds, guiding focus through depth rather than hard boundaries.",
      overview: {
        origin:
          "Translucent UI elements appeared in Windows Vista's Aero Glass (2006) and macOS's vibrancy effects. The modern wave was popularized by Apple's Big Sur (2020), which made frosted panels a central design language.",
        influences: [
          "Windows Vista Aero and macOS vibrancy/translucency",
          "Apple Big Sur and iOS 14+ design language",
          "Skeuomorphic depth cues reimagined with modern GPU rendering",
        ],
        modernUsage:
          "Used in creative tools, media players, premium dashboards, and onboarding flows where visual richness signals quality. Common in fintech, music, and design-tool interfaces.",
        signals: [
          "Semi-transparent card backgrounds (10–30% opacity)",
          "Backdrop-filter blur (8–20px range)",
          "Subtle light borders (1px white at low opacity) for edge definition",
          "Soft glows and gradient accents behind or within panels",
          "Layered z-depth with clear foreground/background separation",
        ],
      },
      foundation: {
        definitionDetails: [
          "Surfaces act as frosted windows: you sense the background without reading it clearly.",
          "Depth is real, not decorative—panels stack logically and maintain spatial consistency.",
        ],
        intentionDetails: [
          "Create a feeling of lightness and sophistication without heavy chrome.",
          "Use blur and transparency to establish hierarchy—closer panels are sharper, distant ones softer.",
          "Keep interactions grounded despite the ethereal visual layer.",
        ],
      },
      characteristics: [
        "Translucent panels with background blur (backdrop-filter)",
        "Thin light borders for panel edge definition",
        "Soft gradient backgrounds that shift beneath glass surfaces",
        "Glow accents around interactive elements",
        "Generous padding to let transparency breathe",
        "Restrained text palette—often white or very dark on blurred fields",
      ],
      bestFor: [
        "Creative and media software interfaces",
        "Premium onboarding and marketing moments",
        "Music players, video controls, and media overlays",
        "Dashboard widgets layered over rich visual backgrounds",
      ],
      avoidFor: [
        "Text-heavy interfaces where readability is critical (e.g., legal or documentation)",
        "Low-powered devices where backdrop-filter causes performance issues",
        "High-density data tables where transparency reduces scanability",
      ],
      principles: {
        do: [
          {
            title:
              "Ensure text contrast remains high regardless of background content.",
            example:
              "Example: White text on a dark blurred panel, or add a semi-opaque overlay behind text.",
          },
          {
            title:
              "Use blur intensity to signal depth—closer panels are crisper.",
            example:
              "Example: Primary modal at 12px blur, background card at 20px blur.",
          },
          {
            title:
              "Add thin light borders (1px, 20–30% white) to define panel edges.",
            example:
              "Example: border: 1px solid rgba(255,255,255,0.2) on each glass card.",
          },
          {
            title:
              "Test on varied backgrounds—glass looks different over light vs. dark content.",
            example:
              "Example: Verify a card is readable over both a photo and a solid gradient.",
          },
          {
            title:
              "Use glow accents sparingly to highlight interactive states.",
            example:
              "Example: A soft blue glow ring on focus, removed on blur.",
          },
        ],
        dont: [
          {
            title:
              "Stack multiple glass layers—each additional layer compounds opacity issues.",
            example:
              "Example: A glass modal on a glass sidebar on a glass page background.",
          },
          {
            title: "Use low-contrast text on highly variable backgrounds.",
            example:
              "Example: Light gray text on a glass panel over a bright photo.",
          },
          {
            title:
              "Apply heavy blur on every element—reserve it for key surfaces.",
            example:
              "Example: Every card, badge, and button all using backdrop-filter simultaneously.",
          },
          {
            title: "Forget performance—test on mid-range mobile devices.",
            example:
              "Example: Multiple overlapping blur layers causing visible frame drops on budget phones.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A frosted glass panel floating over a gradient or image background, with crisp headline text and a glowing CTA.",
          doExample:
            "Do: Single glass panel with strong text contrast and one clear action button.",
          dontExample:
            "Don't: Multiple overlapping glass panels competing for attention over a busy background.",
        },
        {
          title: "Primary Button Set",
          description:
            "Buttons with subtle glass effect, clear glow on hover, and solid text for readability.",
          doExample:
            "Do: Semi-transparent fill with bright text and a soft glow on hover/focus.",
          dontExample:
            "Don't: Fully transparent buttons that disappear against light backgrounds.",
        },
        {
          title: "Feature Cards",
          description:
            "Frosted cards with thin borders, clear icons, and restrained copy over a rich background.",
          doExample:
            "Do: Uniform blur level, consistent border treatment, and clear icon-to-text hierarchy.",
          dontExample:
            "Don't: Varying blur levels per card with different opacity values creating visual chaos.",
        },
        {
          title: "Form Fields",
          description:
            "Input fields with glass-tinted backgrounds, strong focus glow, and high-contrast labels.",
          doExample:
            "Do: Light glass fill, strong border on focus, label above with solid contrast.",
          dontExample:
            "Don't: Fully transparent inputs with placeholder-only labels that blend into the background.",
        },
        {
          title: "Inline Callouts",
          description:
            "Glass-tinted notification strips with an accent glow and concise messaging.",
          doExample:
            "Do: A single frosted strip with icon, message, and optional action—one per context.",
          dontExample:
            "Don't: Stacked glass callouts where blur compounds and text becomes unreadable.",
        },
      ],
      accessibility: [
        "Test text contrast with WCAG 1.4.3 across all possible background variations.",
        "Add semi-opaque fallback layers behind text when backgrounds are unpredictable.",
        "Ensure focus indicators are visible through transparent surfaces.",
        "Provide a reduced-motion/reduced-transparency fallback for prefers-reduced-transparency.",
      ],
      componentLibraries: [
        {
          title: "Glass UI",
          description:
            "CSS generator and component set focused on glassmorphism effects.",
          href: "https://github.com/nicedoc/glass-ui",
        },
        {
          title: "ui.aceternity.com",
          description:
            "Animated Tailwind + Framer Motion components with glass and glow effects.",
          href: "https://github.com/aceternity/aceternity-ui",
        },
        {
          title: "shadcn/ui (with glass tokens)",
          description:
            "Base shadcn/ui components customized with glass-style CSS variables and backdrop-filter.",
          href: "https://github.com/shadcn-ui/ui",
          note: "Requires custom theme tokens for glassmorphism; not glass by default.",
        },
      ],
      resources: [
        {
          title: "Glassmorphism CSS Generator",
          description:
            "Interactive tool to generate glass-effect CSS with live preview.",
          href: "https://hype4.academy/tools/glassmorphism-generator",
        },
        {
          title: "MDN: backdrop-filter",
          description:
            "Technical reference for the CSS property that powers glassmorphism.",
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
        },
        {
          title: "Apple Human Interface Guidelines: Materials",
          description:
            "Apple's guidance on translucency and vibrancy in system UI.",
          href: "https://developer.apple.com/design/human-interface-guidelines/materials",
        },
      ],
    },
  },
  "style-neobrutal": {
    history:
      "Neo-brutalism borrows the raw structural honesty of brutalist architecture and the unapologetic simplicity of early web interfaces, then amplifies them with contemporary color, contrast, and scale.",
    message:
      "The brand is bold, unapologetic, and visually assertive without sacrificing clarity.",
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
    deepDive: {
      definition:
        "Neo-brutalism is a contemporary UI style inspired by brutalist architecture and early web aesthetics, emphasizing raw structure, stark contrast, and bold, blocky elements.",
      intention:
        "Reject overly polished minimalism and make interface hierarchy unmistakable, using loud visual structure to feel direct, confident, and memorable.",
      overview: {
        origin:
          "Brutalist architecture championed exposed structure and utilitarian form. Neo-brutalism translates that honesty to digital surfaces, pairing it with modern color and responsive UI patterns.",
        influences: [
          "Brutalist architecture and post-war concrete forms",
          "Early web design and retro software interfaces",
          "Print/poster graphics with hard edges and bold type",
        ],
        modernUsage:
          "Used by bold digital brands to stand out: indie tools, creator platforms, fintech launches, and campaign sites that need instant visual character.",
        signals: [
          "Obvious borders and loud separation lines",
          "Offset shadows that suggest weight",
          "Large, almost poster-like typography",
          "Saturated accents against neutral slabs",
          "Whitespace that frames each block clearly",
        ],
      },
      foundation: {
        definitionDetails: [
          "It values structure over polish: visible grids, loud borders, and minimal decoration.",
          "It favors legibility through contrast rather than subtle gradients or soft depth.",
        ],
        intentionDetails: [
          "Make hierarchy unmistakable at a glance.",
          "Create a raw, confident tone that feels intentional rather than unfinished.",
          "Protect readability with disciplined spacing and type scale.",
        ],
      },
      characteristics: [
        "High-contrast palette with saturated accents",
        "Thick borders, hard edges, and geometric shapes",
        "Offset or harsh drop shadows that look physical",
        "Large display type paired with simple body text",
        "Chunky spacing rhythms and visible layout blocks",
        "Minimal gradients and intentionally rough surfaces",
      ],
      bestFor: [
        "Marketing and campaign landing pages",
        "Portfolio or creative studio sites",
        "Product launch announcements",
        "Brand moments that need strong personality",
      ],
      avoidFor: [
        "Dense analytics dashboards or data-heavy workflows",
        "Long-form reading experiences without strong typographic control",
        "Contexts where subtlety or low-contrast themes are required",
      ],
      principles: {
        do: [
          {
            title: "Keep palette tight and deliberate (2 to 3 anchor colors).",
            example:
              "Example: Black + off-white base, with a single neon accent for CTAs.",
          },
          {
            title: "Use strong hierarchy to balance bold surfaces.",
            example:
              "Example: A 48px headline, 20px subhead, and 16px body with clear spacing.",
          },
          {
            title: "Protect readability with contrast ratio checks.",
            example:
              "Example: Body text at 4.5:1 or higher; CTAs at 3:1 or higher.",
          },
          {
            title: "Use whitespace to separate loud elements.",
            example:
              "Example: Add 24-32px padding around hero blocks to let them breathe.",
          },
          {
            title: "Make interactive states obvious and consistent.",
            example:
              "Example: Hover lifts by 2px, active state compresses shadow.",
          },
          {
            title: "Pair bold headlines with readable body copy.",
            example:
              "Example: Display font for titles, clean sans-serif for paragraphs.",
          },
        ],
        dont: [
          {
            title: "Stack too many bright colors in one view.",
            example:
              "Example: Four or more neon blocks competing in the same viewport.",
          },
          {
            title: "Use thin type or low-contrast text on loud backgrounds.",
            example:
              "Example: Yellow text over white or thin gray on saturated fills.",
          },
          {
            title: "Cramp layouts with minimal spacing.",
            example:
              "Example: Cards touching edges or headings stacked without breathing room.",
          },
          {
            title: "Hide affordances behind novelty or texture.",
            example:
              "Example: Link text without underline or button without outline.",
          },
          {
            title: "Let decoration overpower core content.",
            example:
              "Example: Oversized stickers or patterns that obscure the CTA.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "Blocky headline, thick border, and a single offset shadow to make the primary message impossible to miss.",
          doExample:
            "Do: One dominant hero block, one accent color, and a single CTA.",
          dontExample:
            "Don't: Multiple hero tiles, conflicting accents, and equal-weight headings.",
        },
        {
          title: "Primary Button Set",
          description:
            "High-contrast fills, chunky borders, and a clear pressed state to reinforce physicality.",
          doExample:
            "Do: Bold primary button, clear hover shift, consistent pressed state.",
          dontExample:
            "Don't: Thin outlines, low-contrast fills, and no visible active state.",
        },
        {
          title: "Feature Cards",
          description:
            "Square cards with heavy outlines and restrained copy to balance loud visuals.",
          doExample:
            "Do: One short headline and a single-line summary per card.",
          dontExample: "Don't: Overfill with paragraphs or mixed alignments.",
        },
        {
          title: "Form Fields",
          description:
            "Bold labels, large input boxes, and visible focus rings for clarity.",
          doExample:
            "Do: Thick borders, strong focus ring, and clear error state.",
          dontExample:
            "Don't: Thin borders, placeholder-only labels, or low-contrast text.",
        },
        {
          title: "Inline Callouts",
          description:
            "Short statements in color blocks to break up long sections.",
          doExample: "Do: One callout per section with a single accent color.",
          dontExample:
            "Don't: Multiple callouts in a row that interrupt reading flow.",
        },
      ],
      accessibility: [
        "Validate text contrast ratios against WCAG 1.4.3.",
        "Ensure UI components and focus indicators meet WCAG 1.4.11.",
        "Preserve visible focus states even with thick borders.",
        "Test legibility in grayscale to confirm hierarchy.",
      ],
      componentLibraries: [
        {
          title: "Neobrutalism Components",
          description:
            "Shadcn-style component library focused on neo-brutalist styling.",
          href: "https://github.com/ekmas/neobrutalism-components",
          note: "The repo notes it is no longer maintained.",
        },
        {
          title: "HyperUI (Neobrutalism)",
          description:
            "Large Tailwind component set that includes a Neobrutalism category.",
          href: "https://github.com/markmead/hyperui",
        },
        {
          title: "RetroUI",
          description:
            "Neo-brutalism styled React + Tailwind UI library with a broad component set.",
          href: "https://github.com/Logging-Stuff/RetroUI",
        },
        {
          title: "Neo Brutalism UI Library",
          description:
            "React + Tailwind component library with neo-brutalist examples.",
          href: "https://github.com/marieooq/neo-brutalism-ui-library",
        },
      ],
      resources: [
        {
          title: "NN/g: Neobrutalism",
          description:
            "Definition, characteristics, and usability guidance for neo-brutalist interfaces.",
          href: "https://www.nngroup.com/articles/neobrutalism/",
        },
        {
          title: "Britannica: Brutalism",
          description:
            "Architectural origins that inform the brutalist aesthetic.",
          href: "https://www.britannica.com/art/Brutalism-architecture",
        },
        {
          title: "Brutalist Websites",
          description:
            "Gallery of brutalist and neo-brutalist web examples for inspiration.",
          href: "https://brutalistwebsites.com/",
        },
        {
          title: "W3C: Contrast (1.4.3)",
          description: "WCAG guidance for minimum text contrast requirements.",
          href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
        },
        {
          title: "W3C: Non-text Contrast (1.4.11)",
          description:
            "WCAG guidance for contrast on UI components and focus states.",
          href: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html",
        },
      ],
      visualExamples: [
        {
          title: "Neo-brutalist hero layout",
          description:
            "Large headline blocks, hard outlines, and a single accent CTA.",
          image: {
            src: "/neo-brutalism/gallery-hero.svg",
            alt: "Illustrated neo-brutalist hero layout with bold blocks and thick borders.",
            caption: "Hero layout with heavy outlines and offset shadow.",
          },
        },
        {
          title: "Card-based feature grid",
          description:
            "Chunky cards with strong separation and constrained copy.",
          image: {
            src: "/neo-brutalism/gallery-cards.svg",
            alt: "Illustrated neo-brutalist card grid with thick borders and bright accents.",
            caption:
              "Feature cards that balance bold borders with clean spacing.",
          },
        },
        {
          title: "Form and callout pairing",
          description: "Bold field outlines with a contrasting callout block.",
          image: {
            src: "/neo-brutalism/gallery-form.svg",
            alt: "Illustrated neo-brutalist form with thick borders and a high-contrast callout.",
            caption: "Forms that emphasize labels and focus states.",
          },
        },
      ],
    },
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
    deepDive: {
      definition:
        "Editorial design adapts print magazine and newspaper layout conventions to digital interfaces, letting typography, whitespace, and reading rhythm carry the visual hierarchy rather than color or decoration.",
      intention:
        "Put content at the absolute center of the experience. Every visual decision—type scale, spacing, separators—exists to make reading effortless and pleasurable.",
      overview: {
        origin:
          "Rooted in centuries of print editorial design, from broadsheet newspapers to Condé Nast magazines. Digital editorial design matured with platforms like Medium (2012), which proved that typographic discipline could define a product's identity.",
        influences: [
          "Newspaper and magazine grid systems (broadsheet, Swiss grids)",
          "Medium and Substack's typography-first reading experience",
          "Book design principles: leading, measure, and marginalia",
        ],
        modernUsage:
          "Used by publishing platforms, knowledge bases, documentation sites, long-form blogs, and premium content products. Also adopted by fintech and legal products that need to present dense text with clarity.",
        signals: [
          "Serif or high-quality sans-serif type as the primary design element",
          "Generous line-height (1.5–1.8) and comfortable measure (55–75 characters)",
          "Hairline separators and muted rules instead of heavy borders",
          "Pull quotes, drop caps, or typographic accents for rhythm breaks",
          "Restrained color—often monochrome with a single accent",
        ],
      },
      foundation: {
        definitionDetails: [
          "Typography is the interface: size, weight, and spacing do the work that color and borders do elsewhere.",
          "The grid is invisible but strict—content aligns to a baseline rhythm that creates calm regularity.",
        ],
        intentionDetails: [
          "Minimize distraction so readers stay engaged with long-form content.",
          "Signal quality and trustworthiness through typographic craft.",
          "Create natural pauses and rhythm breaks that prevent reading fatigue.",
        ],
      },
      characteristics: [
        "Serif-forward or carefully paired serif + sans-serif typography",
        "Strict vertical rhythm tied to a baseline grid",
        "Generous margins and comfortable reading measure",
        "Muted, hairline separators instead of heavy borders",
        "Restrained color palette—near-monochrome with optional single accent",
        "Pull quotes, drop caps, or large lead-ins as typographic devices",
      ],
      bestFor: [
        "Long-form articles, blogs, and publishing platforms",
        "Documentation sites and knowledge bases",
        "Premium content products and newsletters",
        "Legal, financial, or research interfaces with dense text",
      ],
      avoidFor: [
        "Data-heavy dashboards where scanability depends on color coding",
        "Gamified or high-energy marketing pages",
        "Interfaces that need strong visual affordances for complex interactions",
      ],
      principles: {
        do: [
          {
            title: "Choose typefaces with excellent legibility at body sizes.",
            example:
              "Example: A well-hinted serif like Charter or Source Serif at 18–20px for body text.",
          },
          {
            title: "Maintain a strict type scale with clear hierarchy jumps.",
            example:
              "Example: 40px title, 24px section head, 18px body, 14px caption—each step is distinct.",
          },
          {
            title:
              "Use whitespace as the primary grouping and separation tool.",
            example:
              "Example: 48px between sections, 24px between paragraphs, no borders needed.",
          },
          {
            title:
              "Add typographic rhythm breaks in long content (pull quotes, lead-ins).",
            example:
              "Example: A large italic pull quote every 3–4 paragraphs to reset reader attention.",
          },
          {
            title:
              "Keep line length between 55 and 75 characters for comfortable reading.",
            example:
              "Example: max-width: 680px on the content column with generous side margins.",
          },
        ],
        dont: [
          {
            title: "Use more than two typeface families.",
            example:
              "Example: Mixing a serif, a sans-serif, and a decorative display face on the same page.",
          },
          {
            title:
              "Let body text run edge-to-edge without a reading column constraint.",
            example:
              "Example: Full-width paragraphs on a 1440px monitor—100+ characters per line.",
          },
          {
            title: "Add heavy visual decoration that competes with the text.",
            example:
              "Example: Bold colored borders, large icons, or background patterns behind article content.",
          },
          {
            title:
              "Neglect spacing rhythm—inconsistent gaps break the editorial feel instantly.",
            example:
              "Example: 32px after one heading, 16px after another, with no baseline alignment.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A large serif headline with generous whitespace, subtle byline, and minimal decoration.",
          doExample:
            "Do: Bold serif headline, thin rule below, author name and date in small caps.",
          dontExample:
            "Don't: A colorful banner with multiple competing text elements and decorative graphics.",
        },
        {
          title: "Primary Button Set",
          description:
            "Understated buttons that don't overpower the content—often text-style or lightly outlined.",
          doExample:
            "Do: A small, well-spaced text button or subtle pill with clear hover state.",
          dontExample:
            "Don't: Large, brightly colored buttons that dominate the reading flow.",
        },
        {
          title: "Feature Cards",
          description:
            "Content cards built on typography rather than borders—headline, excerpt, and metadata.",
          doExample:
            "Do: Headline + 2-line excerpt + muted metadata, separated by whitespace alone.",
          dontExample:
            "Don't: Heavy card borders, large thumbnails, and badge overlays that distract from the text.",
        },
        {
          title: "Form Fields",
          description:
            "Clean, minimal inputs that match the editorial tone—hairline borders and clear typography.",
          doExample:
            "Do: Labels in the editorial typeface, thin bottom-border inputs, clear focus underline.",
          dontExample:
            "Don't: Chunky bordered inputs with bright fill colors that clash with the reading experience.",
        },
        {
          title: "Inline Callouts",
          description:
            "Pull-quote or aside blocks that complement the reading flow with typographic emphasis.",
          doExample:
            "Do: An indented block with a left rule, italic text, and muted attribution.",
          dontExample:
            "Don't: Brightly colored alert boxes that interrupt the narrative flow.",
        },
      ],
      accessibility: [
        "Ensure body text meets WCAG 1.4.3 contrast—especially with light gray text on white.",
        "Use semantic heading levels (h1–h6) to match the visual type hierarchy.",
        "Maintain sufficient line-height (1.5+) for users with reading difficulties.",
        "Provide visible focus styles that work within the minimal visual language.",
      ],
      componentLibraries: [
        {
          title: "Tailwind Typography (prose)",
          description:
            "The official Tailwind plugin for beautiful typographic defaults on long-form content.",
          href: "https://github.com/tailwindlabs/tailwindcss-typography",
          meta: "Tailwind · Plugin",
        },
        {
          title: "shadcn/ui",
          description:
            "Minimal Radix + Tailwind components that pair well with editorial type systems.",
          href: "https://github.com/shadcn-ui/ui",
          meta: "React · Tailwind · Radix",
        },
        {
          title: "Tufte CSS",
          description:
            "Edward Tufte-inspired CSS for clean, readable web typography with sidenotes and margin figures.",
          href: "https://github.com/edwardtufte/tufte-css",
          meta: "CSS · Typography-first",
        },
      ],
      resources: [
        {
          title: "Butterick's Practical Typography",
          description:
            "Comprehensive guide to typography for digital and print, covering measure, leading, and font choice.",
          href: "https://practicaltypography.com/",
        },
        {
          title: "The Elements of Typographic Style Applied to the Web",
          description:
            "Robert Bringhurst's classic typography rules adapted for web design.",
          href: "https://webtypography.net/",
        },
        {
          title: "Google Fonts: Knowledge",
          description:
            "Educational articles on type selection, pairing, and web typography best practices.",
          href: "https://fonts.google.com/knowledge",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Bento layout is a modular grid system where content is organized into distinct, self-contained tiles of varying sizes—like compartments in a bento box—each communicating a focused idea at a glance.",
      intention:
        "Present multiple product capabilities, features, or content types simultaneously in a visually balanced, scannable arrangement that invites exploration without overwhelming.",
      overview: {
        origin:
          "Named after Japanese bento boxes where varied dishes are neatly compartmentalized. The digital pattern gained massive visibility through Apple's WWDC presentations (2020+), where feature grids used the format to showcase OS capabilities.",
        influences: [
          "Apple WWDC feature grids and marketing pages",
          "Dashboard and widget-based UI patterns",
          "Magazine layout grids with mixed-size blocks",
        ],
        modernUsage:
          "Dominant in product marketing pages, feature overviews, and onboarding flows. SaaS landing pages, developer tools, and portfolio sites use bento grids to showcase capabilities without deep navigation.",
        signals: [
          "Grid of tiles with intentionally varied sizes (1×1, 2×1, 1×2, 2×2)",
          "Each tile is self-contained with its own icon, title, and visual",
          "Rounded corners and consistent gap spacing between tiles",
          "Color-coded or gradient-tinted backgrounds per tile group",
          "Mix of text, illustrations, and mini-demos within tiles",
        ],
      },
      foundation: {
        definitionDetails: [
          "Each tile functions as a micro-story: one idea, one visual, one takeaway.",
          "The grid creates rhythm through size variation—hero tiles anchor, smaller tiles support.",
        ],
        intentionDetails: [
          "Let users scan and self-select which features matter most to them.",
          "Communicate breadth of capability without requiring deep navigation.",
          "Create visual energy through compositional variety within a structured grid.",
        ],
      },
      characteristics: [
        "Mixed-size tile grid (often CSS Grid with span variations)",
        "Rounded corners (12–20px) with consistent gap spacing",
        "Self-contained tiles—each with independent content and optional background",
        "Color-coded tile groups to signal categories or themes",
        "Illustrations, icons, or mini-demos embedded within tiles",
        "Clear size hierarchy: 1–2 hero tiles, several supporting tiles",
      ],
      bestFor: [
        "Product feature overviews and marketing pages",
        "Onboarding flows that introduce capabilities",
        "Portfolio showcases with mixed media types",
        "Dashboard homepages with widget-style content",
      ],
      avoidFor: [
        "Sequential or narrative content that needs linear reading order",
        "Dense data interfaces where every item is equally important",
        "Long-form text content where tiles would fragment the flow",
      ],
      principles: {
        do: [
          {
            title:
              "Establish clear size hierarchy—1 or 2 hero tiles, then supporting tiles.",
            example:
              "Example: One 2×2 hero tile showcasing the primary feature, surrounded by 1×1 details.",
          },
          {
            title: "Keep each tile focused on a single idea or feature.",
            example:
              "Example: One icon, one headline, one sentence—never multi-paragraph within a tile.",
          },
          {
            title:
              "Use consistent gap spacing and corner radius across all tiles.",
            example:
              "Example: 16px gap, 16px border-radius on every tile for visual cohesion.",
          },
          {
            title: "Color-code tile groups to help users scan by category.",
            example:
              "Example: Blue-tinted tiles for productivity features, green for collaboration.",
          },
          {
            title:
              "Include visual variety—mix text tiles, icon tiles, and illustration tiles.",
            example:
              "Example: Alternate between stat tiles, feature descriptions, and small embedded demos.",
          },
        ],
        dont: [
          {
            title:
              "Give all tiles equal size and emphasis—it defeats the compositional rhythm.",
            example:
              "Example: A flat grid of identical 1×1 tiles with no visual anchor.",
          },
          {
            title: "Overload tiles with dense content.",
            example:
              "Example: A tile with a headline, 3 paragraphs, 2 buttons, and an image.",
          },
          {
            title:
              "Use too many different background colors without a grouping logic.",
            example:
              "Example: Every tile a different color with no thematic connection.",
          },
          {
            title:
              "Break the grid rhythm with inconsistent gaps or misaligned tiles.",
            example:
              "Example: Some tiles with 8px gap, others with 24px, creating visual jitter.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A large 2×2 hero tile anchoring the grid with a bold headline and illustration.",
          doExample:
            "Do: One oversized tile with a clear headline, short description, and a single visual.",
          dontExample:
            "Don't: Multiple large tiles of the same size competing for the hero position.",
        },
        {
          title: "Primary Button Set",
          description:
            "Friendly, rounded buttons that match the tile aesthetic—often with subtle fills.",
          doExample:
            "Do: Rounded pill buttons with clear hierarchy—filled primary, ghost secondary.",
          dontExample:
            "Don't: Sharp-cornered, heavy-bordered buttons that clash with the rounded tile system.",
        },
        {
          title: "Feature Cards",
          description:
            "Individual bento tiles that each showcase one feature with icon, title, and tagline.",
          doExample:
            "Do: Icon + headline + one-liner per tile, with a tinted background matching the category.",
          dontExample:
            "Don't: Feature tiles packed with paragraphs, multiple CTAs, and competing visuals.",
        },
        {
          title: "Form Fields",
          description:
            "Clean inputs within a tile context—often part of a CTA or sign-up tile.",
          doExample:
            "Do: A single-field sign-up tile with email input and one button, rounded to match tiles.",
          dontExample:
            "Don't: A dense multi-field form crammed into a tile that breaks the grid rhythm.",
        },
        {
          title: "Inline Callouts",
          description:
            "Small accent tiles used to highlight stats, quotes, or key metrics within the grid.",
          doExample:
            "Do: A 1×1 tile with a large number, short label, and a tinted background.",
          dontExample:
            "Don't: Long text callouts that span multiple tiles and disrupt the modular feel.",
        },
      ],
      accessibility: [
        "Ensure tile reading order is logical when linearized (check tab order and screen reader flow).",
        "Maintain text contrast on tinted tile backgrounds—test light and saturated fills.",
        "Provide meaningful alt text for illustrations embedded in tiles.",
        "Don't rely on tile position alone to convey meaning—use headings and labels.",
      ],
      componentLibraries: [
        {
          title: "Bento Grid (React)",
          description:
            "A React component for building Apple-style bento grid layouts with flexible tile sizes.",
          href: "https://github.com/nicedoc/bento",
        },
        {
          title: "Magic UI",
          description:
            "Animated React + Tailwind components including bento grid layouts and tile animations.",
          href: "https://github.com/magicuidesign/magicui",
          meta: "React · Tailwind · Framer Motion",
        },
        {
          title: "shadcn/ui",
          description:
            "Base component library—use Card components with CSS Grid for custom bento layouts.",
          href: "https://github.com/shadcn-ui/ui",
          meta: "React · Tailwind · Radix",
          note: "No built-in bento layout; combine Card + CSS Grid.",
        },
      ],
      resources: [
        {
          title: "CSS-Tricks: Auto-Fill vs. Auto-Fit",
          description:
            "Essential guide for responsive CSS Grid layouts that power bento-style tile systems.",
          href: "https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/",
        },
        {
          title: "Smashing Magazine: Modern CSS Grid",
          description:
            "Comprehensive guide to CSS Grid layout techniques including subgrid and mixed-size tiles.",
          href: "https://www.smashingmagazine.com/2020/01/understanding-css-grid-container/",
        },
        {
          title: "Apple Design Resources",
          description:
            "Apple's design kits that popularized the bento-grid approach in product marketing.",
          href: "https://developer.apple.com/design/resources/",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Data-dense UI is an information-first design approach optimized for high data throughput, where compact layouts, tabular structures, and monospace-friendly typography allow operators to scan, compare, and act on large volumes of information quickly.",
      intention:
        "Maximize useful information per viewport without sacrificing legibility. Every pixel earns its place by conveying data, state, or action—not decoration.",
      overview: {
        origin:
          "Born from Bloomberg terminals, flight control systems, and server monitoring consoles where operators need to process hundreds of data points simultaneously. Financial trading UIs, IDE layouts, and DevOps dashboards refined the pattern for modern screens.",
        influences: [
          "Bloomberg Terminal and financial trading interfaces",
          "Flight control and SCADA monitoring systems",
          "IDE layouts (VS Code, IntelliJ) and DevOps dashboards (Grafana, Datadog)",
        ],
        modernUsage:
          "Standard for analytics dashboards, admin consoles, monitoring tools, spreadsheet-like apps, and any product where the user's job is to process data. Also used in developer tools and infrastructure management UIs.",
        signals: [
          "Compact row heights (28–36px) and tight cell padding",
          "Monospace or tabular-figure fonts for number alignment",
          "Color-coded status indicators (badges, dots, bars)",
          "Sortable columns, inline filters, and keyboard-first navigation",
          "Minimal chrome—borders and backgrounds serve structural roles only",
        ],
      },
      foundation: {
        definitionDetails: [
          "Density is deliberate, not accidental: every row, column, and cell is measured for scanability.",
          "Structure comes from alignment and repetition—grids, tables, and consistent cell formatting.",
        ],
        intentionDetails: [
          "Help operators make decisions quickly by showing comparative data in context.",
          "Reduce navigation: show more on one screen to minimize clicks and page switches.",
          "Support expert users who scan patterns rather than reading individual items.",
        ],
      },
      characteristics: [
        "Compact spacing with tight but consistent padding (4–8px cells)",
        "Tabular or monospace typography for aligned numbers and codes",
        "Color-coded status system (green/amber/red or custom semantic palette)",
        "Sortable, filterable data tables as a core pattern",
        "Minimal decorative elements—borders for structure only",
        "Fixed headers, sticky columns, and keyboard navigation support",
      ],
      bestFor: [
        "Analytics dashboards and reporting tools",
        "Admin consoles and back-office systems",
        "Monitoring, alerting, and observability platforms",
        "Financial tools, trading interfaces, and spreadsheet apps",
      ],
      avoidFor: [
        "Consumer onboarding flows where friendliness matters more than density",
        "Marketing pages or brand storytelling",
        "Interfaces for casual or infrequent users who need more guidance",
      ],
      principles: {
        do: [
          {
            title:
              "Use consistent row height and cell padding for scannable rhythm.",
            example:
              "Example: 32px row height, 8px horizontal cell padding, 4px vertical—across all tables.",
          },
          {
            title:
              "Align numbers to the right and use tabular figures for comparison.",
            example:
              "Example: font-variant-numeric: tabular-nums; text-align: right on all number columns.",
          },
          {
            title:
              "Provide clear status encoding—color + icon + label for critical states.",
            example:
              "Example: Green dot + 'Healthy' label, not just a green dot alone.",
          },
          {
            title:
              "Support keyboard navigation and sort/filter without leaving the table.",
            example:
              "Example: Arrow keys to move between rows, Enter to expand, / to filter.",
          },
          {
            title:
              "Use zebra striping or subtle row borders to aid horizontal tracking.",
            example:
              "Example: Alternating rows at 2% opacity difference, or 1px bottom border.",
          },
        ],
        dont: [
          {
            title: "Cram data without consistent spacing—density ≠ chaos.",
            example:
              "Example: Variable cell padding, misaligned columns, and inconsistent row heights.",
          },
          {
            title: "Use color as the sole indicator for state or severity.",
            example:
              "Example: Red/green status dots with no text label—fails for color-blind users.",
          },
          {
            title:
              "Hide critical actions behind context menus with no visible trigger.",
            example:
              "Example: Right-click-only actions on data rows with no visible affordance.",
          },
          {
            title:
              "Forget horizontal overflow—wide tables need scroll or column priority.",
            example:
              "Example: A 15-column table that breaks layout on a laptop screen.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A compact KPI bar or summary strip at the top showing key metrics before the detail view.",
          doExample:
            "Do: 3–5 KPI cards in a row with value, label, and trend indicator.",
          dontExample:
            "Don't: A large decorative hero banner that wastes vertical space above the data.",
        },
        {
          title: "Primary Button Set",
          description:
            "Compact, clearly labeled action buttons positioned near the data they affect.",
          doExample:
            "Do: Small filled primary button + ghost secondary, right-aligned above the table.",
          dontExample:
            "Don't: Large, widely spaced buttons that push the data table below the fold.",
        },
        {
          title: "Feature Cards",
          description:
            "Metric cards with a large number, descriptive label, and optional sparkline or trend.",
          doExample:
            "Do: One metric per card, aligned in a row, with consistent sizing and labeling.",
          dontExample:
            "Don't: Cards with paragraphs of context text that defeat the quick-scan purpose.",
        },
        {
          title: "Form Fields",
          description:
            "Compact inline filters and search fields that integrate with the data table header.",
          doExample:
            "Do: A search input + dropdown filters in the table toolbar, compact and inline.",
          dontExample:
            "Don't: A separate form page for filtering that takes the user away from the data.",
        },
        {
          title: "Inline Callouts",
          description:
            "Compact status banners or threshold alerts that appear contextually within the data view.",
          doExample:
            "Do: A thin amber bar above the table: 'Warning: 3 services degraded' with a link to filter.",
          dontExample:
            "Don't: A large modal alert that blocks the data view until dismissed.",
        },
      ],
      accessibility: [
        "Use proper table markup (thead, tbody, th scope) for screen reader navigation.",
        "Ensure status indicators use color + icon + text, not color alone.",
        "Maintain minimum touch target sizes (44×44px) even in compact layouts.",
        "Provide keyboard navigation for tables: arrow keys, Enter to act, Escape to dismiss.",
      ],
      componentLibraries: [
        {
          title: "TanStack Table",
          description:
            "Headless table library with sorting, filtering, pagination, and virtual scrolling.",
          href: "https://github.com/TanStack/table",
          meta: "Framework-agnostic · Headless",
        },
        {
          title: "AG Grid",
          description:
            "Enterprise-grade data grid with built-in grouping, pivoting, and Excel-like features.",
          href: "https://github.com/ag-grid/ag-grid",
          meta: "React · Vue · Angular",
        },
        {
          title: "Tremor",
          description:
            "React dashboard components (charts, KPI cards, tables) built on Tailwind.",
          href: "https://github.com/tremorlabs/tremor",
          meta: "React · Tailwind · Charts",
        },
      ],
      resources: [
        {
          title: "NN/g: Data Tables",
          description:
            "Research-based guidelines for designing scannable, usable data tables.",
          href: "https://www.nngroup.com/articles/data-tables/",
        },
        {
          title: "Edward Tufte: The Visual Display of Quantitative Information",
          description:
            "Foundational text on presenting data with clarity, precision, and efficiency.",
          href: "https://www.edwardtufte.com/tufte/books_vdqi",
        },
        {
          title: "Grafana Design System",
          description:
            "Open-source design system built for data-dense monitoring and observability UIs.",
          href: "https://grafana.com/developers/saga/",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Pixel art UI draws from the visual language of early video games and low-resolution displays, using hard-edged blocky shapes, limited color palettes, and grid-locked layouts to create interfaces that feel nostalgic and playful.",
      intention:
        "Evoke nostalgia and gamified energy by embracing constraints of early computing—limited colors, visible grid structure, and iconic simplicity—while maintaining modern usability.",
      overview: {
        origin:
          "Born from hardware constraints of 8-bit and 16-bit game consoles (NES, Game Boy, SNES) where every pixel was hand-placed. The aesthetic persisted as an artistic choice in indie games and later migrated to web and app interfaces as a retro design trend.",
        influences: [
          "8-bit and 16-bit console game interfaces (NES, Game Boy, SNES)",
          "Early Macintosh and Windows icon design (Susan Kare's work)",
          "Modern indie games (Celeste, Stardew Valley, Undertale)",
        ],
        modernUsage:
          "Used in gaming products, kids' apps, developer tools with playful personalities, retro-themed campaigns, and gamification layers. Popular for progress trackers, achievement systems, and playful micro-interactions.",
        signals: [
          "Sharp 90-degree corners with no border-radius",
          "Visible grid structure and block-based spacing",
          "Limited color palettes (often 4–16 colors)",
          "Pixel or bitmap-style fonts",
          "Stepped borders and dithered gradients instead of smooth ones",
        ],
      },
      foundation: {
        definitionDetails: [
          "Every element snaps to a visible grid—shapes are built from blocks, not curves.",
          "Color palettes are intentionally limited, mimicking hardware constraints for cohesion.",
        ],
        intentionDetails: [
          "Create immediate emotional resonance through nostalgia and game-like energy.",
          "Use constraints as a design tool: limited colors and grid-lock force clarity.",
          "Make interfaces feel interactive and reward-driven, like a game system.",
        ],
      },
      characteristics: [
        "Zero border-radius—all corners are sharp 90-degree angles",
        "Grid-locked spacing (multiples of 4px or 8px, strictly)",
        "Limited color palette (4–16 intentional colors)",
        "Pixel fonts or monospace typefaces for headings",
        "Stepped/dithered effects instead of smooth gradients",
        "Chunky borders (2–4px solid lines)",
      ],
      bestFor: [
        "Game interfaces, achievement systems, and progress trackers",
        "Kids' products and educational platforms with gamification",
        "Retro-themed campaigns and event pages",
        "Developer tools and indie products with playful personality",
      ],
      avoidFor: [
        "Corporate or enterprise interfaces where credibility matters",
        "Long-form reading experiences where pixel fonts reduce legibility",
        "Accessibility-critical contexts where hard edges and limited color cause issues",
      ],
      principles: {
        do: [
          {
            title:
              "Snap everything to a strict grid—consistency is the entire aesthetic.",
            example:
              "Example: All elements on an 8px grid, borders at 2px or 4px, no fractional values.",
          },
          {
            title: "Limit the color palette intentionally and document it.",
            example:
              "Example: A 12-color palette inspired by the NES, applied consistently across all components.",
          },
          {
            title:
              "Use pixel fonts for display text but readable fonts for body content.",
            example:
              "Example: Press Start 2P for headings, system sans-serif for paragraph text.",
          },
          {
            title:
              "Add game-like feedback: sounds, animations, or state changes on interaction.",
            example:
              "Example: A button that visually 'presses down' 2px with a click sound.",
          },
          {
            title:
              "Keep layouts simple and blocky—complexity fights the aesthetic.",
            example:
              "Example: Single-column sections, stacked blocks, clear compartments.",
          },
        ],
        dont: [
          {
            title: "Mix pixel and smooth aesthetics—the clash is jarring.",
            example:
              "Example: Pixel-art icons next to a smooth gradient hero with rounded buttons.",
          },
          {
            title:
              "Use pixel fonts at small sizes where they become unreadable.",
            example:
              "Example: 10px pixel font for legal text or long paragraphs.",
          },
          {
            title:
              "Overdo the retro—decoration without function becomes gimmicky.",
            example:
              "Example: Animated scanlines, CRT filters, and blinking cursors all at once.",
          },
          {
            title:
              "Ignore modern usability expectations just for aesthetic purity.",
            example:
              "Example: No hover states, no focus rings, and fixed 320px layouts.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A blocky banner with pixel-font headline, flat color background, and a chunky CTA button.",
          doExample:
            "Do: Large pixel headline, solid color block, one chunky 'Start' button—like a title screen.",
          dontExample:
            "Don't: A gradient hero with smooth fonts and rounded buttons that break the pixel aesthetic.",
        },
        {
          title: "Primary Button Set",
          description:
            "Chunky buttons with visible pressed states and sharp corners, like game UI controls.",
          doExample:
            "Do: 2px border, flat fill, 2px downward shift on press—clear and tactile.",
          dontExample:
            "Don't: Rounded pill buttons with soft shadows that feel nothing like the pixel system.",
        },
        {
          title: "Feature Cards",
          description:
            "Blocky cards with pixel-art icons, sharp borders, and short text—like inventory items.",
          doExample:
            "Do: Square card, pixel icon, bold title, one-line description—item-card style.",
          dontExample:
            "Don't: Rounded cards with photo thumbnails and long paragraphs.",
        },
        {
          title: "Form Fields",
          description:
            "Square input fields with thick borders and monospace text—like a text-adventure input.",
          doExample:
            "Do: Thick border, no radius, monospace placeholder, blinking cursor.",
          dontExample:
            "Don't: Smooth rounded inputs with subtle borders that don't match the blocky system.",
        },
        {
          title: "Inline Callouts",
          description:
            "Text-box style callouts with a border frame, like dialogue boxes in RPGs.",
          doExample:
            "Do: A bordered box with a pixel-font title and short message—dialogue-box style.",
          dontExample:
            "Don't: Rounded toast notifications with gradient backgrounds.",
        },
      ],
      accessibility: [
        "Use readable system fonts for body text—pixel fonts for display only.",
        "Ensure sufficient contrast despite limited palettes—test all combinations.",
        "Provide visible focus indicators that work with the blocky aesthetic (thick outline shifts).",
        "Don't rely on flashing or rapid animation for feedback—respect prefers-reduced-motion.",
      ],
      componentLibraries: [
        {
          title: "NES.css",
          description:
            "NES-style CSS framework with pixel-art buttons, containers, and icons.",
          href: "https://github.com/nostalgic-css/NES.css",
          meta: "CSS · Retro · NES-themed",
        },
        {
          title: "PressStart2P (Google Fonts)",
          description:
            "Free pixel-style font designed for game UIs, available via Google Fonts.",
          href: "https://fonts.google.com/specimen/Press+Start+2P",
          meta: "Font · Pixel style",
        },
        {
          title: "RPG UI",
          description:
            "CSS component set inspired by classic RPG game interfaces with dialogue boxes and menus.",
          href: "https://github.com/RyanFitzgerald/rpg-ui",
        },
      ],
      resources: [
        {
          title: "Lospec: Pixel Art Palette List",
          description:
            "Curated collection of pixel art color palettes organized by color count and style.",
          href: "https://lospec.com/palette-list",
        },
        {
          title: "Susan Kare: Icon Design",
          description:
            "Portfolio of the designer who created the original Macintosh pixel icons.",
          href: "https://kare.com/",
        },
        {
          title: "Pixel Art Tutorial: MiniBoss",
          description:
            "Comprehensive guide to pixel art techniques applicable to UI icon and element design.",
          href: "https://blog.studiominiboss.com/pixelart",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Bauhaus UI applies the principles of the Bauhaus school—geometric purity, primary color anchors, and functional composition—to digital interfaces, where form and function are treated as inseparable.",
      intention:
        "Create interfaces that feel deliberately composed, where every shape, color, and space serves both an aesthetic and functional purpose. The design itself communicates structure.",
      overview: {
        origin:
          "The Bauhaus school (1919–1933, Weimar/Dessau/Berlin) unified art, craft, and technology under the principle that form follows function. Its visual vocabulary—primary colors, geometric primitives, asymmetric composition—has influenced graphic and industrial design for over a century.",
        influences: [
          "Bauhaus school (Gropius, Kandinsky, Moholy-Nagy, Albers)",
          "De Stijl and Mondrian's primary-color grid compositions",
          "Swiss/International Typographic Style and modernist grid systems",
        ],
        modernUsage:
          "Used by architecture firms, design studios, cultural institutions, and brand storytelling pages that need strong visual identity. Also seen in portfolio sites and educational platforms where composition is part of the message.",
        signals: [
          "Primary color palette (red, blue, yellow) plus black and white",
          "Geometric primitives: circles, triangles, and rectangles as structural elements",
          "Asymmetric but balanced compositions with directional energy",
          "Strong grid structure with intentional rule-breaking for emphasis",
          "Sans-serif typography with clear weight hierarchy",
        ],
      },
      foundation: {
        definitionDetails: [
          "Geometry is the language: circles, squares, and triangles are compositional building blocks, not decoration.",
          "Color is structural: each primary color anchors a function or zone, not just a mood.",
        ],
        intentionDetails: [
          "Make the interface feel 'designed'—every element intentionally placed and composed.",
          "Use geometric tension and asymmetry to guide the eye through content.",
          "Prove that utility and beauty are not in opposition—they reinforce each other.",
        ],
      },
      characteristics: [
        "Primary color anchors (red, blue, yellow) used structurally",
        "Geometric shapes as layout and accent elements",
        "Asymmetric compositions with visual balance through weight distribution",
        "Strong grid with intentional breaks for emphasis",
        "Clean sans-serif typography (often geometric: Futura, DM Sans)",
        "Black, white, and neutral fields as compositional ground",
      ],
      bestFor: [
        "Architecture and design studio portfolios",
        "Cultural institution and museum sites",
        "Brand storytelling and campaign pages",
        "Educational platforms where composition is the curriculum",
      ],
      avoidFor: [
        "Data-heavy interfaces where geometric decoration competes with information",
        "Consumer apps that need a warm, casual tone",
        "Dense form-based workflows where composition adds visual noise",
      ],
      principles: {
        do: [
          {
            title:
              "Use primary colors structurally—each color signals a function or zone.",
            example:
              "Example: Red for primary CTAs, blue for navigation, yellow for highlights.",
          },
          {
            title:
              "Compose with geometric shapes that serve layout roles, not just decoration.",
            example:
              "Example: A large circle as a section anchor, a triangle pointing to a CTA.",
          },
          {
            title:
              "Create asymmetric balance—intentional off-center placement that still feels stable.",
            example:
              "Example: A headline left-aligned at 1/3 width, balanced by a color block at 2/3.",
          },
          {
            title:
              "Use a geometric sans-serif typeface for consistency with the visual system.",
            example:
              "Example: Futura, DM Sans, or Inter with tight tracking for headings.",
          },
          {
            title: "Let negative space be an active compositional element.",
            example:
              "Example: Large white areas that 'hold' geometric elements in tension.",
          },
        ],
        dont: [
          {
            title:
              "Use every primary color at full saturation in every section.",
            example:
              "Example: Red, blue, and yellow blocks side by side with equal size and intensity.",
          },
          {
            title:
              "Scatter geometric shapes randomly without compositional logic.",
            example:
              "Example: Circles and triangles floating arbitrarily as background decoration.",
          },
          {
            title: "Let the geometric system overpower text readability.",
            example:
              "Example: Body text overlapping geometric shapes or placed on colored fields without contrast.",
          },
          {
            title:
              "Mix too many type styles—Bauhaus favors typographic restraint.",
            example:
              "Example: A serif headline with a handwritten subtitle and a monospace body.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "An asymmetric hero with a geometric color block, off-center headline, and directional visual flow.",
          doExample:
            "Do: Large headline at 1/3, a bold color circle as visual anchor, and a single CTA.",
          dontExample:
            "Don't: A centered, symmetrical hero with multiple competing geometric elements.",
        },
        {
          title: "Primary Button Set",
          description:
            "Clean geometric buttons with primary-color fills and sans-serif labels.",
          doExample:
            "Do: One filled button in a primary color, one outlined secondary—simple geometric shapes.",
          dontExample:
            "Don't: Rounded pill buttons or buttons with gradient fills that break the geometric system.",
        },
        {
          title: "Feature Cards",
          description:
            "Grid-aligned cards with geometric accents—a colored shape or border accent per card.",
          doExample:
            "Do: Each card has one geometric accent (color bar, circle icon) aligned to the grid.",
          dontExample:
            "Don't: Cards with multiple shapes, mixed colors, and irregular sizing.",
        },
        {
          title: "Form Fields",
          description:
            "Clean rectangular inputs with strong borders and structured label placement.",
          doExample:
            "Do: Square-cornered inputs, bold labels, and a primary-color focus border.",
          dontExample:
            "Don't: Soft, rounded inputs with pastel fills that contradict the geometric precision.",
        },
        {
          title: "Inline Callouts",
          description:
            "Color-blocked callout strips with geometric iconography and concise messaging.",
          doExample:
            "Do: A yellow block with a triangle icon and one line of text—clear and geometric.",
          dontExample:
            "Don't: A soft gradient callout with rounded corners and emoji icons.",
        },
      ],
      accessibility: [
        "Test primary color combinations for WCAG contrast—red on white, blue on yellow, etc.",
        "Ensure geometric decorative elements don't interfere with content reading order.",
        "Provide text alternatives for any compositional elements that convey meaning.",
        "Maintain visible focus indicators that align with the geometric visual language.",
      ],
      componentLibraries: [
        {
          title: "shadcn/ui",
          description:
            "Base component library—customize with primary color tokens and geometric styling.",
          href: "https://github.com/shadcn-ui/ui",
          meta: "React · Tailwind · Radix",
          note: "Not Bauhaus by default; requires custom theme tokens and geometric overrides.",
        },
        {
          title: "Panda CSS",
          description:
            "Zero-runtime CSS-in-JS with token-based design system support—good for compositional styles.",
          href: "https://github.com/chakra-ui/panda",
          meta: "Framework-agnostic · Token-based",
        },
        {
          title: "Open Props",
          description:
            "CSS custom properties library with a geometric spacing and color scale foundation.",
          href: "https://github.com/argyleink/open-props",
          meta: "CSS · Custom Properties",
        },
      ],
      resources: [
        {
          title: "Bauhaus Movement: Overview",
          description:
            "Comprehensive overview of Bauhaus history, principles, and key figures.",
          href: "https://www.theartstory.org/movement/bauhaus/",
        },
        {
          title: "MoMA: Bauhaus Collection",
          description:
            "Museum of Modern Art's Bauhaus collection with original works and design artifacts.",
          href: "https://www.moma.org/collection/works?classifications=bauhaus",
        },
        {
          title: "Josef Albers: Interaction of Color",
          description:
            "Albers' foundational text on color theory—core Bauhaus knowledge for UI color systems.",
          href: "https://yalebooks.yale.edu/book/9780300179354/interaction-of-color/",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Utilitarian UI is a no-frills design approach that prioritizes explicit labels, predictable layouts, and functional clarity above all else—every element is justified by its practical role in helping users complete tasks.",
      intention:
        "Build trust through consistency and predictability. Users should never wonder what something does or where to find it. The interface is a reliable tool, not a visual experience.",
      overview: {
        origin:
          "Rooted in enterprise software (SAP, Oracle), government systems, and military interfaces where error prevention and task completion outweigh aesthetics. The web equivalent emerged in admin panels, support consoles, and compliance-heavy workflows.",
        influences: [
          "Enterprise ERP systems (SAP, Oracle, Salesforce Classic)",
          "Government and public-sector digital services (GOV.UK, USDS)",
          "Terminal and CLI interfaces that prioritize explicitness",
        ],
        modernUsage:
          "Standard for internal tools, admin panels, support consoles, and regulated industries (healthcare, finance, government). Also used in developer-facing tools where users prefer function over form.",
        signals: [
          "Neutral gray palette with minimal color (used only for status and actions)",
          "Explicit text labels on every control—no icon-only buttons",
          "Consistent, predictable layout patterns across all screens",
          "Dense but organized structure with clear section headings",
          "System fonts and standard form controls—no custom styling for its own sake",
        ],
      },
      foundation: {
        definitionDetails: [
          "If something looks like a button, it is a button. Affordances are explicit, not implied.",
          "Every screen follows the same structural template—users learn the layout once.",
        ],
        intentionDetails: [
          "Minimize training time: new users should understand the interface within minutes.",
          "Prevent errors through clear labels, confirmation steps, and predictable behavior.",
          "Support daily operators who use the system for hours—reduce cognitive fatigue.",
        ],
      },
      characteristics: [
        "Neutral gray palette with color reserved for status and primary actions",
        "Explicit text labels on all interactive elements",
        "Predictable, repeatable layout templates across pages",
        "System fonts or standard sans-serif (no decorative typefaces)",
        "Dense but organized—every section has a heading and clear boundaries",
        "Standard HTML form controls with minimal custom styling",
      ],
      bestFor: [
        "Internal tools and admin panels",
        "Support and ticketing consoles",
        "Regulated industries: healthcare, finance, government",
        "Developer-facing tools and configuration interfaces",
      ],
      avoidFor: [
        "Consumer-facing products where delight and brand expression matter",
        "Marketing and campaign pages that need visual personality",
        "Creative or portfolio products where aesthetic is the message",
      ],
      principles: {
        do: [
          {
            title:
              "Label everything explicitly—buttons, fields, sections, and states.",
            example:
              "Example: 'Save Draft' and 'Submit for Review' instead of a floppy-disk icon and a checkmark.",
          },
          {
            title:
              "Use the same layout template across similar pages for predictability.",
            example:
              "Example: Every detail page has: header bar → summary → tabbed content → action footer.",
          },
          {
            title:
              "Reserve color for meaning: blue for primary action, red for destructive, green for success.",
            example:
              "Example: All other UI in gray tones; color only appears on actionable or status elements.",
          },
          {
            title:
              "Provide confirmation for destructive actions—explicit and clear.",
            example:
              "Example: 'Delete this record? This cannot be undone.' with separate Cancel and Delete buttons.",
          },
          {
            title:
              "Keep information density high but organized with clear section headings.",
            example:
              "Example: Fieldset-style groupings with bold section titles and consistent field alignment.",
          },
        ],
        dont: [
          {
            title: "Use icon-only buttons without tooltips or labels.",
            example:
              "Example: A gear icon with no 'Settings' label—users shouldn't have to guess.",
          },
          {
            title: "Change layout patterns between similar pages.",
            example:
              "Example: One detail page uses tabs, another uses accordions, a third uses a single scroll.",
          },
          {
            title:
              "Add decorative elements that don't serve a functional purpose.",
            example:
              "Example: Gradient backgrounds, illustrations, or animated transitions in an ops console.",
          },
          {
            title:
              "Let the neutral palette flatten hierarchy—still differentiate sections.",
            example:
              "Example: All text the same shade of gray with no weight or size variation.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A straightforward page header with the object name, status badge, and primary actions—no decoration.",
          doExample:
            "Do: Object title, status badge, and 'Edit' / 'Delete' buttons right-aligned—functional and clear.",
          dontExample:
            "Don't: A large illustrated banner or gradient hero above the functional content.",
        },
        {
          title: "Primary Button Set",
          description:
            "Standard, labeled buttons with clear hierarchy—filled primary, outlined secondary, text tertiary.",
          doExample:
            "Do: 'Submit' (filled blue), 'Save Draft' (outlined), 'Cancel' (text)—clear hierarchy.",
          dontExample:
            "Don't: Custom-styled buttons with unusual shapes or colors that break expectations.",
        },
        {
          title: "Feature Cards",
          description:
            "Simple bordered panels with a heading, key-value pairs, and an action link—info-card style.",
          doExample:
            "Do: A bordered card with a bold heading, 4–6 labeled fields, and a 'View Details' link.",
          dontExample:
            "Don't: Cards with large images, decorative accents, or mixed visual styles.",
        },
        {
          title: "Form Fields",
          description:
            "Standard form controls with clear labels, help text, and validation—no styling surprises.",
          doExample:
            "Do: Label above, standard input, help text below, red error message on validation failure.",
          dontExample:
            "Don't: Floating labels, custom-styled selects, or icon-only validation indicators.",
        },
        {
          title: "Inline Callouts",
          description:
            "System-style alert bars with an icon, message, and optional action—straightforward and dismissible.",
          doExample:
            "Do: Yellow warning bar: icon + message + 'Learn more' link + dismiss button.",
          dontExample:
            "Don't: A styled toast notification that auto-dismisses before the user reads it.",
        },
      ],
      accessibility: [
        "Use native HTML form controls wherever possible—they have built-in accessibility.",
        "Ensure every interactive element has a visible text label, not just an icon.",
        "Maintain predictable focus order that matches the visual layout.",
        "Test with screen readers—utilitarian UIs often work well since they favor text over visuals.",
      ],
      componentLibraries: [
        {
          title: "GOV.UK Design System",
          description:
            "The UK government's component library—the gold standard for utilitarian, accessible UI.",
          href: "https://github.com/alphagov/govuk-frontend",
          meta: "Nunjucks · CSS · Accessible",
        },
        {
          title: "US Web Design System (USWDS)",
          description:
            "The US government's design system for accessible, standards-based federal websites.",
          href: "https://github.com/uswds/uswds",
          meta: "CSS · Accessible · Government",
        },
        {
          title: "Ant Design",
          description:
            "Enterprise-grade React UI library with comprehensive form, table, and layout components.",
          href: "https://github.com/ant-design/ant-design",
          meta: "React · Enterprise · Comprehensive",
        },
      ],
      resources: [
        {
          title: "GOV.UK Design Principles",
          description:
            "Ten principles that guide utilitarian government design—applicable to any task-first interface.",
          href: "https://www.gov.uk/guidance/government-design-principles",
        },
        {
          title: "NN/g: The Design of Everyday Things (summary)",
          description:
            "Don Norman's principles of affordance, mapping, and feedback that underpin utilitarian design.",
          href: "https://www.nngroup.com/books/design-everyday-things-revised/",
        },
        {
          title: "A11y Project Checklist",
          description:
            "Practical accessibility checklist—utilitarian UIs should pass every item.",
          href: "https://www.a11yproject.com/checklist/",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Rebus UI encodes meaning through symbolic visual fragments—icons, glyphs, and pictographic clusters that invite users to interpret and decode the interface, blending puzzle-like aesthetics with functional design.",
      intention:
        "Create curiosity-driven interfaces that reward attention and pattern recognition. The symbolic layer adds depth and personality while the functional layer ensures usability.",
      overview: {
        origin:
          "Rebus puzzles date back to ancient hieroglyphics and medieval heraldry, where meaning was conveyed through symbolic combination. In digital design, the approach draws from icon-driven interfaces, emoji communication, and visual storytelling in games and interactive media.",
        influences: [
          "Ancient hieroglyphics and pictographic writing systems",
          "Rebus puzzles and symbolic visual communication traditions",
          "Icon-driven interfaces, emoji languages, and visual coding systems",
        ],
        modernUsage:
          "Used in interactive explainers, narrative microsites, educational platforms, branded learning experiences, and puzzle/mystery games. Also seen in creative portfolios and cultural projects that want to engage users beyond surface-level scanning.",
        signals: [
          "Icon clusters and glyph combinations that encode meaning",
          "Dashed outlines and coded tile borders suggesting hidden content",
          "Narrative arrangement—elements tell a story through spatial placement",
          "Muted, enigmatic color palette with selective accent reveals",
          "Layered information: surface icons with deeper text on interaction",
        ],
      },
      foundation: {
        definitionDetails: [
          "Symbols do double duty: they decorate and they communicate. Each icon cluster carries meaning.",
          "The interface has layers: an immediate visual surface and a deeper interpretive layer revealed through interaction.",
        ],
        intentionDetails: [
          "Engage users intellectually—make them active interpreters, not passive scanners.",
          "Use symbolic encoding to create memorable, distinctive interfaces.",
          "Balance mystery with usability: every puzzle has a clear solution path.",
        ],
      },
      characteristics: [
        "Icon clusters and glyph motifs as primary visual elements",
        "Dashed and dotted outlines suggesting encoded or in-progress content",
        "Muted, enigmatic base palette with selective bright reveals",
        "Layered interaction: hover or click to decode symbolic elements",
        "Narrative spatial arrangement—elements read as a visual sequence",
        "Mixed typography: monospace for 'coded' text, serif for decoded content",
      ],
      bestFor: [
        "Interactive explainers and educational microsites",
        "Narrative-driven campaigns and mystery/puzzle experiences",
        "Creative portfolios that want intellectual engagement",
        "Branded learning flows and onboarding with discovery mechanics",
      ],
      avoidFor: [
        "Task-critical interfaces where immediate clarity is paramount",
        "High-frequency-use tools where symbolic decoding adds friction",
        "Accessibility-sensitive contexts where iconography without text fails",
      ],
      principles: {
        do: [
          {
            title: "Pair every symbol with an accessible text equivalent.",
            example:
              "Example: A glyph cluster with a tooltip or adjacent label that reveals the plain meaning.",
          },
          {
            title:
              "Create a consistent symbol vocabulary—the same icon always means the same thing.",
            example:
              "Example: A key glyph always means 'unlock/access,' a compass always means 'navigation.'",
          },
          {
            title:
              "Use progressive reveal: surface layer intrigues, interaction layer clarifies.",
            example:
              "Example: A dashed-outline tile that fills in and reveals content on hover or click.",
          },
          {
            title:
              "Keep the symbol density manageable—too many icons overwhelm interpretation.",
            example:
              "Example: 3–5 symbol clusters per viewport section, each with clear spacing.",
          },
          {
            title:
              "Ground the symbolic layer with clear navigation and functional controls.",
            example:
              "Example: Standard nav bar and buttons, with rebus styling in content areas only.",
          },
        ],
        dont: [
          {
            title:
              "Make critical actions depend on symbol interpretation alone.",
            example:
              "Example: A submit button represented only by an abstract glyph with no text label.",
          },
          {
            title:
              "Use symbols inconsistently—changing meaning per context destroys the puzzle logic.",
            example:
              "Example: A star icon meaning 'favorite' in one section and 'premium' in another.",
          },
          {
            title:
              "Overload the interface with encoded elements—mystery should be selective.",
            example:
              "Example: Every element is a puzzle, making the entire page feel impenetrable.",
          },
          {
            title:
              "Forget to provide a 'plain' fallback for users who can't or won't decode.",
            example:
              "Example: No way to view content without solving the symbolic layer.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A symbolic hero with glyph clusters that resolve into a clear message on interaction.",
          doExample:
            "Do: Icon sequence that animates into readable text, with a clear CTA below.",
          dontExample:
            "Don't: An entirely symbolic hero with no text fallback—users can't decode the page purpose.",
        },
        {
          title: "Primary Button Set",
          description:
            "Buttons with small glyph accents but clear text labels—functional first, symbolic second.",
          doExample:
            "Do: 'Unlock Access' button with a small key glyph—the text carries the meaning.",
          dontExample:
            "Don't: A button that's just a glyph cluster with no text—users won't know what it does.",
        },
        {
          title: "Feature Cards",
          description:
            "Tiles with dashed borders that reveal content on interaction, combining mystery with discovery.",
          doExample:
            "Do: Dashed-outline card with a symbol cluster; on hover, border solidifies and text appears.",
          dontExample:
            "Don't: Cards that remain permanently encoded with no way to read the content.",
        },
        {
          title: "Form Fields",
          description:
            "Input fields with subtle glyph accents—coded labels that resolve into clear guidance.",
          doExample:
            "Do: A monospace label with a glyph prefix that has a tooltip explaining the field.",
          dontExample:
            "Don't: Entirely symbolic form labels with no text—users can't complete the form.",
        },
        {
          title: "Inline Callouts",
          description:
            "Puzzle-box callouts with symbol borders and coded messaging that reveal on interaction.",
          doExample:
            "Do: A dashed-border callout with a glyph motif; clicking reveals the full message.",
          dontExample:
            "Don't: Important system messages encoded in symbols that users might miss.",
        },
      ],
      accessibility: [
        "Every symbolic element must have a text equivalent (aria-label, tooltip, or adjacent text).",
        "Don't gate critical functionality behind symbolic interpretation.",
        "Ensure color is not the only differentiator between encoded and decoded states.",
        "Test with screen readers—the experience should make sense without any visual symbols.",
      ],
      componentLibraries: [
        {
          title: "Phosphor Icons",
          description:
            "Flexible icon family with multiple weights—good for building symbolic visual vocabularies.",
          href: "https://github.com/phosphor-icons/core",
          meta: "SVG · Multiple frameworks · 6 weights",
        },
        {
          title: "Framer Motion",
          description:
            "Animation library for React—essential for progressive reveal and decode transitions.",
          href: "https://github.com/framer/motion",
          meta: "React · Animation · Gesture",
        },
        {
          title: "Lucide Icons",
          description:
            "Clean, consistent icon set that can serve as a base for symbolic UI vocabularies.",
          href: "https://github.com/lucide-icons/lucide",
          meta: "SVG · Multiple frameworks",
        },
      ],
      resources: [
        {
          title: "NN/g: Icon Usability",
          description:
            "Research on when icons work, when they fail, and how to pair them with text labels.",
          href: "https://www.nngroup.com/articles/icon-usability/",
        },
        {
          title: "The Noun Project",
          description:
            "Massive icon library useful for building symbolic visual vocabularies and glyph systems.",
          href: "https://thenounproject.com/",
        },
        {
          title: "Semiotics for Beginners (Daniel Chandler)",
          description:
            "Introduction to the study of signs and symbols—foundational theory for rebus design.",
          href: "https://www.cs.princeton.edu/~chazelle/courses/BIB/semio2.htm",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Pop Art UI translates the visual language of 1960s pop art and comic books into digital interfaces—bold outlines, halftone textures, explosive color pairings, and graphic motifs like speech bubbles that demand attention.",
      intention:
        "Create interfaces that are impossible to scroll past. Use high-energy visual impact to make moments memorable, expressive, and emotionally charged.",
      overview: {
        origin:
          "Pop Art emerged in the 1950s–60s through Warhol, Lichtenstein, and others who elevated mass culture imagery to fine art. Lichtenstein's Ben-Day dots and comic-panel compositions directly inspire the halftone patterns and bold outlines of Pop Art UI.",
        influences: [
          "Roy Lichtenstein's comic-panel compositions and Ben-Day dots",
          "Andy Warhol's high-contrast color repetitions",
          "1960s advertising, comic books, and poster design",
        ],
        modernUsage:
          "Used for campaign launches, event pages, high-energy product drops, entertainment sites, and anywhere maximum visual impact in minimum time is the goal. Popular in music, fashion, and youth-oriented brands.",
        signals: [
          "Halftone dot patterns as textures and gradients",
          "Bold, ink-like contour lines (3–6px black outlines)",
          "Explosive color clashes: hot pink + electric blue, red + yellow",
          "Speech-bubble motifs for callouts and CTAs",
          "Comic-panel grid layouts with action-line accents",
        ],
      },
      foundation: {
        definitionDetails: [
          "Every element is turned up to maximum: outlines are thick, colors are loud, textures are visible.",
          "The style borrows from mass media reproduction—halftones, print registration, and comic-book production aesthetics.",
        ],
        intentionDetails: [
          "Grab attention instantly in high-competition contexts (social feeds, event pages, drops).",
          "Create emotional energy—excitement, urgency, fun—through visual intensity.",
          "Make the interface itself a visual event, not just a container for content.",
        ],
      },
      characteristics: [
        "Halftone dot patterns (CSS radial-gradient or SVG filters)",
        "Thick black contour lines (3–6px) on all key elements",
        "High-saturation, clashing color palette (complementary pairs)",
        "Speech-bubble and burst-shape UI motifs",
        "Comic-panel style grid layouts with gutters",
        "Action lines, starbursts, and exclamation graphics as accents",
      ],
      bestFor: [
        "Campaign launches and product drops",
        "Event pages and countdown experiences",
        "Entertainment, music, and fashion interfaces",
        "Social media landing pages and high-energy showcases",
      ],
      avoidFor: [
        "Long-form reading experiences—the intensity causes fatigue quickly",
        "Enterprise or professional tools where calm credibility matters",
        "Interfaces with dense data where visual noise competes with information",
      ],
      principles: {
        do: [
          {
            title:
              "Commit fully to the style—half-measures look unintentional.",
            example:
              "Example: Thick outlines, full halftone textures, and bold colors everywhere, not just on one card.",
          },
          {
            title:
              "Use speech-bubble motifs for CTAs and callouts—they're inherently attention-grabbing.",
            example:
              "Example: A speech-bubble shaped button with 'POW! Sign Up' in bold text.",
          },
          {
            title:
              "Limit the number of color clashes per viewport—2 to 3 maximum.",
            example:
              "Example: Hot pink + electric blue for one section, red + yellow for the next—not all at once.",
          },
          {
            title: "Use halftone patterns for texture, not for covering text.",
            example:
              "Example: Halftone gradient on a background panel, solid fill behind text.",
          },
          {
            title:
              "Add comic-style hover and click feedback for interactive fun.",
            example:
              "Example: A button that shows 'CLICK!' burst on press with a scale animation.",
          },
        ],
        dont: [
          {
            title:
              "Use Pop Art styling for long-form content—it's a sprint, not a marathon.",
            example:
              "Example: A 3000-word article with halftone backgrounds and neon text throughout.",
          },
          {
            title: "Put halftone patterns under text—it destroys readability.",
            example:
              "Example: Body text directly on a Ben-Day dot background with no solid backing.",
          },
          {
            title: "Stack too many explosive elements without breathing room.",
            example:
              "Example: Speech bubbles, starbursts, action lines, and halftones all in one card.",
          },
          {
            title:
              "Forget contrast checks—loud colors often fail WCAG on each other.",
            example:
              "Example: Yellow text on a hot pink background—high energy but unreadable.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A comic-panel hero with thick outlines, halftone background, and a speech-bubble CTA.",
          doExample:
            "Do: Bold headline with thick outline, halftone gradient background, speech-bubble 'Join Now!' CTA.",
          dontExample:
            "Don't: A subtle gradient hero with thin text—it contradicts the style entirely.",
        },
        {
          title: "Primary Button Set",
          description:
            "Thick-outlined buttons with bold fills and comic-style pressed states.",
          doExample:
            "Do: 4px black outline, bright fill, 'KAPOW' burst on click, clear text label.",
          dontExample:
            "Don't: Soft, rounded buttons with pastel fills and no outline.",
        },
        {
          title: "Feature Cards",
          description:
            "Comic-panel style cards with thick borders, halftone accents, and bold titles.",
          doExample:
            "Do: Thick black border, halftone accent corner, bold headline, short tagline.",
          dontExample:
            "Don't: Borderless cards with subtle shadows—invisible in the pop art context.",
        },
        {
          title: "Form Fields",
          description:
            "Bold-bordered inputs with speech-bubble labels and high-contrast validation states.",
          doExample:
            "Do: Thick border, bold label, bright focus outline, error state with a burst icon.",
          dontExample:
            "Don't: Thin, subtle inputs that get lost against the visual intensity of the page.",
        },
        {
          title: "Inline Callouts",
          description:
            "Speech-bubble or starburst callouts for announcements and alerts.",
          doExample:
            "Do: A speech-bubble callout with bold text and a bright fill—'NEW! Check this out!'",
          dontExample:
            "Don't: A quiet gray info bar that's invisible next to the surrounding pop art elements.",
        },
      ],
      accessibility: [
        "Test all color pairings for WCAG 1.4.3 contrast—bright combinations often fail.",
        "Ensure halftone patterns don't interfere with text legibility—use solid backing behind text.",
        "Respect prefers-reduced-motion for any comic-style burst animations.",
        "Provide text alternatives for any decorative speech-bubble or starburst elements that carry meaning.",
      ],
      componentLibraries: [
        {
          title: "Comic Mono (Font)",
          description:
            "A legible monospace font with comic-book personality—good for code blocks in pop art contexts.",
          href: "https://github.com/dtinth/comic-mono-font",
          meta: "Font · Monospace · Comic style",
        },
        {
          title: "CSS Halftone Patterns",
          description:
            "CSS-only halftone pattern generators using radial gradients—no image assets needed.",
          href: "https://css-pattern.com/",
          meta: "CSS · Patterns · No dependencies",
        },
        {
          title: "Framer Motion",
          description:
            "Animation library for the burst, bounce, and pop interactions that define pop art UI.",
          href: "https://github.com/framer/motion",
          meta: "React · Animation",
        },
      ],
      resources: [
        {
          title: "MoMA: Pop Art",
          description:
            "Museum of Modern Art's overview of the Pop Art movement and its key artists.",
          href: "https://www.moma.org/collection/terms/pop-art",
        },
        {
          title: "Roy Lichtenstein Foundation",
          description:
            "Archive of Lichtenstein's work—the primary visual reference for comic-style UI.",
          href: "https://lichtensteinfoundation.org/",
        },
        {
          title: "Halftone Pattern CSS Generator",
          description:
            "Tool for generating Ben-Day dot patterns in CSS for pop art texture effects.",
          href: "https://css-pattern.com/",
        },
      ],
    },
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
    deepDive: {
      definition:
        "Memphis UI draws from the 1980s Memphis Group's postmodern design movement, combining geometric confetti, bold pattern layering, unexpected color clashes, and playful asymmetry to create interfaces that reject minimalist restraint in favor of joyful maximalism.",
      intention:
        "Signal creativity, irreverence, and experimental energy. The interface should feel like a celebration—visually rich, unapologetically decorative, and impossible to confuse with anything corporate.",
      overview: {
        origin:
          "The Memphis Group was founded in Milan in 1981 by Ettore Sottsass and a collective of designers who rejected the seriousness of modernism. Their furniture and graphics used clashing colors, geometric patterns, and playful forms that shocked the design establishment. The aesthetic experienced a major revival in the 2010s–2020s in digital design.",
        influences: [
          "Memphis Group (Ettore Sottsass, 1981) furniture and graphic design",
          "1980s postmodern architecture and pattern design",
          "Geometric abstraction and Op Art pattern systems",
        ],
        modernUsage:
          "Used by creative studios, youth brands, music and event platforms, and experimental portfolios. Popular for brand hubs, creative tool marketing, and any product that needs to signal 'we don't follow the rules.'",
        signals: [
          "Geometric confetti: scattered triangles, circles, squiggles, and zigzags",
          "Bold pattern fills (checkerboards, stripes, dots) on surfaces and backgrounds",
          "Unexpected color combinations—not harmonious, intentionally clashing",
          "Playful asymmetric layouts that feel dynamic, not broken",
          "Thick outlines mixed with pattern-filled shapes",
        ],
      },
      foundation: {
        definitionDetails: [
          "Decoration is the content: patterns, shapes, and color aren't just accents—they're the identity.",
          "Rules are made to be broken: asymmetry, clashing colors, and layered patterns are features, not bugs.",
        ],
        intentionDetails: [
          "Make the interface visually unforgettable—distinguish from every minimalist competitor.",
          "Communicate creative confidence and experimental thinking through visual maximalism.",
          "Create an emotional response: joy, surprise, energy—not just functional satisfaction.",
        ],
      },
      characteristics: [
        "Geometric confetti elements (triangles, circles, squiggles) as decoration",
        "Pattern-filled surfaces: checkerboards, stripes, dots, zigzags",
        "Intentionally clashing color combinations (pink + teal + yellow + black)",
        "Playful asymmetric compositions with dynamic visual energy",
        "Thick outlines on some elements, none on others—inconsistency is intentional",
        "Mixed typography: different weights, styles, and sizes for expressive hierarchy",
      ],
      bestFor: [
        "Creative studio and agency websites",
        "Youth-oriented brands and products",
        "Music, event, and festival platforms",
        "Experimental portfolios and art-adjacent projects",
      ],
      avoidFor: [
        "Enterprise software or professional tools where credibility is key",
        "Long-form reading experiences where decoration distracts from content",
        "Accessibility-critical interfaces where pattern density creates cognitive overload",
      ],
      principles: {
        do: [
          {
            title:
              "Establish hierarchy even within the maximalism—one element leads per section.",
            example:
              "Example: A large headline anchors the section while confetti and patterns play supporting roles.",
          },
          {
            title:
              "Use confetti and patterns in background layers, not over text.",
            example:
              "Example: Geometric shapes behind and around content cards, not overlapping body text.",
          },
          {
            title:
              "Let color clashes be intentional—pick 4–5 colors and commit to them.",
            example:
              "Example: Pink, teal, yellow, black, and white—used consistently across the entire site.",
          },
          {
            title:
              "Mix pattern types within a palette constraint for controlled chaos.",
            example:
              "Example: Checkerboard on one card, stripes on another, dots on a third—all in the same 5 colors.",
          },
          {
            title:
              "Give interactive elements enough contrast and size to be findable.",
            example:
              "Example: CTAs in solid black or bright fill, large enough to stand out from the pattern noise.",
          },
        ],
        dont: [
          {
            title: "Let patterns cover everything with no breathing room.",
            example:
              "Example: Checkerboard background + striped cards + dotted buttons + zigzag borders—total overload.",
          },
          {
            title:
              "Use so many colors that the palette feels random rather than intentional.",
            example:
              "Example: 12 different hues across one page with no repetition or pattern.",
          },
          {
            title: "Sacrifice text readability for decorative impact.",
            example:
              "Example: Body text on a checkerboard pattern with no solid backing.",
          },
          {
            title:
              "Apply Memphis decoration to data-heavy or form-heavy interfaces.",
            example:
              "Example: A registration form with confetti overlays and zigzag input borders.",
          },
        ],
      },
      patternExamples: [
        {
          title: "Hero Callout",
          description:
            "A maximalist hero with confetti shapes, pattern-filled background zones, and a bold headline.",
          doExample:
            "Do: Large bold headline on a solid color block, confetti shapes floating in the margins, one clear CTA.",
          dontExample:
            "Don't: Text directly on a pattern-filled background with confetti overlapping the headline.",
        },
        {
          title: "Primary Button Set",
          description:
            "Bold, filled buttons with thick outlines—large enough to compete with the surrounding decoration.",
          doExample:
            "Do: Solid bright fill, thick black outline, clear text label, large enough to anchor the section.",
          dontExample:
            "Don't: Small, subtle buttons that disappear against the geometric noise.",
        },
        {
          title: "Feature Cards",
          description:
            "Cards with individual pattern treatments—each card has a different pattern accent but consistent structure.",
          doExample:
            "Do: White card with a striped accent bar, another with a dotted accent, a third with checkerboard—all same size.",
          dontExample:
            "Don't: Cards entirely filled with different patterns, making content unreadable.",
        },
        {
          title: "Form Fields",
          description:
            "Clean inputs on a solid background with pattern accents in surrounding decorative zones.",
          doExample:
            "Do: Standard inputs on a white form card, with confetti shapes decorating the card's margins.",
          dontExample:
            "Don't: Inputs on patterned backgrounds with zigzag borders—functional elements need calm zones.",
        },
        {
          title: "Inline Callouts",
          description:
            "Bright-filled callout strips with geometric shape accents and bold typography.",
          doExample:
            "Do: A pink callout bar with a triangle accent, bold text, and clear action link.",
          dontExample:
            "Don't: A callout with pattern fill, confetti overlay, and small text—unreadable.",
        },
      ],
      accessibility: [
        "Ensure text is always on solid backgrounds, never directly on patterns.",
        "Test all color clash combinations for WCAG contrast compliance.",
        "Provide prefers-reduced-motion alternatives for animated confetti or shape movements.",
        "Don't let decorative elements receive focus or interfere with keyboard navigation order.",
      ],
      componentLibraries: [
        {
          title: "CSS Pattern Library",
          description:
            "Pure CSS geometric patterns (checkerboards, stripes, dots) for Memphis-style surface fills.",
          href: "https://css-pattern.com/",
          meta: "CSS · Patterns · No dependencies",
        },
        {
          title: "Framer Motion",
          description:
            "Animation library for floating confetti, shape transitions, and playful micro-interactions.",
          href: "https://github.com/framer/motion",
          meta: "React · Animation",
        },
        {
          title: "shadcn/ui",
          description:
            "Clean base components to customize with Memphis colors and pattern accents.",
          href: "https://github.com/shadcn-ui/ui",
          meta: "React · Tailwind · Radix",
          note: "Requires heavy custom styling for Memphis aesthetic; use as a structural base.",
        },
      ],
      resources: [
        {
          title: "Design Museum: Memphis",
          description:
            "Overview of the Memphis Group's history, philosophy, and key works.",
          href: "https://designmuseum.org/discover-design/all-stories/what-was-the-memphis-group",
        },
        {
          title: "It's Nice That: Memphis Design Revival",
          description:
            "Coverage of the Memphis design revival in contemporary graphic and digital design.",
          href: "https://www.itsnicethat.com/",
        },
        {
          title: "CSS-Tricks: Geometric Pattern Backgrounds",
          description:
            "Techniques for creating geometric pattern backgrounds with pure CSS.",
          href: "https://css-tricks.com/background-patterns-simplified-by-conic-gradients/",
        },
      ],
    },
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
