// pages/coaches.js
import React, { useEffect, useState } from 'react';
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
      <div>
        <h1>Coaches List</h1>
        {error && <p>Error: {error}</p>}
        <ul>
          {coaches.map((coach) => (
            <li key={coach.id}>
              {coach.full_name} - {coach.specialty} - ${coach.hourly_rate}/hour
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default CoachesList;
