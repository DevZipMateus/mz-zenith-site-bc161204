import { Target, Eye, Heart } from "lucide-react";
import teamImage from "@/assets/team-mz.jpg";
import mariliaImage from "@/assets/marilia-zereu.jpg";
import nereuImage from "@/assets/nereu-kuntz.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4">
            Quem Somos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div className="animate-fade-in">
            <img 
              src={teamImage} 
              alt="Equipe MZ Consultoria Financeira" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              A MZ Consultoria Financeira nasceu com o propósito de ajudar pessoas e empresas a conquistarem mais clareza, organização e crescimento em sua vida financeira e empresarial.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              Com uma visão moderna e prática, a MZ entende que lidar com finanças vai além de organizar números: é criar estratégias para gerar resultados, fortalecer negócios e projetar um futuro sólido e sustentável.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              A marca foi construída para oferecer uma gama completa de soluções financeiras em um só lugar — desde consultoria individual até estratégias empresariais — unindo conhecimento técnico, experiência prática e uma rede de parceiros especializados.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
              Nosso compromisso é tornar a gestão financeira acessível, clara e eficiente, permitindo que nossos clientes cuidem do presente e construam o futuro com confiança.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-4 rounded-lg shadow-md border border-border">
                <img 
                  src={mariliaImage} 
                  alt="Marília Zereu, CEO da MZ Consultoria" 
                  className="rounded-lg w-full h-48 object-cover mb-3"
                />
                <p className="text-sm text-foreground leading-relaxed">
                  Marília Zereu, CEO da MZ Consultoria, Contadora, Perita Contábil, Educadora financeira e consultora financeira especializada no atendimento a pessoas físicas e jurídicas, com foco em organização, controle e planejamento financeiro.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg shadow-md border border-border">
                <img 
                  src={nereuImage} 
                  alt="Nereu Kuntz, Administrador de empresas" 
                  className="rounded-lg w-full h-48 object-cover mb-3"
                />
                <p className="text-sm text-foreground leading-relaxed">
                  Nereu Kuntz, Administrador de empresas e Planejador Financeiro.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-card p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border border-border">
            <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 md:mb-4">Missão</h3>
            <p className="text-sm md:text-base text-slate-950">
              Oferecer soluções financeiras completas e integradas que promovam clareza, organização e crescimento para pessoas e empresas, fortalecendo sua gestão e preparando-as para um futuro seguro.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border border-border" style={{ animationDelay: "0.1s" }}>
            <div className="bg-accent/20 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6">
              <Eye className="text-accent-foreground" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 md:mb-4">Visão</h3>
            <p className="text-sm md:text-base text-slate-950">
              Ser reconhecida como uma consultoria referência em soluções financeiras personalizadas e integradas, ajudando pessoas e empresas a crescerem de forma sustentável.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border border-border" style={{ animationDelay: "0.2s" }}>
            <div className="bg-accent/30 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6">
              <Heart className="text-accent-foreground" size={28} />
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
      </div>
    </section>
  );
};

export default About;
