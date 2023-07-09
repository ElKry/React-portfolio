import React from "react";
import { Link } from "react-scroll";
import PortfolioIcon from "./images/portfolio.svg";
import CVIcon from "./images/cv.svg";
import { HomeIcon } from "./icons/homeIcon";

import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Link
        className="item itemHome"
        activeClass="active"
        to="home"
        smooth={true}
        duration={500}
      >
        <HomeIcon />
      </Link>
      <Link className="item" to="education" smooth={true} duration={500}>
        <img src={CVIcon} alt="CVIcon" />
      </Link>
      <Link className="item" to="portfolio" smooth={true} duration={500}>
        <img src={PortfolioIcon} alt="PortfolioIcon" />
      </Link>
      <Link className="item itemContacts" to="contacts" smooth={true} duration={500}>
      </Link>
    </nav>
  );
};
