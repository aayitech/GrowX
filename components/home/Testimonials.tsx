import Link from "next/link";

const testimonials = [
  {
    platform: "Amazon",
    quote:
      "Client success story coming soon. Approved customer feedback will be featured here.",
    name: "Client Story",
    role: "Amazon Seller",
  },
  {
    platform: "TikTok Shop",
    quote:
      "Approved client feedback will be featured here as GrowX case studies are finalized.",
    name: "Client Story",
    role: "TikTok Shop Seller",
  },
  {
    platform: "Wayfair",
    quote:
      "Real customer experiences and marketplace results will be featured here.",
    name: "Client Story",
    role: "Wayfair Seller",
  },
];

export default function Testimonials() {
  const featured = testimonials[0];
  const secondary = testimonials.slice(1);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end">

          <div>
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Client Stories
            </p>

            <h2 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              What our clients
              <br />
              <span className="text-primary">
                say about us.
              </span>
            </h2>
          </div>

          <div className="max-w-md">

            <p className="text-sm leading-7 text-black/55">
              Real client experiences will be featured here
              as GrowX case studies and approved testimonials
              become available.
            </p>

            <Link
              href="/portfolio"
              className="group mt-5 inline-flex items-center gap-2 font-heading text-xs font-bold text-black transition-colors hover:text-primary"
            >
              Explore client results
              <span className="text-primary transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

          </div>

        </div>


        {/* Testimonials */}
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">

          {/* Featured testimonial */}
          <article className="relative flex min-h-[410px] flex-col justify-between overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#151515_0%,#24103f_65%,#31135d_100%)] p-7 text-white sm:p-9">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-primary/20" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/10" />

            {/* Top */}
            <div className="relative z-10 flex items-center justify-between gap-4">

              <span className="font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                Featured Story
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white/70">
                {featured.platform}
              </span>

            </div>


            {/* Quote */}
            <div className="relative z-10 max-w-2xl">

              <span className="block h-10 font-serif text-6xl leading-none text-primary">
                “
              </span>

              <blockquote className="mt-2 font-heading text-2xl font-bold leading-[1.2] tracking-[-0.025em] sm:text-3xl md:text-4xl">
                {featured.quote}
              </blockquote>

            </div>


            {/* Client */}
            <div className="relative z-10 flex items-center justify-between gap-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-heading text-xs font-bold text-black">
                  C
                </div>

                <div>
                  <h3 className="font-heading text-xs font-bold text-white">
                    {featured.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] text-white/45">
                    {featured.role}
                  </p>
                </div>

              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm">
                ↗
              </span>

            </div>

          </article>


          {/* Supporting testimonials */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            {secondary.map((testimonial) => (
              <article
                key={testimonial.platform}
                className="flex min-h-[198px] flex-col justify-between rounded-2xl border border-black/10 bg-[#FAFAFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
              >

                {/* Top */}
                <div className="flex items-center justify-between">

                  <span className="font-serif text-4xl leading-none text-primary">
                    “
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-primary shadow-sm">
                    {testimonial.platform}
                  </span>

                </div>


                {/* Quote */}
                <blockquote className="mt-5 font-heading text-sm font-bold leading-[1.5] text-black">
                  {testimonial.quote}
                </blockquote>


                {/* Client */}
                <div className="mt-6 flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black font-heading text-[10px] font-bold text-white">
                    C
                  </div>

                  <div>
                    <h3 className="font-heading text-xs font-bold text-black">
                      {testimonial.name}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-black/45">
                      {testimonial.role}
                    </p>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>


        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[var(--black)] px-6 py-6 text-white sm:flex-row sm:items-center">

          <p className="font-heading text-sm font-bold">
            Ready to grow your marketplace presence?
          </p>

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