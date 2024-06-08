import React from "react";

const Navbar: React.FC = () => {
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
          <a href="/function" className="w-nav-link">
            Entrar
          </a>
          <a href="#question" className="w-nav-link">
            Questions
          </a>
          <a href="#Function" className="w-nav-link">
            Funciones
          </a>
          <a href="#About" className="w-nav-link">
            Acerca de
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
