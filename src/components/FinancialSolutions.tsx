import { Check, BarChart3, Compass, Calendar, Lightbulb, Coins } from "lucide-react";
import clientMeetingImage from "@/assets/client-working.jpg";
const FinancialSolutions = () => {
  return <section className="py-12 md:py-20 px-4 bg-background w-full overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <img src={clientMeetingImage} alt="Reunião com clientes da MZ Consultoria Financeira" className="rounded-xl shadow-2xl w-full h-auto object-cover" />
          </div>

          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
         }}>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-stone-950 mb-4 md:mb-6 lg:mb-8 font-extrabold leading-tight">
              VANTAGENS DE SER NOSSO <span className="text-primary">CLIENTE</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#ffd66d' }}>
                  <Check className="text-white" size={20} strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-slate-950 leading-relaxed">
                  Integração entre sistema (gestor) e estratégia (consultoria).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#ffd66d' }}>
                  <Check className="text-white" size={20} strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-slate-950 leading-relaxed">
                  Soluções personalizadas conforme o momento da empresa.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#ffd66d' }}>
                  <Check className="text-white" size={20} strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-slate-950 leading-relaxed">
                  Experiência prática em planejamento, fluxo de caixa e indicadores de crescimento.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#ffd66d' }}>
                  <Check className="text-white" size={20} strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-slate-950 leading-relaxed">
                  Treinamentos corporativos para seus colaboradores em educação financeira e estratégias em gestão.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* O Caminho do Lucro */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 mb-4">
              O Caminho do Lucro
            </h2>
            <p className="text-base md:text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed">
              O caminho para uma gestão financeira sólida é construído com base em clareza e estratégia. 
              Nossa metodologia foi desenvolvida para oferecer aos clientes uma visão precisa de seus números 
              e direcioná-los com segurança ao alcance de seus objetivos.
            </p>
          </div>

          <div className="bg-stone-900 rounded-2xl p-4 md:p-6 lg:p-8 w-full overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 w-full">
              {/* Card 1 */}
              <div className="bg-[#f7fff7] rounded-xl p-4 flex flex-col items-center text-center w-full">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <BarChart3 className="mb-3" size={28} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-2 text-sm">
                  Diagnóstico Personalizado
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Realizamos uma análise completa da situação financeira da empresa para identificar pontos fortes, riscos e oportunidades. 
                  Essa etapa é essencial para compreender com clareza onde você está e para onde pode ir.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f7fff7] rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <Compass className="mb-3" size={28} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-2 text-sm">
                  Estruturação Financeira
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Organizamos e estruturamos todo o fluxo financeiro da empresa de forma estratégica e eficiente, 
                  garantindo mais controle, previsibilidade e segurança nas decisões do dia a dia.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f7fff7] rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <Calendar className="mb-3" size={28} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-2 text-sm">
                  Acompanhamento Financeiro Semanal e Mensal
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Fazemos um acompanhamento periódico dos dados financeiros semanal e mensalmente para identificar oportunidades de melhoria, 
                  corrigir desvios e garantir que o planejamento esteja no caminho certo.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#f7fff7] rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <Lightbulb className="mb-3" size={28} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-2 text-sm">
                  Decisões Assertivas com Foco no Lucro
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Com base em informações claras e organizadas, apoiamos você na tomada de decisões estratégicas 
                  que fortalecem o caixa da empresa e impulsionam os lucros de forma sustentável.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-[#f7fff7] rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-white font-bold">5</span>
                </div>
                <Coins className="mb-3" size={28} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-2 text-sm">
                  Soluções Financeiras Personalizadas
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Soluções para a vida financeira do empreendedor: planejamento para aposentadoria, criação de reserva de emergência, 
                  estratégias para metas pessoais como viagens e investimentos, sempre com foco na segurança e no equilíbrio financeiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinancialSolutions;