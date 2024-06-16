import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PredictionForm from './PredictionForm';

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matches');
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h2>Upcoming Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.team1} vs {match.team2} - {new Date(match.date).toLocaleString()}
            <PredictionForm matchId={match.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
