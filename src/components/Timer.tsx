// src/components/Timer.tsx
import React, { useEffect, useState } from 'react';

interface TimerProps {
  startDate?: string;
  endDate?: string;
}

const Timer: React.FC<TimerProps> = ({ startDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = startDate ? new Date(startDate) : new Date(endDate!);
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes`);
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate, endDate]);

  return <p>Time left: {timeLeft}</p>;
};

export default Timer;
