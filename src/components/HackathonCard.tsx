// src/components/HackathonCard.tsx
import React from 'react';
import { Hackathon } from '../types';
import Timer from './Timer';

interface HackathonCardProps {
  hackathon: Hackathon;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ hackathon, onEdit, onDelete }) => {
  const { id, name, description, level, startDate, endDate, status, image } = hackathon;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Level: {level}</p>
      <p>Status: {status}</p>
      {status === 'active' && <Timer endDate={endDate} />}
      {status === 'upcoming' && <Timer startDate={startDate} />}
      {status === 'past' && <p>{startDate} - {endDate}</p>}
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default HackathonCard;
