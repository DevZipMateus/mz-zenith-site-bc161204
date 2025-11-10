import { BookOpen, Users, TrendingUp } from "lucide-react";
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
  return <section id="services" className="py-12 md:py-20 px-4 bg-white w-full overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: '#24445d' }}>
            Nossos serviços
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: '#24445d' }}>
            Soluções completas e integradas para pessoas e empresas que buscam clareza, organização e crescimento financeiro
          </p>
        </div>

        {/* Novos Serviços em Quadros Brancos */}
        <div className="mb-12 md:mb-16 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {/* Serviço 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#24445d' }}>
                Consultoria em organização financeira para pessoas físicas
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#24445d' }}>
                Ajudamos pessoas a entenderem melhor sua relação com o dinheiro, organizar receitas e despesas, criar planejamento personalizado e conquistar mais clareza e tranquilidade para alcançar seus objetivos financeiros.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#24445d' }}>
                Consultoria Estratégica para empresas
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#24445d' }}>
                Atuamos lado a lado com a gestão da empresa para: Analisar fluxo de caixa e resultados (DRE, indicadores), Definir metas e plano estratégico financeiro, Elaborar Plano de Recuperação para empresas no vermelho, Estruturar Plano de Expansão para empresas em crescimento.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#24445d' }}>
                Consultoria para Casais: "Financeiro a Dois"
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#24445d' }}>
                Ajudamos casais a organizarem suas finanças de forma conjunta, alinhando sonhos, eliminando conflitos com o dinheiro e construindo um planejamento financeiro sólido para o futuro.
              </p>
            </div>

            {/* Serviço 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#24445d' }}>
                Soluções completas para potencializar seus resultados
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#24445d' }}>
                Atuamos com investimentos estratégicos, gestão de milhas e benefícios de cartão, aquisição de bens, planejamento de aposentadoria, proteção de patrimônio e estruturação de holding, sempre com foco em segurança, crescimento e tranquilidade financeira.
              </p>
            </div>

            {/* Serviço 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#24445d' }}>
                Gestão Contábil completa para sua empresa
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#24445d' }}>
                Escrituração contábil, elaboração de balanços, DRE, Apuração de impostos, escrituração fiscal e cumprimento das obrigações tributárias, Folha de pagamento, férias, rescisões e todas as obrigações relacionadas a colaboradores.
              </p>
            </div>

            {/* Serviço 6 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#24445d' }}>
                Planejamento Tributário e Abertura/Encerramento de Empresas
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#24445d' }}>
                Estratégias para reduzir a carga tributária de forma legal e segura para sua empresa. Suporte completo para legalização, alterações contratuais ou encerramento de atividades.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16 w-full">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" style={{ color: '#24445d' }}>Produtos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
            {products.map((product, index) => <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-colors" style={{ backgroundColor: '#ffd66d', color: '#24445d' }}>
                  {product.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#24445d' }}>
                  {product.title}
                </h4>
                <p className="text-sm md:text-base" style={{ color: '#24445d' }}>
                  {product.description}
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