"use client"; 

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"; 
import { Card, CardContent } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button"; 
import { ChevronRight } from 'lucide-react';
import { boolean } from 'zod';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    videoHover?: string;
    imageHover?: string;
    link: string;
  };
  lang: string;
  theme: string;
}

export const ProjectCard = ({ project, lang, theme }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Estado para saber si el mouse esta encima de ESTA tarjeta
  const [isHovered, setIsHovered] = useState(false);

  const hasHoverMedia = Boolean(project.videoHover || project.imageHover);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.videoHover && videoRef.current) {
      videoRef.current.play().catch(error => console.log("Video autoplay blocked or failed:", error));
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
    <Card 
      key={project.id} 
      className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
    >
      <div className="relative aspect-video overflow-hidden">
        
        {/* Imagen de fondo */}
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className={`object-cover transition-all duration-700 z-0
            ${!hasHoverMedia ? 'group-hover:scale-110' : ''}
            ${isHovered && hasHoverMedia ? 'opacity-0' : (theme === 'dark' ? 'opacity-80' : 'opacity-100')}
          `}
        />

        {/* Imagen hover alternativa (si existe) */}
        {project.imageHover && (
          <Image
            src={project.imageHover}
            alt={project.title}
            fill
            className={`object-cover transition-opacity duration-500 z-10
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          />
        )}

        {/* Video hover (si existe) */}
        {project.videoHover && (
          <video
            ref={videoRef} 
            src={project.videoHover}
            loop 
            muted 
            playsInline 
            preload="none" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          />
        )}

        <div className="absolute top-4 left-4 flex gap-2 z-20">
          {project.tags.map(tag => (
            <Badge key={tag} className="bg-black/70 backdrop-blur-sm border-white/10 text-white text-[10px] font-headline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-1 relative z-20 bg-card">
        <h3 className="text-2xl font-headline mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-6 flex-1">
          {project.description}
        </p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
        <Button className="w-full bg-muted border border-border hover:bg-primary group/btn text-foreground">
          {lang === 'EN' ? 'VIEW DETAILS' : 'VER DETALLES'} <ChevronRight className="ml-auto w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
        </a>
      </CardContent>
    </Card>
  );
};