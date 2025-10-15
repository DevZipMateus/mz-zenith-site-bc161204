import { Check, BarChart3, Compass, Calendar, Lightbulb, Coins } from "lucide-react";
import clientMeetingImage from "@/assets/client-meeting.jpg";
const FinancialSolutions = () => {
  return <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <img src={clientMeetingImage} alt="Reunião com clientes da MZ Consultoria Financeira" className="rounded-xl shadow-2xl w-full h-auto object-cover grayscale" />
          </div>

          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <h2 className="text-2xl sm:text-3xl text-stone-950 mb-6 md:mb-8 font-extrabold md:text-7xl">
              VANTAGENS DE SER NOSSO <span className="text-primary">CLIENTE</span>
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

          <div className="bg-stone-900 rounded-2xl p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Card 1 */}
              <div className="bg-[#f7fff7] rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <BarChart3 className="mb-4" size={32} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-3 text-base">
                  Diagnóstico Personalizado
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Realizamos uma análise completa da situação financeira da empresa para identificar pontos fortes, riscos e oportunidades. 
                  Essa etapa é essencial para compreender com clareza onde você está e para onde pode ir.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f7fff7] rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <Compass className="mb-4" size={32} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-3 text-base">
                  Estruturação Financeira
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Organizamos e estruturamos todo o fluxo financeiro da empresa de forma estratégica e eficiente, 
                  garantindo mais controle, previsibilidade e segurança nas decisões do dia a dia.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f7fff7] rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <Calendar className="mb-4" size={32} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-3 text-base">
                  Acompanhamento Financeiro Semanal e Mensal
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Fazemos um acompanhamento periódico dos dados financeiros semanal e mensalmente para identificar oportunidades de melhoria, 
                  corrigir desvios e garantir que o planejamento esteja no caminho certo.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#f7fff7] rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <Lightbulb className="mb-4" size={32} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-3 text-base">
                  Decisões Assertivas com Foco no Lucro
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Com base em informações claras e organizadas, apoiamos você na tomada de decisões estratégicas 
                  que fortalecem o caixa da empresa e impulsionam os lucros de forma sustentável.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-[#f7fff7] rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <Coins className="mb-4" size={32} style={{ color: '#ffd66d' }} strokeWidth={2} />
                <h3 className="font-bold text-stone-950 mb-3 text-base">
                  Soluções Financeiras Personalizadas
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
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