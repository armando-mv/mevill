
"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Optional delay in ms, applied via style.animationDelay
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, delay = 0 }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if element is in viewport
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once it's in view to animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0', // Start hidden
        isInView && 'animate-fade-in-up', // Apply animation class when in view
        className
      )}
      style={isInView && delay > 0 ? { animationDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
