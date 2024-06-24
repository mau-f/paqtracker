import React from "react";
import { useTranslation } from "react-i18next";

const AddNotification: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="add-title">{t("NewNot")}</div>
      <div className="div-form-add">
        <div className="w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            method="get"
            className="form-2 not _1"
          >
            <div className="div-block-10">
              <div className="div-form-visit">
                <label htmlFor="name-3">{t("Dep")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                />
              </div>
              <div className="div-form-visit">
                <label htmlFor="name-3">{t("Subject")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                />
              </div>
            </div>
            <div className="div-text">
              <label htmlFor="name-3">{t("Message")}</label>
              <textarea
                id="message"
                name="message"
                max-length="5000"
                data-name="message"
                placeholder="Example Text"
                className="textarea w-input"
              ></textarea>
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button _2 w-button"
              value="Enviar"
            />
          </form>
          <div className="w-form-done">
            <div>{t("SuccesM")}</div>
          </div>
          <div className="w-form-fail">
            <div>{t("FailM")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotification;
