import React, { useState } from "react";

const AddVisit: React.FC = () => {
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
      <div className="add-title">Nueva visita</div>
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
                <label htmlFor="name-3">Nombre</label>
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
                <label htmlFor="name-2">Fecha</label>
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
                <label htmlFor="name-3">Rut</label>
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
                <label htmlFor="name-3">Estacionamiento</label>
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
                <label htmlFor="name-3">Hora de entrada</label>
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
                <label htmlFor="field">Visita frecuente</label>
                <select
                  name="frequent"
                  data-name="Field"
                  className="select-field w-select"
                  onChange={(e) => setFrequent(e.target.value)}
                >
                  <option value="no especificado">Select one...</option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
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
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVisit;
