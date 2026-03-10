"use client";

import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

export const Footer = () => {
  const { lang } = useAppContext();

  return (
    <footer className="py-12 border-t backdrop-blur-sm bg-card/40 border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-1 items-center justify-center md:justify-start gap-2">
          <div className="relative w-6 h-6">
            <Image 
              src="/SpecIco.png" 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="font-headline tracking-tighter text-lg">SpectraGx</span>
        </div>
        <p className="text-muted-foreground text-sm font-code text-center flex-none">
          © {new Date().getFullYear()} // {lang === 'EN' ? 'ALL RIGHTS RESERVED' : 'TODOS LOS DERECHOS RESERVADOS'} // {lang === 'EN' ? 'DESIGNED FOR THE CHAOS' : 'DISEÑADO PARA EL CAOS'}
        </p>
        <div className="flex flex-1 justify-center md:justify-end gap-4">
          <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
          <span className="w-3 h-3 rounded-full bg-primary animate-pulse delay-75" />
          <span className="w-3 h-3 rounded-full bg-accent animate-pulse delay-150" />
        </div>
      </div>
    </footer>
  );
};