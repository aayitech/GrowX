import Link from "next/link";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCard, {
  pricingFeatures,
  pricingPlans,
} from "@/components/pricing/PricingCard";

export default function PricingPage() {
  return (
    <main>
      <PricingHero />

      <section
        id="pricing"
        className="bg-[#FAFAFA] px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.14em] text-[#7B3FF2]">
              Pricing Plans
            </p>

            <h2 className="mt-3 font-poppins text-3xl font-extrabold tracking-tight text-[#151515] sm:text-4xl">
              A Plan Built Around Your Goals.
            </h2>

            <p className="mt-4 font-inter text-base leading-7 text-black/60">
              Select the marketplace-management plan that suits your business.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-black/5 bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="border-b border-black/5">
                  <th scope="col" className="px-5 py-6 text-left sm:px-6" />
                  {pricingPlans.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className={`px-4 py-6 text-center font-poppins text-lg font-bold ${
                        plan.popular ? "bg-[#7B3FF2] text-white" : "text-[#151515]"
                      }`}
                    >
                      {plan.name} {plan.popular && <span aria-label="Most popular">⭐</span>}
                      <span className={`mt-1 block font-inter text-xs font-medium ${plan.popular ? "text-white/75" : "text-black/50"}`}>
                        {plan.price}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((feature) => <PricingCard key={feature.label} feature={feature} />)}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Link
                key={plan.name}
                href={`/contact?plan=${plan.name}`}
                className={`rounded-2xl px-5 py-4 text-center font-poppins text-sm font-bold transition-colors ${
                  plan.popular
                    ? "bg-[#7B3FF2] text-white hover:bg-[#4B1FD4]"
                    : "border border-black/10 bg-white text-[#151515] hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                }`}
              >
                Choose {plan.name}
              </Link>
            ))}
          </div>

          {/* Pricing note */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-inter text-sm leading-6 text-black/50">
              All plans are billed monthly. Contact GrowX to discuss the best
              fit for your marketplace and growth goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
