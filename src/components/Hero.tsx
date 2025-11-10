import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.png";
import heroLogo from "@/assets/hero-logo.png";
const Hero = () => {
  return <section id="hero" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 text-foreground overflow-hidden w-full">
      <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundPosition: 'center 40%'
    }} />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(231, 233, 228, 0.9)' }} />
      <div className="container mx-auto max-w-6xl relative z-10 h-full flex flex-col justify-between py-12 md:py-16 w-full">
        <div className="flex-1 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 w-full">
          <div className="flex-1 text-center md:text-left space-y-3 md:space-y-4 lg:space-y-6 w-full max-w-full">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#648199] max-w-2xl mx-auto md:mx-0">
              Oferecemos soluções financeiras completas e integradas que promovem clareza, organização e crescimento para pessoas e empresas.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-primary italic font-medium max-w-2xl mx-auto md:mx-0">
              Planejar com inteligência, Viver com liberdade
            </p>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end w-full max-w-full">
            <img src={heroLogo} alt="MZ Consultoria Financeira" className="w-full max-w-[250px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain" />
          </div>
        </div>
        
        <div className="w-full flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-6 md:pt-8 max-w-full">
          <a href="https://wa.me/5551981821137" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg">
            Agendar consulta
            <ArrowRight size={18} className="md:w-5 md:h-5" />
          </a>
          
          <button onClick={() => {
          const element = document.getElementById("services");
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary/10 text-foreground border-2 border-primary/30 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-primary/20 transition-all">
            Conhecer serviços
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;