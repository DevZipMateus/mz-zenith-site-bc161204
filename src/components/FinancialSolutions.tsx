import { Check } from "lucide-react";
import clientMeetingImage from "@/assets/client-meeting.jpg";

const FinancialSolutions = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src={clientMeetingImage}
              alt="Reunião com clientes da MZ Consultoria Financeira"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 mb-6 md:mb-8">
              VANTAGENS DE SER NOSSO CLIENTE
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-md flex items-center justify-center">
                  <Check className="text-primary" size={20} strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-slate-950 leading-relaxed">
                  Integração entre sistema (gestor) e estratégia (consultoria).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-md flex items-center justify-center">
                  <Check className="text-primary" size={20} strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-slate-950 leading-relaxed">
                  Soluções personalizadas conforme o momento da empresa.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-md flex items-center justify-center">
                  <Check className="text-primary" size={20} strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-slate-950 leading-relaxed">
                  Experiência prática em planejamento, fluxo de caixa e indicadores de crescimento.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-md flex items-center justify-center">
                  <Check className="text-primary" size={20} strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-slate-950 leading-relaxed">
                  Treinamentos corporativos para seus colaboradores em educação financeira e estratégias em gestão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSolutions;
