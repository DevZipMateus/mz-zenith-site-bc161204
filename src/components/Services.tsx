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
  return <section id="services" className="py-12 md:py-20 px-4 bg-muted/30 w-full overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4">
            Nossos serviços
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto">
            Soluções completas e integradas para pessoas e empresas que buscam clareza, organização e crescimento financeiro
          </p>
        </div>

        {/* Novos Serviços em Quadros Azuis */}
        <div className="mb-12 md:mb-16 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {/* Serviço 1 */}
            <div className="bg-primary p-6 rounded-xl shadow-lg w-full">
              <h4 className="text-lg font-bold text-primary-foreground mb-3">
                Consultoria em organização financeira para pessoas físicas
              </h4>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">
                Ajudamos pessoas a entenderem melhor sua relação com o dinheiro, organizar receitas e despesas, criar planejamento personalizado e conquistar mais clareza e tranquilidade para alcançar seus objetivos financeiros.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="bg-primary p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-primary-foreground mb-3">
                Consultoria Estratégica para empresas
              </h4>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">
                Atuamos lado a lado com a gestão da empresa para: Analisar fluxo de caixa e resultados (DRE, indicadores), Definir metas e plano estratégico financeiro, Elaborar Plano de Recuperação para empresas no vermelho, Estruturar Plano de Expansão para empresas em crescimento.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="bg-primary p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-primary-foreground mb-3">
                Consultoria para Casais: "Financeiro a Dois"
              </h4>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">
                Ajudamos casais a organizarem suas finanças de forma conjunta, alinhando sonhos, eliminando conflitos com o dinheiro e construindo um planejamento financeiro sólido para o futuro.
              </p>
            </div>

            {/* Serviço 4 */}
            <div className="bg-primary p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-primary-foreground mb-3">
                Soluções completas para potencializar seus resultados
              </h4>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">
                Atuamos com investimentos estratégicos, gestão de milhas e benefícios de cartão, aquisição de bens, planejamento de aposentadoria, proteção de patrimônio e estruturação de holding, sempre com foco em segurança, crescimento e tranquilidade financeira.
              </p>
            </div>

            {/* Serviço 5 */}
            <div className="bg-primary p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-primary-foreground mb-3">
                Gestão Contábil completa para sua empresa
              </h4>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">
                Escrituração contábil, elaboração de balanços, DRE, Apuração de impostos, escrituração fiscal e cumprimento das obrigações tributárias, Folha de pagamento, férias, rescisões e todas as obrigações relacionadas a colaboradores.
              </p>
            </div>

            {/* Serviço 6 */}
            <div className="bg-primary p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-primary-foreground mb-3">
                Planejamento Tributário e Abertura/Encerramento de Empresas
              </h4>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">
                Estratégias para reduzir a carga tributária de forma legal e segura para sua empresa. Suporte completo para legalização, alterações contratuais ou encerramento de atividades.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16 w-full">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">Produtos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
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

        <div className="w-full">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">Serviços</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
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