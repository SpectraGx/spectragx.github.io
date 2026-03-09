"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useAppContext } from '@/context/AppContext';

export default function ProjectsPage() {
  const { theme, lang} = useAppContext();
  // Datos estructurados para la vista detallada
  const detailedProjects = [
  {
    id: "magical-flavour",
    title: "MAGICAL FLAVOUR",
    role: "Game Programmer & Co-Designer",
    timeline: lang === 'EN' ? "2024 - Present" : "2024 - Presente",
    duration: lang === 'EN' ? "In Development" : "En desarrollo",
    description: lang === 'EN' 
      ? "A chaotic co-op time-management game. Players act as alchemists, coordinating to prepare and deliver magical orders before time runs out." 
      : "Un juego cooperativo caótico de gestión del tiempo. Los jugadores actúan como alquimistas coordinándose para preparar y entregar órdenes mágicas antes de que el tiempo se agote.",
    features: lang === 'EN' ? [
      "Interaction and collection system architecture.",
      "Local multiplayer programming.",
      "Exhibited at the Game Conference MX (Oct 2025)."
    ] : [
      "Arquitectura de sistemas de interacción y recolección.",
      "Programación de modo multijugador local.",
      "Exhibido en la Game Conference MX (Oct 2025)."
    ],
    tech: ["Unity", "C#", "Co-op Local", "Git"],
    image: "/magicalflavour.png", 
    videoHover: "/gameplay/magical-hover.mp4",
    link: "#",
    repo: "#"
  },
  {
    id: "plush-out",
    title: "PLUSH OUT",
    role: "Project Manager & Game Programmer",
    timeline: lang === 'EN' ? "2025 - Present" : "2025 - Presente",
    duration: lang === 'EN' ? "In Development / On Hold" : "En desarrollo / En Pausa",
    description: lang === 'EN' 
      ? "Speed, chaos, and plushies! Race through the most chaotic competition where you must accelerate, survive, and avoid exploding in a world full of adorable yet dangerous plushies."
      : "¡Velocidad, caos y peluches! Compite en la carrera más caótica, donde deberás acelerar, sobrevivir y evitar explotar en un mundo lleno de adorables y peligrosos plushies.",
    features: lang === 'EN' ? [
      "Arcade physics-based driving with drifting and skidding mechanics.",
      "Local multiplayer programming for 4 players.",
      "Mario Kart-style power-up and abilities system.",
      "Time-based elimination system."
    ] : [
      "Conducción basada en físicas arcade con drift y derrapes.",
      "Programación de modo multijugador local para 4 jugadores.",
      "Sistema de poderes y habilidades tipo Mario Kart.",
      "Sistema de eliminación por tiempo."
    ],
    tech: ["Unity", "C#", "Physics", "Arcade", "Co-op Local", "Kickstarter", , "Git"],
    image: "/plushout.png",
    imageHover: "/screens/plush.png",
    link: "#",
    repo: "#"
  },
  {
    id: "mask-protocol",
    title: "MASK PROTOCOL",
    role: "Lead Programmer & VFX Artist",
    timeline: lang === 'EN' ? "January 2026" : "Enero 2026",
    duration: lang === 'EN' ? "Prototype Game Jam" : "Prototipo Game Jam",
    description: lang === 'EN' 
      ? "Unable to use brute force, you'll have to steal identities to break through the system, bypass firewalls, and hack terminals under pressure, all while a constant threat tries to erase you. In this system, it doesn't matter who you are, but who you appear to be."
      : "Incapaz de usar la fuerza bruta, tendrás que robar identidades para romper el sistema, evadir firewalls y hackear terminales bajo presión, todo mientras una amenaza constante intenta borrarte. En este sistema, no importa quién eres, sino quién aparentas ser.",
    features: lang === 'EN' ? [
      "Grid-based movement.",
      "Hacking minigame system.",
      "Visual effects and animations driven by code."
    ] : [
      "Movimiento tipo Grilla.",
      "Sistema de minijuegos de hackeo.",
      "Animación y efectos visuales a partir de código."
    ],
    tech: ["Unity", "C#", "VFX", "Game Jam", "Animation",],
    image: "/mask-protocol.png",
    videoHover: "/gameplay/mask-hover.mp4",
    link: "#",
    repo: "#"
  }
];


  return (
    <main className="min-h-screen pt-24 pb-24 bg-background">
      {/* Background Overlays moved here for theme awareness */}
      <div className="fixed inset-0 texture-halftone pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 diagonal-lines pointer-events-none z-0" />
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-headline tracking-tighter uppercase mb-4">
            {lang === 'EN' ? 'FEATURED' : 'ARTEFACTOS'} <span className="text-primary">DESTACADOS</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {lang === 'EN' 
              ? "A deep dive into the architecture, mechanics, and chaos behind my most significant game development projects." 
              : "Una inmersión profunda en la arquitectura, mecánicas y el caos detrás de mis proyectos de desarrollo más significativos."}
          </p>
        </div>

        {/* Lista de Proyectos Horizontales */}
        <div className="space-y-24">
          {detailedProjects.map((project, index) => (
            <div key={project.id} className={`flex flex-col gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
              
              {/* Contenedor de Imagen (50%) */}
              <div className="w-full lg:w-1/2 relative aspect-video rounded-md overflow-hidden border-2 border-white/10 group">
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground font-code">{project.duration}</Badge>
                </div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Contenedor de Texto (50%) */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-4xl font-headline text-foreground uppercase tracking-tight">{project.title}</h2>
                  <div className="flex items-center gap-4 text-sm font-code text-muted-foreground mt-2">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-secondary"/> {project.role}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-accent"/> {project.timeline}</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-headline text-lg mb-3 text-white">Key Features:</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="outline" className="border-white/20 text-xs font-code">{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-primary hover:bg-primary/80 font-headline">
                    PLAY PROJECT <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  {project.repo !== "#" && (
                    <Button variant="outline" className="font-headline">
                      SOURCE CODE <Github className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}