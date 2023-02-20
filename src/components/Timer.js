import React, { useState, useEffect } from "react";

function CountdownTimer({ duration }) {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;

  return (
    <div>
      <b>{hours}:{minutes}:{secondsLeft} remaining</b>
    </div>
  );
}

export default CountdownTimer;
