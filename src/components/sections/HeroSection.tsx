
import AnimatedSection from '@/components/layout/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-br from-background via-secondary to-background text-center py-20 md:py-32 lg:py-40 min-h-[calc(80vh-5rem)] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0}>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary mb-6 text-balance">
            {title}
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="font-body text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 text-balance">
            {subtitle}
          </p>
        </AnimatedSection>
        {ctaText && ctaLink && (
          <AnimatedSection delay={400}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
