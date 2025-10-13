import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import slide5 from "@/assets/slide-5.jpg";
import slide6 from "@/assets/slide-6.jpg";
import slide7 from "@/assets/slide-7.jpg";
import slide8 from "@/assets/slide-8.jpg";
import slide9 from "@/assets/slide-9.jpg";
import slide10 from "@/assets/slide-10.jpg";
import slide11 from "@/assets/slide-11.jpg";
import slide12 from "@/assets/slide-12.jpg";
import slide13 from "@/assets/slide-13.jpg";
import slide14 from "@/assets/slide-14.jpg";
import slide15 from "@/assets/slide-15.jpg";
import slide16 from "@/assets/slide-16.jpg";

const slides = [
  { src: slide1, alt: "Apresentação Comercial MZ Consultoria" },
  { src: slide2, alt: "Quem Somos" },
  { src: slide3, alt: "Missão, Visão e Valores" },
  { src: slide4, alt: "Nosso Time de Sucesso" },
  { src: slide5, alt: "Parceiros do Nosso Time" },
  { src: slide6, alt: "Nossos Serviços - Parte 1" },
  { src: slide7, alt: "Nossos Serviços - Parte 2" },
  { src: slide8, alt: "Aplicação - Como Funciona" },
  { src: slide9, alt: "Valores dos Planos" },
  { src: slide10, alt: "Ideias, Reuniões e Conexões" },
  { src: slide11, alt: "Treinamentos Empresariais" },
  { src: slide12, alt: "Palestra: Escolhas Inteligentes, Resultados Reais" },
  { src: slide13, alt: "Palestra sobre Marketing Digital" },
  { src: slide14, alt: "Aulas Gravadas sobre Fluxo de Caixa" },
  { src: slide15, alt: "Vantagens de Ser Nosso Cliente" },
  { src: slide16, alt: "Obrigado por Receber Nossa Proposta" },
];

const PresentationCarousel = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % slides.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + slides.length) % slides.length);
    }
  };

  return (
    <>
      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-2 sm:px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-contain bg-background hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImageIndex(index)}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4 w-10 h-10 md:w-12 md:h-12" />
            <CarouselNext className="right-2 sm:right-4 w-10 h-10 md:w-12 md:h-12" />
          </Carousel>
        </div>
      </section>

      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-full h-full p-0 border-0 bg-black/95 md:max-w-[95vw] md:max-h-[95vh] md:bg-transparent">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-2 right-2 md:-top-12 md:right-0 z-50 bg-background/80 backdrop-blur-sm text-foreground p-2 md:p-2 rounded-full hover:bg-background transition-colors"
            aria-label="Fechar"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm text-foreground p-2 md:p-3 rounded-full hover:bg-background transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} className="md:w-8 md:h-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm text-foreground p-2 md:p-3 rounded-full hover:bg-background transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={28} className="md:w-8 md:h-8" />
          </button>

          {selectedImageIndex !== null && (
            <div className="w-full h-full flex items-center justify-center p-2 md:p-0">
              <img
                src={slides[selectedImageIndex].src}
                alt={slides[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PresentationCarousel;
