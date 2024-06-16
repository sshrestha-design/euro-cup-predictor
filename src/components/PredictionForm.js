import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = ({ matchId }) => {
  const [winner, setWinner] = useState('');
  const [bothTeamsScore, setBothTeamsScore] = useState(false);
  const [yellowCards, setYellowCards] = useState(0);
  const [halfTimeScore, setHalfTimeScore] = useState('');
  const [totalGoals, setTotalGoals] = useState(0);
  const [fullTimeScore, setFullTimeScore] = useState('');
  const [goalMinute, setGoalMinute] = useState(0);

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/predictions', {
        matchId,
        winner,
        bothTeamsScore,
        yellowCards,
        halfTimeScore,
        totalGoals,
        fullTimeScore,
        goalMinute,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Prediction submitted!');
    } catch (error) {
      console.error('Error submitting prediction', error);
    }
  };

  return (
    <div>
      <h3>Submit Prediction</h3>
      <input type="text" value={winner} onChange={(e) => setWinner(e.target.value)} placeholder="Winner" />
      <input type="checkbox" checked={bothTeamsScore} onChange={() => setBothTeamsScore(!bothTeamsScore)} /> Both Teams Score
      <input type="number" value={yellowCards} onChange={(e) => setYellowCards(e.target.value)} placeholder="Yellow Cards" />
      <input type="text" value={halfTimeScore} onChange={(e) => setHalfTimeScore(e.target.value)} placeholder="Half Time Score" />
      <input type="number" value={totalGoals} onChange={(e) => setTotalGoals(e.target.value)} placeholder="Total Goals" />
      <input type="text" value={fullTimeScore} onChange={(e) => setFullTimeScore(e.target.value)} placeholder="Full Time Score" />
      <input type="number" value={goalMinute} onChange={(e) => setGoalMinute(e.target.value)} placeholder="Minute of a Goal" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PredictionForm;
