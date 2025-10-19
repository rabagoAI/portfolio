'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { portfolioSummarization } from '@/ai/flows/portfolio-summarization';
import { WandSparkles, Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const portfolioContent = {
  heroSection: `Título Principal: Hola, soy Francisco García. Transformo ideas en soluciones de software robustas y eficientes. Subtítulo/Tagline: Desarrollador Full Stack especializado en el ecosistema Java y JavaScript. Creando experiencias web intuitivas, desde un backend potente hasta un frontend dinámico.`,
  aboutMeSection: `Mi Pasión por el Código. Soy un desarrollador de software apasionado por resolver problemas complejos y construir aplicaciones que no solo funcionen a la perfección, sino que también ofrezcan una experiencia de usuario excepcional. Mi curiosidad me ha llevado a dominar tanto la lógica del backend, con la potencia de Java y Spring Boot, como la interactividad del frontend, creando interfaces dinámicas y atractivas con React. Disfruto trabajando en todo el ciclo de vida del desarrollo, desde la conceptualización de una idea hasta su despliegue final con herramientas como Firebase. Siempre estoy en busca de nuevos retos y aprendiendo continuamente para mantenerme a la vanguardia tecnológica.`,
  techStackSection: `Mi Stack Tecnológico. Frontend: JavaScript (ES6+), React, HTML5, CSS3 / SASS. Backend: Java, Spring Boot, Node.js, Express.js. Bases de Datos y Cloud: Firebase (Firestore, Authentication), SQL (MySQL, PostgreSQL), MongoDB. Herramientas y DevOps: Git y GitHub, Maven, Docker (Básico), Jira.`,
  projectsSection: `Proyectos Destacados. Proyecto 1: SmartStudy - Plataforma Educativa Web. Una aplicación web completa diseñada para optimizar el proceso de aprendizaje y gestión de materiales de estudio. Tecnologías: Java, Spring Boot, React, Firebase. Proyecto 2: Mundo Gumi - E-commerce Interactivo. Desarrollo de la interfaz de usuario para una tienda online, enfocada en una navegación visual y una experiencia de compra ágil. Tecnologías: React, JavaScript, CSS3, Firebase. Proyecto 3: Tenis Ranking App. Una aplicación web para visualizar y seguir clasificaciones de tenis en tiempo real. Tecnologías: Node.js, React, JavaScript. Proyecto 4: Microservicio de Newsletter para SmartStudy. Un microservicio independiente construido con Node.js y Express para gestionar la suscripción y el envío de boletines informativos. Tecnologías: Node.js, Express.js.`,
  contactSection: `Hablemos. ¿Tienes una idea o un proyecto en mente? ¿Buscas un desarrollador para tu equipo? Me encantaría saber más. Envíame un mensaje y empecemos a crear algo increíble juntos.`,
};

export function AiSummaryDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setLoading(true);
    setSummary('');
    try {
      const result = await portfolioSummarization(portfolioContent);
      if (result.summary) {
        setSummary(result.summary);
      } else {
        throw new Error('Failed to generate summary.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo generar el resumen. Por favor, inténtalo de nuevo.',
      });
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      handleGenerateSummary();
    }
    setOpen(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <Button onClick={() => handleOpenChange(true)} variant="outline">
        <WandSparkles className="mr-2 h-4 w-4" />
        Resumen con IA
      </Button>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Resumen del Portfolio con IA</DialogTitle>
          <DialogDescription>
            Un resumen ejecutivo generado por IA que destaca las habilidades y experiencia clave.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <Loader className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="prose prose-sm max-w-none text-foreground text-base leading-relaxed">
              {summary.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
