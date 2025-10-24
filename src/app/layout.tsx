import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

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
        {/* Script para prevenir scroll automático */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevenir scroll automático inmediatamente
              if (window.location.hash) {
                window.history.replaceState(null, null, ' ');
              }
              // Scroll al top en carga inicial
              window.addEventListener('load', function() {
                setTimeout(function() {
                  window.scrollTo(0, 0);
                }, 0);
              });
              // Scroll al top también en DOMContentLoaded por si acaso
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(function() {
                  window.scrollTo(0, 0);
                }, 0);
              });
            `
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}