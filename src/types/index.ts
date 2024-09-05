// src/types/index.ts
export interface Hackathon {
    id: number; // Ensure this matches your actual data structure
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    image: string;
    level: 'easy' | 'medium' | 'hard';
    status: 'upcoming' | 'active' | 'past';
  }
  