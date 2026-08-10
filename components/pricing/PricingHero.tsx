import Link from "next/link";
import { ArrowRight, CheckCircle2, Tag } from "lucide-react";

export default function PricingHero() {
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
        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7B3FF2]/40 bg-[#7B3FF2]/10 px-4 py-2">
            <Tag className="h-4 w-4 text-[#7B3FF2]" />

            <span className="font-inter text-sm font-medium text-white/80">
              Flexible Growth Plans
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-poppins text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Choose the Right Plan
            <span className="block text-[#7B3FF2]">
              for Your Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl font-inter text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Whether you are getting started or managing a growing ecommerce
            operation, our service plans can be tailored around your
            marketplace goals and requirements.
          </p>

          {/* CTA */}
          <div className="mt-9 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#7B3FF2] px-6 py-3.5 font-poppins text-sm font-bold text-white transition-all duration-300 hover:bg-[#4B1FD4] hover:shadow-[0_12px_35px_rgba(123,63,242,0.3)]"
            >
              Discuss Your Requirements

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust point */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 font-inter text-sm text-white/50">
              <CheckCircle2 className="h-4 w-4 text-[#7B3FF2]" />
              Plans tailored to your marketplace needs
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}