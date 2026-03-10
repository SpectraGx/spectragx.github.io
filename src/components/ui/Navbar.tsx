"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Languages, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/AppContext';

export const Navbar = () => {
  const { theme, lang, toggleTheme, toggleLang } = useAppContext();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b h-16 flex items-center px-6 md:px-12 justify-between transition-colors duration-500 ${theme === 'light' ? 'bg-white/70 border-zinc-200 text-zinc-900' : 'bg-background/50 border-white/5 text-white'}`}>
      
      <Link href="/" className="font-headline text-xl tracking-tighter flex items-center gap-2 group">
        <div className="relative w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Image 
            src="/specico.png" 
            alt="Logo" 
            fill 
            className={`object-cover rounded-sm ${theme === 'dark' ? 'grayscale hover:grayscale-0' : ''} transition-all duration-700`}
          />
        </div>
        <span className="hidden sm:block">SpectraGx</span>
      </Link>
      
      <div className="flex items-center gap-4 md:gap-6 text-sm font-medium">
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="hover:text-primary transition-colors">{lang === 'EN' ? 'HOME' : 'INICIO'}</Link>
          <Link href="/about" className="hover:text-primary transition-colors">{lang === 'EN' ? 'ABOUT' : 'SOBRE MÍ'}</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">{lang === 'EN' ? 'PROJECTS' : 'PROYECTOS'}</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">{lang === 'EN' ? 'CONTACT' : 'CONTACTO'}</Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle*/}
          <Button 
            variant="outline" 
            className={`h-9 px-3 font-headline text-[10px] tracking-widest border transition-all ${theme === 'light' ? 'bg-transparent border-zinc-300 text-zinc-900 hover:bg-zinc-200' : 'bg-transparent border-white/5 hover:border-primary/50 text-white'}`}
            onClick={toggleLang}
          >
            <Languages className="w-3.5 h-3.5 mr-2 opacity-70" />
            {lang}
          </Button>

          {/* Theme Toggle*/}
          <Button 
            variant="outline" 
            size="icon" 
            className={`h-9 w-9 transition-all ${theme === 'light' ? 'bg-transparent border-zinc-300 text-zinc-900 hover:bg-zinc-200' : 'bg-transparent border-white/5 text-white hover:text-primary'}`} 
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};