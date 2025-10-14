import heroBg from "@/assets/hero-bg-new.png";

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
        {/* Conteúdo removido */}
      </div>
    </section>
  );
};

export default Hero;
