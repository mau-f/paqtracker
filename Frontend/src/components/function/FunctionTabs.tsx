import React, { useState } from "react";
import VisitRegistration from "./VisitRegistration";
import PackageRegistration from "./PackageRegistration";
import AddSection from "./AddSection";
import ResidentRegistration from "./ResidentRegistration";

const FunctionTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 3");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-functions w-tabs">
      <div className="tabs-menu-principal w-tab-menu">
        <a
          data-w-tab="Tab 1"
          className={`tab-link-visit-registration w-inline-block w-tab-link ${
            activeTab === "Tab 1" ? "w--current" : ""
          }`}
          onClick={() => handleTabClick("Tab 1")}
        >
          <img
            src="/images/2.png"
            alt="Visit Registration"
            className="image-7"
          />
        </a>
        <a
          data-w-tab="Tab 2"
          className={`tab-link-package-registration w-inline-block w-tab-link ${
            activeTab === "Tab 2" ? "w--current" : ""
          }`}
          onClick={() => handleTabClick("Tab 2")}
        >
          <img
            src="/images/3.png"
            alt="Package Registration"
            className="image-8"
          />
        </a>
        <a
          data-w-tab="Tab 3"
          className={`tab-link-add w-inline-block w-tab-link ${
            activeTab === "Tab 3" ? "w--current" : ""
          }`}
          onClick={() => handleTabClick("Tab 3")}
        >
          <img src="/images/4.png" alt="Add" className="image-9" />
        </a>
        <a
          data-w-tab="Tab 4"
          className={`tab-link-resident-registration w-inline-block w-tab-link ${
            activeTab === "Tab 4" ? "w--current" : ""
          }`}
          onClick={() => handleTabClick("Tab 4")}
        >
          <img
            src="/images/14.png"
            alt="Resident Registration"
            className="image-15"
          />
        </a>
      </div>
      <div className="tabs-content w-tab-content">
        <div
          data-w-tab="Tab 1"
          className={`visit-registration w-tab-pane ${
            activeTab === "Tab 1" ? "w--tab-active" : ""
          }`}
        >
          <VisitRegistration />
        </div>
        <div
          data-w-tab="Tab 2"
          className={`package-registration w-tab-pane ${
            activeTab === "Tab 2" ? "w--tab-active" : ""
          }`}
        >
          <PackageRegistration />
        </div>
        <div
          data-w-tab="Tab 3"
          className={`add w-tab-pane ${
            activeTab === "Tab 3" ? "w--tab-active" : ""
          }`}
        >
          <AddSection />
        </div>
        <div
          data-w-tab="Tab 4"
          className={`resident-registration w-tab-pane ${
            activeTab === "Tab 4" ? "w--tab-active" : ""
          }`}
        >
          <ResidentRegistration />
        </div>
      </div>
    </div>
  );
};

export default FunctionTabs;
