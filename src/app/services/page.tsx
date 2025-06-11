
import { Metadata } from 'next';
import AnimatedSection from '@/components/layout/AnimatedSection';
import ServiceCard from '@/components/sections/ServiceCard';
import { servicesData } from '@/lib/data';
import HeroSection from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the comprehensive range of civil engineering and construction services offered by Mevill Constructions.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection 
        title="Our Services"
        subtitle="Delivering excellence across a wide spectrum of civil engineering and construction disciplines. We provide innovative solutions tailored to your project's unique needs."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-balance">
              From initial design and planning to final execution and handover, Mevill Constructions offers a full suite of services to ensure your project's success.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
       <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">Why Choose Mevill?</h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
                    <div className="p-6 bg-card rounded-xl shadow-md">
                        <h4 className="font-semibold text-lg text-accent-foreground mb-2">Quality Craftsmanship</h4>
                        <p className="text-sm text-foreground/70">We are committed to the highest standards of quality in every nail driven and every beam laid.</p>
                    </div>
                    <div className="p-6 bg-card rounded-xl shadow-md">
                        <h4 className="font-semibold text-lg text-accent-foreground mb-2">Innovative Solutions</h4>
                        <p className="text-sm text-foreground/70">Leveraging modern technology and creative problem-solving to overcome challenges.</p>
                    </div>
                    <div className="p-6 bg-card rounded-xl shadow-md">
                        <h4 className="font-semibold text-lg text-accent-foreground mb-2">Client-Centric Approach</h4>
                        <p className="text-sm text-foreground/70">Your vision is our blueprint. We collaborate closely to ensure your satisfaction.</p>
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </section>
    </>
  );
}
