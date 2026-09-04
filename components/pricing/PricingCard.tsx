import {
  Check,
} from "lucide-react";

export interface PricingFeature {
  label: string;
  starter: string;
  growth: string;
  premium: string;
}

export interface PricingPlan {
  name: "Starter" | "Growth" | "Premium";
  price: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  { name: "Starter", price: "£500 / Month" },
  { name: "Growth", price: "£750 / Month", popular: true },
  { name: "Premium", price: "£1,000 / Month" },
];

export const pricingFeatures: PricingFeature[] = [
  {
    label: "Account Management",
    starter: "✓",
    growth: "✓",
    premium: "✓",
  },
  {
    label: "Product Listing & Optimization",
    starter: "Up to 10",
    growth: "Up to 25",
    premium: "Up to 50",
  },
  {
    label: "Product Graphics",
    starter: "10",
    growth: "25",
    premium: "50",
  },
  ...[
    "SEO Optimization",
    "Product Title & Description",
    "Order Management",
    "Inventory Monitoring",
  ].map((label) => ({ label, starter: "✓", growth: "✓", premium: "✓" })),
  {
    label: "Store Management",
    starter: "Basic",
    growth: "Full",
    premium: "Full",
  },
  {
    label: "Customer Support",
    starter: "✓",
    growth: "✓",
    premium: "Priority",
  },
  ...[
    "Promotions & Deals",
    "Competitor Research",
    "Sales Growth Strategy",
  ].map((label) => ({ label, starter: "—", growth: "✓", premium: "✓" })),
  {
    label: "PPC / Ads Management",
    starter: "—",
    growth: "—",
    premium: "✓",
  },
  {
    label: "Performance Report",
    starter: "Monthly",
    growth: "Weekly",
    premium: "Weekly",
  },
  {
    label: "Dedicated Account Manager",
    starter: "—",
    growth: "✓",
    premium: "✓",
  },
];

export default function PricingCard({ feature }: { feature: PricingFeature }) {
  return (
    <tr className="border-b border-black/5 last:border-b-0">
      <th scope="row" className="px-5 py-4 text-left font-inter text-sm font-medium text-[#151515] sm:px-6">
        {feature.label}
      </th>
      {[feature.starter, feature.growth, feature.premium].map((value, index) => (
        <td key={`${feature.label}-${index}`} className={`px-4 py-4 text-center font-inter text-sm ${index === 1 ? "bg-[#7B3FF2]/5 font-semibold text-[#4B1FD4]" : "text-black/60"}`}>
          {value === "✓" ? <Check aria-label="Included" className="mx-auto h-4 w-4 text-[#7B3FF2]" /> : value}
        </td>
      ))}
    </tr>
  );
}
