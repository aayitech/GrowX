import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import { services } from "@/components/services/ServiceCard";

const validPlans = new Set(["Starter", "Growth", "Premium"]);
const validServices = new Set(services.map((service) => service.title));

interface ContactPageProps {
  searchParams: Promise<{ plan?: string; service?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { plan, service } = await searchParams;
  const initialPlan = plan && validPlans.has(plan) ? plan : "";
  const initialService = service && validServices.has(service) ? service : "";

  return (
    <main>
      <ContactHero />
      <ContactForm initialPlan={initialPlan} initialService={initialService} />
    </main>
  );
}
