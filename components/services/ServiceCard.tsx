import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Search,
  ShoppingBag,
  Store,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: "amazon" | "tiktok" | "wayfair" | "ppc" | "seo";
  features: string[];
  deliverables: string[];
  outcomes: string[];
  slug: string;
}

interface ServiceCardProps {
  service: Service;
}

/* GrowX Services */
export const services: Service[] = [
  {
    title: "Amazon Marketplace Management",
    description:
      "Manage and optimize your Amazon presence with a focused approach to marketplace performance, visibility, and sustainable growth.",
    icon: "amazon",
    features: [
      "Account management",
      "Marketplace optimization",
      "Performance monitoring",
    ],
    deliverables: [
      "Account-health and compliance monitoring",
      "Catalogue, variation, and listing management",
      "Keyword research and Amazon SEO improvements",
      "Product-content and conversion optimisation",
      "Inventory and order-performance monitoring",
      "Regular account-performance reporting",
    ],
    outcomes: [
      "A more visible and conversion-ready catalogue",
      "Clearer account priorities and performance insight",
      "Reliable day-to-day marketplace support",
    ],
    slug: "amazon-marketplace-management",
  },

  {
    title: "TikTok Shop Growth",
    description:
      "Build and grow your TikTok Shop with optimized product presentation, marketplace strategy, and ongoing account support.",
    icon: "tiktok",
    features: [
      "Shop optimization",
      "Product optimization",
      "Growth strategy",
    ],
    deliverables: [
      "Shop setup, structure, and ongoing management",
      "Product catalogue and listing optimisation",
      "Product presentation for social commerce",
      "Promotions, campaigns, and affiliate support",
      "Shop analytics and sales-performance tracking",
      "Growth planning based on live shop data",
    ],
    outcomes: [
      "A stronger, easier-to-shop TikTok storefront",
      "Improved product discoverability and presentation",
      "A practical roadmap for sustained shop growth",
    ],
    slug: "tiktok-shop-growth",
  },

  {
    title: "Wayfair Seller Optimization",
    description:
      "Improve your Wayfair marketplace presence with better product visibility, catalog optimization, and seller account management.",
    icon: "wayfair",
    features: [
      "Seller optimization",
      "Catalog management",
      "Marketplace performance",
    ],
    deliverables: [
      "Catalogue structure and product-data improvements",
      "Product titles, attributes, and content optimisation",
      "Seller-account and performance monitoring",
      "Inventory, pricing, and availability checks",
      "Promotions and visibility opportunities",
      "Regular marketplace-performance reporting",
    ],
    outcomes: [
      "More complete and discoverable product information",
      "A better-managed Wayfair seller account",
      "Clearer visibility of sales and catalogue performance",
    ],
    slug: "wayfair-seller-optimization",
  },

  {
    title: "PPC & Ads Management",
    description:
      "Build and optimize marketplace advertising campaigns designed to improve visibility, control spending, and drive stronger returns.",
    icon: "ppc",
    features: [
      "Campaign management",
      "Ad optimization",
      "Performance tracking",
    ],
    deliverables: [
      "Campaign structure and targeting strategy",
      "Keyword, product, and audience targeting",
      "Budget pacing and bid optimisation",
      "Search-term analysis and negative targeting",
      "Performance tracking against agreed goals",
      "Clear reporting with next-step recommendations",
    ],
    outcomes: [
      "Better control over advertising spend",
      "More relevant traffic to priority products",
      "Decisions guided by campaign performance data",
    ],
    slug: "ppc-ads-management",
  },

  {
    title: "Listing & SEO Optimization",
    description:
      "Turn product listings into stronger growth assets with optimized content, search visibility, and conversion-focused improvements.",
    icon: "seo",
    features: [
      "Listing optimization",
      "Keyword optimization",
      "SEO-focused content",
    ],
    deliverables: [
      "Keyword research matched to marketplace search intent",
      "Product-title and description improvements",
      "Structured feature bullets and product information",
      "Search-term and category optimisation",
      "Content recommendations for stronger conversion",
      "Ongoing listing-quality checks and updates",
    ],
    outcomes: [
      "Clearer product messaging for shoppers",
      "Stronger search relevance and discoverability",
      "Listings built to support conversion as well as traffic",
    ],
    slug: "listing-seo-optimization",
  },
];

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const iconClass = "h-6 w-6 text-[#7B3FF2]";

  switch (icon) {
    case "amazon":
      return <ShoppingBag className={iconClass} />;

    case "tiktok":
      return <Store className={iconClass} />;

    case "wayfair":
      return <Store className={iconClass} />;

    case "ppc":
      return <Megaphone className={iconClass} />;

    case "seo":
      return <Search className={iconClass} />;

    default:
      return <BarChart3 className={iconClass} />;
  }
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7B3FF2]/20 hover:shadow-xl sm:p-7">

      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7B3FF2]/10 transition-colors duration-300 group-hover:bg-[#7B3FF2]">
        <div className="transition-colors duration-300 group-hover:[&_svg]:text-white">
          <ServiceIcon icon={service.icon} />
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-6 font-poppins text-xl font-bold leading-tight text-[#151515] sm:text-2xl">
        {service.title}
      </h2>

      {/* Description */}
      <p className="mt-3 font-inter text-sm leading-6 text-black/60 sm:text-base">
        {service.description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 font-inter text-sm text-black/60"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B3FF2]" />

            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-7">
        <Link
          href={`/services/${service.slug}`}
          className="group/link inline-flex items-center gap-2 font-poppins text-sm font-bold text-[#7B3FF2] transition-colors hover:text-[#4B1FD4]"
        >
          Learn More

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
