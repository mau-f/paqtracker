import React from "react";
import { useTranslation } from "react-i18next";

const PlanSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="plan">
      <div className="container-question">
        <h2 className="ready">{t("Ready")}</h2>
        <div className="div-block">
          <a href="#" className="button w-button">
          {t("ViewPlans")}
          </a>
          <a href="#" className="button transparent w-button">
            Button Text
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
