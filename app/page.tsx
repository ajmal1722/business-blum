import Hero from "@/components/Homepage/Hero";
import HowItWorks from "@/components/Homepage/HowItWorks";
import BusinessCategories from "@/components/Homepage/BusinessCategories";
import WhyChoose from "@/components/Homepage/WhyChooseUs";
import Testimonials from "@/components/Homepage/Testimonials";
import CTASection from "@/components/Homepage/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <BusinessCategories />
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </>
  );
}
