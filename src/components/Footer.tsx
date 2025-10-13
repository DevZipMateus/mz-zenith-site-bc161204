import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={logo} 
            alt="MZ Consultoria Financeira" 
            className="h-16 w-auto"
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
