import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
    <div className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <main>
        <Hero />
        <About />
        <FinancialSolutions />
        <Services />
        <EgestorERP />
        <Palestras />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
