import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center px-4 text-primary-foreground overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 40%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/80" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            MZ Consultoria Financeira
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light opacity-95 max-w-4xl mx-auto">
            Oferecemos soluções financeiras completas e integradas que promovem clareza, organização e crescimento para pessoas e empresas
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Planejar com Inteligência, Viver com Liberdade
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://wa.me/5551981821137"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
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
              className="inline-flex items-center gap-2 bg-background/10 text-primary-foreground border-2 border-background/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background/20 transition-all"
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
