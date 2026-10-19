import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/components/portfolio/CaseStudyCard";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div>
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Client Results
            </p>
            <h2 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Work that speaks
              <br />
              <span className="text-primary">through results.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-7 text-black/55">
              Explore marketplace projects and the performance metrics documented in each case study.
            </p>
            <Link
              href="/portfolio"
              className="group mt-5 inline-flex items-center gap-2 font-heading text-xs font-bold text-black transition-colors hover:text-primary"
            >
              Explore all case studies
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {caseStudies.map((study) => (
            <article
              key={study.slug ?? study.title}
              className="flex min-h-[310px] flex-col rounded-2xl border border-black/10 bg-[#FAFAFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-primary shadow-sm">
                  {study.platform}
                </span>
                <span className="text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-black/40">
                  {study.category}
                </span>
              </div>

              <div className="mt-7">
                <p className="text-xs text-black/45">{study.clientType}</p>
                <h3 className="mt-2 font-heading text-xl font-bold leading-tight text-black">
                  {study.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-black/55">{study.summary}</p>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
                {study.results.map((result) => (
                  <div key={result.label} className="rounded-xl bg-white p-3">
                    <div className="mb-2 flex items-center gap-1.5 text-black/45">
                      <TrendingUp className="h-3.5 w-3.5 text-primary" />
                      <span className="text-[10px] leading-tight">{result.label}</span>
                    </div>
                    <p className="font-heading text-lg font-extrabold text-black">{result.value}</p>
                  </div>
                ))}
              </div>

              {study.slug && (
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="mt-5 inline-flex items-center gap-2 border-t border-black/10 pt-4 font-heading text-xs font-bold text-primary transition-colors hover:text-[var(--deep-purple)]"
                >
                  View case study <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[var(--black)] px-6 py-6 text-white sm:flex-row sm:items-center">
          <p className="font-heading text-sm font-bold">Ready to grow your marketplace presence?</p>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 font-heading text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--deep-purple)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
