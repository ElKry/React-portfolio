import React from "react";
import { Navigation } from "../../features/navigation/navigation";
import { ThemeSwitcher } from "../../features/themeSwitcher/themeSwitcher";
import { LangSwitcher } from "../../features/langSwitcher/langSwitcher";

import "./rightPanel.css";

export const RightPanel = () => {
  return (
    <div className="rightPanel">
      <ThemeSwitcher />
      <LangSwitcher />
      <Navigation />
    </div>
  );
};
