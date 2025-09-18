import Hero from "../components/Hero";
import CompanyIntro from "../components/CompanyIntro";
import ProductSection from "../components/ProductSection";
import StrengthSection from "../components/StrengthSection";
import PartnerSection from "../components/PartnerSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
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
