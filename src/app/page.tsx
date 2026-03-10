"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Download, 
  ExternalLink, 
  Code2, 
  Gamepad2, 
  ChevronRight, 
  Mail,
  Zap,
  Cpu,
  Layers,
  Terminal,
  Sun,
  Moon,
  Languages,
  Instagram
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useAppContext } from '@/context/AppContext';

export default function SpectraGxDashboard() {
  const { theme, lang} = useAppContext();
  
  const skills = [
    { name: 'Unity', icon: <Gamepad2 className="w-4 h-4" /> },
    { name: 'C#', icon: <Layers className="w-4 h-4" /> },
    { name: 'C++', icon: <Code2 className="w-4 h-4" /> },
    { name: 'React', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Shaders', icon: <Zap className="w-4 h-4" /> },
    { name: 'Systems Architecture', icon: <Terminal className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Magical Flavour",
      description: lang === 'EN' 
        ? "A chaotic cooperative time-management game where players act as alchemists, coordinating to prepare and deliver magical orders before time runs out."
        : "Un juego cooperativo caótico de gestión del tiempo donde los jugadores, como alquimistas, deben coordinarse para preparar y entregar órdenes mágicas antes de que el tiempo se agote.",
      tags: ["Unity", "C#", "Co-op"],
      image: "/magicalflavour.png",
      videoHover: "/gameplay/magical-hover.mp4",
      imageHint: "Magical Flavour Frontpage",
      link: "https://spectragx.itch.io/magical-flavour"
    },
    {
      id: 2,
      title: "BUBBLE ABYSS",
      description: lang === 'EN'
        ? "A fast-paced platformer where you control a “bubble man” with a shotgun, descending an endless underwater abyss, collecting bubbles and pushing your distance record deeper."
        : "Un frenético plataformero donde controlas a un “bubble man” con escopeta mientras desciendes a un abismo submarino infinito, recolectando burbujas y superando tu propia distancia récord.",
      tags: ["Unity", "WebGL", "Game Jam"],
      image: "/bubbleabyss.png",
      videoHover: "/gameplay/bubble-hover.mp4",
      imageHint: "BUBBLE ABYSS Frontpage",
      link: "https://elxavi.itch.io/bubble-abyss"
    },
    {
      id: 3,
      title: "PlushOut",
      description: lang === 'EN'
        ? "Speed, chaos, and plushies! Race through the most chaotic competition where you must accelerate, survive, and avoid exploding in a world full of adorable yet dangerous plushies."
        : "¡Velocidad, caos y peluches! Compite en la carrera más caótica, donde deberás acelerar, sobrevivir y evitar explotar en un mundo lleno de adorables y peligrosos plushies.",
      tags: ["Unity", "C#", "Kickstarter"],
      image: "/plushout.png",
      imageHint: "PlushOut Frontpage",
      link: "https://www.kickstarter.com/projects/plushcraftstudios/plushout"
    }
  ];

  return (
    <main className={`min-h-screen transition-colors duration-300 ${theme} bg-background text-foreground relative overflow-x-hidden`}>
      {/* Background Overlays moved here for theme awareness */}
      <div className="fixed inset-0 texture-halftone pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 diagonal-lines pointer-events-none z-0" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 z-10 ${theme === 'light' ? 'bg-background/80' : 'bg-gradient-to-b from-black/60 via-black/40 to-background'}`} />
            <video 
              src="/gameplay/mask-protocol-gameplay.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={`object-cover blur-sm ${theme === 'light' ? 'opacity-30' : 'opacity-50 grayscale hover:grayscale-0'} transition-all duration-1000`}
            />
          </div>

          <div className="container relative z-20 px-6 text-center">
            <div className="inline-block relative mb-6">
              <div className="absolute -top-4 -left-4 w-8 h-8 pixel-cluster animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 pixel-cluster animate-pulse delay-700" />
              <span className="font-code text-secondary tracking-widest uppercase text-sm md:text-base border-b-2 border-secondary/30 pb-1">
                {lang === 'EN' ? 'Crafting Interactive Worlds' : 'Creando mundos interactivos'}
              </span>
            </div>
            
            <h1 className={`text-6xl md:text-9xl font-headline leading-none mb-4 neon-magenta tracking-tighter`}>
              GAME<span className="text-primary italic">DEV</span><br />
              <span className={`${theme === 'light' ? 'text-foreground' : 'text-transparent text-stroke'}`} style={theme === 'dark' ? { WebkitTextStroke: '2px white' } : {}}>
                {lang === 'EN' ? 'PROGRAMMER' : 'PROGRAMADOR'}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-medium mb-12">
              {lang === 'EN' 
                ? <>
                  Designing gameplay systems where <span className="text-[#00FFFF] underline decoration-[#00FFFF]/40 underline-offset-4">code</span>, <span className="text-[#eb005a] underline decoration-[#eb005a]/40 underline-offset-4">creativity</span>, and controlled <span className="text-[#FFFF00] underline decoration-[#FFFF00]/40 underline-offset-4">chaos</span> collide.
                </>
            :   <>
                  Diseñando sistemas de juego donde el <span className="text-[#00FFFF] underline decoration-[#00FFFF]/40 underline-offset-4">código</span>, la <span className="text-[#eb005a] underline decoration-[#eb005a]/40 underline-offset-4">creatividad</span> y el <span className="text-[#FFFF00] underline decoration-[#FFFF00]/40 underline-offset-4">caos</span> controlado se encuentran.
                  </>
                }
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/projects" className="hover:text-primary transition-colors">
              <Button size="lg" className="grunge-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-headline">
                {lang === 'EN' ? 'VIEW PROJECTS' : 'VER PROYECTOS'} <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
              <Button size="lg" variant="outline" className={`border-border hover:bg-muted px-8 py-6 text-lg font-headline`}>
                {lang === 'EN' ? "LET'S CHAT" : 'CHARLEMOS'}
              </Button>
              </Link>
            </div>
          </div>
          
          <div className={`absolute bottom-0 left-0 w-full h-24 torn-edge-bottom z-30 bg-background`} />
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24 px-6 container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
              <div className={`relative aspect-square overflow-hidden rounded-md border-4 rotate-3 hover:rotate-0 transition-transform duration-500 border-border shadow-2xl`}>
                <Image 
                  src="/spec.png" 
                  alt="Fernando Mendoza by @Lizeth.Guerrao" 
                  fill 
                  className={`object-cover ${theme === 'dark' ? 'grayscale hover:grayscale-0' : ''} transition-all duration-700`}
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 font-headline text-sm rotate-12">
                  ACTIVE
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-secondary shadow-lg shadow-secondary/20" />
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl mb-6 font-headline leading-tight">
                  {lang === 'EN' ? 'WHO IS' : '¿QUIÉN ES'} <span className="text-accent underline decoration-accent/40 underline-offset-4">SPECTRA?</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {lang === 'EN'
                    ? "Mexican Game Design and Development student specializing in Unity, with experience in game design, programming, and project management. Focused on building solid systems and polished gameplay experiences, usually with coffee and six dogs supervising."
                    : "Estudiante mexicano de Diseño y Desarrollo de Videojuegos especializado en Unity, con experiencia en game design, programación y gestión de proyectos. Me enfoco en crear sistemas sólidos y experiencias de juego pulidas, siempre acompañado de café y seis perros supervisando."
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className={`bg-card/50 border-border hover:border-primary/50 transition-colors`}>
                  <CardContent className="pt-6">
                    <h3 className="font-headline text-primary mb-2">{lang === 'EN' ? 'QUICK FACTS' : 'DATOS RÁPIDOS'}</h3>
                    <ul className="space-y-2 font-code text-sm">
                      <li>&gt; {lang === 'EN' ? 'Game Designer & Developer' : 'Diseñador y Desarrollador de videojuegos'}</li>
                      <li>&gt; {lang === 'EN' ? '4+ Years Exp.' : '4+ años de exp.'}</li>
                      <li>&gt; {lang === 'EN' ? 'Coffee-to-Code Ratio: 1:100' : 'Ratio café-código: 1:100'}</li>
                      <li>&gt; {lang === 'EN' ? 'Favorite Engine: Unity' : 'Motor favorito: Unity'}</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className={`bg-card/50 border-border hover:border-secondary/50 transition-colors`}>
                  <CardContent className="pt-6">
                    <h3 className="font-headline text-secondary mb-2">{lang === 'EN' ? 'CORE SKILLS' : 'HABILIDADES CLAVE'}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className={`flex items-center gap-1 py-1 px-2 border-border/20`}>
                          {skill.icon} {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-24 relative overflow-hidden bg-muted/30`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row-reverse md:items-end justify-between mb-12 gap-6">
              <div className='text-right'>
                <span className="font-code text-secondary uppercase tracking-widest text-sm mb-2 block">{lang === 'EN' ? 'Recent Creations' : 'Creaciones Recientes'}</span>
                <h2 className="text-5xl md:text-7xl font-headline tracking-tighter">{lang === 'EN' ? 'PROJECTS' : 'PROYECTOS'}</h2>
              </div>
                <Link href="/projects" className="hover:text-primary transition-colors">
              <Button variant="outline" className="hover:text-primary font-headline group self-start md:self-end">
                {lang === 'EN' ? 'EXPLORE ALL' : 'EXPLORAR TODO'} <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  lang={lang}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className={`p-8 md:p-16 relative overflow-hidden text-center bg-card border-border shadow-xl`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
              
              <h2 className={`text-4xl md:text-6xl font-headline mb-6 tracking-tighter`}>
                {lang === 'EN' ? 'READY TO' : '¿LISTO PARA'} <span className="text-primary italic">{lang === 'EN' ? 'BUILD' : 'CONSTRUIR'}</span> {lang === 'EN' ? 'TOGETHER?' : 'JUNTOS?'}
              </h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                {lang === 'EN' 
                  ? "Whether you have a game concept, a technical hurdle, or just want to talk about Pokémon, my contact is always open."
                  : "Ya sea que tengas un concepto de juego, un obstáculo técnico o simplemente quieras hablar sobre Pokémon, mi contacto siempre está abierta."
                }
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                <a href='mailto:spectragxdev@gmail.com?subject=Job%20Opportunity'>
                  <Button size="lg" className="w-full md:w-auto h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-headline text-lg neon-border-magenta">
                    <Mail className="w-5 h-5 mr-3" /> {lang === 'EN' ? 'HIRE ME' : 'CONTRÁTAME'}
                  </Button>
                </a>
                <a 
                  href={lang === 'EN' ? '/docs/cv-en.pdf' : '/docs/cv-es.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className={`w-full md:w-auto h-16 px-10 border-border hover:bg-muted font-headline text-lg`}>
                    <Download className="w-5 h-5 mr-3" /> {lang === 'EN' ? 'GET RESUME' : 'OBTENER CV'}
                  </Button>
                </a>
              </div>

              <div className="space-y-8">
                <p className="font-code text-sm text-muted-foreground uppercase tracking-widest">{lang === 'EN' ? 'Connect with me' : 'Conéctate conmigo'}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { icon: <Github />, label: 'GITHUB', color: 'hover:bg-[#5100b5] hover:text-white', url: 'https://github.com/spectragx' },
                    { icon: <Linkedin />, label: 'LINKEDIN', color: 'hover:bg-[#0077B5] hover:text-white', url: 'https://linkedin.com/in/fernando-mendoza-sg/' },
                    { icon: <Instagram />, label: 'INSTAGRAM', color: 'hover:bg-[#E1306C] hover:text-white', url: 'https://instagram.com/spectra_gx' },
                    { icon: <Gamepad2 />, label: 'ITCH.IO', color: 'hover:bg-accent hover:text-accent-foreground', url: 'https://spectragx.itch.io/' }
                  ].map((social, idx) => (
                    <Link 
                      key={idx} 
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-6 py-3 border border-border font-headline text-sm transition-all duration-300 active:scale-95 ${social.color}`}
                      style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                      {React.cloneElement(social.icon as React.ReactElement, { className: 'w-5 h-5' })}
                      {social.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}