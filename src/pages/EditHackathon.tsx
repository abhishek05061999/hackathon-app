import './EditHackathon.css';

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HackathonForm from '../components/HackathonForm';
import { Hackathon } from '../types';

interface EditHackathonProps {
  hackathons: Hackathon[];
  onUpdateHackathon: (hackathon: Hackathon) => void;
}

const EditHackathon: React.FC<EditHackathonProps> = ({ hackathons, onUpdateHackathon }) => {
  const { id } = useParams<{ id: string }>();
  const [hackathon, setHackathon] = useState<Hackathon | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundHackathon = hackathons.find((h) => h.id === parseInt(id || '', 10));
    if (foundHackathon) {
      setHackathon(foundHackathon);
    }
  }, [id, hackathons]);

  const handleSubmit = (updatedHackathon: Hackathon) => {
    onUpdateHackathon(updatedHackathon);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Hackathon</h1>
      {hackathon && (
        <HackathonForm initialData={hackathon} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default EditHackathon;
