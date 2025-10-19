import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const contact = {
  email: 'tu-email-profesional@ejemplo.com',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/your-profile',
};

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Hablemos
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            ¿Tienes una idea o un proyecto en mente? ¿Buscas un desarrollador para tu equipo? Me encantaría saber más. Envíame un mensaje y empecemos a crear algo increíble juntos.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="ghost">
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
