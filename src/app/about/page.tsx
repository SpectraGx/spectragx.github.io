"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Terminal, Code2, Award, School } from "lucide-react"; 
import { useAppContext } from "@/context/AppContext";
  
export default function AboutPage() {
  const { theme, lang } = useAppContext();

  return (
    <main className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${theme} bg-background text-foreground relative overflow-x-hidden`}>
      {/* Background Overlays moved here for theme awareness */}
      <div className="fixed inset-0 texture-halftone pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 diagonal-lines pointer-events-none z-0" />      
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <span className="font-code text-primary uppercase tracking-widest text-sm mb-2 block">
            {lang === 'EN' ? 'Initiating sequence...' : 'Iniciando secuencia...'}
          </span>
          <h1 className="text-5xl md:text-7xl font-headline tracking-tighter uppercase">
            {lang === 'EN' ? 'ABOUT' : 'SOBRE'} <span className="text-secondary ">FERNANDO</span>
          </h1>
        </div>

        {/* Grid principal (Solo para Foto y Mi Historia) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda (Colspan 4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            <div className="relative aspect-square overflow-hidden rounded-md border-border border-2 shadow-2xl group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
              <Image 
                src="/spec.png" 
                alt="Fernando Mendoza by @Lizeth.Guerrao" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-white/5">
              <h3 className="font-headline text-xl mb-4 text-[#FFFF00]">{lang === 'EN' ? 'QUICK FACTS' : 'DATOS RÁPIDOS'}</h3>
              <ul className="space-y-3 font-code text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-foreground">{lang === 'EN' ? 'Location:' : 'Ubicación:'}</span> SLP, México
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-foreground">{lang === 'EN' ? 'Experience:' : 'Experiencia:'}</span> 4+ Years
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-foreground">{lang === 'EN' ? 'Focus:' : 'Enfoque:'}</span> Gameplay & Systems
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-foreground">{lang === 'EN' ? 'Languages:' : 'Idiomas:'}</span> {lang === 'EN' ? 'Spanish / English' : 'Español / Inglés'}
                </li>
              </ul>
            </Card>
          </div>

          {/* Columna Derecha (Colspan 8) */}
          <div className="lg:col-span-8 space-y-12 text-lg text-muted-foreground">
            
            <section>
              <h2 className="text-3xl font-headline text-foreground mb-6 flex items-center gap-3">
                <Terminal className="text-primary w-6 h-6" /> 
                {lang === 'EN' ? 'MY JOURNEY' : 'MI HISTORIA'}
              </h2>
              <p className="mb-4">
                {lang === 'EN'
                    ? "Hi! I'm Fernando Mendoza, a Mexican game developer and designer specializing in gameplay system and experiences built with Unity."
                    : "!Hola! Soy Fernando Mendoza, desarrollador y diseñador de videojuegos mexicano especializado en programación de gameplay y desarrollo de sistemas en Unity."
                }
              </p>
              <p className="mb-4">
                {lang === 'EN'
                    ? "My journey in this industry was born from a curiosity to understand the magic behind the scenes. Evolving that curiosity into developing full projects, participating in international game jams, academic projects, and collaborative experiences where I've worked as a Lead Programmer and Project Manager."
                    : "Mi camino en esta industria nació de la curiosidad por entender la magia detrás de las escenas. Evolucionando esa curiosidad hacia el desarrollo de proyectos completos, participando en game jams internacionales, proyectos académicos y experiencias colaborativas donde he trabajado como Lead Programmer y Project Manager."
                }
              </p>
              <p className="mb-4">
                {lang === 'EN'
                    ? "Actively, I work hand in hand with my team at PlushCraftStudio on projects like Magical Flavour, a chaotic cooperative game where players act as alchemists preparing magical orders under pressure, and PlushOut, a frantic racing game starring plushies where surviving is as important as speeding."
                    : "Actualmente trabajo de la mano con mi equipo de PlushCraftStudio en proyectos como Magical Flavour, un juego cooperativo caótico donde los jugadores actúan como alquimistas preparando pedidos mágicos bajo presión, y PlushOut, un juego de carreras frenéticas protagonizado por peluches donde sobrevivir es tan importante como acelerar."
                }
              </p>
              <p className="mb-4">
                {lang === 'EN'
                    ? "Beyond code and mechanics, I'm interested in exploring how gameplay, aesthetics, and narrative can work together to create memorable experiences. I believe video games have a unique potential: not just to tell stories, but to allow players to live them through their own hands."
                    : "Más allá del código y las mecánicas, me interesa explorar cómo el gameplay, la estética y la narrativa pueden trabajar en conjunto para crear experiencias memorables. Creo que los videojuegos tienen un potencial único: no solo el de contar historias, sino permitir que los jugadores las vivan a través de sus propias manos."
                }
              </p>
            </section>
            
          </div> {/* CIERRE DE LA COLUMNA DERECHA */}
        </div> {/* CIERRE DEL GRID PRINCIPAL */}

        {/* SECCION: ENFOQUE */}
        <section className="mt-24 border-t border-border/50 pt-16">
          <h2 className="text-3xl font-headline text-foreground mb-12 flex items-center gap-3">
            <Code2 className="text-secondary w-7 h-7" /> 
            {lang === 'EN' ? 'MY APPROACH' : 'MI ENFOQUE'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="bg-card/30 p-6 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors">
              <h4 className="font-headline text-xl text-foreground mb-3">{lang === 'EN' ? 'System-Driven Gameplay' : 'Gameplay basado en sistemas'}</h4>
              <p className="text-muted-foreground">
                {lang === 'EN'
                    ? "Designing mechanics and systems that create emergent and meaningful player interactions."
                    : "Diseñar mecánicas y sistemas que generen interacciones y experiencias dinámicas que nazcan de los jugadores."
                }
              </p>
            </div>
            <div className="bg-card/30 p-6 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors">
              <h4 className="font-headline text-xl text-foreground mb-3">{lang === 'EN' ? 'Iterative Development' : 'Desarrollo Iterativo'}</h4>
              <p className="text-muted-foreground">
                {lang === 'EN'
                    ? "Rapid prototyping, testing, and constant iteration are essential to refining gameplay and discovering what trutly works."
                    : "Prototipar rápido, probar constantemente y mejorar a través de la iteración para descubrir qué hace que un juego realmente funcione."
                }
              </p>
            </div>
            <div className="bg-card/30 p-6 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors">
              <h4 className="font-headline text-xl text-foreground mb-3">{lang === 'EN' ? 'Collaboration & Communication' : 'Colaboración y Comunicación'}</h4>
              <p className="text-muted-foreground">
                {lang === 'EN'
                    ? "Working closely with artists, designers, and other developers to ensure a cohesive vision and smooth development process."
                    : "Trabajar de cerca con artistas, diseñadores y otros desarrolladores para asegurar una visión cohesiva y un proceso de desarrollo fluido."
                }
              </p>
            </div>
            <div className="bg-card/30 p-6 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors">
                <h4 className="font-headline text-xl text-foreground mb-3">{lang === 'EN' ? 'Controlled Chaos' : 'Caos controlado'}</h4>
                <p className="text-muted-foreground">
                  {lang === 'EN'
                      ? "Some of the most memorable gameplay comes from unexpected situations. I enjoy designing systems that allow players to create their own chaotic and fun moments."
                      : "Muchos de los momentos más memorables en los videojuegos surgen de lo inesperado. Disfruto diseñar sistemas que permitan a los jugadores crear sus propios momentos de caos y diversión."
                  }
                </p>
            </div>
          </div>
        </section>

        {/* SECCION: EXPERIENCE & EDUCATION */}
        <section className="mt-24 border-t border-border/50 pt-16">
          <h2 className="text-3xl font-headline text-foreground mb-12 flex items-center gap-3">
            <School className="text-accent w-7 h-7" /> 
            {lang === 'EN' ? 'EXPERIENCE & EDUCATION' : 'EXPERIENCIA Y EDUCACIÓN'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

            <div className="space-y-12">
              {[
                {
                  role: "Lead Developer",
                  company: "PlushCraftStudios",
                  duration: lang === 'EN' ? "2025 - Present" : "2025 - Presente",
                  points: lang === 'EN'
                    ? [
                        "Founder and lead developer of the studio, focused on creating gameplay experiences based on fun and controlled chaos.",
                        "Led development of projects like PlushOut and Magical Flavour, with a focus on gameplay programming, systems architecture, and game vision.",
                        "Organized development pipelines, task management, and led small development teams.",
                        "Represented the studio and projects at video game events, exhibitions, and networking spaces within the industry."
                      ]
                    : [
                        "Fundador y líder de desarrollo del estudio, enfocado en crear experiencias de gameplay basadas en la diversión y el caos controlado.",
                        "Dirección del desarrollo de proyectos como PlushOut y Magical Flavour, con un enfoque en programación de gameplay, arquitectura de sistemas y visión del juego.",
                        "Organización de pipelines de desarrollo, gestión de tareas y liderazgo de pequeños equipos de desarrollo.",
                        "Representación del estudio y proyectos en eventos de videojuegos, exposiciones y espacios de networking dentro de la industria."
                      ]
                },
                {
                  role: "Game Developer & Lead Programmer",
                  company: "Gamespiration",
                  duration: lang === 'EN' ? "2024 - Present" : "2024 - Presente",
                  points: lang === 'EN'
                    ? [
                        "Developed gameplay mechanics, game systems, and playable prototypes using Unity and C#.",
                        "Served as Lead Programmer for the TOP FAITH project, a semi-finalist in the GameJam+ Brasil 2024.",
                        "Implemented vehicle movement systems, procedural map generation, and collectible systems.",
                        "Integrated VFX and optimized assets from the Unity Asset Store."
                      ]
                    : [
                        "Desarrollo de mecánicas de gameplay, sistemas de juego y prototipos jugables utilizando Unity y C#.",
                        "Lead Programmer del proyecto TOP FAITH, un arcade racer semifinalista en GameJam+ Brasil 2024.",
                        "Implementación de sistemas de movimiento de vehículos, generación procedural de mapas y sistemas de coleccionables.",
                        "Integración de VFX y optimización de assets provenientes de la Unity Asset Store."
                      ]
                },
                {
                  role: "Game Programmer",
                  company: "Grupo XScorpions",
                  duration: "Feb 2024 - Sep 2024",
                  points: lang === 'EN'
                    ? [
                        "Developed gameplay mechanics for playable characters and NPCs using Unity 3D.",
                        "Implemented dialogue systems, UI/UX, and interactive logic for video game prototypes.",
                        "Optimized game performance and resolved technical issues.",
                        "Participated in teaching and course development for video game development with Unity, teaching programming fundamentals and mechanics design."
                      ]
                    : [
                        "Desarrollo de mecánicas de gameplay para personajes jugables y NPCs utilizando Unity 3D.",
                        "Implementación de sistemas de diálogo, UI/UX y lógica interactiva para prototipos de videojuegos.",
                        "Optimización del rendimiento del juego y resolución de problemas técnicos.",
                        "Participación en la docencia y desarrollo de cursos de desarrollo de videojuegos con Unity, enseñando fundamentos de programación y diseño de mecánicas."
                      ]
                }
              ].map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-[#FFFF00]/30 group">
                  <div className="absolute w-3 h-3 bg-[#FFFF00] rounded-full -left-[7.5px] top-2 group-hover:scale-150 transition-transform shadow-neon-blue" />
                  <h3 className="text-xl font-headline text-foreground">{exp.role}</h3>
                  <p className="font-code text-sm text-[#FFFF00] mb-3">{exp.company} // {exp.duration}</p>
                  <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                    {exp.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Lic. Diseño y Desarrollo de Videojuegos",
                  ins: "Universidad San Luis Potosí",
                  duration: "2022 - 2026",
                  details: lang === 'EN'
                    ? "Professional training focused on game design, gameplay programming, video game production, and project management."
                    : "Formación profesional enfocada en game design, programación de gameplay, producción de videojuegos y gestión de proyectos."
                }
              ].map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-secondary/30 group">
                  <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7.5px] top-2 group-hover:scale-150 transition-transform shadow-neon-magenta" />
                  <h3 className="text-xl font-headline text-foreground">{edu.title}</h3>
                  <p className="font-code text-sm text-secondary mb-3">{edu.ins} // {edu.duration}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCION: ARSENAL & SKILLS*/}
        <section className="mt-24 border-t border-border/50 pt-16">
          <h2 className="text-3xl font-headline text-foreground mb-12 flex items-center gap-3">
            <Award className="text-[#FFFF00] w-7 h-7" /> 
            {lang === 'EN' ? 'SKILLS AND ABILITIES' : 'HABILIDADES Y DESTREZAS'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-medium text-sm">
            <Card className="p-6 bg-card/50 border-white/5 group hover:border-accent/50 transition-colors">
              <h4 className="font-headline text-xl text-accent mb-5">{lang === 'EN' ? 'CORE ENGINE' : 'MOTOR NÚCLEO'}</h4>
              <div className="flex flex-wrap gap-2">
                {[ "Unity", "Unreal", "C#", "Systems Architecture", "Gameplay Mechanics", "VR Development"].map(s => (
                  <Badge key={s} variant="outline" className="border-accent/40 text-foreground">{s}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 border-white/5 group hover:border-primary/50 transition-colors">
              <h4 className="font-headline text-xl text-primary mb-5">{lang === 'EN' ? 'TECH AND TOOLS' : 'TECNOLOGÍA Y HERRAMIENTAS'}</h4>
              <div className="flex flex-wrap gap-2">
                {[ "Git / Version Control", "React / Next.js", "Shaders", "Multiplayer"].map(s => (
                  <Badge key={s} variant="outline" className="border-primary/40 text-foreground">{s}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-white/5 group hover:border-secondary/50 transition-colors">
              <h4 className="font-headline text-xl text-secondary mb-5">{lang === 'EN' ? 'SOFT SKILLS' : 'HABILIDADES BLANDAS'}</h4>
              <div className="flex flex-wrap gap-2">
                {[ "Rapid Prototyping", "Team Collaboration", "Problem Solving", "Game Jam Mindset", "Adaptability"].map(s => (
                  <Badge key={s} variant="outline" className="border-secondary/40 text-foreground">{s}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div> 
    </main>
  );
}