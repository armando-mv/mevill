
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Service } from '@/lib/data';
import AnimatedSection from '../layout/AnimatedSection';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
        <CardHeader className="p-0">
          <div className="aspect-[3/2] relative w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={service.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="font-headline text-2xl text-primary mb-2">{service.title}</CardTitle>
          <CardDescription className="text-foreground/70 text-base">{service.description}</CardDescription>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
