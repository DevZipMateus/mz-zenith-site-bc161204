import { Target, Eye, Heart } from "lucide-react";

const MissionVisionValues = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-white w-full overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2 w-full">
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
              <Target style={{ color: '#ffd66d' }} size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 md:mb-4">Missão</h3>
            <p className="text-sm md:text-base text-slate-950">
              Oferecer soluções financeiras completas e integradas que promovam clareza, organização e crescimento para pessoas e empresas, fortalecendo sua gestão e preparando-as para um futuro seguro.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2" style={{
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

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2" style={{
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
      </div>
    </section>
  );
};

export default MissionVisionValues;
