export type PortfolioPlatform =
  | "Amazon"
  | "TikTok Shop"
  | "Wayfair"
  | "Walmart";

export interface CaseStudyMetric {
  value: string;
  label: string;
  description?: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudySection {
  eyebrow?: string;
  title: string;
  description?: string;
  images?: CaseStudyImage[];
}

export interface PortfolioCaseStudy {
  slug: string;
  title: string;
  clientType: string;
  platform: PortfolioPlatform;
  category: string;

  intro: string;

  overview: {
    title: string;
    description: string;
  };

  keyResults: CaseStudyMetric[];

  performance?: CaseStudyMetric[];

  additionalMetrics?: CaseStudyMetric[];

  sections?: CaseStudySection[];

  images: CaseStudyImage[];
}
