import React, { useState, useRef } from 'react';
import './App.css';



export default function App() {

  // -----------------State--------------------------
  const [title, setTitle] = useState('Pomodoro Timer')
  const [timeLeft, setTimeLeft] = useState(1500)
  const [isRunning, setIsRunning] = useState(false)
  let intervalRef = useRef(null);



  // ---------------FUNCTIONS-----------------------
  function startTimer() {
    // Keeps the timer from creating multiple instances of the interval. Prevents bug that causes counter to skip.
    if (intervalRef.current !== null) return

    // This if statement keeps the timer from going into negative numbers when counting down. setInterval is a built in JS method.
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        setIsRunning(true)
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer()
        return 0;
      })
    }, 1000) // delay in ms
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    clearInterval(intervalRef.current)
    intervalRef.current = null;
    setTimeLeft(25 * 60);
    setIsRunning(false);

  }

  // -----------------LOGIC--------------------------

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0')
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, '0')

  // --------------------DISPLAY---------------------------
  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}