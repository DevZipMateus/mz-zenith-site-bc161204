import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.png";
import heroLogo from "@/assets/hero-logo.png";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center px-4 text-foreground overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 40%'
        }}
      />
      <div className="absolute inset-0 bg-white/90" />
      <div className="container mx-auto max-w-6xl relative z-10 h-full flex flex-col justify-between py-12 md:py-16">
        <div className="flex-1 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              APRESENTAÇÃO COMERCIAL
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/90">
              Oferecemos soluções financeiras completas e integradas que promovem clareza, organização e crescimento para pessoas e empresas.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
              Planejar com Inteligência, Viver com Liberdade
            </p>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <img 
              src={heroLogo} 
              alt="MZ Consultoria Financeira" 
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
        
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="https://wa.me/5551981821137"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
          >
            Agendar consulta
            <ArrowRight size={20} />
          </a>
          
          <button
            onClick={() => {
              const element = document.getElementById("services");
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 bg-primary/10 text-foreground border-2 border-primary/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/20 transition-all"
          >
            Conhecer serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
