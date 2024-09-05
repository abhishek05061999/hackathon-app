import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateHackathon from './pages/CreateHackathon';
import EditHackathon from './pages/EditHackathon';
import { Hackathon } from './types';

const App: React.FC = () => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([
    {
      id: 1,
      name: 'Hackathon 1',
      startDate: '2024-01-01',
      endDate: '2024-01-02',
      description: 'Description 1',
      image: 'image1.png',
      level: 'easy',
      status: 'upcoming',
    },
    {
      id: 2,
      name: 'Hackathon 2',
      startDate: '2024-02-01',
      endDate: '2024-02-02',
      description: 'Description 2',
      image: 'image2.png',
      level: 'medium',
      status: 'active',
    },
    {
      id: 3,
      name: 'Hackathon 3',
      startDate: '2024-03-01',
      endDate: '2024-03-02',
      description: 'Description 3',
      image: 'image3.png',
      level: 'hard',
      status: 'past',
    },
    {
      id: 4,
      name: 'Hackathon 4',
      startDate: '2024-04-01',
      endDate: '2024-04-02',
      description: 'Description 4',
      image: 'image4.png',
      level: 'easy',
      status: 'upcoming',
    },
    {
      id: 5,
      name: 'Hackathon 5',
      startDate: '2024-05-01',
      endDate: '2024-05-02',
      description: 'Description 5',
      image: 'image5.png',
      level: 'medium',
      status: 'active',
    },
  ]);

  const addHackathon = (newHackathon: Hackathon) => {
    setHackathons([...hackathons, newHackathon]);
  };

  const updateHackathon = (updatedHackathon: Hackathon) => {
    setHackathons(hackathons.map(hackathon =>
      hackathon.id === updatedHackathon.id ? updatedHackathon : hackathon
    ));
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home hackathons={hackathons} setHackathons={setHackathons} />} />

        <Route path="/create" element={<CreateHackathon onAddHackathon={addHackathon} />} />
        <Route path="/edit/:id" element={<EditHackathon hackathons={hackathons} onUpdateHackathon={updateHackathon} />} />
      </Routes>
    </Router>
  );
};

export default App;
