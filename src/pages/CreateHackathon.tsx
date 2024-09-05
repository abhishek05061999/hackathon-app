import './CreateHackathon.css';

import React from 'react';
import HackathonForm from '../components/HackathonForm';
import { Hackathon } from '../types';

interface CreateHackathonProps {
  onAddHackathon: (hackathon: Hackathon) => void;
}

const CreateHackathon: React.FC<CreateHackathonProps> = ({ onAddHackathon }) => {
  const handleSubmit = (newHackathon: Hackathon) => {
    onAddHackathon(newHackathon);
  };

  return (
    <div>
      <h1>Create New Hackathon</h1>
      <HackathonForm initialData={null} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateHackathon;
