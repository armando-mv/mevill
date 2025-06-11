
import HeroSection from '@/components/sections/HeroSection';
import AnimatedSection from '@/components/layout/AnimatedSection';
import ServiceCard from '@/components/sections/ServiceCard';
import FeaturedProject from '@/components/sections/FeaturedProject';
import { servicesData, getFeaturedProject } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage() {
  const featuredProject = await getFeaturedProject();

  return (
    <>
      <HeroSection 
        title="Mevill Constructions"
        subtitle="Building the future with precision, strength, and integrity. Your trusted partner in civil engineering and construction excellence."
        ctaText="Explore Our Work"
        ctaLink="/projects"
      />

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
              Engineering Your Visions into Reality
            </h2>
            <p className="text-lg text-foreground/70 mb-8 text-balance">
              At Mevill Constructions, we combine decades of experience with cutting-edge technology to deliver exceptional construction and civil engineering projects. Our commitment to quality, safety, and sustainability is at the heart of everything we do.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Project Section */}
      {featuredProject && <FeaturedProject project={featuredProject} />}

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Delivering a comprehensive range of construction and engineering solutions.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service, index) => ( // Show first 3 services
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              <Link href="/services">View All Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action - Contact */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <Image src="https://placehold.co/1920x1080.png" alt="Construction background" data-ai-hint="blueprint sketch" fill className="object-cover"/>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let's discuss how Mevill Constructions can bring your vision to life. Contact us today for a consultation.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-4 text-xl">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
