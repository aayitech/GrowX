import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export interface CaseStudy {
  title: string;
  clientType: string;
  platform: "Amazon" | "TikTok Shop" | "Wayfair";
  category: string;
  summary: string;

  results: {
    label: string;
    value: string;
  }[];

  image?: string;
  beforeImage?: string;
  afterImage?: string;

  slug?: string;
}

/* Real Portfolio Case Studies */
export const caseStudies: CaseStudy[] = [
  {
    title: "TikTok Shop Germany",
    clientType: "Ecommerce Brand",
    platform: "TikTok Shop",
    category: "Marketplace Growth",
    summary:
      "Improved TikTok Shop Germany performance across GMV, orders, customers, and items sold, with strong affiliate-driven sales activity.",
    results: [
      {
        label: "GMV Growth",
        value: "+75.73%",
      },
      {
        label: "Orders Growth",
        value: "+85.68%",
      },
    ],
    image: "/portfolio/tiktok-germany/1.png",
    slug: "tiktok-germany",
  },

  {
    title: "TikTok Shop UK",
    clientType: "Ecommerce Brand",
    platform: "TikTok Shop",
    category: "Marketplace Growth",
    summary:
      "Managed TikTok Shop UK performance across shop analytics and creator affiliate activity, with measurable marketplace sales and content performance.",
    results: [
      {
        label: "March GMV",
        value: "£129.5K",
      },
      {
        label: "March Orders",
        value: "5,353",
      },
    ],
    image: "/portfolio/tiktok-uk/1.png",
    slug: "tiktok-uk",
  },

  {
    title: "Wayfair Marketplace Growth",
    clientType: "Home & Furniture",
    platform: "Wayfair",
    category: "Seller Optimization",
    summary:
      "Improved Wayfair marketplace performance across revenue, orders, units sold, customer visits, and conversion activity.",
    results: [
      {
        label: "Annual Revenue",
        value: "£146.4K",
      },
      {
        label: "Customer Visits",
        value: "198K",
      },
    ],
    image: "/portfolio/wayfair-sale/1.png",
    slug: "wayfair-sale",
  },
];

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({
  study,
}: CaseStudyCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Visual */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#FAFAFA]">

        {study.image ? (
          <Image
            src={study.image}
            alt={`${study.title} case study`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : study.beforeImage || study.afterImage ? (
          <div className="grid h-full grid-cols-2">

            {study.beforeImage && (
              <div className="relative overflow-hidden">
                <Image
                  src={study.beforeImage}
                  alt={`${study.title} before`}
                  fill
                  className="object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-[#151515]/80 px-3 py-1 font-inter text-xs font-medium text-white">
                  Before
                </span>
              </div>
            )}

            {study.afterImage && (
              <div className="relative overflow-hidden">
                <Image
                  src={study.afterImage}
                  alt={`${study.title} after`}
                  fill
                  className="object-cover"
                />

                <span className="absolute right-4 top-4 rounded-full bg-[#7B3FF2] px-3 py-1 font-inter text-xs font-medium text-white">
                  After
                </span>
              </div>
            )}

          </div>
        ) : null}

        {/* Platform */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-white px-4 py-2 font-poppins text-xs font-bold text-[#151515] shadow-md">
            {study.platform}
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">

        {/* Category */}
        <div className="mb-3 flex items-center gap-2">

          <span className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-[#7B3FF2]">
            {study.category}
          </span>

          <span className="h-1 w-1 rounded-full bg-black/20" />

          <span className="font-inter text-xs text-black/50">
            {study.clientType}
          </span>

        </div>

        {/* Title */}
        <h3 className="font-poppins text-xl font-bold leading-tight text-[#151515] sm:text-2xl">
          {study.title}
        </h3>

        {/* Summary */}
        <p className="mt-3 font-inter text-sm leading-6 text-black/60 sm:text-base">
          {study.summary}
        </p>

        {/* Results */}
        {study.results.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3">

            {study.results.map((result) => (
              <div
                key={`${result.label}-${result.value}`}
                className="rounded-2xl bg-[#FAFAFA] p-4"
              >

                <div className="mb-2 flex items-center gap-2">

                  <TrendingUp className="h-4 w-4 text-[#7B3FF2]" />

                  <span className="font-inter text-xs font-medium text-black/50">
                    {result.label}
                  </span>

                </div>

                <p className="font-poppins text-xl font-extrabold text-[#151515]">
                  {result.value}
                </p>

              </div>
            ))}

          </div>
        )}

        {/* CTA */}
        {study.slug && (
          <div className="mt-6 border-t border-black/5 pt-5">

            <Link
              href={`/portfolio/${study.slug}`}
              className="group/link inline-flex items-center gap-2 font-poppins text-sm font-bold text-[#7B3FF2] transition-colors hover:text-[#4B1FD4]"
            >
              View Case Study

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>

          </div>
        )}

      </div>
    </article>
  );
}