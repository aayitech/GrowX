import { notFound } from "next/navigation";

import PortfolioCaseStudy from "@/components/portfolio/portfolio-casestudy/PortfolioCaseStudy";
import { getPortfolioCaseStudy } from "@/components/portfolio/portfolio-casestudy/data";

interface PortfolioCaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioCaseStudyPage({
  params,
}: PortfolioCaseStudyPageProps) {
  const { slug } = await params;

  const study = getPortfolioCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <PortfolioCaseStudy study={study} />;
}