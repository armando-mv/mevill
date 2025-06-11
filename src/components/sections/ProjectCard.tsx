
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Project } from '@/lib/data';
import AnimatedSection from '../layout/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '../ui/button';

interface ProjectCardProps {
  project: Project;
  index: number;
  showDetailsLink?: boolean;
}

export default function ProjectCard({ project, index, showDetailsLink = true }: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
        <CardHeader className="p-0">
          <div className="aspect-video relative w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={project.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow flex flex-col">
          <Badge variant="secondary" className="mb-2 self-start bg-accent/20 text-accent-foreground">{project.category}</Badge>
          <CardTitle className="font-headline text-2xl text-primary mb-2">{project.title}</CardTitle>
          <CardDescription className="text-foreground/70 text-base mb-4 flex-grow">{project.description}</CardDescription>
          {project.clientTestimonial && (
            <blockquote className="text-sm italic text-foreground/60 border-l-2 border-primary pl-3 mb-4">
              {project.clientTestimonial}
            </blockquote>
          )}
          {showDetailsLink && (
             <Button asChild variant="link" className="p-0 h-auto self-start text-primary hover:text-accent">
                <Link href={`/projects/${project.id}`}>View Project Details</Link>
             </Button>
          )}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
