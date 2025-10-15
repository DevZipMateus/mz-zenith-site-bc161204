import { Presentation, Users, TrendingUp, BookOpen } from "lucide-react";
import palestra1 from "@/assets/palestra-1.jpg";
import palestra2 from "@/assets/palestra-2.jpg";

const Palestras = () => {
  const palestras = [
    {
      image: palestra1,
      alt: "Palestra sobre gestão financeira empresarial",
    },
    {
      image: palestra2,
      alt: "Palestra sobre planejamento de vida e finanças pessoais",
    },
  ];

  const temas = [
    {
      icon: TrendingUp,
      title: "Escolhas Inteligentes, Resultados Reais",
      description: "Como tomar decisões financeiras que transformam sua realidade pessoal e profissional",
    },
    {
      icon: Users,
      title: "Gestão Financeira para Empreendedores",
      description: "Estratégias práticas para organizar e fazer crescer o seu negócio",
    },
    {
      icon: BookOpen,
      title: "Educação Financeira",
      description: "Fundamentos essenciais para uma vida financeira saudável e equilibrada",
    },
    {
      icon: Presentation,
      title: "Marketing Digital e Finanças",
      description: "Como integrar estratégias digitais com gestão financeira eficiente",
    },
  ];

  return (
    <section id="palestras" className="py-12 md:py-20 px-4 bg-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Palestras e Treinamentos
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Capacite sua equipe com conhecimento transformador sobre gestão financeira e empreendedorismo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {temas.map((tema, index) => {
            const Icon = tema.icon;
            return (
              <div
                key={index}
                className="bg-card p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent/20 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-card-foreground mb-2">
                  {tema.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-950">
                  {tema.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {palestras.map((palestra, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={palestra.image}
                alt={palestra.alt}
                className="w-full h-60 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary to-primary/90 p-6 md:p-8 lg:p-12 rounded-xl text-center animate-fade-in">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-3 md:mb-4">
            Agende uma palestra para sua empresa
          </h3>
          <p className="text-sm md:text-base text-primary-foreground/95 mb-4 md:mb-6 max-w-2xl mx-auto">
            Transforme o conhecimento financeiro da sua equipe com palestras personalizadas e dinâmicas
          </p>
          <a
            href="https://wa.me/5551981821137"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-accent/90 transition-all"
          >
            <Presentation size={20} />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Palestras;
