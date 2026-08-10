import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-12 md:py-16 lg:px-8">
      <div className="relative mx-auto flex min-h-[360px] max-w-7xl items-center justify-center overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#151515_0%,#24103f_55%,#31125d_100%)] px-6 py-14 text-center text-white sm:px-10 md:min-h-[400px]">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full border border-primary/20" />

        <div className="pointer-events-none absolute -right-12 -top-12 h-[220px] w-[220px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">

          <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Ready to Grow?
          </p>

          <h2 className="font-heading text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            Your next stage of growth
            <br />
            <span className="text-primary">
              starts here.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/60">
            Let&apos;s build a stronger marketplace presence
            and turn your ecommerce goals into measurable
            growth.
          </p>

          {/* Actions */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 font-heading text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--deep-purple)] sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/20 px-6 font-heading text-xs font-bold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[var(--black)] sm:w-auto"
            >
              Book a Call
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}