export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Advanced';
  description: string;
  price: string;
  duration: string;
  features: string[];
  gift?: string;
  challenge?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'Consulting' | 'Automation' | 'Audit' | 'Design';
  icon: string;
}

export interface PartnerRank {
  name: string;
  benefits: string[];
  commission: string;
  color: string;
}
