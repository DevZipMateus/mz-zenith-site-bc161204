import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.png";
import logoMZ from "@/assets/logo-mz.png";

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
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative px-4">
            <img 
              src={logoMZ} 
              alt="MZ Consultoria Financeira" 
              className="max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto w-full h-auto"
            />
            <span className="sr-only">MZ Consultoria Financeira</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light opacity-95 max-w-4xl mx-auto px-4">
            Oferecemos soluções financeiras completas e integradas que promovem clareza, organização e crescimento para pessoas e empresas
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto px-4">
            Planejar com Inteligência, Viver com Liberdade
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
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
      </div>
    </section>
  );
};

export default Hero;
