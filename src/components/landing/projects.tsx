import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'smartstudy',
    title: 'SmartStudy - Plataforma Educativa Web',
    description: 'Una aplicación web completa diseñada para optimizar el proceso de aprendizaje y gestión de materiales de estudio. Como desarrollador principal, implementé un backend robusto con Java y Spring Boot para la lógica de negocio y una interfaz de usuario interactiva con React para ofrecer una experiencia fluida a los estudiantes.',
    technologies: ['Java', 'Spring Boot', 'React', 'Firebase'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'mundo-gumi',
    title: 'Mundo Gumi - E-commerce Interactivo',
    description: 'Desarrollo de la interfaz de usuario para una tienda online, enfocada en una navegación visual y una experiencia de compra ágil. Este proyecto me permitió profundizar en el manejo del estado global en React y la integración con APIs para la gestión de productos y carritos.',
    technologies: ['React', 'JavaScript', 'CSS3', 'Firebase'],
    githubUrl: '#',
  },
  {
    id: 'tenis-ranking',
    title: 'Tenis Ranking App',
    description: 'Una aplicación web para visualizar y seguir clasificaciones de tenis en tiempo real. El reto principal fue consumir y procesar datos de una API externa, mostrando la información de manera clara y ordenada. El backend se desarrolló con Node.js para una gestión eficiente de las peticiones.',
    technologies: ['Node.js', 'React', 'JavaScript'],
    githubUrl: '#',
  },
  {
    id: 'newsletter-microservice',
    title: 'Microservicio de Newsletter para SmartStudy',
    description: 'Un microservicio independiente construido con Node.js y Express para gestionar la suscripción y el envío de boletines informativos. Este proyecto demuestra mi capacidad para crear componentes de backend ligeros y desacoplados.',
    technologies: ['Node.js', 'Express.js'],
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Proyectos Destacados</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Aquí hay una selección de mis trabajos recientes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {projectImage && (
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    data-ai-hint={projectImage.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
