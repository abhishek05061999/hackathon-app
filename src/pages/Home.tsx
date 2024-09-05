import React, { useState } from 'react';
import { Hackathon } from '../types';
import HackathonCard from '../components/HackathonCard';
import './Home.css';

interface HomeProps {
  hackathons: Hackathon[];
  setHackathons: React.Dispatch<React.SetStateAction<Hackathon[]>>;
}

const Home: React.FC<HomeProps> = ({ hackathons, setHackathons }) => {
  const [sortOption, setSortOption] = useState<string>('newest');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredHackathons = hackathons
    .filter(hackathon => (levelFilter === 'all' || hackathon.level === levelFilter) &&
                         (statusFilter === 'all' || hackathon.status === statusFilter) &&
                         hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'newest') {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      }
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });

    const handleEditHackathon = (id: number) => {
        console.log(`Editing hackathon with ID: ${id}`);
      };
      
      const handleDeleteHackathon = (id: number) => {
        console.log(`Deleting hackathon with ID: ${id}`);
        setHackathons(prev => prev.filter(h => h.id !== id)); // Removes the hackathon from the list
      };
      

  return (
    <div className="home">
      <div className="filters">
        <label>
          Search:
          <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder="Search by name" 
          />
        </label>
        <label>
          Sort by:
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </label>
        <label>
          Level:
          <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
            <option value="all">All Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label>
          Status:
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
        </label>
      </div>
      <div className="hackathon-list">
  {filteredHackathons.map((hackathon: Hackathon) => (
    <HackathonCard 
      key={hackathon.id} 
      hackathon={hackathon} 
      onEdit={() => handleEditHackathon(hackathon.id)} 
      onDelete={() => handleDeleteHackathon(hackathon.id)} 
    />
  ))}
</div>

    </div>
  );
};

export default Home;
