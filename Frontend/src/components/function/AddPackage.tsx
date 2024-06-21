import React, { useState } from "react";

const AddPackage: React.FC = () => {
  const [name, setName] = useState("");
  const [fecha, setFecha] = useState("");
  const [depto, setDepto] = useState("");
  const [destinatario, setDestinatario] = useState("");

  const addPAckage = async (e: React.FormEvent) => {
    e.preventDefault();
    postMessage("");

    const response = await fetch("http://127.0.0.1:5000/newPackage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, fecha, depto, destinatario }),
    });

    if (response.ok) {
      console.log("Registro exitoso");
    } else {
      console.error("Error al registrarse");
    }
  };

  return (
    <div>
      <div className="add-title">Nuevo paquete</div>
      <div className="div-form-add">
        <div className="w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            method="get"
            className="form-2"
            onSubmit={addPAckage}
          >
            <div className="div-block-13">
              <div className="div-form-visit _1">
                <label htmlFor="name-3">Nombre remitente</label>
                <input
                  className="new-visit-form w-input"
                  placeholder="holaaaa"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="div-form-visit _1">
                <label htmlFor="name-3">Fecha ingreso</label>
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
                <label htmlFor="name-3">Departamento</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                  value={depto}
                  onChange={(e) => setDepto(e.target.value)}
                />
              </div>
              <div className="div-form-visit _1">
                <label htmlFor="name-3">Destinatario</label>
                <input
                  className="new-visit-form w-input"
                  name="name-2"
                  data-name="Name 2"
                  placeholder=""
                  type="text"
                  id="name-2"
                  value={destinatario}
                  onChange={(e) => setDestinatario(e.target.value)}
                />
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

export default AddPackage;
