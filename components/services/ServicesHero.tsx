import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ShoppingBag,
  Store,
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#151515_0%,#151515_48%,#2A1050_100%)]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#7B3FF2]/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#4B1FD4]/15 blur-3xl" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7B3FF2]/40 bg-[#7B3FF2]/10 px-4 py-2">
            <BarChart3 className="h-4 w-4 text-[#7B3FF2]" />

            <span className="font-inter text-sm font-medium text-white/80">
              Ecommerce Marketplace Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-poppins text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Everything You Need
            <span className="block text-[#7B3FF2]">
              to Grow Your Store.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl font-inter text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            From marketplace management and listing optimization to PPC
            advertising and account growth, GrowX helps ecommerce sellers
            build stronger performance across leading marketplaces.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#7B3FF2] px-6 py-3.5 font-poppins text-sm font-bold text-white transition-all duration-300 hover:bg-[#4B1FD4] hover:shadow-[0_12px_35px_rgba(123,63,242,0.3)]"
            >
              Get Started

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-poppins text-sm font-bold text-white transition-all duration-300 hover:border-[#7B3FF2] hover:bg-white/5"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Marketplace indicators */}
        <div className="mt-20 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
              <ShoppingBag className="h-5 w-5 text-[#7B3FF2]" />
            </div>

            <div>
              <p className="font-poppins text-sm font-bold text-white">
                Amazon
              </p>

              <p className="font-inter text-xs text-white/50">
                Marketplace Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
              <Store className="h-5 w-5 text-[#7B3FF2]" />
            </div>

            <div>
              <p className="font-poppins text-sm font-bold text-white">
                TikTok Shop
              </p>

              <p className="font-inter text-xs text-white/50">
                Growth & Optimization
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
              <BarChart3 className="h-5 w-5 text-[#7B3FF2]" />
            </div>

            <div>
              <p className="font-poppins text-sm font-bold text-white">
                Wayfair
              </p>

              <p className="font-inter text-xs text-white/50">
                Seller Optimization
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}