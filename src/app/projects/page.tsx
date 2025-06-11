
import { Metadata } from 'next';
import AnimatedSection from '@/components/layout/AnimatedSection';
import ProjectCard from '@/components/sections/ProjectCard';
import { projectsData } from '@/lib/data';
import HeroSection from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Discover a portfolio of successfully completed projects by Mevill Constructions, showcasing our expertise and commitment to quality.',
};

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        title="Our Projects"
        subtitle="A showcase of our dedication to engineering excellence, innovative design, and quality construction across diverse sectors."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
              Building a Legacy of Success
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
              Each project in our portfolio reflects our commitment to superior craftsmanship, sustainability, and client satisfaction. Explore our work.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} showDetailsLink={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
