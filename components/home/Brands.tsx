import { Armchair, House, Layers3, Pill } from "lucide-react";

const categories = [
  { name: "Home and Decor", icon: House },
  { name: "Furniture", icon: Armchair },
  { name: "Supplements", icon: Pill },
  { name: "Textiles", icon: Layers3 },
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

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {categories.map(({ name, icon: Icon }, index) => (
            <li
              key={name}
              className="group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl border border-black/8 bg-[#FAFAFA] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex items-start justify-between">
                <span className="font-heading text-xs font-bold tracking-wide text-primary">
                  0{index + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-black/5 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                </span>
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-[#151515] sm:text-xl">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
