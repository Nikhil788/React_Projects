import React from 'react';

const TimerControls = ({ isActive, onStartStop, onReset, onTimeChange, seconds }) => {
  return (
    <div>
      <button onClick={onStartStop}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={onReset}>Reset</button>
      <input type="number" value={seconds} onChange={onTimeChange} />
    </div>
  );
};

export default TimerControls;
