import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(image => image.id === 'about-me');

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Mi Pasión por el Código Inteligente
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Soy un desarrollador que combina fundamentos sólidos de programación con las últimas herramientas de IA para crear soluciones web eficientes y modernas. Mi experiencia abarca desde la lógica robusta del backend con <strong>Java y Spring Boot</strong>  hasta interfaces dinámicas con <strong>React</strong>, pero mi verdadero diferencial está en cómo integro <strong>inteligencia artificial y automatización</strong> en todo el ciclo de desarrollo.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Disfruto transformando procesos complejos en aplicaciones elegantes, habiendo implementado desde pasarelas de pago hasta flujos de trabajo automatizados con n8n. Mi enfoque es claro: usar la tecnología no solo para construir lo que funciona, sino para crear lo que aporta valor real, manteniéndome siempre en la vanguardia del desarrollo asistido por IA.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-xl shadow-2xl">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  data-ai-hint={aboutImage.imageHint}
                  width={500}
                  height={600}
                  className="aspect-[4/5] object-cover"
                />
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
