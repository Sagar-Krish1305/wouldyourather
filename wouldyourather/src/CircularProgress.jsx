import React, { useState, useEffect } from 'react';
import './CircularProgress.css';

const CircularProgress = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentPercentage = 0;
    const stepTime = 20; // milliseconds

    function updateProgress() {
      if (currentPercentage < value) {
        currentPercentage++;
      } else if (currentPercentage > value) {
        currentPercentage--;
      }

      setProgress(currentPercentage);

      if (currentPercentage !== value) {
        setTimeout(updateProgress, stepTime);
      }
    }

    updateProgress();
  }, [value]);

  const angle = progress * 3.6;

  return (
    <div className="progress-container">
      <div
        className="progress-circle"
        style={{ background: `conic-gradient(#598ef0 ${angle}deg,#f15361 ${angle}deg)` }}
      > 
     
      </div>
    </div>
  );
};

export default CircularProgress;
