import Link from "next/link";

const results = [
  {
    value: "03",
    label: "Marketplaces",
    description: "Amazon · TikTok Shop · Wayfair",
  },
  {
    value: "PPC",
    label: "Advertising",
    description: "Campaign strategy and optimization",
  },
  {
    value: "SEO",
    label: "Listings",
    description: "Search visibility and conversion",
  },
  {
    value: "24/7",
    label: "Management",
    description: "Hands-on marketplace support",
  },
];

export default function ResultsSnapshot() {
  return (
    <section className="bg-[var(--black)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end">

          <div>
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Results
            </p>

            <h2 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Growth you can
              <br />
              <span className="text-primary">
                measure.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-white/55">
              Strong marketplace growth starts with the right
              channels, better visibility, and consistent
              optimization across every part of your account.
            </p>

            <Link
              href="/portfolio"
              className="mt-5 inline-flex items-center gap-2 font-heading text-xs font-bold text-white transition-colors hover:text-primary"
            >
              View case studies
              <span className="text-primary transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

        </div>


        {/* Featured message */}
        <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#1c1c1c] p-7 sm:p-9">

          {/* Subtle visual */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-primary/20" />

          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />

          <div className="relative z-10 max-w-2xl">

            <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              Marketplace Performance
            </p>

            <h3 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-4xl">
              Built around
              <br />
              <span className="text-primary">
                measurable growth.
              </span>
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
              GrowX brings together marketplace management,
              PPC, listing optimization, and SEO to help
              ecommerce sellers build stronger sales channels.
            </p>

          </div>

          <Link
            href="/portfolio"
            className="relative z-10 mt-7 inline-flex items-center gap-2 font-heading text-xs font-bold text-white transition-colors hover:text-primary"
          >
            Explore our work
            <span className="text-primary">
              ↗
            </span>
          </Link>

        </div>


        {/* Results / Capabilities */}
        <div className="mt-12 grid grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {results.map((result, index) => (
            <div
              key={result.label}
              className={`group min-h-[190px] p-6 transition-colors duration-200 hover:bg-white/[0.025] ${
                index !== 3
                  ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                  : ""
              } ${
                index === 1
                  ? "sm:border-r lg:border-r"
                  : ""
              }`}
            >

              <div className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-primary sm:text-5xl">
                {result.value}
              </div>

              <div className="mt-12">

                <h3 className="font-heading text-sm font-bold text-white">
                  {result.label}
                </h3>

                <p className="mt-1 max-w-[190px] text-xs leading-6 text-white/40">
                  {result.description}
                </p>

              </div>

            </div>
          ))}

        </div>


        {/* Bottom note */}
        <div className="mt-5 flex items-center gap-2">

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

          <p className="text-[10px] leading-5 text-white/30">
            Client-specific performance metrics will be added
            as approved case-study data becomes available.
          </p>

        </div>

      </div>
    </section>
  );
}