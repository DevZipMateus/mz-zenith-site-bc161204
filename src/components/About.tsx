import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-meeting-new.jpg";
import mariliaImage from "@/assets/marilia-zereu.jpg";
const About = () => {
  return <section id="about" className="py-12 md:py-20 px-4 w-full overflow-hidden" style={{ backgroundColor: '#f7fff7' }}>
      <div className="container mx-auto max-w-6xl w-full">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-stone-950 md:text-4xl">
            Quem Somos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="animate-fade-in">
            <img src={teamImage} alt="Equipe MZ Consultoria Financeira" className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
          
          <div className="animate-fade-in bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4" style={{
          animationDelay: "0.2s",
          borderLeftColor: '#24445d'
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

            <div className="flex justify-center w-full">
              <div className="p-4 max-w-md w-full">
                <img src={mariliaImage} alt="Marília Zereu, CEO da MZ Consultoria" className="rounded-full w-full aspect-square object-cover mb-3" />
                <h3 className="text-lg md:text-xl font-bold text-slate-950 mb-2">Marília Zereu</h3>
                <p className="text-sm md:text-base font-semibold mb-2" style={{ color: '#24445d' }}>
                  CEO da MZ Consultoria, Contadora, Perita Contábil
                </p>
                <p className="text-sm md:text-base text-slate-950 leading-relaxed">
                  Educadora financeira e consultora financeira especializada no atendimento a pessoas físicas e jurídicas, com foco em organização, controle e planejamento financeiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;