import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

// const socialLinks = [
//   // Add real social URLs when provided by the client.
//   // { name: "Instagram", href: "https://instagram.com/..." },
//   // { name: "Facebook", href: "https://facebook.com/..." },
//   // { name: "LinkedIn", href: "https://linkedin.com/..." },
// ];

export default function Footer() {
  return (
    <footer className="bg-[var(--black)] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:gap-10 lg:py-16">

          {/* Brand */}
          <div className="max-w-sm">

            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpeg"
                alt="GrowX"
                width={180}
                height={60}
                className="h-auto w-[130px] object-contain"
              />
            </Link>

            <p className="mt-5 font-heading text-sm font-bold text-white">
              Sell More. Grow Faster.
            </p>

            <p className="mt-3 max-w-xs text-xs leading-6 text-white/45">
              Helping ecommerce sellers grow across
              Amazon, TikTok Shop, and Wayfair.
            </p>

          </div>


          {/* Navigation */}
          {footerLinks.map((group) => (
            <div key={group.title}>

              <h3 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {group.title}
              </h3>

              <nav className="mt-5 flex flex-col items-start gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs text-white/50 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

            </div>
          ))}


          {/* Contact */}
          <div>

            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Get in Touch
            </h3>

            <div className="mt-5 flex flex-col items-start gap-3">

              <a
                href="mailto:admingrowx@gmail.com"
                className="break-all text-xs text-white/55 transition-colors hover:text-white"
              >
                admingrowx@gmail.com
              </a>

              <a
                href="https://wa.me/447404866706"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/55 transition-colors hover:text-white"
              >
                +44 7404 866706
              </a>

            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 font-heading text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--deep-purple)] hover:shadow-lg hover:shadow-purple-950/20"
            >
              Book a Call
            </Link>

          </div>

        </div>


        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] text-white/30">
            © {new Date().getFullYear()} GrowX. All rights reserved.
          </p>

          {/* {socialLinks.length > 0 && (
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[10px] text-white/35 transition-colors hover:text-primary"
                >
                  {social.name}
                </a>
              ))}
            </div>
          )} */}

        </div>

      </div>
    </footer>
  );
}