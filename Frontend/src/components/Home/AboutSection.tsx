import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="About" className="div-about">
      <div className="title-container">
        <h4 className="heading-3">
          {t("SolMes")}
        </h4>
      </div>
      <div className="img-container">
        <img src="/images/seguridad.png" alt="seguridad" className="image" />
      </div>
    </section>
  );
};

export default AboutSection;
