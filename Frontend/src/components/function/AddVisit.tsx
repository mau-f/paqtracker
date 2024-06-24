import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AddVisit: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [fecha, setFecha] = useState("");
  const [rut, setRut] = useState("");
  const [frequent, setFrequent] = useState("");
  const [parking, setParking] = useState("");
  const [entryTime, setEntryTime] = useState("");

  const addVisit = async (e: React.FormEvent) => {
    e.preventDefault();
    postMessage("");

    const response = await fetch("http://127.0.0.1:5000/newVisit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, fecha, rut, frequent, parking, entryTime }),
    });

    if (response.ok) {
      console.log("Registro exitoso");
    } else {
      console.error("Error al registrarse");
    }
  };

  return (
    <div>
      <div className="add-title">{t("NewVis")}</div>
      <div className="div-form-add">
        <div className="w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            method="get"
            className="form-2"
            onSubmit={addVisit}
          >
            <div className="div-block-13">
              <div className="div-form-visit _1">
                <label htmlFor="name-3">{t("Name")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="div-form-visit _1">
                <label htmlFor="name-2">{t("Date")}</label>
                <input
                  type="date"
                  className="new-visit-form"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>
            </div>
            <div className="div-block-13">
              <div className="div-form-visit _1">
                <label htmlFor="name-3">{t("DNI")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </div>
              <div className="div-form-visit _1">
                <label htmlFor="name-3">{t("Parking")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                  value={parking}
                  onChange={(e) => setParking(e.target.value)}
                />
              </div>
            </div>
            <div className="div-block-13">
              <div className="div-form-visit _1">
                <label htmlFor="name-3">{t("Entrytime")}</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                  value={entryTime}
                  onChange={(e) => setEntryTime(e.target.value)}
                />
              </div>
              <div className="div-form-visit _1">
                <label htmlFor="field">{t("FreqVis")}</label>
                <select
                  name="frequent"
                  data-name="Field"
                  className="select-field w-select"
                  onChange={(e) => setFrequent(e.target.value)}
                >
                  <option value="no especificado">{t("Select")}</option>
                  <option value="si">{t("Y")}</option>
                  <option value="no">{t("N")}</option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button _2 w-button"
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

export default AddVisit;
