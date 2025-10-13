import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-6 md:py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <img 
            src={logo} 
            alt="MZ Consultoria Financeira" 
            className="h-12 md:h-16 w-auto"
          />
          <p className="text-primary-foreground/80 text-center text-xs md:text-sm">
            © {new Date().getFullYear()} MZ Consultoria Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
