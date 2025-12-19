export interface NavItem {
  label: string;
  path: string;
}

export interface EcosystemModule {
  id: string;
  name: string;
  path: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'tournament' | 'workshop' | 'gathering';
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Insertion' | 'Education' | 'Innovation';
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  game?: string;
  imageUrl: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  tier: 'Gold' | 'Silver' | 'Bronze';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'USER';
  interests: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  priceDetails: string[];
  features: string[];
  highlight?: boolean;
  colorTheme: 'blue' | 'yellow' | 'red';
}

export interface QuoteRequest {
  id: string;
  structureType: string;
  interventionType: string;
  objective: string;
  location: string;
  date: string;
  duration: string;
  attendees: number;
  hasEquipment: boolean;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  status: 'PENDING' | 'PROCESSED';
  createdAt: string;
}
