export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  featuredLabel?: string;
  category: 'freelance' | 'personal' | 'professional';
}

export const projects: Project[] = [
  {
    id: 'real-evals-gmail',
    title: 'Gmail Clone - REAL Evals',
    description:
      'Production-ready Gmail replica built for AI evaluation platform. Featured in The New York Times for innovative AI testing approach. Implements email management, compose functionality, labels, and search with pixel-perfect UI recreation.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'REST API',
    ],
    demoUrl: 'https://www.realevals.com',
    featured: true,
    featuredLabel: 'Featured in The New York Times',
    category: 'freelance',
  },
  {
    id: 'real-evals-zillow',
    title: 'Zillow Clone - REAL Evals',
    description:
      'High-fidelity real estate platform replica with advanced search, property listings, interactive maps, and filtering. Part of AI evaluation suite featured in The New York Times. Implements complex state management and responsive design.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Mapbox', 'Tailwind CSS'],
    demoUrl: 'https://www.realevals.com',
    featured: true,
    featuredLabel: 'Featured in The New York Times',
    category: 'freelance',
  },
  {
    id: 'real-evals-uber',
    title: 'Uber Clone - REAL Evals',
    description:
      'Comprehensive ride-sharing platform replica with real-time map integration, route calculation, pricing estimates, and driver matching simulation. Featured in The New York Times as part of REAL Evals AI testing platform.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Google Maps API',
      'Tailwind CSS',
    ],
    demoUrl: 'https://www.realevals.com',
    featured: true,
    featuredLabel: 'Featured in The New York Times',
    category: 'freelance',
  },
  {
    id: 'vrio',
    title: 'Vrio - Streaming Platform',
    description:
      'Enterprise streaming platform for Latin America. Developed high-performance video player components, subscription management, and content discovery features. Optimized for millions of concurrent users across multiple devices.',
    technologies: ['React', 'Redux', 'TypeScript', 'Video.js', 'Material UI'],
    category: 'freelance',
  },
  {
    id: 'wpromote',
    title: 'Wpromote - Marketing Analytics',
    description:
      'Advanced marketing analytics dashboard for enterprise clients. Built interactive data visualization components, real-time reporting tools, and campaign performance tracking with complex state management.',
    technologies: [
      'React',
      'TypeScript',
      'D3.js',
      'Redux Toolkit',
      'Chakra UI',
    ],
    category: 'freelance',
  },
  {
    id: 'factupro',
    title: 'FactuPro - Invoice Management',
    description:
      'Complete invoice and billing management system for SMBs. Implemented invoice generation, payment tracking, client management, and automated reminders with responsive design and accessibility compliance.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'REST API',
    ],
    category: 'freelance',
  },
];

export const technologies = [
  'All',
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Redux',
  'Material UI',
  'Chakra UI',
  'REST API',
  'Google Maps API',
  'Mapbox',
  'D3.js',
  'Video.js',
];
