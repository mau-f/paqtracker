import React from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="div-navbar">
      <div className="navbar w-nav">
        <div className="nav-logo">
          <a href="#" className="brand w-nav-brand">
            <img
              src="/images/logo_paqtracker.png"
              alt="logo"
              className="logo"
            />
          </a>
        </div>
        <nav className="nav-menu w-nav-menu">
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("es")}>Español</button>
          <a href="#create-account" className="w-nav-link">
            {t("CreateAccount")}
          </a>
          <a href="#question" className="w-nav-link">
          {t("Questions")}
          </a>
          <a href="#Function" className="w-nav-link">
          {t("Function")}
          </a>
          <a href="#About" className="w-nav-link">
          {t("About")}
          </a>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
