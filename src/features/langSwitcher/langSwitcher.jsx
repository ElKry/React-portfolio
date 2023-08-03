import React from "react";
import { useLang } from "../../processes/contextLanguage";

export const LangSwitcher = () => {
  const { lang, setLang } = useLang();

  const handleClickRu = () => {
    if (lang !== "ru") setLang("ru");
  };

  const handleClickEn = () => {
    if (lang !== "en") setLang("en");
  };

  return (
    <ul>
      <li onClick={handleClickRu}>ru</li>
      <li onClick={handleClickEn}>en</li>
    </ul>
  );
};
