import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import type { Service } from "./ServiceCard";

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#151515_0%,#151515_48%,#2A1050_100%)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#7B3FF2]/25 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <Link href="/services" className="inline-flex items-center gap-2 font-inter text-sm font-medium text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <p className="mt-10 font-inter text-sm font-semibold uppercase tracking-[0.14em] text-[#B99CFF]">GrowX services</p>
          <h1 className="mt-4 max-w-4xl font-poppins text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl font-inter text-lg leading-8 text-white/70">{service.description}</p>
          <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#7B3FF2] px-6 py-3.5 font-poppins text-sm font-bold text-white transition-colors hover:bg-[#4B1FD4]">
            Discuss this service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.14em] text-[#7B3FF2]">How we help</p>
            <h2 className="mt-3 font-poppins text-3xl font-extrabold tracking-tight text-[#151515] sm:text-4xl">A practical plan for stronger marketplace performance.</h2>
            <p className="mt-5 font-inter leading-7 text-black/60">GrowX combines focused day-to-day support with clear, measurable improvements. We tailor the work around your account, catalogue, and growth goals.</p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="font-poppins text-xl font-bold text-[#151515]">What&apos;s included</h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-inter text-sm text-black/65">
                  <Check className="h-5 w-5 shrink-0 text-[#7B3FF2]" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
