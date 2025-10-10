import { useEffect, useRef, useState } from "react";

interface Step {
  title: string;
  description: string;
  imageUrl: string;
}

const steps: Step[] = [
  {
    title: "Planejamento Financeiro",
    description: "Análise completa da sua situação financeira atual e definição de objetivos claros para o futuro.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Estratégia Personalizada",
    description: "Desenvolvimento de um plano financeiro sob medida, alinhado aos seus objetivos e perfil.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Acompanhamento Contínuo",
    description: "Monitoramento regular e ajustes estratégicos para garantir que você alcance seus objetivos.",
    imageUrl: "/placeholder.svg"
  }
];

const ScrollImageSection = () => {
  const [activeImage, setActiveImage] = useState(steps[0].imageUrl);
  const [imageOpacity, setImageOpacity] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && steps[index]) {
              // Fade out
              setImageOpacity(0);
              
              // Change image after fade out
              setTimeout(() => {
                setActiveImage(steps[index].imageUrl);
                // Fade in
                setImageOpacity(1);
              }, 300);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-background py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Sticky Image Panel */}
          <div className="lg:sticky lg:top-32 h-[500px] rounded-lg overflow-hidden shadow-elegant">
            <img
              src={activeImage}
              alt="Imagem interativa"
              className="w-full h-full object-cover transition-opacity duration-300"
              style={{ opacity: imageOpacity }}
            />
          </div>

          {/* Scroll Steps */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="min-h-[400px] flex flex-col justify-center space-y-4"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {step.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollImageSection;
