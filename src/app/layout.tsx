import type { Metadata } from 'next';
import './globals.css';

import { AppProvider } from '../context/AppContext';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

export const metadata: Metadata = {
  title: 'Fernando Mendoza | Portfolio',
  description: 'Fernando Mendoza Portfolio. Mexican Game Developer & Programmer specializing in crafting chaotic co-op experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-[#E9005A]/40 overflow-x-hidden">
        
        <AppProvider>
          <Navbar />
          
          {/* Se inserta el contenido de Home, About y Projects */}
          <main className="min-h-screen">
            {children}
          </main>
          
          <Footer />
        </AppProvider>

      </body>
    </html>
  );
}