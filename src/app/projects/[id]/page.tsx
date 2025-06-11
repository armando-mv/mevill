
import { projectsData, Project } from '@/lib/data';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/layout/AnimatedSection';
import { ArrowLeft, CalendarDays, MapPin, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find(p => p.id === params.id);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projectsData.map(project => ({
    id: project.id,
  }));
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Project Not Found</h1>
        <p className="text-lg text-foreground/70 mb-8">The project you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <AnimatedSection className="mb-8">
          <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary/10">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
            </Link>
          </Button>
        </AnimatedSection>

        <article>
          <AnimatedSection>
            <div className="aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.5/1] relative w-full rounded-xl overflow-hidden shadow-xl mb-8 md:mb-12">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                data-ai-hint={project.imageHint}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <AnimatedSection delay={100}>
                <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent-foreground">{project.category}</Badge>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">{project.title}</h1>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed text-balance">{project.description}</p>
              </AnimatedSection>

              {project.details && project.details.length > 0 && (
                <AnimatedSection delay={200} className="mb-8">
                  <h2 className="font-headline text-2xl font-semibold text-primary mb-4">Project Highlights</h2>
                  <ul className="space-y-3">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              )}

              {project.clientTestimonial && (
                 <AnimatedSection delay={300} className="mb-8">
                    <h2 className="font-headline text-2xl font-semibold text-primary mb-4">Client Testimonial</h2>
                    <blockquote className="border-l-4 border-accent bg-accent/10 p-6 rounded-md">
                        <p className="text-foreground/70 italic text-lg">"{project.clientTestimonial}"</p>
                    </blockquote>
                 </AnimatedSection>
              )}
            </div>

            <aside className="md:col-span-1">
              <AnimatedSection delay={400} className="bg-card p-6 rounded-xl shadow-lg">
                <h3 className="font-headline text-xl font-semibold text-primary mb-6">Project Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 text-accent mr-3 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground/60 block">Completion Date</span>
                      <span className="text-foreground/90">{project.completionDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-accent mr-3 shrink-0" />
                     <div>
                      <span className="font-medium text-foreground/60 block">Location</span>
                      <span className="text-foreground/90">{project.location}</span>
                    </div>
                  </div>
                   <div className="flex items-center">
                    <Users className="h-5 w-5 text-accent mr-3 shrink-0" />
                     <div>
                      <span className="font-medium text-foreground/60 block">Category</span>
                      <span className="text-foreground/90">{project.category}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}
