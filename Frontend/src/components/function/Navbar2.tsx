import React from "react";

const Navbar2: React.FC = () => {
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
          <a href="/" className="w-nav-link">
            Volver
          </a>
          <a href="#" className="w-nav-link">
            Help
          </a>
          <a href="#" className="w-nav-link">
            Profile
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
