import { Target, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
const About = () => {
  return <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Sobre nós
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              A MZ Consultoria Financeira nasceu com o propósito de ajudar pessoas e empresas a conquistarem mais clareza, organização e crescimento em sua vida financeira e empresarial.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Com uma visão moderna e prática, a MZ entende que lidar com finanças vai além de organizar números: é criar estratégias para gerar resultados, fortalecer negócios e projetar um futuro sólido e sustentável.
            </p>
          </div>
          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <img src={aboutImage} alt="Equipe MZ Consultoria em reunião de consultoria financeira" className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border border-border">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Missão</h3>
            <p className="text-slate-950">
              Oferecer soluções financeiras completas e integradas que promovam clareza, organização e crescimento para pessoas e empresas, fortalecendo sua gestão e preparando-as para um futuro seguro.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border border-border" style={{
          animationDelay: "0.1s"
        }}>
            <div className="bg-accent/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-accent-foreground" size={32} />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Visão</h3>
            <p className="text-slate-950">
              Ser reconhecida como uma consultoria referência em soluções financeiras personalizadas e integradas, ajudando pessoas e empresas a crescerem de forma sustentável.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in border border-border" style={{
          animationDelay: "0.2s"
        }}>
            <div className="bg-accent/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Heart className="text-accent-foreground" size={32} />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Valores</h3>
            <ul className="text-foreground space-y-2">
              <li className="bg-transparent">• Clareza: simplificar para gerar entendimento</li>
              <li>• Organização: estruturar processos eficientes</li>
              <li>• Crescimento: alcançar resultados concretos</li>
              <li>• Confiança: agir com ética e transparência</li>
              <li>• Inovação: soluções práticas e atualizadas</li>
              <li>• Parceria: trabalhar em conjunto</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-muted to-muted/50 p-8 md:p-12 rounded-xl animate-fade-in">
          <p className="text-lg text-foreground leading-relaxed">
            Com uma visão moderna e prática, a MZ entende que lidar com finanças vai além de organizar números: é criar estratégias para gerar resultados, fortalecer negócios e projetar um futuro sólido e sustentável. Nosso compromisso é tornar a gestão financeira acessível, clara e eficiente, permitindo que nossos clientes cuidem do presente e construam o futuro com confiança.
          </p>
        </div>
      </div>
    </section>;
};
export default About;