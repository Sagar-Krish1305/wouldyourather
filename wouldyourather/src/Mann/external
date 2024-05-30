// src/App.jsx
import React, { useState } from 'react';
import Progress from './Progress';
import './App.css';

function App() {
  const generateRandomProgress = () => Math.floor(Math.random() * (75 - 25 + 1)) + 25;

  const [progress, setProgress] = useState(generateRandomProgress());

  function handleClick() {
    const newProgress = generateRandomProgress();
    setProgress(newProgress);
    console.log("Progress updated to:", newProgress);
  }

  return (
    <div className="App" >
      <Progress progress={progress} />
    </div>
  );
}

export default App;
