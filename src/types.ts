// src/types.ts
export interface Hackathon {
    id: number; // Ensure this is consistent with your data model
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    image: string;
    level: 'easy' | 'medium' | 'hard';
    status: 'upcoming' | 'active' | 'past';
  }
  
