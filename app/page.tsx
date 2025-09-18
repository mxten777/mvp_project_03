import Hero from "../src/components/Hero";
import CompanyIntro from "../src/components/CompanyIntro";
import ProductSection from "../src/components/ProductSection";
import StrengthSection from "../src/components/StrengthSection";
import PartnerSection from "../src/components/PartnerSection";
import CTASection from "../src/components/CTASection";
import FAQSection from "../src/components/FAQSection";
import ContactSection from "../src/components/ContactSection";
export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ProductSection />
      <StrengthSection />
      <PartnerSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
