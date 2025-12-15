import { Event, Project, TeamMember, Partner, Service, QuoteRequest } from '../types';

// Mock Data Store (In a real app, this would fetch from Strapi/Directus)

const events: Event[] = [
  {
    id: '1',
    title: 'Velito Cup 2024',
    date: '2024-06-15',
    location: 'Amiens Arena',
    description: 'Le plus grand tournoi amateur de la région.',
    type: 'tournament',
    imageUrl: 'https://picsum.photos/seed/event1/800/400'
  },
  {
    id: '2',
    title: 'Atelier "Gaming & Santé"',
    date: '2024-05-20',
    location: 'Hub Velito',
    description: 'Prévention sur les postures et le sommeil pour les gamers.',
    type: 'workshop',
    imageUrl: 'https://picsum.photos/seed/event2/800/400'
  },
  {
    id: '3',
    title: 'Rencontre Asso',
    date: '2024-07-01',
    location: 'Centre Ville',
    description: 'Venez rencontrer les bénévoles.',
    type: 'gathering',
    imageUrl: 'https://picsum.photos/seed/event3/800/400'
  }
];

const projects: Project[] = [
  {
    id: '1',
    title: 'Esport pour Tous',
    category: 'Insertion',
    description: "Programme d'inclusion numérique par le jeu vidéo dans les quartiers prioritaires.",
    imageUrl: 'https://picsum.photos/seed/proj1/600/400'
  },
  {
    id: '2',
    title: 'Velito Academy',
    category: 'Education',
    description: 'Formation aux métiers de l\'esport : coaching, management, streaming.',
    imageUrl: 'https://picsum.photos/seed/proj2/600/400'
  }
];

const team: TeamMember[] = [
  { id: '1', name: 'Alex Dupont', role: 'Président', imageUrl: 'https://picsum.photos/seed/user1/200/200' },
  { id: '2', name: 'Sarah Connor', role: 'Captain Valorant', game: 'Valorant', imageUrl: 'https://picsum.photos/seed/user2/200/200' },
  { id: '3', name: 'John Doe', role: 'Coach League of Legends', game: 'LoL', imageUrl: 'https://picsum.photos/seed/user3/200/200' }
];

const partners: Partner[] = [
  { id: '1', name: 'Ville d\'Amiens', logoUrl: 'https://picsum.photos/seed/p1/150/80', tier: 'Gold' },
  { id: '2', name: 'Tech Store', logoUrl: 'https://picsum.photos/seed/p2/150/80', tier: 'Silver' },
  { id: '3', name: 'Local Bank', logoUrl: 'https://picsum.photos/seed/p3/150/80', tier: 'Bronze' }
];

const services: Service[] = [
  {
    id: 'pack-standard',
    title: 'PACK STANDARD',
    description: 'Animation Esport encadrée pour l\'initiation et le loisir. Idéal pour les petits groupes.',
    duration: 'Minimum 2 heures',
    priceDetails: ['55 € / heure'],
    features: [
      'Jusqu’à 4 écrans / 4 consoles (2 PS5, 2 Switch)',
      'Initiation & Rotation des joueurs',
      'Mini-compétitions fun',
      '1 Animateur VEA inclus'
    ],
    colorTheme: 'blue'
  },
  {
    id: 'pack-advanced',
    title: 'PACK ADVANCED',
    description: 'Dispositif étendu pour gérer plus de flux ou un événement plus important.',
    duration: 'Sur mesure',
    priceDetails: ['55 € / heure', '+ 100 € forfait matériel'],
    features: [
      'Tout le contenu du Pack Standard',
      'Plus de 4 écrans / consoles',
      'Logistique & Installation complexe',
      'Gestion gros volume de joueurs'
    ],
    colorTheme: 'yellow'
  },
  {
    id: 'pack-premium',
    title: 'PACK PREMIUM',
    description: 'Organisation d\'un vrai tournoi esport structuré avec compétition officielle.',
    duration: 'Demi-journée ou Journée',
    priceDetails: [
      'À partir de 90 € / heure',
      'Option OBS / Stream : +200 €'
    ],
    features: [
      'Structure de tournoi (arbre, bracket)',
      'Arbitrage & Gestion sportive',
      'Animateur principal + Caster',
      'Matériel compétition (PC/Consoles)'
    ],
    highlight: true,
    colorTheme: 'red'
  }
];

const quotes: QuoteRequest[] = [
  {
    id: '101',
    structureType: 'Mairie',
    interventionType: 'Pack Standard',
    objective: 'Animation Jeunesse',
    location: 'Amiens Nord',
    date: '2024-07-14',
    duration: '4h',
    attendees: 50,
    hasEquipment: false,
    contactName: 'Jean Dupont',
    contactEmail: 'jean@amiens.fr',
    contactPhone: '0600000000',
    status: 'PENDING',
    createdAt: '2024-03-10'
  }
];

// Service Methods

export const getEvents = async (): Promise<Event[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(events), 300));
};

export const getProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(projects), 300));
};

export const getTeam = async (): Promise<TeamMember[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(team), 300));
};

export const getPartners = async (): Promise<Partner[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(partners), 300));
};

export const getServices = async (): Promise<Service[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(services), 300));
};

export const getQuotes = async (): Promise<QuoteRequest[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(quotes), 300));
};

export const submitQuote = async (data: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>): Promise<boolean> => {
  console.log('Submitting quote:', data);
  // In a real app, this would POST to API
  return new Promise((resolve) => setTimeout(() => resolve(true), 800));
};

// Admin Functions (Mock)
export const updateEvent = async (id: string, data: Partial<Event>) => {
  console.log('Updating event', id, data);
  return true;
};
