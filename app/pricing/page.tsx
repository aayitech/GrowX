import PricingHero from "@/components/pricing/PricingHero";
import PricingCard, {
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
              Choose the level of marketplace support that fits your business.
              Every plan can be tailored around your requirements.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
              />
            ))}
          </div>

          {/* Pricing note */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-inter text-sm leading-6 text-black/50">
              Pricing is provided based on your marketplace, scope of work,
              account requirements, and growth objectives. Contact GrowX for a
              tailored proposal.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}