const brands = Array.from(
  { length: 13 },
  (_, i) => `/Brands Working/${i + 1}.png`
);

export default function Brands() {
  return (
    <section className="overflow-hidden bg-white py-10">
      <div className="mx-auto mb-7 max-w-7xl px-6">
        <p className="text-center text-s font-semibold uppercase tracking-[0.2em] text-[#7B3FF2]">
          Brands we work with
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-brands gap-6">
          {/* First set */}
          {brands.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center"
            >
              <img
                src={logo}
                alt={`Client brand ${index + 1}`}
                className="max-h-25 max-w-[150px] object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {brands.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="max-h-14 max-w-[125px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}