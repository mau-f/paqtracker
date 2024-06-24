import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AddResident: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [depto, setDepto] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const addResident = async (e: React.FormEvent) => {
    e.preventDefault();
    postMessage("");

    const response = await fetch("http://127.0.0.1:5000/newResident", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, depto, phone, email }),
    });

    if (response.ok) {
      console.log("Registro exitoso");
    } else {
      console.error("Error al registrarse");
    }
  };

  return (
    <div>
      <div className="add-title">{t("NewRes")}</div>
      <div className="div-block-14">
        <div className="w-form">
          <form
            id="email-form-3"
            name="email-form-3"
            data-name="Email Form 3"
            method="get"
            className="form-2"
            onSubmit={addResident}
          >
            <div className="div-block-13">
              <div className="div-form-visit">
                <label htmlFor="name">{t("Name")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name-3"
                  data-name="Name 3"
                  placeholder=""
                  type="text"
                  id="name-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="div-form-visit">
                <label htmlFor="name-4">{t("Departamento")}</label>
                <select
                  className="new-visit-form w-input"
                  name="name-3"
                  data-name="Name 3"
                  id="name-3"
                  value={depto}
                  onChange={(e) => setDepto(e.target.value)}
                >
                  <option value="no especificado">Select one...</option>
                  <option value="404">404</option>
                  <option value="405">405</option>
                  <option value="406">406</option>
                  <option value="407">407</option>
                  <option value="408">408</option>
                  <option value="409">409</option>
                </select>
              </div>
            </div>
            <div className="div-block-13">
              <div className="div-form-visit">
                <label htmlFor="name-4">{t("PhoneNumber")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name-3"
                  data-name="Name 3"
                  placeholder=""
                  type="text"
                  id="name-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="div-form-visit">
                <label htmlFor="name-4">{t("Email")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name-3"
                  data-name="Name 3"
                  placeholder=""
                  type="text"
                  id="name-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button w-button"
              value="Submit"
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

export default AddResident;
