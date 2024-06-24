import { Link } from "react-router-dom";
import React, { MouseEvent } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { useTranslation } from "react-i18next";

const Navbar2: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const auth = useAuth();
  async function handleSingOut(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/signout", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${auth.getRefreshToken()}`,
        },
      });
      if (response.ok) {
        console.log("Cierre de sesión exitoso");
        auth.signOut();
      }
    } catch (error) {}
  }

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
          <button className="w-nav-link" onClick={() => changeLanguage("en")}>
            English
          </button>
          <button className="w-nav-link" onClick={() => changeLanguage("es")}>
            Español
          </button>
          <a href="#" className="w-nav-link">
            Help
          </a>
          <a href="#" className="w-nav-link" onClick={handleSingOut}>
            Sing out
          </a>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
