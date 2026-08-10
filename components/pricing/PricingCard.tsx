import Link from "next/link";
import {
  ArrowRight,
  Check,
  Crown,
  Rocket,
  Sparkles,
} from "lucide-react";

export interface PricingPlan {
  name: string;
  description: string;
  icon: "starter" | "growth" | "management" | "custom";
  price: string;
  priceLabel: string;
  features: string[];
  popular?: boolean;
  custom?: boolean;
  cta: string;
}

interface PricingCardProps {
  plan: PricingPlan;
}

/* GrowX Pricing Plans */
export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description:
      "A focused starting point for sellers who need help improving their marketplace presence.",
    icon: "starter",
    price: "Custom",
    priceLabel: "Pricing based on requirements",
    features: [
      "Marketplace assessment",
      "Listing improvement recommendations",
      "Basic performance review",
      "Growth recommendations",
      "Ongoing support",
    ],
    cta: "Get Started",
  },

  {
    name: "Growth",
    description:
      "For growing ecommerce sellers looking for ongoing optimization and marketplace growth support.",
    icon: "growth",
    price: "Custom",
    priceLabel: "Pricing based on requirements",
    features: [
      "Everything in Starter",
      "Listing & SEO optimization",
      "Marketplace performance tracking",
      "Growth strategy",
      "PPC & advertising support",
      "Regular performance reviews",
    ],
    popular: true,
    cta: "Book a Call",
  },

  {
    name: "Full Management",
    description:
      "A comprehensive solution for sellers who want ongoing marketplace management and optimization.",
    icon: "management",
    price: "Custom",
    priceLabel: "Pricing based on requirements",
    features: [
      "Full marketplace management",
      "Listing & SEO optimization",
      "PPC & ads management",
      "Account performance monitoring",
      "Growth strategy & optimization",
      "Ongoing account support",
    ],
    cta: "Book a Call",
  },

  {
    name: "Custom / Enterprise",
    description:
      "Tailored marketplace support for larger operations with specific requirements and growth goals.",
    icon: "custom",
    price: "Let's Talk",
    priceLabel: "Custom solution",
    features: [
      "Custom marketplace strategy",
      "Multi-marketplace support",
      "Advanced account management",
      "Custom reporting",
      "Dedicated support",
      "Flexible scope and requirements",
    ],
    custom: true,
    cta: "Contact Us",
  },
];

function PlanIcon({ icon }: { icon: PricingPlan["icon"] }) {
  if (icon === "starter") {
    return <Rocket className="h-5 w-5" />;
  }

  if (icon === "growth") {
    return <Sparkles className="h-5 w-5" />;
  }

  if (icon === "management") {
    return <Crown className="h-5 w-5" />;
  }

  return <Crown className="h-5 w-5" />;
}

export default function PricingCard({
  plan,
}: PricingCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
        plan.popular
          ? "border-[#7B3FF2] bg-white shadow-lg"
          : "border-black/5 bg-white shadow-sm"
      }`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-[#7B3FF2] px-4 py-1.5 font-inter text-xs font-bold text-white">
            Most Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
          plan.popular
            ? "bg-[#7B3FF2] text-white"
            : "bg-[#7B3FF2]/10 text-[#7B3FF2]"
        }`}
      >
        <PlanIcon icon={plan.icon} />
      </div>

      {/* Plan name */}
      <h2 className="mt-6 font-poppins text-2xl font-bold text-[#151515]">
        {plan.name}
      </h2>

      {/* Description */}
      <p className="mt-3 min-h-[72px] font-inter text-sm leading-6 text-black/60">
        {plan.description}
      </p>

      {/* Price */}
      <div className="mt-6 border-y border-black/5 py-5">
        <p className="font-poppins text-3xl font-extrabold text-[#151515]">
          {plan.price}
        </p>

        <p className="mt-1 font-inter text-xs text-black/45">
          {plan.priceLabel}
        </p>
      </div>

      {/* Features */}
      <div className="mt-6">
        <p className="mb-4 font-poppins text-sm font-bold text-[#151515]">
          What's included
        </p>

        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 font-inter text-sm leading-5 text-black/60"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7B3FF2]" />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-8">
        <Link
          href="/contact"
          className={`group flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 font-poppins text-sm font-bold transition-all duration-300 ${
            plan.popular
              ? "bg-[#7B3FF2] text-white hover:bg-[#4B1FD4]"
              : "border border-black/10 bg-white text-[#151515] hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
          }`}
        >
          {plan.cta}

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}