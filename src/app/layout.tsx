import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import ScrollFix from '@/components/scroll-fix'; // ← Nuevo import

export const metadata: Metadata = {
  title: 'Francisco García Portfolio',
  description: 'Portfolio of Francisco García, a freelance software developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* ⚠️ ELIMINADO: El script que causaba el error */}
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ScrollFix /> {/* ← Agregar este componente */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}