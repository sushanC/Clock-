import React, { useState, useEffect } from 'react';
function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '2rem', marginTop: '50px' }}>
      <p>🕒 Current Time:</p>
      <h1>{time}</h1>
    </div>
  );
}
export default LiveClock;
