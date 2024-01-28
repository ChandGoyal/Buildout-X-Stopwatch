import React, { useState, useEffect } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const timeFormat = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${mins}:${`${remainingSeconds}`.padStart(2, 0)}`;
  };

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeElapsed(0);
  };

  useEffect(() => {
    // const ac = new AbortController();
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
      // ac.abort();
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {timeFormat(timeElapsed)}</p>
      <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
