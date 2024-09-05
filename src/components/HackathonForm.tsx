import './HackathonForm.css';

import React, { useState } from 'react';
import { Hackathon } from '../types';

interface HackathonFormProps {
  initialData: Hackathon | null;
  onSubmit: (hackathon: Hackathon) => void;
}

const HackathonForm: React.FC<HackathonFormProps> = ({ initialData, onSubmit }) => {
  const [hackathon, setHackathon] = useState<Hackathon>(
    initialData || {
      id: Date.now(),
      name: '',
      startDate: '',
      endDate: '',
      description: '',
      image: '',
      level: 'easy',
      status: 'upcoming',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setHackathon({ ...hackathon, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(hackathon);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={hackathon.name} onChange={handleChange} />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={hackathon.startDate} onChange={handleChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={hackathon.endDate} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={hackathon.description} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={hackathon.image} onChange={handleChange} />
      </label>
      <label>
        Level:
        <select name="level" value={hackathon.level} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HackathonForm;
