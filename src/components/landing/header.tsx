'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b bg-background/80 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold font-headline text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <span>Francisco García</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 font-bold font-headline text-lg" onClick={() => setMobileMenuOpen(false)}>
                  <Code2 className="h-6 w-6 text-primary" />
                  <span>Francisco García</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="flex w-full items-center py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
