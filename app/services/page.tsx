import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard, {
  services,
} from "@/components/services/ServiceCard";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      <section
        id="services"
        className="bg-[#FAFAFA] px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-10 max-w-2xl">
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.14em] text-[#7B3FF2]">
              What We Do
            </p>

            <h2 className="mt-3 font-poppins text-3xl font-extrabold tracking-tight text-[#151515] sm:text-4xl">
              Marketplace Services Built for Growth.
            </h2>

            <p className="mt-4 font-inter text-base leading-7 text-black/60">
              From marketplace management to advertising and listing
              optimization, GrowX provides the expertise needed to improve
              ecommerce performance.
            </p>
          </div>

          {/* Services */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}