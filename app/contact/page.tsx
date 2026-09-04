import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

const validPlans = new Set(["Starter", "Growth", "Premium"]);

interface ContactPageProps {
  searchParams: Promise<{ plan?: string; service?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { plan, service } = await searchParams;
  const initialPlan = plan && validPlans.has(plan) ? plan : "";

  return (
    <main>
      <ContactHero />
      <ContactForm initialPlan={initialPlan} initialService={service} />
    </main>
  );
}
