"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isManufacturingPage = pathname === "/manufacturing";

  if (isManufacturingPage) {
    const nbItems = [
      { name: "Production", href: "#production" },
      { name: "Products", href: "#products" },
      { name: "Quality", href: "#quality" },
    ];

    return (
      <header className="sticky top-0 z-50 border-b border-[#dce5ea] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center gap-8 px-6 lg:px-8">
          <Link href="/manufacturing" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-sm bg-[#15384a] font-heading text-sm font-extrabold tracking-tight text-white">NB</span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-[17px] font-extrabold tracking-[0.12em] text-[#15384a]">NB TEXTILES</span>
              <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#63808c]">Made with purpose</span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-8 lg:flex">
            {nbItems.map((item) => (
              <a key={item.name} href={item.href} className="text-[13px] font-medium text-[#385564] transition-colors hover:text-[#b66d45]">{item.name}</a>
            ))}
          </nav>
          <Link href="/contact" className="hidden h-10 items-center justify-center bg-[#15384a] px-5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#b66d45] lg:inline-flex">Request a quote</Link>

          <button type="button" className="ml-auto grid h-10 w-10 place-items-center border border-[#dce5ea] text-[#15384a] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#dce5ea] bg-white px-6 py-5 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1">
              {nbItems.map((item) => <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className="px-3 py-3 text-sm font-medium text-[#385564]">{item.name}</a>)}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 bg-[#15384a] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-white">Request a quote</Link>
            </nav>
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-8 px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.jpeg"
            alt="GrowX"
            width={180}
            height={60}
            priority
            className="h-auto w-[125px] object-contain sm:w-[140px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative font-sans text-[13px] font-medium text-black/75 transition-colors duration-200 hover:text-[var(--purple)]"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[var(--purple)] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden h-10 items-center justify-center rounded-full bg-[var(--purple)] px-5 font-heading text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--deep-purple)] hover:shadow-lg hover:shadow-purple-900/15 lg:inline-flex"
        >
          Book a Call
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-black/10 bg-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-5 bg-black transition-transform duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2px] w-5 bg-black transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`h-[2px] w-5 bg-black transition-transform duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-6 py-6 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-sans text-sm font-medium text-black/75 transition-colors hover:bg-[#FAFAFA] hover:text-[var(--purple)]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[var(--purple)] px-5 font-heading text-xs font-bold text-white transition-colors hover:bg-[var(--deep-purple)]"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
