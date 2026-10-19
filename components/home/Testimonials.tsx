import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/components/portfolio/CaseStudyCard";

export default function Testimonials() {
  const [featured, ...stories] = caseStudies;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div>
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Success Stories
            </p>
            <h2 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Marketplace growth,
              <br />
              <span className="text-primary">made measurable.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-7 text-black/55">
              A closer look at the marketplace work behind the numbers. Explore each project and its documented results.
            </p>
            <Link
              href="/portfolio"
              className="group mt-5 inline-flex items-center gap-2 font-heading text-xs font-bold text-black transition-colors hover:text-primary"
            >
              Explore all success stories
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#151515_0%,#24103f_62%,#4B1FD4_140%)] p-7 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-primary/25" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="rounded-full bg-primary/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white">Featured success story</span>
              <span className="text-xs font-semibold text-white/65">{featured.platform}</span>
            </div>
            <div className="relative z-10 mt-12 max-w-2xl">
              <p className="text-xs font-medium text-white/50">{featured.clientType} · {featured.category}</p>
              <h3 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl">{featured.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">{featured.summary}</p>
            </div>
            <div className="relative z-10 mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-6">
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {featured.results.map((result) => (
                  <div key={result.label}>
                    <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">{result.value}</p>
                    <p className="mt-1 text-[10px] font-medium text-white/55">{result.label}</p>
                  </div>
                ))}
              </div>
              {featured.slug && (
                <Link href={`/portfolio/${featured.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-heading text-xs font-bold text-black transition-colors hover:bg-primary hover:text-white">
                  Read the story <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </article>

          <div className="grid gap-4">
            {stories.map((study) => (
              <article key={study.slug ?? study.title} className="rounded-2xl border border-black/10 bg-[#FAFAFA] p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-md sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{study.platform} · {study.category}</span>
                  <span className="text-[10px] text-black/40">{study.clientType}</span>
                </div>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold leading-tight text-black">{study.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-black/55">{study.summary}</p>
                  </div>
                  {study.slug && <Link aria-label={`Read the ${study.title} success story`} href={`/portfolio/${study.slug}`} className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"><ArrowUpRight className="h-4 w-4" /></Link>}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/10 pt-4">
                  {study.results.map((result) => (
                    <div key={result.label} className="flex items-baseline gap-2">
                      <TrendingUp className="h-3.5 w-3.5 text-primary" />
                      <span className="font-heading text-sm font-extrabold text-black">{result.value}</span>
                      <span className="text-[10px] text-black/45">{result.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
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
