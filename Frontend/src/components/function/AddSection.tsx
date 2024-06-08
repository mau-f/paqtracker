import React, { useState } from "react";
import AddVisit from "./AddVisit";
import AddPackage from "./AddPackage";
import AddNotification from "./AddNotification";
import AddResident from "./AddResident";

const AddSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 4");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="div-block-5">
        <img src="/images/8.png" alt="Agregar" className="image-11" />
        <div className="text-block">Agregar</div>
      </div>
      <div className="tabs-add w-tabs">
        <div className="tabs-menu-add w-tab-menu">
          <a
            onClick={() => handleTabClick("Tab 1")}
            className={`tab-link-add-visit w-inline-block w-tab-link ${
              activeTab === "Tab 1" ? "w--current" : ""
            }`}
          >
            <div>Visita</div>
          </a>
          <a
            onClick={() => handleTabClick("Tab 2")}
            className={`tab-link-add-package w-inline-block w-tab-link ${
              activeTab === "Tab 2" ? "w--current" : ""
            }`}
          >
            <div>Paqueteria</div>
          </a>
          <a
            onClick={() => handleTabClick("Tab 3")}
            className={`tab-link-add-notification w-inline-block w-tab-link ${
              activeTab === "Tab 3" ? "w--current" : ""
            }`}
          >
            <div>Notificación</div>
          </a>
          <a
            onClick={() => handleTabClick("Tab 4")}
            className={`tab-link-add-resident w-inline-block w-tab-link ${
              activeTab === "Tab 4" ? "w--current" : ""
            }`}
          >
            <div>Residente</div>
          </a>
        </div>
        <div className="tabs-content-add w-tab-content">
          <div
            className={`add-visit w-tab-pane ${
              activeTab === "Tab 1" ? "w--tab-active" : ""
            }`}
          >
            <AddVisit />
          </div>
          <div
            className={`add-package w-tab-pane ${
              activeTab === "Tab 2" ? "w--tab-active" : ""
            }`}
          >
            <AddPackage />
          </div>
          <div
            className={`add-notification w-tab-pane ${
              activeTab === "Tab 3" ? "w--tab-active" : ""
            }`}
          >
            <AddNotification />
          </div>
          <div
            className={`add-resident w-tab-pane ${
              activeTab === "Tab 4" ? "w--tab-active" : ""
            }`}
          >
            <AddResident />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSection;
