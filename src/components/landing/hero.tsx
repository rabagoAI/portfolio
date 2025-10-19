import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { AiSummaryDialog } from '@/components/landing/ai-summary-dialog';

export default function Hero() {
  const showAISummary = !!process.env.NEXT_PUBLIC_GEMINI_API_KEY || !!process.env.GEMINI_API_KEY;

  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
              Hola, soy Francisco García.
              <br />
              <span className="text-primary">Transformo ideas</span> en soluciones de software.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Desarrollador Full Stack especializado en el ecosistema Java y JavaScript. Creando experiencias web intuitivas, desde un backend potente hasta un frontend dinámico.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#projects">
                Ver mis proyectos
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">
                Contactar
              </Link>
            </Button>
             {showAISummary && <AiSummaryDialog />}
          </div>
        </div>
      </div>
    </section>
  );
}
