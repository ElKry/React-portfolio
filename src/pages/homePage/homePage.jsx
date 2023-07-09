import React, { useEffect, useState } from "react";
import { Information } from "../../widgets/information/information";
import { Header } from "../../widgets/header/header";
import { WorkHistory } from "../../widgets/workHistory/workHistory";
import { Portfolio } from "../../widgets/portfolio/portfolio";
import { Contacts } from "../../widgets/contacts/contacts";
import { Footer } from "../../widgets/footer/footer";
import { RightPanel } from "../../widgets/rightPanel/rightPanel";
import { WORK, EDUCATION } from "../../constants/workHistory";
import { getEducation, getWork } from "../../process/helpers/getPortfolio";

import "./homePage.css";

export const HomePage = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEducation();
        setEducation(data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Information />
      <div className="inner">
        <Header />
        {!loading > 0 ? (
          <WorkHistory name="education" data={education} />
        ) : (
          <p>loader</p>
        )}
        <WorkHistory name="work" data={WORK} />
        <Portfolio />
        <Contacts />
        <Footer />
      </div>
      <RightPanel />
    </div>
  );
};
