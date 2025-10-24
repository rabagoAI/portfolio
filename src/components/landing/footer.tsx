import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <p className="flex items-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Francisco García. Diseñado y desarrollado con{' '}
          <Heart className="mx-1 h-4 w-4 fill-red-500 text-red-500" />.
        </p>
      </div>
    </footer>
  );
}
