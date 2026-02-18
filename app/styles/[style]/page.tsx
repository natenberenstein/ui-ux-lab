import { notFound } from "next/navigation";

import { StyleDetailPageContent } from "@/components/styles/style-detail-page-content";
import {
  getStyleProfileBySlug,
  styleSlugs,
} from "@/components/styles/style-profiles";

type Params = {
  style: string;
};

export function generateStaticParams() {
  return styleSlugs.map((style) => ({ style }));
}

export default function StyleDetailPage({ params }: { params: Params }) {
  const profile = getStyleProfileBySlug(params.style);

  if (!profile) {
    notFound();
  }

  return <StyleDetailPageContent profile={profile} />;
}
