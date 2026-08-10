import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const focusAreas = [
  "Amazon",
  "TikTok Shop",
  "Wayfair",
];

export default function Story() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

        {/* Main story */}
        <div>
          <p className="font-inter text-sm font-semibold uppercase tracking-[0.14em] text-[#7B3FF2]">
            Our Story
          </p>

          <h2 className="mt-3 font-poppins text-3xl font-extrabold tracking-tight text-[#151515] sm:text-4xl">
            Built Around Marketplace Growth.
          </h2>

          <div className="mt-6 space-y-5 font-inter text-base leading-7 text-black/60">
            <p>
              GrowX is a marketplace growth agency focused on helping
              ecommerce sellers expand and improve their performance across
              leading online marketplaces.
            </p>

            <p>
              We work across Amazon, TikTok Shop, and Wayfair, providing
              services that cover marketplace management, PPC advertising,
              listing optimization, and account growth.
            </p>

            <p>
              Our approach is focused on measurable marketplace performance,
              helping sellers identify opportunities, improve their
              storefronts, and build stronger foundations for growth.
            </p>
          </div>
        </div>

        {/* Mission card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#151515] p-7 sm:p-9">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7B3FF2]/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-[#7B3FF2]">
                Our Mission
              </span>

              <ArrowUpRight className="h-5 w-5 text-[#7B3FF2]" />
            </div>

            <h3 className="mt-6 font-poppins text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Help ecommerce sellers
              <span className="text-[#7B3FF2]">
                {" "}
                sell more and grow faster.
              </span>
            </h3>

            <p className="mt-5 font-inter text-sm leading-6 text-white/60">
              We focus on the marketplaces where ecommerce sellers need
              visibility, optimization, and ongoing performance support.
            </p>

            {/* Marketplace focus */}
            <div className="mt-8 space-y-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#7B3FF2]" />

                  <span className="font-inter text-sm font-medium text-white/80">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}