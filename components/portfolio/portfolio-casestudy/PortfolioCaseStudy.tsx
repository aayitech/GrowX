import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  TrendingUp,
} from "lucide-react";

import { PortfolioCaseStudy as PortfolioCaseStudyData } from "./types";

interface PortfolioCaseStudyProps {
  study: PortfolioCaseStudyData;
}

export default function PortfolioCaseStudy({
  study,
}: PortfolioCaseStudyProps) {
  return (
    <main className="bg-[#FAFAFA]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#151515_0%,#151515_48%,#2A1050_100%)]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#7B3FF2]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center gap-2 font-inter text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="max-w-4xl">

            <div className="mb-6 flex flex-wrap items-center gap-3">

              <span className="rounded-full bg-[#7B3FF2] px-4 py-2 font-inter text-xs font-semibold text-white">
                {study.platform}
              </span>

              <span className="font-inter text-sm text-white/50">
                {study.category}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/30" />

              <span className="font-inter text-sm text-white/50">
                {study.clientType}
              </span>

            </div>

            <h1 className="font-poppins text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              {study.title}
            </h1>

            <p className="mt-7 max-w-3xl font-inter text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {study.intro}
            </p>

          </div>
        </div>
      </section>


      {/* Key Results */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="font-poppins text-sm font-bold uppercase tracking-[0.14em] text-[#7B3FF2]">
              Key Results
            </p>

            <h2 className="mt-3 font-poppins text-3xl font-bold text-[#151515] sm:text-4xl">
              {study.overview.title}
            </h2>

            <p className="mt-4 font-inter text-base leading-7 text-black/60">
              {study.overview.description}
            </p>

          </div>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {study.keyResults.map((result) => (
              <div
                key={`${result.label}-${result.value}`}
                className="rounded-3xl border border-black/5 bg-[#FAFAFA] p-6"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7B3FF2]/10">
                  <TrendingUp className="h-5 w-5 text-[#7B3FF2]" />
                </div>

                <p className="mt-6 font-poppins text-3xl font-extrabold text-[#151515]">
                  {result.value}
                </p>

                <p className="mt-2 font-poppins text-sm font-bold text-[#151515]">
                  {result.label}
                </p>

                {result.description && (
                  <p className="mt-2 font-inter text-sm leading-6 text-black/50">
                    {result.description}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Performance Metrics */}
      {study.performance && study.performance.length > 0 && (
        <section className="bg-white px-6 pb-16 sm:px-8 lg:px-12 lg:pb-20">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10">
              <p className="font-poppins text-sm font-bold uppercase tracking-[0.14em] text-[#7B3FF2]">
                Performance
              </p>

              <h2 className="mt-3 font-poppins text-3xl font-bold text-[#151515] sm:text-4xl">
                Account performance at a glance
              </h2>
            </div>


            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {study.performance.map((item) => (
                <div
                  key={`${item.label}-${item.value}`}
                  className="rounded-2xl border border-black/5 bg-[#FAFAFA] p-6"
                >

                  <BarChart3 className="h-5 w-5 text-[#7B3FF2]" />

                  <p className="mt-5 font-poppins text-2xl font-extrabold text-[#151515]">
                    {item.value}
                  </p>

                  <p className="mt-2 font-inter text-sm text-black/50">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* Additional Metrics */}
      {study.additionalMetrics &&
        study.additionalMetrics.length > 0 && (
          <section className="bg-[#FAFAFA] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-7xl">

              <div className="max-w-3xl">

                <p className="font-poppins text-sm font-bold uppercase tracking-[0.14em] text-[#7B3FF2]">
                  Additional Results
                </p>

                <h2 className="mt-3 font-poppins text-3xl font-bold text-[#151515] sm:text-4xl">
                  More performance data
                </h2>

              </div>


              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {study.additionalMetrics.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="rounded-2xl border border-black/5 bg-white p-6"
                  >

                    <p className="font-poppins text-2xl font-extrabold text-[#151515]">
                      {item.value}
                    </p>

                    <p className="mt-2 font-inter text-sm leading-6 text-black/50">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          </section>
        )}


      {/* Case Study Images / Sections */}
      {study.sections?.map((section, index) => (
        <section
          key={`${section.title}-${index}`}
          className={index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

            <div className="max-w-3xl">

              {section.eyebrow && (
                <p className="font-poppins text-sm font-bold uppercase tracking-[0.14em] text-[#7B3FF2]">
                  {section.eyebrow}
                </p>
              )}

              <h2 className="mt-3 font-poppins text-3xl font-bold text-[#151515] sm:text-4xl">
                {section.title}
              </h2>

              {section.description && (
                <p className="mt-4 font-inter text-base leading-7 text-black/60">
                  {section.description}
                </p>
              )}

            </div>


            {section.images && section.images.length > 0 && (
              <div className="mt-10 space-y-8">

                {section.images.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1600}
                      height={900}
                      className="h-auto w-full"
                    />
                  </div>
                ))}

              </div>
            )}

          </div>
        </section>
      ))}


      {/* CTA */}
      <section className="bg-[#151515] px-6 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="max-w-2xl">

            <p className="font-poppins text-sm font-bold uppercase tracking-[0.14em] text-[#7B3FF2]">
              GrowX
            </p>

            <h2 className="mt-3 font-poppins text-3xl font-bold text-white sm:text-4xl">
              Ready to grow your marketplace?
            </h2>

            <p className="mt-4 font-inter text-base leading-7 text-white/60">
              Talk to GrowX about your Amazon, TikTok Shop, or Wayfair growth
              goals.
            </p>

          </div>


          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#7B3FF2] px-6 py-3.5 font-poppins text-sm font-bold text-white transition-all duration-300 hover:bg-[#4B1FD4]"
          >
            Get Started

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

      </section>

    </main>
  );
}