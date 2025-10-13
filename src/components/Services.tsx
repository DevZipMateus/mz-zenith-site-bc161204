import { BookOpen, Users, Briefcase, Calculator, TrendingUp, Presentation } from "lucide-react";
const Services = () => {
  const products = [{
    icon: <BookOpen size={32} />,
    title: "E-books",
    description: "Material educativo completo sobre gestão financeira, planejamento e organização das finanças pessoais e empresariais."
  }, {
    icon: <Users size={32} />,
    title: "Aulas",
    description: "Aulas práticas e didáticas sobre educação financeira, fluxo de caixa e estratégias de crescimento sustentável."
  }, {
    icon: <TrendingUp size={32} />,
    title: "Treinamentos",
    description: "Capacitação personalizada para equipes e gestores sobre controle financeiro e tomada de decisão estratégica."
  }];
  const services = [{
    icon: <Briefcase size={32} />,
    title: "Consultoria",
    description: "Orientação estratégica para pessoa física, casais e empresas, com foco em organização, planejamento de metas e aposentadoria."
  }, {
    icon: <Calculator size={32} />,
    title: "BPO Financeiro",
    description: "Gestão completa do setor financeiro: fluxo de caixa, controle de custos, análise de indicadores e relatórios gerenciais."
  }, {
    icon: <Presentation size={32} />,
    title: "Palestras",
    description: "Palestras motivacionais e educativas sobre mentalidade financeira, organização e construção de futuro sólido."
  }];
  return <section id="services" className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4">
            Nossos serviços
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto">
            Soluções completas e integradas para pessoas e empresas que buscam clareza, organização e crescimento financeiro
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">Produtos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => <div key={index} className="bg-card p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all animate-fade-in border border-border hover:border-accent group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="bg-accent/20 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 text-accent-foreground group-hover:bg-accent/30 transition-colors">
                  {product.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-card-foreground mb-3">
                  {product.title}
                </h4>
                <p className="text-sm md:text-base text-slate-950">
                  {product.description}
                </p>
              </div>)}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">Serviços</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => <div key={index} className="bg-card p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all animate-fade-in border border-border hover:border-primary group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 text-primary group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base text-neutral-950">
                  {service.description}
                </p>
              </div>)}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://wa.me/5551981821137" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>;
};
export default Services;