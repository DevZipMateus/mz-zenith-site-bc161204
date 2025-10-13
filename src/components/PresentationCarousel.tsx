import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
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
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
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
                        onClick={() => setSelectedImage(slide)}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 z-50 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-colors"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PresentationCarousel;
