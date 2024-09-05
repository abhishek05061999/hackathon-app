// src/components/HackathonList.tsx
import React, { useState } from 'react';
import { Hackathon } from '../types';
import HackathonCard from './HackathonCard';

interface HackathonListProps {
  hackathons: Hackathon[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const HackathonList: React.FC<HackathonListProps> = ({ hackathons, onEdit, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHackathons = hackathons.filter((hackathon) =>
    hackathon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredHackathons.map((hackathon) => (
        <HackathonCard key={hackathon.id} hackathon={hackathon} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default HackathonList;
