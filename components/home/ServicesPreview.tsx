import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Amazon",
    subtitle: "Marketplace Management",
    description:
      "End-to-end Amazon management built around stronger visibility, conversion, and marketplace performance.",
    variant: "dark",
  },
  {
    number: "02",
    title: "TikTok Shop",
    subtitle: "Growth",
    description:
      "Turn TikTok Shop into a stronger and more consistent sales channel.",
    variant: "light",
  },
  {
    number: "03",
    title: "Wayfair",
    subtitle: "Seller Optimization",
    description:
      "Improve your Wayfair presence with focused marketplace optimization.",
    variant: "light",
  },
  {
    number: "04",
    title: "PPC & Ads",
    subtitle: "Management",
    description:
      "Campaign strategy and optimization focused on visibility, efficiency, and growth.",
    variant: "purple",
  },
  {
    number: "05",
    title: "Listing & SEO",
    subtitle: "Optimization",
    description:
      "Stronger product listings designed to improve discoverability and conversion.",
    variant: "light",
  },
  {
    number: "06",
    title: "Account",
    subtitle: "Management",
    description:
      "Hands-on support across the day-to-day management of your marketplace account.",
    variant: "dark",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-[#FAFAFA] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div className="max-w-3xl">
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
              What We Do
            </p>

            <h2 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Marketplace growth
              <br />
              <span className="text-primary">
                without the guesswork.
              </span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-6 text-black/50">
              From marketplace management to PPC and
              listing optimization, GrowX helps sellers
              build stronger ecommerce channels.
            </p>

            <Link
              href="/services"
              className="group mt-5 inline-flex items-center gap-2 font-heading text-xs font-bold text-black transition-colors hover:text-primary"
            >
              View all services

              <span className="text-primary transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

        </div>


        {/* Services */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const isDark = service.variant === "dark";
            const isPurple = service.variant === "purple";

            return (
              <Link
                key={service.number}
                href="/services"
                className={`group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "border-transparent bg-[#151515] text-white hover:bg-[#1c1c1c]"
                    : isPurple
                      ? "border-transparent bg-[#7B3FF2] text-white hover:bg-[#4B1FD4]"
                      : "border-black/8 bg-white text-[#151515] hover:border-[#7B3FF2]/25 hover:shadow-xl hover:shadow-black/5"
                }`}
              >

                {/* Decorative element */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full border ${
                    isDark || isPurple
                      ? "border-white/10"
                      : "border-[#7B3FF2]/10"
                  }`}
                />

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">

                  <span
                    className={`font-heading text-[10px] font-bold ${
                      isDark || isPurple
                        ? "text-[#7B3FF2]"
                        : "text-[#7B3FF2]"
                    }`}
                  >
                    {service.number}
                  </span>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-all duration-200 ${
                      isDark || isPurple
                        ? "border-white/15 bg-white/5 text-white group-hover:bg-white group-hover:text-[#151515]"
                        : "border-black/10 bg-[#FAFAFA] text-[#151515] group-hover:border-[#7B3FF2] group-hover:bg-[#7B3FF2] group-hover:text-white"
                    }`}
                  >
                    ↗
                  </span>

                </div>


                {/* Content */}
                <div className="relative z-10 mt-12">

                  <h3 className="font-heading text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p
                    className={`mt-1 font-heading text-[10px] font-bold ${
                      isDark || isPurple
                        ? "text-white/60"
                        : "text-[#7B3FF2]"
                    }`}
                  >
                    {service.subtitle}
                  </p>

                  <p
                    className={`mt-4 max-w-sm text-xs leading-6 ${
                      isDark || isPurple
                        ? "text-white/50"
                        : "text-black/45"
                    }`}
                  >
                    {service.description}
                  </p>

                </div>

              </Link>
            );
          })}

        </div>


        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-xs leading-6 text-black/40">
            One strategy across every marketplace channel —
            from acquisition to optimization and ongoing management.
          </p>

          <Link
            href="/contact"
            className="shrink-0 font-heading text-xs font-bold text-black transition-colors hover:text-primary"
          >
            Talk to GrowX <span className="text-primary">↗</span>
          </Link>

        </div>

      </div>
    </section>
  );
}