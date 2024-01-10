import React from 'react';

const TimerDisplay = ({ seconds }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{formatTime(seconds)}</h1>
    </div>
  );
};

export default TimerDisplay;
