import { notFound } from "next/navigation";

import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/components/services/ServiceCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
