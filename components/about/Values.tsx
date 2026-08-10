import {
  BarChart3,
  Focus,
  Handshake,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    title: "Results Driven",
    description:
      "We focus on measurable marketplace performance and meaningful business outcomes rather than vague promises.",
    icon: BarChart3,
  },
  {
    title: "Marketplace Focused",
    description:
      "Our work is centered on the platforms where ecommerce sellers compete, including Amazon, TikTok Shop, and Wayfair.",
    icon: Focus,
  },
  {
    title: "Practical Growth",
    description:
      "We focus on actionable improvements across listings, advertising, and account management that can support sustainable growth.",
    icon: TrendingUp,
  },
  {
    title: "Approachable Partnership",
    description:
      "We work alongside sellers with clear communication and a professional, straightforward approach.",
    icon: Handshake,
  },
];

export default function Values() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="font-inter text-sm font-semibold uppercase tracking-[0.14em] text-[#7B3FF2]">
            What We Stand For
          </p>

          <h2 className="mt-3 font-poppins text-3xl font-extrabold tracking-tight text-[#151515] sm:text-4xl">
            A Straightforward Approach to Growth.
          </h2>

          <p className="mt-4 font-inter text-base leading-7 text-black/60">
            GrowX is built around practical marketplace expertise, measurable
            performance, and a clear focus on helping ecommerce sellers grow.
          </p>
        </div>

        {/* Values */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7B3FF2]/20 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7B3FF2]/10">
                  <Icon className="h-5 w-5 text-[#7B3FF2]" />
                </div>

                <h3 className="mt-6 font-poppins text-lg font-bold text-[#151515]">
                  {value.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-6 text-black/60">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}