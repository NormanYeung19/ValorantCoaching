// pages/index.js
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import supabase from '../utils/supabaseClient';
import CoachCard from '../components/CoachCard';

export default function HomePage() {
  const [coaches, setCoaches] = useState([]);
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCoaches = async () => {
      const { data, error } = await supabase
        .from('coaches')
        .select('*');
      if (error) {
        console.error('Error fetching coaches:', error);
      } else {
        setCoaches(data);
        setFilteredCoaches(data);
      }
    };
    fetchCoaches();
  }, []);

  useEffect(() => {
    const results = coaches.filter(coach =>
      coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coach.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCoaches(results);
  }, [searchTerm, coaches]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Esports Coaching Homepage!</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search coaches"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border rounded-l-md shadow-md"
        />
        <div className="p-2 bg-blue-500 text-white rounded-r-md shadow-md flex items-center">
          <FaSearch />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCoaches.length > 0 ? (
          filteredCoaches.map(coach => <CoachCard key={coach.id} coach={coach} />)
        ) : (
          <p>No coaches found.</p>
        )}
      </div>
    </div>
  );
}
