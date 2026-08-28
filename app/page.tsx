import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ResultsSnapshot from "@/components/home/ResultsSnapshot";
import Testimonials from "@/components/home/Testimonials";
import HomeCTA from "@/components/home/HomeCTA";
import Brands from "@/components/home/Brands";
import FiveM from "@/components/home/FiveM";

export default function Home() {
  return (
    <main>
      <Hero />
      <FiveM/>
      <Brands/>
      <ServicesPreview />
      <WhyChooseUs />
      <ResultsSnapshot />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}