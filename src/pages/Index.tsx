import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PresentationCarousel from "@/components/PresentationCarousel";
import EgestorERP from "@/components/EgestorERP";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PresentationCarousel />
        <EgestorERP />
        <About />
        <Services />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
