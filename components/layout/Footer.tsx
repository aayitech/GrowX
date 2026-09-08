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

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592720395455",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/getgrowx/?viewAsMember=true",
    icon: LinkedInIcon,
  },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.385H7.078v-3.542h3.047V9.374c0-3.017 1.792-4.685 4.533-4.685 1.312 0 2.686.235 2.686.235v2.966h-1.513c-1.49 0-1.956.929-1.956 1.882v2.301h3.328l-.532 3.542h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.997h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.265 2.371 4.265 5.455v6.289ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V8.997h3.564v11.455ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

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

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GrowX ${social.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </footer>
  );
}
