import { Button } from "@/components/ui/button";

const FamiliarProblems = () => {
  return (
    <section className="py-12 md:py-20 px-4 w-full overflow-hidden" style={{ backgroundColor: '#f7fff7' }}>
      <div className="container mx-auto max-w-6xl w-full">
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 md:text-4xl">
            ISSO SOA FAMILIAR PARA VOCÊ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2 w-full">
            <div className="text-3xl md:text-4xl mb-3">💸</div>
            <h3 className="text-lg md:text-xl font-bold text-stone-950 mb-3">
              "Eu trabalho tanto, mas nunca vejo o dinheiro sobrar no final do mês."
            </h3>
            <p className="text-sm md:text-base text-slate-950 italic">
              Muitos empreendedores têm faturamento, mas não conseguem visualizar para onde o dinheiro está indo — e é aí que a consultoria financeira faz toda a diferença.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2" style={{ 
            animationDelay: "0.1s"
          }}>
            <div className="text-3xl md:text-4xl mb-3">📉</div>
            <h3 className="text-lg md:text-xl font-bold text-stone-950 mb-3">
              "Eu não sei se a minha empresa está crescendo ou só sobrevivendo."
            </h3>
            <p className="text-sm md:text-base text-slate-950 italic">
              Falta de clareza financeira impede decisões estratégicas — e uma boa consultoria mostra o verdadeiro retrato do negócio.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2" style={{ 
            animationDelay: "0.2s"
          }}>
            <div className="text-3xl md:text-4xl mb-3">🧾</div>
            <h3 className="text-lg md:text-xl font-bold text-stone-950 mb-3">
              "Eu não tenho controle sobre o que entra e o que sai da empresa."
            </h3>
            <p className="text-sm md:text-base text-slate-950 italic">
              Sem organização financeira, o caixa vira um mistério — e isso trava o crescimento.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2" style={{ 
            animationDelay: "0.3s"
          }}>
            <div className="text-3xl md:text-4xl mb-3">📊</div>
            <h3 className="text-lg md:text-xl font-bold text-stone-950 mb-3">
              "Eu não faço ideia de quanto posso gastar ou investir."
            </h3>
            <p className="text-sm md:text-base text-slate-950 italic">
              Sem planejamento, o empreendedor toma decisões no escuro — e perde oportunidades.
            </p>
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FamiliarProblems;
