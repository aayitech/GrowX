import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#151515_0%,#24103f_55%,#2A1050_100%)] text-white">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div className="relative z-10 max-w-2xl">

          <p className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Marketplace Growth Agency
          </p>

          <h1 className="font-heading text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[76px]">
            Sell More.
            <br />
            <span className="text-primary">
              Grow Faster.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            We help ecommerce sellers scale across Amazon,
            TikTok Shop, and Wayfair with smarter listings,
            powerful PPC, and hands-on account management.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 font-heading text-xs font-bold text-primary-foreground shadow-lg shadow-purple-950/20 transition hover:-translate-y-0.5 hover:bg-[var(--deep-purple)]"
            >
              Get Started
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-6 font-heading text-xs font-bold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[var(--black)]"
            >
              Book a Call
            </Link>

          </div>
        </div>


        {/* Right Visual */}
        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[500px]">

          {/* Outer orbit */}
          <div className="absolute h-[380px] w-[380px] rounded-full border border-primary/25 sm:h-[440px] sm:w-[440px]" />

          {/* Inner orbit */}
          <div className="absolute h-[270px] w-[270px] rounded-full border border-white/10 sm:h-[320px] sm:w-[320px]" />


          {/* Main Card */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-[190px] w-[270px] -translate-x-1/2 -translate-y-1/2 -rotate-6 flex-col justify-center rounded-2xl border border-white/10 bg-black/50 p-7 shadow-2xl backdrop-blur-md">
            <span className="mb-2 text-[9px] font-medium uppercase tracking-[0.15em] text-white/45">
              Marketplace
            </span>

            <strong className="font-heading text-3xl font-extrabold tracking-tight text-primary">
              Growth
            </strong>
          </div>


          {/* Small Card */}
          <div className="absolute bottom-10 right-2 z-20 flex h-[115px] w-[155px] rotate-6 flex-col justify-center rounded-2xl border border-white/10 bg-black/60 p-6 shadow-2xl backdrop-blur-md sm:right-8">
            <span className="mb-1 text-[9px] font-medium uppercase tracking-[0.15em] text-white/45">
              Sell
            </span>

            <strong className="font-heading text-2xl font-extrabold text-white">
              More
            </strong>
          </div>

        </div>
      </div>

      {/* Very subtle background glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
}