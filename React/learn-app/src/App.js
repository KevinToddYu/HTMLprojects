import React, { useState, useEffect } from 'react';

export default function LearnApp() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      try {
        const response = await fetch(
          "https://nexus.frc-api.firstinspires.org/v3/events/2024casf/schedule",
          {
            headers: {
              "Authorization": `Bearer ${process.env.REACT_APP_NEXUS_KEY}`
            }
          }
        );

        const data = await response.json();
        console.log(data);

        // Nexus schedule is usually in data.Schedule or data.schedule
        setItems(data.schedule || data.Schedule || []);
      } catch (err) {
        console.error("API error:", err);
      }
    }

    loadSchedule();
  }, []);

  return (
    <div>
      <h1>Team 8 Schedule</h1>

      <ul>
        {items.map((match, index) => (
          <li key={index}>
            Match {match.matchNumber} – {match.startTime}
          </li>
        ))}
      </ul>
    </div>
  );
}
