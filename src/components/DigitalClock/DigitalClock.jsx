import React, { useState, useEffect } from 'react';
import './DigitalClock.scss'; 

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setTime(new Date());
  };


  const formatTime = (time) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // Ajouter un zéro devant si le chiffre est inférieur à 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="digital-clock">
      <div className="digital-clock-display">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default DigitalClock;
