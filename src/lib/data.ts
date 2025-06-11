
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
  clientTestimonial?: string;
  isFeatured?: boolean; // For AI-powered featured project
  category: string;
  completionDate: string;
  location: string;
  details?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  imageHint: string;
  bio?: string;
}

export const servicesData: Service[] = [
  {
    id: 's1',
    title: 'Residential Construction',
    description: 'Building dream homes with quality craftsmanship and attention to detail, from foundation to finish.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern house exterior'
  },
  {
    id: 's2',
    title: 'Commercial Development',
    description: 'Constructing innovative commercial spaces, offices, and retail units tailored to business needs.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'office building'
  },
  {
    id: 's3',
    title: 'Civil Engineering',
    description: 'Expert solutions for infrastructure projects, including roads, bridges, and drainage systems.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'bridge construction'
  },
  {
    id: 's4',
    title: 'Renovation & Remodeling',
    description: 'Transforming existing structures with modern designs and improved functionality.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'kitchen renovation'
  },
];

export const projectsData: Project[] = [
  {
    id: 'p1',
    title: 'The Grand Avenue Bridge',
    description: 'A landmark cable-stayed bridge connecting downtown to the new tech park, completed ahead of schedule.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'modern bridge',
    clientTestimonial: '"Mevill Constructions delivered an iconic structure that has transformed our city\'s skyline. Their professionalism was outstanding."',
    isFeatured: true,
    category: "Infrastructure",
    completionDate: "2023-05-15",
    location: "New City, NC",
    details: [
      "500-meter main span with two 150-meter towers.",
      "Utilized advanced composite materials for decking.",
      "Integrated smart sensors for structural health monitoring.",
      "Completed 2 months ahead of schedule and within budget."
    ]
  },
  {
    id: 'p2',
    title: 'Oakwood Luxury Apartments',
    description: 'A 200-unit luxury apartment complex featuring sustainable design and high-end amenities.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'apartment building',
    category: "Residential",
    completionDate: "2022-11-01",
    location: "Green Valley, GV",
    details: [
      "LEED Gold certified building.",
      "Includes rooftop garden, fitness center, and co-working spaces.",
      "Smart home technology integrated in all units."
    ]
  },
  {
    id: 'p3',
    title: 'TechHub Innovation Center',
    description: 'A state-of-the-art office building designed for collaboration and technological advancement.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'modern office interior',
    clientTestimonial: '"The TechHub is a testament to Mevill\'s innovative approach to construction. It\'s the perfect space for our growing company."',
    category: "Commercial",
    completionDate: "2024-01-20",
    location: "Innovation Park, IP",
  },
  {
    id: 'p4',
    title: 'Downtown Revitalization - Phase 1',
    description: 'Urban renewal project involving streetscape improvements and public plaza construction.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'city plaza',
    category: "Urban Development",
    completionDate: "2023-09-10",
    location: "Old Town, OT",
  },
];

export const teamData: TeamMember[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    title: 'Founder & CEO',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'ceo portrait',
    bio: 'With over 20 years in the construction industry, Eleanor leads Mevill with a vision for quality and innovation.'
  },
  {
    id: 't2',
    name: 'Marcus Cole',
    title: 'Chief Engineer',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'engineer portrait',
    bio: 'Marcus brings cutting-edge engineering expertise to every project, ensuring structural integrity and efficiency.'
  },
  {
    id: 't3',
    name: 'Sofia Chen',
    title: 'Head of Projects',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'manager portrait',
    bio: 'Sofia meticulously manages projects from inception to completion, guaranteeing on-time and on-budget delivery.'
  },
];

// This function simulates the AI determining the featured project.
// In a real scenario, this would involve a call to an AI flow.
export const getFeaturedProject = async (): Promise<Project | null> => {
  // For now, return the project marked as isFeatured, or the first one.
  const featured = projectsData.find(p => p.isFeatured);
  return featured || (projectsData.length > 0 ? projectsData[0] : null);
};
