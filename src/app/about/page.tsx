
import { Metadata } from 'next';
import AnimatedSection from '@/components/layout/AnimatedSection';
import TeamMemberCard from '@/components/sections/TeamMemberCard';
import { teamData } from '@/lib/data';
import HeroSection from '@/components/sections/HeroSection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Mevill Constructions: our history, mission, values, and the dedicated team behind our success.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Mevill Constructions"
        subtitle="Driven by a passion for excellence and a commitment to innovation, we are shaping the future of construction and civil engineering."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://placehold.co/600x600.png" 
                  alt="Mevill team discussion" 
                  data-ai-hint="construction team meeting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">Our Story & Mission</h2>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed text-balance">
                Founded on the principles of integrity, quality, and reliability, Mevill Constructions has grown from a small team of passionate builders into a leading name in the civil engineering and construction industry. 
              </p>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed text-balance">
                Our mission is to create lasting value for our clients and communities through sustainable and innovative construction practices. We strive to exceed expectations on every project, no matter the scale or complexity.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed text-balance">
                We believe in building strong relationships, fostering a culture of safety, and continuously improving our methods to deliver the best possible outcomes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              Our experienced and dedicated team is the driving force behind our success.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {teamData.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-card rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-accent-foreground mb-2">Integrity</h3>
                <p className="text-sm text-foreground/70">We operate with honesty and transparency in all our dealings.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-accent-foreground mb-2">Quality</h3>
                <p className="text-sm text-foreground/70">We are committed to delivering the highest standards of workmanship.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-accent-foreground mb-2">Safety</h3>
                <p className="text-sm text-foreground/70">The well-being of our team and partners is our top priority.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-accent-foreground mb-2">Innovation</h3>
                <p className="text-sm text-foreground/70">We embrace new technologies and methods to enhance our work.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
