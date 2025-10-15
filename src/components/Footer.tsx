import logo from "@/assets/logo-new.png";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-primary py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="MZ Consultoria Financeira" 
              className="h-16 w-auto"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transformando sua relação com o dinheiro através de consultoria personalizada e educação financeira.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("palestras")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Palestras
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-4">
              Nossos Serviços
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Consultoria Financeira</li>
              <li>BPO Financeiro</li>
              <li>Palestras e Treinamentos</li>
              <li>E-books Educativos</li>
              <li>Aulas de Educação Financeira</li>
              <li>Sistema eGestor</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="text-primary-foreground/80 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="https://wa.me/5551981821137" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  (51) 98182-1137
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary-foreground/80 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="mailto:contato@mzconsultoria.com.br"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  contato@mzconsultoria.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-foreground/80 mt-1 flex-shrink-0" size={18} />
                <span className="text-primary-foreground/80 text-sm">
                  Porto Alegre, RS
                </span>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/mz_consultoriafinanceira" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-primary-foreground/70 text-center text-xs md:text-sm">
            © {new Date().getFullYear()} MZ Consultoria Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
