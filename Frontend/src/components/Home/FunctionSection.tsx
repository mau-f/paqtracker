import React from "react";
import { useTranslation } from "react-i18next";

const FunctionSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="Function" className="div-function">
      <div className="function">
        <div className="function-text">
          <div className="context">{t("Security")}</div>
          <h2 className="title-function">{t("VisitorRegistration")}</h2>
          <p className="function-description">
            {t("VisitorRegistrationDescription")}
          </p>
        </div>
        <div className="img-function">
          <img src="/images/phone_1.png" alt="phone1" className="image-3" />
        </div>
      </div>
      <div className="function in">
        <div className="img-function">
          <img src="/images/phone_2.png" alt="phone2" className="image-14" />
        </div>
        <div className="function-text">
          <div className="context">{t("Organization")}</div>
          <h2 className="title-function">{t("PackageRegistration")}</h2>
          <p className="function-description">
            {t("PackageRegistrationDescription")}.
          </p>
        </div>
      </div>
      <div className="function">
        <div className="function-text">
          <div className="context">{t("UpdatedInformation")} </div>
          <h2 className="title-function">{t("ArrivalNotifications")}</h2>
          <p className="function-description">
            {t("ArrivalNotificationsDescription")}.
          </p>
        </div>
        <div className="img-function">
          <img
            src="/images/el-20texto-20del-20p-c3-a1rrafo-20-5-.png"
            alt="texto"
            className="image-3"
          />
        </div>
      </div>
      <div className="skills">
        <div className="skill">
          <img
            src="/images/notificacion.png"
            alt="notificacion"
            className="img-skill"
          />
          <h4 className="title-skill">{t("ActivityNotifications")}</h4>
          <p className="text-skill">
           {t("ActivityNotificationsDescription")}
          </p>
        </div>
        <div className="skill">
          <img src="/images/reloj.png" alt="reloj" className="img-skill" />
          <h4 className="title-skill">{t("SpeedUpExperience")}</h4>
          <p className="text-skill">
          {t("SpeedUpExperienceDescription")}
          </p>
        </div>
        <div className="skill">
          <img src="/images/nivel.png" alt="nivel" className="img-skill" />
          <h4 className="title-skill">{t("IncreaseSecurity")}</h4>
          <p className="text-skill">
            {t("IncreaseSecurityDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FunctionSection;
