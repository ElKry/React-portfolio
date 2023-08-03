import React from "react";
import { ProgressBar } from "../../features/progressBar/progressBar";

import "./information.css";

export const Information = () => {
  return (
    <div className="information">
      <p>Information</p>
      <ProgressBar percent={70} />
    </div>
  );
};
