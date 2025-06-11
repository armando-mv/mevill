
import Image from 'next/image';
import type { Project } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedSection from '../layout/AnimatedSection';
import { Badge } from '../ui/badge';
import { CheckCircle } from 'lucide-react';

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  if (!project) return null;

  return (
    <AnimatedSection className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Featured Project</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">A highlight of our commitment to excellence and innovation in construction.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection delay={100} className="rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                data-ai-hint={project.imageHint}
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Badge variant="outline" className="mb-3 border-primary text-primary bg-primary/10">{project.category}</Badge>
            <h3 className="font-headline text-3xl lg:text-4xl font-semibold text-primary mb-4">{project.title}</h3>
            <p className="text-base lg:text-lg text-foreground/80 mb-6">{project.description}</p>
            
            {project.details && project.details.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-md text-foreground mb-2">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.details.slice(0, 3).map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                      <span className="text-foreground/70">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.clientTestimonial && (
              <blockquote className="border-l-4 border-accent bg-accent/10 p-4 rounded-md mb-6">
                <p className="text-foreground/70 italic">"{project.clientTestimonial}"</p>
              </blockquote>
            )}
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md shadow-md transition-transform duration-300 hover:scale-105">
              <Link href={`/projects/${project.id}`}>Learn More</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}
