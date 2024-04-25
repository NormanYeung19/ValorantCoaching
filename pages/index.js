// pages/index.js
import React, { useEffect, useState } from 'react';
import CoachCard from '../components/CoachCard';
import { fetchCoaches } from '../services/coachService';

function HomePage() {
  const [coaches, setCoaches] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadCoaches() {
      const { coaches, error } = await fetchCoaches();
      if (error) {
        setError(error.message);
      } else {
        setCoaches(coaches);
      }
    }

    loadCoaches();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Valorant Coaching Homepage!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coaches.length > 0 ? (
          coaches.map((coach) => <CoachCard key={coach.id} coach={coach} />)
        ) : (
          <p>No coaches available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
