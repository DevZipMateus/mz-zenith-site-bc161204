import { Mail, Phone, MapPin, Clock, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-background w-full overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4">
            Entre em contato
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar você a transformar suas finanças e alcançar seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Telefone</h3>
                <a 
                  href="https://wa.me/5551981821137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  (51) 98182-1137
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">E-mail</h3>
                <a 
                  href="mailto:marilia_zereu@hotmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  marilia_zereu@hotmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary/30 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-secondary-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Endereço</h3>
                <p className="text-foreground">
                  Av. Papa João XXIII, 274<br />
                  Porto Alegre, RS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Horário de atendimento</h3>
                <p className="text-foreground">
                  Segunda a sexta das 8h às 18h
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-primary to-primary/90 p-6 md:p-8 rounded-xl text-primary-foreground">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Agende sua consulta
              </h3>
              <p className="text-sm md:text-base mb-4 md:mb-6 opacity-95">
                Transforme sua realidade financeira com orientação especializada. Entre em contato e descubra como podemos ajudar você ou sua empresa.
              </p>
              <a
                href="https://wa.me/5551981821137"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-accent/90 transition-all"
              >
                <Phone size={18} />
                Falar via WhatsApp
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Redes sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/marilia-zereu-01330034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/mz_consultoriafinanceira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent/20 w-14 h-14 rounded-lg flex items-center justify-center text-accent-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
