export default function FiveM() {
  return (
    <section className="bg-[#FAFAFA] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#151515] px-7 py-10 text-center sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#7B3FF2]/35 blur-3xl" />
          <div className="relative flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">

          <div>
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99CFF]">
              Results that matter
            </p>

            <div className="mt-1 flex items-baseline justify-center gap-2 sm:justify-start">
              <span className="font-heading text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
                $5M+
              </span>

              <span className="font-heading text-sm font-bold text-white/60">
                USD
              </span>
            </div>
          </div>

          <div className="hidden h-16 w-px bg-white/15 sm:block" />

          <div className="max-w-md sm:text-left">
            <p className="font-heading text-lg font-bold text-white">
              Revenue generated for client brands
            </p>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Generated across ecommerce marketplaces in the last 12 months.
            </p>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
