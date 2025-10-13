import { CreditCard, Plane } from "lucide-react";
import cardsImage from "@/assets/cards-benefits.jpg";

const FinancialSolutions = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <CreditCard className="text-primary" size={24} />
              </div>
              <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <Plane className="text-accent-foreground" size={24} />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Soluções Financeiras Completas
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Solucionamos através da consultoria seu descontrole financeiro e organizamos suas dívidas!
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Aqui também podemos falar das Milhas, ensinamos você a se utilizar de todos os benefícios dos seus cartões com estratégia.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl border border-border">
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Organização completa de dívidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Estratégias para maximizar benefícios de cartões</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Consultoria especializada em milhas e pontos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Controle financeiro personalizado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src={cardsImage}
              alt="Consultoria especializada em cartões de crédito e programa de milhas"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSolutions;
