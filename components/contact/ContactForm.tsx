import {
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-[#FAFAFA] px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

        {/* Contact information */}
        <div>
          <p className="font-inter text-sm font-semibold uppercase tracking-[0.14em] text-[#7B3FF2]">
            Contact GrowX
          </p>

          <h2 className="mt-3 font-poppins text-3xl font-extrabold tracking-tight text-[#151515] sm:text-4xl">
            Let's Talk About Your Store.
          </h2>

          <p className="mt-5 max-w-lg font-inter text-base leading-7 text-black/60">
            Have a question about marketplace management, advertising,
            listing optimization, or growing your ecommerce business?
            Send us your details and we'll take it from there.
          </p>

          {/* Contact methods */}
          <div className="mt-8 space-y-4">

            {/* Email */}
            <a
              href="mailto:admingrowx@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 transition-all duration-300 hover:border-[#7B3FF2]/20 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7B3FF2]/10">
                <Mail className="h-5 w-5 text-[#7B3FF2]" />
              </div>

              <div>
                <p className="font-poppins text-sm font-bold text-[#151515]">
                  Email
                </p>

                <p className="mt-1 font-inter text-sm text-black/55">
                  admingrowx@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447404866706"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 transition-all duration-300 hover:border-[#7B3FF2]/20 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7B3FF2]/10">
                <MessageCircle className="h-5 w-5 text-[#7B3FF2]" />
              </div>

              <div>
                <p className="font-poppins text-sm font-bold text-[#151515]">
                  WhatsApp
                </p>

                <p className="mt-1 font-inter text-sm text-black/55">
                  +44 7404 866706
                </p>
              </div>
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8">
            <p className="font-poppins text-sm font-bold text-[#151515]">
              Follow GrowX
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="GrowX Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white font-poppins text-xs font-bold text-[#151515] transition-all hover:border-[#7B3FF2] hover:bg-[#7B3FF2] hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="GrowX Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white font-poppins text-xs font-bold text-[#151515] transition-all hover:border-[#7B3FF2] hover:bg-[#7B3FF2] hover:text-white"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="GrowX LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white font-poppins text-xs font-bold text-[#151515] transition-all hover:border-[#7B3FF2] hover:bg-[#7B3FF2] hover:text-white"
              >
                IN
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-8">
            <h3 className="font-poppins text-2xl font-bold text-[#151515]">
              Tell Us About Your Store
            </h3>

            <p className="mt-2 font-inter text-sm leading-6 text-black/50">
              Complete the form below and we'll get back to you.
            </p>
          </div>

          <form
            action="/api/contact"
            method="POST"
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-inter text-sm font-medium text-[#151515]"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-inter text-sm text-[#151515] outline-none transition-all placeholder:text-black/35 focus:border-[#7B3FF2] focus:ring-2 focus:ring-[#7B3FF2]/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-inter text-sm font-medium text-[#151515]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-inter text-sm text-[#151515] outline-none transition-all placeholder:text-black/35 focus:border-[#7B3FF2] focus:ring-2 focus:ring-[#7B3FF2]/10"
              />
            </div>

            {/* Store URL */}
            <div>
              <label
                htmlFor="storeUrl"
                className="mb-2 block font-inter text-sm font-medium text-[#151515]"
              >
                Store URL
              </label>

              <input
                id="storeUrl"
                name="storeUrl"
                type="url"
                placeholder="https://yourstore.com"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-inter text-sm text-[#151515] outline-none transition-all placeholder:text-black/35 focus:border-[#7B3FF2] focus:ring-2 focus:ring-[#7B3FF2]/10"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-inter text-sm font-medium text-[#151515]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your store and what you'd like help with..."
                className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 font-inter text-sm leading-6 text-[#151515] outline-none transition-all placeholder:text-black/35 focus:border-[#7B3FF2] focus:ring-2 focus:ring-[#7B3FF2]/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7B3FF2] px-6 py-3.5 font-poppins text-sm font-bold text-white transition-all duration-300 hover:bg-[#4B1FD4] hover:shadow-[0_12px_35px_rgba(123,63,242,0.25)]"
            >
              Send Enquiry

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="text-center font-inter text-xs leading-5 text-black/40">
              By submitting this form, you agree to be contacted regarding
              your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}