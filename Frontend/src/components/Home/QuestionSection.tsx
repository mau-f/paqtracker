import React from "react";
import { useTranslation } from "react-i18next";

const QuestionSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="sec-questions">
      <div id="question" className="questions _1">
        <div className="questions-text">
          <div className="context">{t("Questions")}</div>
          <h2 className="title-function">
          {t("Q1")}
          </h2>
          <p className="function-description">
          {t("D1")}
          </p>
        </div>
        <div className="img-function">
          <img src="/images/5235.jpg" alt="visitas" className="image-11" />
        </div>
      </div>
      <div className="questions">
        <div className="img-function">
          <img
            src="/images/mobile-20login-amico.png"
            alt="login"
            className="image-11"
          />
        </div>
        <div className="questions-text">
          <div className="context">{t("Questions")}</div>
          <h2 className="title-function">
          {t("Q2")}
          </h2>
          <p className="function-description">
          {t("D2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
