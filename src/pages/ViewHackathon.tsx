// src/pages/ViewHackathon.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Hackathon } from '../types';

interface ViewHackathonProps {
  hackathons: Hackathon[];
}

const ViewHackathon: React.FC<ViewHackathonProps> = ({ hackathons }) => {
  const { id } = useParams<{ id: string }>();
  const hackathon = hackathons.find(h => h.id === parseInt(id!, 10));

  if (!hackathon) {
    return <p>Hackathon not found</p>;
  }

  return (
    <div>
      <h1>{hackathon.name}</h1>
      <p>{hackathon.description}</p>
      <p>Start Date: {hackathon.startDate}</p>
      <p>End Date: {hackathon.endDate}</p>
      <p>Level: {hackathon.level}</p>
      <p>Status: {hackathon.status}</p>
      <img src={hackathon.image} alt={hackathon.name} />
    </div>
  );
};

export default ViewHackathon;
