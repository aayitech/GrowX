const categories = [
  "Home and Decor",
  "Furniture",
  "Supplements",
  "Textiles",
];

export default function Brands() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Our Focus
          </p>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
            We Work in These Categories
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <li
              key={category}
              className="flex min-h-32 items-end rounded-2xl border border-black/8 bg-[#FAFAFA] p-6 transition-colors hover:border-primary/30 hover:bg-white"
            >
              <span className="mr-4 self-start font-heading text-xs font-bold text-primary">
                0{index + 1}
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-[#151515] sm:text-xl">
                {category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
