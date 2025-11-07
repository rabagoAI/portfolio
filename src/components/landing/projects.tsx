import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'smartstudy',
    title: 'SmartStudIA - Plataforma Educativa con IA',
    description: 'Plataforma educativa completa que optimiza el proceso de aprendizaje mediante inteligencia artificial. Incluye sistema de pagos, gestión de documentos PDF, multiidioma y tours interactivos para una experiencia de usuario fluida.',
    technologies: ['React 19', 'Vite', 'Firebase', 'PayPal API', 'PDF.js', 'i18next', 'React Joyride'],
    githubUrl: 'https://github.com/rabagoAI/smartstudy-app.git',
    demoUrl: 'https://www.smartstudia.com/',
  },
  {
    id: 'mundo-gumi',
    title: 'Mundo Gumi - E-commerce Interactivo',
    description: 'Desarrollo de tienda online con enfoque en experiencia visual y navegación intuitiva. Implementa autenticación de usuarios, base de datos en tiempo real y gestión dinámica de productos.',
    technologies: ['React 19', 'Firebase', 'React Router', 'React Markdown', 'Firestore'],
    githubUrl: 'https://github.com/rabagoAI/mundo-gumi-web-final.git',
    demoUrl: 'https://mundo-gumi-web-final.vercel.app/',
  },
  {
    id: 'uxrescue',
    title: 'UXrescue - Modernización Web',
    description: 'Conversión de sitios web obsoletos en experiencias digitales que convierten visitantes en clientes. Implementación fullstack con animaciones avanzadas y sistema de contacto integrado.',
    technologies: ['Next.js 15', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Resend'],
    githubUrl: 'https://github.com/rabagoAI/uxrescue.git',
    demoUrl: 'https://uxrescue.vercel.app/',
  },
  {
    id: 'crypto-dashboard',
    title: 'Crypto-Dashboard',
    description: 'Aplicación web moderna para tracking de criptomonedas en tiempo real con gráficos interactivos y gestión de favoritos.',
    technologies: ['React 18.2.0', 'Tailwind CSS 3.4.3', 'Vite 7.2.2', 'TypeScript', 'Lucide React'],
    githubUrl: 'https://github.com/rabagoAI/crypto-dashboard.git',
    demoUrl: 'https://crypto-dashboard-ph57883kj-rabagoais-projects.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Proyectos Destacados</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Una selección de mis trabajos recientes con stacks tecnológicos modernos.
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
                  <CardDescription className="text-base">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button asChild size="sm">
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