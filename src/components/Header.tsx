import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="MZ Consultoria Financeira" className="h-12 w-auto" />
            <span className="text-xl font-bold text-primary hidden sm:block">
              MZ Consultoria
            </span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:bg-muted rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("palestras")}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Palestras
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Contato
              </button>
            </li>
            <li>
              <a
                href="https://wa.me/5551981821137"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("palestras")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Palestras
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Contato
              </button>
            </li>
            <li>
              <a
                href="https://wa.me/5551981821137"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
