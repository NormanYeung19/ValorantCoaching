// pages/coaches.js
import React, { useEffect, useState } from 'react';
import CoachCard from '../components/CoachCard'; // This is the correct import path based on your project structure
import { fetchCoaches } from '../services/coachService';

function CoachesList() {
    const [coaches, setCoaches] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      async function loadCoaches() {
        const { coaches, error } = await fetchCoaches();
        console.log(coaches);
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
        <h1 className="text-2xl font-bold mb-6">Coaches List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </div>
    );
  }
  

export default CoachesList;
