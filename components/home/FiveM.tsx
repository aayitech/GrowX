export default function FiveM() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:gap-6 sm:text-left">

          <div>
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Proven Results
            </p>

            <div className="mt-1 flex items-baseline justify-center gap-2 sm:justify-start">
              <span className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-[#151515] sm:text-5xl">
                $5M
              </span>

              <span className="font-heading text-sm font-bold text-[#151515]/60">
                USD
              </span>
            </div>
          </div>

          <div className="hidden h-12 w-px bg-[#151515]/10 sm:block" />

          <div className="mt-3 sm:mt-0">
            <p className="font-heading text-sm font-bold text-[#151515]">
              Brand sales achieved
            </p>

            <p className="mt-1 text-xs text-[#151515]/50">
              Helping ecommerce brands scale across major marketplaces.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}