import { notFound } from "next/navigation";

import {
  categoryOrder,
  type PatternCategory,
} from "@/components/patterns/patterns-data";
import { PatternTopicPageContent } from "@/components/patterns/pattern-topic-page-content";

type Params = {
  category: string;
};

function isPatternCategory(value: string): value is PatternCategory {
  return categoryOrder.includes(value as PatternCategory);
}

export function generateStaticParams() {
  return categoryOrder.map((category) => ({ category }));
}

export default function PatternTopicPage({ params }: { params: Params }) {
  if (!isPatternCategory(params.category)) {
    notFound();
  }

  return <PatternTopicPageContent category={params.category} />;
}
