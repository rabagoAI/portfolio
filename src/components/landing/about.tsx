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
              Mi Pasión por el Código
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Soy un desarrollador de software apasionado por resolver problemas complejos y construir aplicaciones que no solo funcionen a la perfección, sino que también ofrezcan una experiencia de usuario excepcional. Mi curiosidad me ha llevado a dominar tanto la lógica del backend, con la potencia de <strong>Java</strong> y <strong>Spring Boot</strong>, como la interactividad del frontend, creando interfaces dinámicas y atractivas con <strong>React</strong>.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Disfruto trabajando en todo el ciclo de vida del desarrollo, desde la conceptualización de una idea hasta su despliegue final con herramientas como <strong>Firebase</strong>. Siempre estoy en busca de nuevos retos y aprendiendo continuamente para mantenerme a la vanguardia tecnológica.
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
