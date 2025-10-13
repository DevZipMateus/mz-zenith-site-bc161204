import logoMZ from "@/assets/logo-mz.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={logoMZ} 
            alt="MZ Consultoria Financeira" 
            className="max-w-xs w-full h-auto"
          />
          <p className="text-primary-foreground/80 text-center text-sm">
            © {new Date().getFullYear()} MZ Consultoria Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
