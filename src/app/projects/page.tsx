"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Clock } from "lucide-react";
import { useState, useRef } from "react";
import { ProjectCard } from '@/components/ui/ProjectCard'; 
import { useAppContext } from '@/context/AppContext';

// --- SUB-COMPONENTE: PROYECTO DESTACADO---
const FeaturedProject = ({ project, lang, index, theme }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const hasHoverMedia = Boolean(project.videoHover || project.imageHover);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.videoHover && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (project.videoHover && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={`flex flex-col gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center group/project`}>
      
      {/* Contenedor de Imagen/Video (50%) */}
      <div 
        className="w-full lg:w-1/2 relative aspect-video rounded-md overflow-hidden border-2 border-border hover:border-primary/50 transition-colors bg-muted"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <Badge className="bg-primary text-primary-foreground font-code shadow-neon-blue">{project.duration}</Badge>
        </div>

        {/* 1. Portada Principal */}
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className={`object-cover transition-all duration-700 z-0 
            ${!hasHoverMedia ? 'group-hover/project:scale-105' : ''}
            ${isHovered && hasHoverMedia ? 'opacity-0' : (theme === 'dark' ? 'opacity-80' : 'opacity-100')}
          `}
        />

        {/* 2. Imagen Alternativa (Si existe imageHover y NO hay video) */}
        {project.imageHover && !project.videoHover && (
          <Image 
            src={project.imageHover} 
            alt={`${project.title} Gameplay`} 
            fill 
            className={`object-cover transition-opacity duration-500 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        {/* 3. Video Gameplay (Prioridad más alta) */}
        {project.videoHover && (
          <video
            ref={videoRef}
            src={project.videoHover}
            loop muted playsInline preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
      </div>

      {/* Contenedor de Texto (50%) */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <h2 className="text-4xl font-headline text-foreground uppercase tracking-tight group-hover/project:text-primary transition-colors">{project.title}</h2>
          <div className="flex items-center gap-4 text-sm font-code text-muted-foreground mt-2">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-secondary"/> {project.role}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-accent"/> {project.timeline}</span>
          </div>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div>
          <h4 className="font-headline text-lg mb-3 text-foreground">{lang === 'EN' ? 'Key Features:' : 'Características Clave:'}</h4>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside marker:text-primary">
            {project.features.map((feature: string, i: number) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech: string) => (
            <Badge key={tech} variant="outline" className="border-border text-foreground text-xs font-code">{tech}</Badge>
          ))}
        </div>

        {/*BOTON DE ITCH.IO Y GIT*/ }
        <div className="flex gap-4 pt-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground font-headline">
            {lang === 'EN' ? 'PLAY ON ITCH.IO' : 'JUGAR EN ITCH.IO'} <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          </a>
          {project.repo !== "#" && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="font-headline border-border text-foreground hover:bg-muted">
              {lang === 'EN' ? 'SOURCE CODE' : 'CÓDIGO FUENTE'} <Github className="w-4 h-4 ml-2" />
            </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


// --- PÁGINA PRINCIPAL ---
export default function ProjectsPage() {
  const { theme, lang} = useAppContext();
  
  // Datos estructurados para la vista detallada (Destacados)
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
      image: "/MagicalFlavour.png", 
      videoHover: "/gameplay/magical-hover.mp4",
      link: "https://spectragx.itch.io/magical-flavour",
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
      tech: ["Unity", "C#", "Physics", "Arcade", "Co-op Local", "Kickstarter", "Git"],
      image: "/PlushOut.png",
      imageHover: "/screens/plush.png", 
      link: "https://www.kickstarter.com/projects/plushcraftstudios/plushout",
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
      tech: ["Unity", "C#", "VFX", "Game Jam", "Animation"],
      image: "/mask-protocol.png",
      videoHover: "/gameplay/mask-hover.mp4",
      link: "https://spectragx.itch.io/mask-protocol",
      repo: "#"
    }
  ];

  // Grid inferior de Game Jams y Prototipos
  const jamProjects = [
    {
      id: 101,
      title: "BUBBLE ABYSS",
      description: lang === 'EN' ? "A frantic platformer where you descend into an infinite submarine abyss." : "Frenético plataformero descendiendo en un abismo submarino infinito.",
      tags: ["Unity", "WebGL", "GGJ"],
      image: "/BubbleAbyss.png", 
      link: "https://elxavi.itch.io/bubble-abyss"
    },
    {
      id: 102,
      title: "TOP FAITH",
      description: lang === 'EN' ? "Arcade racer. Semi-finalist in GameJam+ Brasil 2024." : "Arcade racer. Semifinalista en GameJam+ Brasil 2024.",
      tags: ["Unity", "Racing", "GameJam+"],
      image: "/top-faith.png", 
      link: "https://gamespiration.itch.io/top-faith"
    },
    {
      id: 103,
      title: "DeadZone",
      description: lang === 'EN' ? "After crashing on Europa, dive into the depths to find your ship… but you're not alone." : "Tras estrellarte en Europa, explora sus profundidades para encontrar tu nave… pero no estás solo.",
      tags: ["Unity", "Top-Down", "Atmospheric"],
      image: "/deadzone.png",
      link: "https://spider51.itch.io/deadzone"
    },
    {
      id: 104,
      title: "Super Exoplanet Maker",
      description: lang === 'EN' ? "Create and explore your own exoplanets in this space sandbox." : "Crea y explora tus propios exoplanetas en este sandbox espacial.",
      tags: ["Unity", "Game Jam", "Space"],
      image: "/Super.jpg",
      link: "https://kalsetas.itch.io/super-planet-maker"
    },
    {
      id: 105,
      title: "Execute Who?",
      description: lang === 'EN' ? "A cooperative game where one player describes suspects while the other identifies the culprit." : "Un juego cooperativo donde un jugador describe a los sospechosos mientras el otro identifica al culpable.",
      tags: ["Unity", "Co-op", "Game Jam"],
      image: "/Execute.png",
      link: "https://spectragx.itch.io/execute-who"
    },
    {
      id: 106,
      title: "Feather Thieve",
      description: lang === 'EN' ? "Help Pistacho escape a dark warehouse, overcoming obstacles and freeing trapped birds." : "Ayuda a Pistacho a escapar de un oscuro almacén, resolviendo obstáculos y liberando aves.",
      tags: ["Unity", "Adventure", "Prototype"],
      image: "/Feather-Thieve.png",
      link: "https://spectragx.itch.io/feather-thieve"
    },
    {
      id: 107,
      title: "Chronomaniac",
      description: lang === 'EN' ? "Fast-paced roguelite about time travel, fighting enemies and anomalies in procedurally generated levels." : "Roguelite frenético sobre viajes en el tiempo, enfrentando enemigos y anomalías en niveles generados proceduralmente.",
      tags: ["Unity", "Roguelite", "Prototype"],
      image: "/Chrono.png",
      link: "https://spectragx.itch.io/chronomaniac"
    }
  ];

  return (
    <main className={`min-h-screen pt-24 pb-24 transition-colors duration-300 ${theme} bg-background text-foreground relative overflow-x-hidden`}>
      {/* Background Overlays */}
      <div className="fixed inset-0 texture-halftone pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 diagonal-lines pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
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
        <div className="space-y-32">
          {detailedProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} lang={lang} index={index} theme={theme} />
          ))}
        </div>

        {/* GAME JAMS Y PROTOTIPOS (Cuadrícula) */}
        <section className="mt-40 border-t border-border/50 pt-20">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl font-headline tracking-tighter uppercase mb-4 text-foreground">
              {lang === 'EN' ? 'OTHER PROTOTYPES &' : 'OTROS PROTOTIPOS Y'} <span className="text-secondary">GAME JAMS</span>
            </h2>
            <p className="text-muted-foreground">
              {lang === 'EN' 
                ? "Technical explorations, weekend prototypes, and creative experiments. Click to play on Itch.io." 
                : "Exploraciones técnicas, prototipos de fin de semana y experimentos creativos. Haz clic para jugarlos en Itch.io."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jamProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                lang={lang} 
                theme={theme} 
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}