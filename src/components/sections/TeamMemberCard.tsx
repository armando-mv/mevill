
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { TeamMember } from '@/lib/data';
import AnimatedSection from '../layout/AnimatedSection';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <Card className="text-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
        <CardHeader className="p-0 pt-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="160px"
              className="object-cover"
              data-ai-hint={member.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="font-headline text-xl md:text-2xl text-primary mb-1">{member.name}</CardTitle>
          <p className="text-accent-foreground font-medium text-sm md:text-base mb-2">{member.title}</p>
          {member.bio && <CardDescription className="text-foreground/70 text-sm">{member.bio}</CardDescription>}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
