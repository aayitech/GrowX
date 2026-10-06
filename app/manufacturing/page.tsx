import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Scissors, ShieldCheck, Waves, Workflow } from "lucide-react";

const production = [
  {
    number: "01",
    title: "Weaving",
    description: "Carefully selected yarns are woven into dependable base cloth, with the structure and hand-feel each end use calls for.",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=85",
    alt: "Close-up of woven textile swatches",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Processing",
    description: "Preparation, dyeing and finishing bring out the fabric's colour, softness and performance, batch after batch.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85",
    alt: "Textile fabric and production details",
    icon: Waves,
  },
  {
    number: "03",
    title: "Confection",
    description: "Measured cutting, skilled stitching and careful finishing turn finished cloth into products ready for everyday use.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1000&q=85",
    alt: "Hands working with folded fabric",
    icon: Scissors,
  },
];

const productLines = [
  { number: "01", title: "Home textiles", text: "Bed sheets, duvet covers, pillowcases and coordinated bedding made for lasting comfort.", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1100&q=85", alt: "Soft white bedding in a calm bedroom" },
  { number: "02", title: "Healthcare linen", text: "Practical, dependable linen designed for the needs of healthcare and institutional settings.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=85", alt: "Freshly made bed in a bright room" },
  { number: "03", title: "Fabrics & made-ups", text: "Woven fabrics and made-to-spec textile products developed around your requirements.", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1100&q=85", alt: "Textile garments and materials on display" },
];

export const metadata = {
  title: "Manufacturing | NB Textiles",
  description: "Explore NB Textiles manufacturing: weaving, processing, confection and quality textile products from Faisalabad, Pakistan.",
};

export default function ManufacturingPage() {
  return (
    <main className="bg-white text-[#151515]">
      <section className="relative isolate overflow-hidden bg-[#151515] text-white">
        <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,21,21,0.96)_0%,rgba(35,16,63,0.88)_50%,rgba(35,16,63,0.25)_100%)]" />
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#B99CFF]"><span className="h-px w-8 bg-primary" />Textile manufacturing · Faisalabad, Pakistan</p>
            <h1 className="font-heading text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[72px]">From yarn to<br /><span className="text-primary">something lasting.</span></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">NB Textiles brings weaving, fabric processing and skilled confection together to make considered home and institutional textiles for customers around the world.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#production" className="inline-flex h-12 items-center gap-3 rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--deep-purple)]">Explore our production <ArrowDown className="h-4 w-4" /></a>
              <a href="#products" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/35 px-6 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#151515]">Our products <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="relative hidden min-h-[410px] items-end justify-end lg:flex">
            <div className="absolute right-10 top-4 h-[350px] w-[310px] border border-white/35" />
            <div className="relative z-10 w-[310px] border-t-4 border-primary bg-white p-8 text-[#151515] shadow-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Made in Faisalabad</p>
              <p className="mt-4 font-heading text-2xl font-bold leading-tight">One connected process. Thoughtful at every step.</p>
              <div className="mt-7 flex items-center justify-between border-t border-[#E8E8E8] pt-5 text-[10px] font-semibold uppercase tracking-[0.13em] text-black/50"><span>Weave</span><span className="h-px w-6 bg-primary" /><span>Finish</span><span className="h-px w-6 bg-[#B99CFF]" /><span>Make</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden h-1.5 w-[28%] bg-primary lg:block" />
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
              return <article key={step.number} className="group border border-[#E8E8E8] bg-white transition-shadow hover:shadow-xl hover:shadow-purple-900/10">
                <div className="relative h-[220px] overflow-hidden bg-[#FAFAFA]">
                  <div role="img" aria-label={step.alt} className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(180deg, transparent 55%, rgba(21,21,21,.4)), url('${step.image}')` }} />
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
            {productLines.map((product) => <article key={product.number} className="group relative min-h-[370px] overflow-hidden bg-[#E8E8E8] text-white">
              <div role="img" aria-label={product.alt} className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(180deg, rgba(21,21,21,.02) 20%, rgba(21,21,21,.88) 100%), url('${product.image}')` }} />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8"><p className="text-[10px] font-bold tracking-[0.18em] text-[#B99CFF]">{product.number} / NB COLLECTION</p><h3 className="mt-3 font-heading text-2xl font-bold">{product.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{product.text}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="quality" className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[350px] overflow-hidden bg-[#E8E8E8]">
            <div role="img" aria-label="Cotton fabric texture" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(135deg,rgba(21,21,21,.05),rgba(21,21,21,.2)),url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=85')" }} />
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
