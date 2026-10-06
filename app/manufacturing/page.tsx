import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Scissors, ShieldCheck, Waves, Workflow } from "lucide-react";

const production = [
  {
    number: "01",
    title: "Weaving",
    description: "Carefully selected yarns are woven into dependable base cloth, with the structure and hand-feel each end use calls for.",
    image: "/manufacturing/weaving.jpg",
    alt: "Industrial loom weaving a length of white fabric",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Processing",
    description: "Preparation, dyeing and finishing bring out the fabric's colour, softness and performance, batch after batch.",
    image: "/manufacturing/finishing.jpg",
    alt: "Textile workers sorting and finishing rolls of fabric",
    icon: Waves,
  },
  {
    number: "03",
    title: "Confection",
    description: "Measured cutting, skilled stitching and careful finishing turn finished cloth into products ready for everyday use.",
    image: "/manufacturing/confection.jpg",
    alt: "Skilled textile workers checking and preparing finished fabric",
    icon: Scissors,
  },
];

const productLines = [
  { number: "01", title: "Home textiles", text: "Bed sheets, duvet covers, pillowcases and coordinated bedding made for lasting comfort.", image: "/manufacturing/bedding.jpg", alt: "Close-up of soft white bed linen" },
  { number: "02", title: "Healthcare linen", text: "Practical, dependable linen designed for the needs of healthcare and institutional settings.", image: "/manufacturing/hospital-linen.jpg", alt: "Fresh linen on beds in a bright hospital ward" },
  { number: "03", title: "Fabrics & made-ups", text: "Woven fabrics and made-to-spec textile products developed around your requirements.", image: "/manufacturing/fabric-purple.jpg", alt: "Folded patterned textile fabric" },
];

export const metadata = {
  title: "Manufacturing | NB Textiles",
  description: "Explore NB Textiles manufacturing: weaving, processing, confection and quality textile products from Faisalabad, Pakistan.",
};

export default function ManufacturingPage() {
  return (
    <main className="bg-white text-[#151515]">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#151515_0%,#151515_48%,#2A1050_100%)] text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-[#7B3FF2]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#4B1FD4]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
              <Workflow className="h-4 w-4 text-primary" />
              <span className="font-inter text-sm font-medium text-white/80">NB Textiles · Manufacturing</span>
            </div>
            <h1 className="font-heading text-5xl font-extrabold leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-[72px]">From yarn to<br /><span className="text-primary">something lasting.</span></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">NB Textiles brings weaving, fabric processing and skilled confection together to make considered home and institutional textiles for customers around the world.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#production" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[var(--deep-purple)] hover:shadow-[0_12px_35px_rgba(123,63,242,0.3)]">Explore production <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" /></a>
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-primary hover:bg-white/5">Our products <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-4 rounded-[2rem] border border-primary/25" />
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative aspect-[1.04/1] overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/30">
              <div className="relative h-full overflow-hidden rounded-[1.25rem]">
                <Image src="/manufacturing/weaving.jpg" alt="A textile loom weaving a roll of fabric" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/75 via-transparent to-[#151515]/10" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#151515]/55 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Crafted with care</div>
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#151515]/65 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99CFF]">Faisalabad, Pakistan</p>
                  <p className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl">One connected textile journey.</p>
                  <div className="mt-4 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/65 sm:text-[10px]"><span>Weave</span><span className="h-px flex-1 bg-primary/70" /><span>Process</span><span className="h-px flex-1 bg-primary/70" /><span>Confect</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-4 border-t border-white/10 px-6 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">
          {[{ icon: Workflow, title: "Weaving", note: "Quality base fabrics" }, { icon: Waves, title: "Processing", note: "Colour and finishing" }, { icon: Scissors, title: "Confection", note: "Made to specification" }].map((item) => {
            const Icon = item.icon;
            return <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5"><Icon className="h-5 w-5 text-primary" /></div>
              <div><p className="font-heading text-sm font-bold text-white">{item.title}</p><p className="mt-1 text-xs text-white/50">{item.note}</p></div>
            </div>;
          })}
        </div>
      </section>

      <section className="border-b border-[#E8E8E8] bg-[#FAFAFA]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <p className="self-center text-[10px] font-bold uppercase tracking-[0.22em] text-black/50">A complete textile journey</p>
          {["Woven with care", "Finished to spec"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#151515]"><span className="grid h-8 w-8 place-items-center rounded-full border border-[#E8E8E8] text-primary"><Check className="h-4 w-4" /></span>{item}</div>)}
        </div>
      </section>

      <section id="production" className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">How we make it</p><h2 className="font-heading text-4xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">Every stage matters.</h2></div>
            <p className="max-w-2xl text-sm leading-7 text-black/60 md:justify-self-end">We bring the key parts of textile manufacturing into one coordinated process. That means closer attention to quality, consistency and the details that make each order yours.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {production.map((step) => {
              const Icon = step.icon;
              return <article key={step.number} className="group overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white transition-shadow hover:shadow-xl hover:shadow-purple-900/10">
                <div className="relative h-[220px] overflow-hidden bg-[#FAFAFA]">
                  <Image src={step.image} alt={step.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/35 to-transparent" />
                  <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold tracking-[0.14em] text-[#151515]">{step.number}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between"><h3 className="font-heading text-2xl font-bold text-[#151515]">{step.title}</h3><Icon className="h-5 w-5 text-primary" /></div>
                  <p className="mt-4 text-sm leading-6 text-black/60">{step.description}</p>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-[#FAFAFA] px-6 py-20 sm:px-8 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">What we make</p><h2 className="font-heading text-4xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">Textiles for everyday life.</h2></div>
            <p className="max-w-lg text-sm leading-7 text-black/60">Product development starts with the use, finish and specification in mind—then carries that intent through production.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {productLines.map((product) => <article key={product.number} className="group relative min-h-[370px] overflow-hidden rounded-2xl bg-[#E8E8E8] text-white">
              <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/90 via-[#151515]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8"><p className="text-[10px] font-bold tracking-[0.18em] text-[#B99CFF]">{product.number} / NB COLLECTION</p><h3 className="mt-3 font-heading text-2xl font-bold">{product.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{product.text}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="quality" className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[350px] overflow-hidden rounded-3xl bg-[#E8E8E8]">
            <Image src="/manufacturing/bedding.jpg" alt="Soft cotton linen showing its weave and finish" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#151515]/5 to-[#151515]/30" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white px-5 py-4 text-[#151515] shadow-lg"><ShieldCheck className="h-5 w-5 text-primary" /><span className="text-[10px] font-bold uppercase tracking-[0.14em]">Quality at every stage</span></div>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Our standard</p>
            <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">Care you can see.<br />Consistency you can count on.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">Quality is built into the work, from fabric selection and process checks to the final inspection. We focus on clear specifications, capable people and dependable execution on every order.</p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {["Material selection", "In-process checks", "Finishing review", "Order-ready inspection"].map((item) => <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#151515]"><Check className="h-4 w-4 shrink-0 text-primary" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#151515_0%,#24103f_100%)] px-6 py-16 text-white sm:px-8 lg:px-8 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#B99CFF]">Start a conversation</p><h2 className="font-heading text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Have a textile project in mind?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/65">Tell us what you need. Let’s talk through fabric, finishing and the right production route.</p></div>
          <Link href="/contact" className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--deep-purple)]">Talk to our team <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
