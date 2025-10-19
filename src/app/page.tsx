import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import TechStack from '@/components/landing/tech-stack';
import Projects from '@/components/landing/projects';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
