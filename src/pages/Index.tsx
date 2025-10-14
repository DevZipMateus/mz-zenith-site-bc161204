import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PresentationCarousel from "@/components/PresentationCarousel";
import EgestorERP from "@/components/EgestorERP";
import About from "@/components/About";
import FinancialSolutions from "@/components/FinancialSolutions";
import Services from "@/components/Services";
import Palestras from "@/components/Palestras";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PresentationCarousel />
        <About />
        <FinancialSolutions />
        <EgestorERP />
        <Services />
        <Palestras />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
