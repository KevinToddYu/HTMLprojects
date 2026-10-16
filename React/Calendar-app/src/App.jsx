import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      try {
        const response = await fetch(
          "https://frc.nexus/api/v1/event/demo4613",
          {
            headers: {
              "Nexus-Api-Key": import.meta.env.VITE_NEXUS_KEY
            }
          }
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        console.log(data);

        // Nexus schedule is usually in data.Schedule or data.schedule
        setItems(data.matches || []);
      } catch (err) {
        console.error("API error:", err);
      }
    }

    loadSchedule();
  }, []);

  return (
    <div>
      <h1>Team 8 Schedule</h1>
    <h3>Created by Kevin & Greg</h3>
      <ul>
  {items.length === 0 && <li>No matches yet</li>}
  {items.map((match, index) => (
    <li key={index}>
      {match.label} – {match.status}
    </li>
  ))}
</ul>
    </div>
  );
}

export default App
