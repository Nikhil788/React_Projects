import React,{useState, useEffect } from 'react';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';


const CountdownTimer = () => {
    const [seconds, setSeconds]=useState(300);
    const [isActive, setIsActive] = useState(false);

    useEffect (() => {
        let interval;
        if(isActive){
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }else{
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    },[isActive]);


    const handleStartStop = () => {
        setIsActive(prevIsActive => !prevIsActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(300);
    };

    const  handleTimeChange = (event) => {
        const newTime = parseInt(event.target.value,10);
        setSeconds(newTime);
    };

    return(
    <div>
      <TimerDisplay seconds={seconds} />
      <TimerControls
        isActive={isActive}
        onStartStop={handleStartStop}
        onReset={handleReset}
        onTimeChange={handleTimeChange}
        seconds={seconds}
      />
    </div>
    );
    
};

export default CountdownTimer;