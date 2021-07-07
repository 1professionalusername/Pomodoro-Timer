// import React, { useState, useRef } from 'react';
// import './App.css';




// export default function App() {

//   //----------------------State variables------------------------

//   const [title, setTitle] = useState("Pomodoro Timer");
//   const [timeLeft, setTimeLeft] = useState('1500');
//   const [isRunning, setIsRunning] = useState(false);
//   const intervalRef = useRef(null);

//   //----------------------Digit Placeholder ------------------------

//   function padTime(time) {
//     return time.toString().padStart(2, '0');
//   }

//   //----------------------START TIMER------------------------

//   function startTimer() {
//     if (intervalRef.current !== null) return;

//     setTitle("Pomodoro Timer")
//     setIsRunning(true);
//     intervalRef.current = setInterval(() => {
//       setTimeLeft((timeLeft) => {
//         if (timeLeft >= 1) return timeLeft - 1;
//         resetTimer();
//         return 0;
//       });
//     }, 1000);
//   }

//   //------------------STOP TIMER----------------------------

//   function stopTimer() {
//     if (intervalRef.current === null) return;

//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//     setTitle('Click Start to Continue');
//     setIsRunning(false);
//   }

//   //----------------RESET TIMER-----------------------------

//   function resetTimer() {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//     setTitle("Pomodoro Timer");
//     setTimeLeft(25 * 60);
//     setIsRunning(false);
//   }

//   const minutes = padTime(Math.floor(timeLeft / 60));
//   const seconds = padTime(timeLeft - minutes * 60);


//   return (

//     //----------------Title-----------------------------

//     <div className="app">
//       <h2>{title}</h2>


//       {/* ----------------Timer Display----------------------------- */}

//       <div className="timer">
//         <span>{minutes}</span>
//         <span>:</span>
//         <span>{seconds}</span>
//       </div>


//       {/* ----------------Buttons----------------------------- */}

//       <div className="buttons">
//         {!isRunning && <button onClick={startTimer}>Start</button>}
//         {isRunning && <button onClick={stopTimer}>Stop</button>}
//         <button onClick={resetTimer}>Reset</button>
//       </div>
//     </div>
//   );
// }
