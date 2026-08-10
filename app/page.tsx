import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ResultsSnapshot from "@/components/home/ResultsSnapshot";
import Testimonials from "@/components/home/Testimonials";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <ResultsSnapshot />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}