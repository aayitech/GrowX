import Link from "next/link";

const differentiators = [
  {
    number: "01",
    title: "Marketplace Expertise",
    description:
      "Focused support across Amazon, TikTok Shop, and Wayfair to help sellers build stronger marketplace channels.",
  },
  {
    number: "02",
    title: "Built Around Growth",
    description:
      "From PPC and advertising to listing optimization, every service is designed around improving marketplace performance.",
  },
  {
    number: "03",
    title: "Hands-On Management",
    description:
      "Practical support across the day-to-day management and optimization of your ecommerce marketplace accounts.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FAFAFA] py-10 md:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

          {/* Left */}
          <div className="max-w-xl">

            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Why GrowX
            </p>

            <h2 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Growth needs
              <br />
              <span className="text-primary">
                more than guesswork.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-black/55">
              We combine marketplace expertise, optimization,
              and hands-on management to help ecommerce sellers
              build stronger channels and grow with confidence.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-[var(--black)] px-6 font-heading text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85"
            >
              About GrowX
            </Link>


            {/* Visual */}
            <div className="relative mt-12 flex h-[205px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#151515_0%,#24103f_65%,#31135d_100%)]">

              {/* Rings */}
              <div className="absolute h-[260px] w-[260px] rounded-full border border-primary/25" />

              <div className="absolute h-[180px] w-[180px] rounded-full border border-white/10" />


              {/* Card */}
              <div className="relative z-10 flex h-[125px] w-[180px] -rotate-3 flex-col justify-between rounded-xl border border-white/10 bg-black/60 p-5 shadow-2xl backdrop-blur-md">

                <span className="font-heading text-[8px] font-bold uppercase tracking-[0.16em] text-primary">
                  GrowX
                </span>

                <strong className="font-heading text-xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
                  GROW
                  <br />
                  FASTER.
                </strong>

                <span className="text-[7px] uppercase leading-3 tracking-[0.12em] text-white/35">
                  Marketplace
                  <br />
                  Performance
                </span>

              </div>
            </div>

          </div>


          {/* Right */}
          <div className="border-t border-black/10">

            {differentiators.map((item) => (
              <div
                key={item.number}
                className="group grid grid-cols-[38px_1fr_38px] gap-4 border-b border-black/10 py-7 transition-all duration-300 hover:pl-2"
              >

                {/* Number */}
                <span className="pt-1 font-heading text-[10px] font-bold text-primary">
                  {item.number}
                </span>


                {/* Content */}
                <div>

                  <h3 className="font-heading text-lg font-bold tracking-tight text-black sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-lg text-xs leading-6 text-black/50">
                    {item.description}
                  </p>

                </div>


                {/* Arrow */}
                <span className="flex h-9 w-9 items-center justify-center self-start rounded-full border border-black/10 bg-white text-sm text-black transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  ↗
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}