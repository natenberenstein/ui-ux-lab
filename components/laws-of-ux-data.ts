import type { ComponentType } from "react";
import {
  MousePointer,
  List,
  Globe,
  BrainCircuit,
  ShieldCheck,
  PartyPopper,
  Sparkles,
  Highlighter,
  SlidersHorizontal,
  Timer,
  Hourglass,
  CircleDot,
  SquareDashedBottom,
  Group,
  Shapes,
  Blend,
  Link2,
  ListOrdered,
  Scissors,
  BarChart3
} from "lucide-react";

export type LawCategory = "heuristic" | "gestalt" | "principle";

export type LawOfUX = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  category: LawCategory;
  oneLiner: string;
  description: string;
  keyTakeaway: string;
  source: string;
};

export const lawsOfUX: LawOfUX[] = [
  // ── Heuristic (10) ──
  {
    title: "Fitts's Law",
    icon: MousePointer,
    category: "heuristic",
    oneLiner: "Larger, closer targets are faster to reach and click.",
    description:
      "The time to acquire a target is a function of the distance to and size of the target. Interactive elements should be large enough to select accurately and placed where users expect them.",
    keyTakeaway: "Make primary actions large and position them near likely cursor locations.",
    source: "Paul Fitts, 1954"
  },
  {
    title: "Hick's Law",
    icon: List,
    category: "heuristic",
    oneLiner: "More choices increase the time needed to make a decision.",
    description:
      "Decision time increases logarithmically with the number of options. Simplify choices by breaking complex tasks into smaller steps and categorizing options into digestible groups.",
    keyTakeaway: "Reduce visible options and use progressive disclosure to manage complexity.",
    source: "William Hick & Ray Hyman, 1952"
  },
  {
    title: "Jakob's Law",
    icon: Globe,
    category: "heuristic",
    oneLiner: "Users prefer interfaces that work like ones they already know.",
    description:
      "Users spend most of their time on other sites and apps, so they develop expectations based on those experiences. Leveraging familiar conventions reduces learning curves and cognitive friction.",
    keyTakeaway: "Follow established design patterns unless there is a strong, validated reason to deviate.",
    source: "Jakob Nielsen, 2000"
  },
  {
    title: "Miller's Law",
    icon: BrainCircuit,
    category: "heuristic",
    oneLiner: "People can hold about 7 items in working memory at once.",
    description:
      "The average person can keep roughly seven (plus or minus two) items in working memory. Chunking information into smaller groups makes content easier to process, memorize, and recall.",
    keyTakeaway: "Chunk content into groups of 5-9 and use formatting to aid scanning.",
    source: "George A. Miller, 1956"
  },
  {
    title: "Postel's Law",
    icon: ShieldCheck,
    category: "heuristic",
    oneLiner: "Be liberal in what you accept, strict in what you output.",
    description:
      "Also known as the Robustness Principle, this law advises accepting a wide range of user inputs while producing consistent, predictable outputs. Flexible inputs reduce user frustration and errors.",
    keyTakeaway: "Accept varied input formats gracefully and normalize them behind the scenes.",
    source: "Jon Postel, 1980"
  },
  {
    title: "Peak-End Rule",
    icon: PartyPopper,
    category: "heuristic",
    oneLiner: "People judge experiences by their peak moment and final moment.",
    description:
      "Users primarily remember the most intense point of an experience and its conclusion, rather than the sum of every moment. Investing in a positive ending and a delightful peak lifts overall perception.",
    keyTakeaway: "Design celebratory moments at completion and smooth over pain points at the end.",
    source: "Daniel Kahneman, 1993"
  },
  {
    title: "Doherty Threshold",
    icon: Timer,
    category: "heuristic",
    oneLiner: "System responses under 400ms keep users engaged and productive.",
    description:
      "Productivity soars when a computer and its users interact at a pace that ensures neither has to wait on the other. A 400ms response time is the threshold below which interactions feel instantaneous.",
    keyTakeaway: "Provide feedback within 400ms — use loading indicators when processing takes longer.",
    source: "Walter Doherty & Ahrvind Thadani, 1982"
  },
  {
    title: "Parkinson's Law",
    icon: Hourglass,
    category: "heuristic",
    oneLiner: "Tasks expand to fill the time available for their completion.",
    description:
      "Without constraints, users will take longer to complete a task than necessary. Introducing reasonable time constraints and progress indicators can improve efficiency and reduce abandonment.",
    keyTakeaway: "Set clear deadlines or constraints to encourage timely task completion.",
    source: "Cyril Northcote Parkinson, 1955"
  },
  {
    title: "Zeigarnik Effect",
    icon: CircleDot,
    category: "heuristic",
    oneLiner: "Incomplete tasks are remembered better than completed ones.",
    description:
      "People are more likely to remember and feel compelled to finish tasks they have already started. Progress indicators and incomplete checklists motivate users to return and complete a flow.",
    keyTakeaway: "Show progress and leave breadcrumbs for incomplete tasks to drive re-engagement.",
    source: "Bluma Zeigarnik, 1927"
  },
  {
    title: "Serial Position Effect",
    icon: ListOrdered,
    category: "heuristic",
    oneLiner: "Items at the start and end of a list are recalled best.",
    description:
      "Users tend to remember the first (primacy) and last (recency) items in a series more easily than middle items. Place the most important actions or content at the beginning and end of lists or navigation.",
    keyTakeaway: "Position key items at the beginning and end of lists, menus, and navigation bars.",
    source: "Hermann Ebbinghaus, 1885"
  },

  // ── Gestalt (5) ──
  {
    title: "Common Region",
    icon: SquareDashedBottom,
    category: "gestalt",
    oneLiner: "Elements within a shared boundary are perceived as grouped.",
    description:
      "Enclosing elements inside a visible boundary — such as a card, box, or background color — causes users to perceive them as a single functional unit. This supports scannability and grouping.",
    keyTakeaway: "Use cards, borders, or background fills to visually group related content.",
    source: "Stephen Palmer, 1992"
  },
  {
    title: "Proximity",
    icon: Group,
    category: "gestalt",
    oneLiner: "Objects near each other are perceived as belonging together.",
    description:
      "Physical closeness implies a relationship between elements. Adjusting whitespace between items is one of the most powerful tools to communicate structure without extra visual elements.",
    keyTakeaway: "Use consistent spacing to signal relationships — close for related, far for distinct.",
    source: "Max Wertheimer, 1923"
  },
  {
    title: "Pr\u00e4gnanz",
    icon: Shapes,
    category: "gestalt",
    oneLiner: "People interpret ambiguous images in the simplest way possible.",
    description:
      "Also called the Law of Good Figure, this principle states the human eye prefers to perceive simple, regular forms over complex ones. Simpler designs are processed faster and feel more intuitive.",
    keyTakeaway: "Simplify visual elements to their most basic forms to aid quick comprehension.",
    source: "Max Wertheimer, 1923"
  },
  {
    title: "Similarity",
    icon: Blend,
    category: "gestalt",
    oneLiner: "Visually similar elements are perceived as part of the same group.",
    description:
      "Elements sharing color, shape, size, or orientation are naturally grouped in perception. Consistent visual treatment helps users understand which items share a function or category.",
    keyTakeaway: "Use consistent visual properties (color, shape, size) to indicate shared function.",
    source: "Max Wertheimer, 1923"
  },
  {
    title: "Uniform Connectedness",
    icon: Link2,
    category: "gestalt",
    oneLiner: "Connected elements are seen as more related than unconnected ones.",
    description:
      "Lines, arrows, or other visual connectors between elements create a strong perception of relationship, even overriding proximity or similarity. This is powerful for showing flows and hierarchies.",
    keyTakeaway: "Use lines or connectors to explicitly show relationships between elements.",
    source: "Stephen Palmer & Irvin Rock, 1994"
  },

  // ── Principle (5) ──
  {
    title: "Aesthetic-Usability Effect",
    icon: Sparkles,
    category: "principle",
    oneLiner: "Attractive designs are perceived as easier to use than ugly ones.",
    description:
      "Users are more tolerant of minor usability issues in aesthetically pleasing interfaces. A polished visual design creates a positive emotional response that increases perceived usability and trust.",
    keyTakeaway: "Invest in visual polish — it buys forgiveness for small friction points.",
    source: "Masaaki Kurosu & Kaori Kashimura, 1995"
  },
  {
    title: "Von Restorff Effect",
    icon: Highlighter,
    category: "principle",
    oneLiner: "The item that stands out visually is the most memorable.",
    description:
      "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered. Use this to make important actions, warnings, or calls-to-action visually distinct.",
    keyTakeaway: "Visually differentiate the most important element to ensure it is noticed and recalled.",
    source: "Hedwig von Restorff, 1933"
  },
  {
    title: "Tesler's Law",
    icon: SlidersHorizontal,
    category: "principle",
    oneLiner: "Every system has irreducible complexity that cannot be removed.",
    description:
      "Also known as the Law of Conservation of Complexity, it states that complexity can be shifted between the system and the user, but never eliminated. The question is who should bear that burden.",
    keyTakeaway: "Absorb complexity in the system so users face the simplest possible interface.",
    source: "Larry Tesler, mid-1980s"
  },
  {
    title: "Occam's Razor",
    icon: Scissors,
    category: "principle",
    oneLiner: "The simplest solution that works is usually the best choice.",
    description:
      "Among competing hypotheses or designs, prefer the one with the fewest assumptions and moving parts. Eliminating unnecessary elements reduces cognitive load and potential points of failure.",
    keyTakeaway: "Remove unnecessary steps, fields, and options — simplicity wins.",
    source: "William of Ockham, ~1320"
  },
  {
    title: "Pareto Principle",
    icon: BarChart3,
    category: "principle",
    oneLiner: "Roughly 80% of effects come from 20% of the causes.",
    description:
      "In most products a small number of features drive the majority of value. Identify and optimize the critical 20% of features that produce 80% of user outcomes, rather than spreading effort equally.",
    keyTakeaway: "Focus design energy on the few features that deliver most of the user value.",
    source: "Vilfredo Pareto, 1896"
  }
];
