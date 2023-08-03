import React, { useState, useEffect } from "react";
import "./progressBar.css";

export const ProgressBar = ({ percent }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < percent) {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, percent);

    return () => {
      clearInterval(timer);
    };
  }, [progress, percent]);

  return (
    <div className="progress">
      <label className="progress-label" htmlFor="progress-bar-html">
        label
      </label>
      <span className="progress-value">{progress}%</span>
      <progress
        className="progress-bar"
        id="progress-bar-html"
        value={progress}
        max="100"
      ></progress>
    </div>
  );
};
