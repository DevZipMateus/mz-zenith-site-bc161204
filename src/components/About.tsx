import { Target, Eye, Heart } from "lucide-react";
import teamImage from "@/assets/team-mz.jpg";
import mariliaImage from "@/assets/marilia-zereu.jpg";
import nereuImage from "@/assets/nereu-kuntz.jpg";
const About = () => {
  return <section id="about" className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-stone-950 md:text-4xl">
            Quem Somos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div className="animate-fade-in">
            <img src={teamImage} alt="Equipe MZ Consultoria Financeira" className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
          
          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <p className="text-base md:text-lg leading-relaxed mb-4 text-slate-950">
              A MZ Consultoria Financeira nasceu com o propósito de ajudar pessoas e empresas a conquistarem mais clareza, organização e crescimento em sua vida financeira e empresarial.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4 text-slate-950">
              Com uma visão moderna e prática, a MZ entende que lidar com finanças vai além de organizar números: é criar estratégias para gerar resultados, fortalecer negócios e projetar um futuro sólido e sustentável.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4 text-slate-950">
              A marca foi construída para oferecer uma gama completa de soluções financeiras em um só lugar — desde consultoria individual até estratégias empresariais — unindo conhecimento técnico, experiência prática e uma rede de parceiros especializados.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-slate-950">
              Nosso compromisso é tornar a gestão financeira acessível, clara e eficiente, permitindo que nossos clientes cuidem do presente e construam o futuro com confiança.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-4 rounded-lg shadow-md border border-border">
                <img src={mariliaImage} alt="Marília Zereu, CEO da MZ Consultoria" className="rounded-lg w-full h-48 object-cover mb-3" />
                <p className="text-sm md:text-base text-slate-950 leading-relaxed">
                  Marília Zereu, CEO da MZ Consultoria, Contadora, Perita Contábil, Educadora financeira e consultora financeira especializada no atendimento a pessoas físicas e jurídicas, com foco em organização, controle e planejamento financeiro.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg shadow-md border border-border">
                <img src={nereuImage} alt="Nereu Kuntz, Administrador de empresas" className="rounded-lg w-full h-48 object-cover mb-3" />
                <p className="text-sm md:text-base text-slate-950 leading-relaxed">
                  Nereu Kuntz, Administrador de empresas e Planejador Financeiro.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition-all animate-fade-in border-2" style={{ borderColor: '#24445d' }}>
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
              <Target style={{ color: '#ffd66d' }} size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 md:mb-4">Missão</h3>
            <p className="text-sm md:text-base text-slate-950">
              Oferecer soluções financeiras completas e integradas que promovam clareza, organização e crescimento para pessoas e empresas, fortalecendo sua gestão e preparando-as para um futuro seguro.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition-all animate-fade-in border-2" style={{
          borderColor: '#24445d',
          animationDelay: "0.1s"
        }}>
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
              <Eye style={{ color: '#ffd66d' }} size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 md:mb-4">Visão</h3>
            <p className="text-sm md:text-base text-slate-950">
              Ser reconhecida como uma consultoria referência em soluções financeiras personalizadas e integradas, ajudando pessoas e empresas a crescerem de forma sustentável.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition-all animate-fade-in border-2" style={{
          borderColor: '#24445d',
          animationDelay: "0.2s"
        }}>
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
              <Heart style={{ color: '#ffd66d' }} size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 md:mb-4">Valores</h3>
            <ul className="text-sm md:text-base text-slate-950 space-y-2">
              <li className="bg-transparent">• Clareza: simplificar para gerar entendimento</li>
              <li>• Organização: estruturar processos eficientes</li>
              <li>• Crescimento: alcançar resultados concretos</li>
              <li>• Confiança: agir com ética e transparência</li>
              <li>• Inovação: soluções práticas e atualizadas</li>
              <li>• Parceria: trabalhar em conjunto</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 md:text-4xl">
              ISSO SOA FAMILIAR PARA VOCÊ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border-2" style={{ borderColor: '#24445d' }}>
              <div className="text-3xl md:text-4xl mb-3">💸</div>
              <h3 className="text-lg md:text-xl font-bold text-stone-950 mb-3">
                "Eu trabalho tanto, mas nunca vejo o dinheiro sobrar no final do mês."
              </h3>
              <p className="text-sm md:text-base text-slate-950 italic">
                Muitos empreendedores têm faturamento, mas não conseguem visualizar para onde o dinheiro está indo — e é aí que a consultoria financeira faz toda a diferença.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border-2" style={{ 
              borderColor: '#24445d',
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

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border-2" style={{ 
              borderColor: '#24445d',
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

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border-2" style={{ 
              borderColor: '#24445d',
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
        </div>
      </div>
    </section>;
};
export default About;