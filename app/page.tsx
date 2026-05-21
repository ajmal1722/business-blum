import type { Metadata } from "next";

import Hero from "@/components/Homepage/Hero";

export const metadata: Metadata = {
  title: "Business Blum | Smart Business Funding",
  description: "Get matched with lenders across all types of business financing.",
};
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
